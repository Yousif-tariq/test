import { AdminUser } from '../types/admin';

const AUTH_TOKEN_KEY = 'asasat_jwt_token';
const AUTH_USER_KEY = 'asasat_admin_user';

export class AuthService {
  private static currentUser: AdminUser | null = null;
  private static token: string | null = null;

  public static init(): void {
    try {
      this.token = localStorage.getItem(AUTH_TOKEN_KEY);
      const storedUser = localStorage.getItem(AUTH_USER_KEY);
      if (storedUser && this.token) {
        this.currentUser = JSON.parse(storedUser);
      } else {
        this.currentUser = null;
        this.token = null;
      }
    } catch (e) {
      this.currentUser = null;
      this.token = null;
    }
  }

  public static async login(email: string, pass: string): Promise<{ success: boolean; message: string; user?: AdminUser }> {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.trim(),
          password: pass.trim()
        })
      });

      const result = await response.json();

      if (response.ok && result.success && result.token) {
        this.token = result.token;
        this.currentUser = result.user;

        localStorage.setItem(AUTH_TOKEN_KEY, result.token);
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(result.user));

        return {
          success: true,
          message: result.message || 'تم تسجيل الدخول بنجاح.',
          user: result.user
        };
      } else {
        return {
          success: false,
          message: result.message || 'بيانات الدخول غير صحيحة. الوصول مصرح للمسؤول المعتمد فقط.'
        };
      }
    } catch (error) {
      console.error('[AuthService] Login network error:', error);
      return {
        success: false,
        message: 'تعذر الاتصال بخادم المصادقة. يرجى التحقق من اتصال الشبكة.'
      };
    }
  }

  public static async validateSession(): Promise<boolean> {
    const token = this.getToken();
    if (!token) {
      this.logout();
      return false;
    }

    try {
      const response = await fetch('/api/auth/me', {
        headers: this.getAuthHeaders()
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success && result.user) {
          this.currentUser = result.user;
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(result.user));
          return true;
        }
      }

      this.logout();
      return false;
    } catch (e) {
      // If temporary network offline, keep cached session if valid
      return this.currentUser !== null;
    }
  }

  public static async logout(): Promise<void> {
    const token = this.getToken();
    if (token) {
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: this.getAuthHeaders()
        });
      } catch (e) {
        // Ignore network errors on logout
      }
    }

    this.currentUser = null;
    this.token = null;
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
  }

  public static getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem(AUTH_TOKEN_KEY);
    }
    return this.token;
  }

  public static getAuthHeaders(): Record<string, string> {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    };
  }

  public static getCurrentUser(): AdminUser | null {
    if (!this.currentUser) {
      this.init();
    }
    return this.currentUser;
  }

  public static isAuthenticated(): boolean {
    return this.getToken() !== null && this.getCurrentUser() !== null;
  }

  public static hasPermission(permission: 'manage_all' | 'edit_content' | 'manage_media' | 'view_only'): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;

    if (user.role === 'super_admin') return true;

    switch (permission) {
      case 'edit_content':
        return user.role === 'content_manager';
      case 'manage_media':
        return user.role === 'content_manager' || user.role === 'media_manager';
      case 'view_only':
        return true;
      case 'manage_all':
        return user.role === 'super_admin';
      default:
        return false;
    }
  }
}
