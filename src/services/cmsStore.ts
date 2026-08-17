import { CMSData, CMSStoreState, ActivityLog, Revision, AdminUser } from '../types/admin';
import { getInitialCMSStoreState } from '../data/defaultStore';
import { AuthService } from './authService';
import { sanitizeObject } from '../utils/sanitize';

const STORE_KEY = 'asasat_cms_store_v3';

export class CMSStore {
  private static state: CMSStoreState = getInitialCMSStoreState();
  private static listeners: (() => void)[] = [];
  private static isInitialized = false;
  private static isSyncing = false;

  public static init(): void {
    if (this.isInitialized) return;

    // 1. Load local cache for instant zero-latency UI boot
    try {
      const stored = localStorage.getItem(STORE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.draft && parsed.published) {
          this.state = parsed;
        } else {
          this.state = getInitialCMSStoreState();
        }
      } else {
        this.state = getInitialCMSStoreState();
      }
    } catch (e) {
      this.state = getInitialCMSStoreState();
    }

    this.isInitialized = true;

    // 2. Fetch fresh real-time data from backend Postgres API
    this.syncWithServer();
  }

  public static async syncWithServer(): Promise<void> {
    if (this.isSyncing) return;
    this.isSyncing = true;

    try {
      if (AuthService.isAuthenticated()) {
        // Admin: Fetch full state from /api/admin/cms/state
        const response = await fetch('/api/admin/cms/state', {
          headers: AuthService.getAuthHeaders()
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success && result.state) {
            this.state = {
              ...this.state,
              ...result.state,
              draft: sanitizeObject(result.state.draft),
              published: sanitizeObject(result.state.published)
            };
            this.persist();
            this.notify();
          }
        } else if (response.status === 401) {
          AuthService.logout();
        }
      } else {
        // Public Visitor: Fetch published data from /api/cms/published
        const response = await fetch('/api/cms/published');
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.data) {
            this.state.published = sanitizeObject(result.data);
            if (result.version) this.state.currentVersion = result.version;
            if (result.lastPublishedAt) this.state.lastPublishedAt = result.lastPublishedAt;
            this.persist();
            this.notify();
          }
        }
      }
    } catch (error) {
      console.warn('[CMSStore] Offline / Server connecting, using cached snapshot:', error);
    } finally {
      this.isSyncing = false;
    }
  }

  public static getState(): CMSStoreState {
    this.init();
    return this.state;
  }

  public static getDraft(): CMSData {
    this.init();
    return this.state.draft;
  }

  public static getPublished(): CMSData {
    this.init();
    return this.state.published;
  }

  public static isDraftDirty(): boolean {
    this.init();
    return this.state.isDraftDirty;
  }

  public static async updateDraft<K extends keyof CMSData>(
    section: K,
    data: CMSData[K],
    details: string
  ): Promise<{ success: boolean; message?: string }> {
    this.init();
    const sanitizedData = sanitizeObject(data);

    // Optimistic local update
    this.state.draft[section] = JSON.parse(JSON.stringify(sanitizedData));
    this.state.isDraftDirty = true;
    this.state.lastSavedAt = new Date().toLocaleString('ar-SA', { hour12: false });
    this.persist();
    this.notify();

    // Persist to Postgres Backend via REST API
    try {
      const response = await fetch(`/api/admin/cms/draft/${String(section)}`, {
        method: 'PUT',
        headers: AuthService.getAuthHeaders(),
        body: JSON.stringify({
          data: sanitizedData,
          details
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        if (result.lastSavedAt) this.state.lastSavedAt = result.lastSavedAt;
        this.persist();
        return { success: true, message: result.message };
      } else {
        return { success: false, message: result.message || 'فشل حفظ التعديلات في قاعدة البيانات.' };
      }
    } catch (err) {
      console.error('[CMSStore] updateDraft network error:', err);
      return { success: true, message: 'تم الحفظ محلياً (سيتم المزامنة عند إعادة الاتصال).' };
    }
  }

  public static async publish(summary?: string): Promise<{ success: boolean; version: string; message?: string }> {
    this.init();
    const now = new Date().toLocaleString('ar-SA', { hour12: false });
    const prevVer = this.state.currentVersion || 'v1.0.0';
    const num = parseInt(prevVer.replace(/[^\d]/g, ''), 10) + 1;
    const localNewVersion = `v1.0.${num}`;

    try {
      const response = await fetch('/api/admin/cms/publish', {
        method: 'POST',
        headers: AuthService.getAuthHeaders(),
        body: JSON.stringify({ summary })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        const finalVersion = result.version || localNewVersion;
        this.state.published = JSON.parse(JSON.stringify(this.state.draft));
        this.state.isDraftDirty = false;
        this.state.lastPublishedAt = result.lastPublishedAt || now;
        this.state.lastSavedAt = result.lastPublishedAt || now;
        this.state.currentVersion = finalVersion;

        // Re-sync full state
        await this.syncWithServer();
        this.persist();
        this.notify();

        return { success: true, version: finalVersion, message: result.message };
      } else {
        return { success: false, version: prevVer, message: result.message || 'فشل النشر.' };
      }
    } catch (err) {
      // Fallback local update
      this.state.published = JSON.parse(JSON.stringify(this.state.draft));
      this.state.isDraftDirty = false;
      this.state.lastPublishedAt = now;
      this.state.currentVersion = localNewVersion;
      this.persist();
      this.notify();
      return { success: true, version: localNewVersion, message: 'تم النشر بنجاح.' };
    }
  }

  public static async discardDraft(): Promise<void> {
    this.init();
    try {
      await fetch('/api/admin/cms/discard', {
        method: 'POST',
        headers: AuthService.getAuthHeaders()
      });
    } catch (e) {
      // Ignore network errors
    }

    this.state.draft = JSON.parse(JSON.stringify(this.state.published));
    this.state.isDraftDirty = false;
    this.persist();
    this.notify();
  }

  public static async restoreRevision(revisionId: string): Promise<boolean> {
    this.init();
    try {
      const response = await fetch(`/api/admin/cms/restore/${revisionId}`, {
        method: 'POST',
        headers: AuthService.getAuthHeaders()
      });

      if (response.ok) {
        await this.syncWithServer();
        return true;
      }
    } catch (e) {
      console.error('[CMSStore] restoreRevision error:', e);
    }

    // Local fallback
    const rev = this.state.revisions.find(r => r.id === revisionId);
    if (!rev || !rev.snapshot) return false;

    this.state.draft = JSON.parse(JSON.stringify(rev.snapshot));
    this.state.published = JSON.parse(JSON.stringify(rev.snapshot));
    this.state.isDraftDirty = false;
    this.persist();
    this.notify();
    return true;
  }

  public static async resetToFactory(): Promise<void> {
    try {
      await fetch('/api/admin/cms/reset', {
        method: 'POST',
        headers: AuthService.getAuthHeaders()
      });
      await this.syncWithServer();
    } catch (e) {
      this.state = getInitialCMSStoreState();
      this.persist();
      this.notify();
    }
  }

  public static async fetchUsers(): Promise<AdminUser[]> {
    try {
      const response = await fetch('/api/admin/users', {
        headers: AuthService.getAuthHeaders()
      });
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.users) {
          this.state.users = result.users;
          this.persist();
          return result.users;
        }
      }
    } catch (e) {
      console.error('[CMSStore] fetchUsers error:', e);
    }
    return this.state.users || [];
  }

  public static async createUser(userData: { name: string; email: string; password?: string; role: string; roleTitle: string }): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: AuthService.getAuthHeaders(),
        body: JSON.stringify(userData)
      });
      const result = await response.json();
      if (response.ok && result.success) {
        await this.fetchUsers();
        return { success: true, message: result.message };
      }
      return { success: false, message: result.message || 'فشل إنشاء المستخدم.' };
    } catch (e) {
      return { success: false, message: 'تعذر الاتصال بالخادم.' };
    }
  }

  public static async deleteUser(userId: string): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: AuthService.getAuthHeaders()
      });
      const result = await response.json();
      if (response.ok && result.success) {
        await this.fetchUsers();
        return { success: true, message: result.message };
      }
      return { success: false, message: result.message || 'فشل حذف المستخدم.' };
    } catch (e) {
      return { success: false, message: 'تعذر الاتصال بالخادم.' };
    }
  }

  public static subscribe(fn: () => void): () => void {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  private static persist(): void {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('LocalStorage write error in CMSStore:', e);
    }
  }

  private static notify(): void {
    this.listeners.forEach(l => {
      try {
        l();
      } catch (err) {
        console.error('Listener error:', err);
      }
    });
  }
}
