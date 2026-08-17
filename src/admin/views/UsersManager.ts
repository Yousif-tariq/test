import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { UserRole } from '../../types/admin';
import { showToast } from '../components/Toast';
import { showConfirmModal } from '../components/ConfirmModal';

export function renderUsersManager(): string {
  const users = CMSStore.getState().users || [];

  const rowsHtml = users.map((u, idx) => `
    <tr>
      <td style="font-weight: 800; font-family: var(--admin-font-latin); color: var(--admin-primary); width: 60px;">
        #${idx + 1}
      </td>
      <td>
        <div style="display: flex; align-items: center; gap: 0.8rem;">
          <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--admin-primary-soft); color: var(--admin-primary); display: flex; align-items: center; justify-content: center; font-weight: 800;">
            ${u.name.charAt(0)}
          </div>
          <div>
            <div style="font-weight: 800; color: var(--admin-text-main); font-size: 0.95rem;">${u.name}</div>
            <div style="font-size: 0.8rem; color: var(--admin-text-muted); font-family: var(--admin-font-latin);">${u.email}</div>
          </div>
        </div>
      </td>
      <td>
        <span style="font-size: 0.82rem; font-weight: 700; padding: 0.25rem 0.8rem; border-radius: var(--radius-full); background: ${u.role === 'super_admin' ? 'rgba(0, 102, 255, 0.1)' : 'var(--admin-surface-subtle)'}; color: ${u.role === 'super_admin' ? 'var(--admin-primary)' : 'var(--admin-text-main)'}; border: 1px solid var(--admin-border);">
          ${u.roleTitle}
        </span>
      </td>
      <td style="font-size: 0.82rem; color: var(--admin-text-muted); font-family: var(--admin-font-latin);">
        ${u.lastLogin || 'لم يسجل دخول'}
      </td>
      <td>
        <span style="font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); background: var(--admin-success-soft); color: var(--admin-success);">
          ${u.status === 'active' ? 'نشط' : 'معطل'}
        </span>
      </td>
      <td style="text-align: left; width: 100px;">
        ${u.role !== 'super_admin' ? `
          <button class="action-icon-btn delete-user-btn" data-id="${u.id}" data-name="${u.name}" title="حذف المستخدم" style="color: var(--admin-danger);">
            ${getIcon('close')}
          </button>
        ` : `<span style="font-size: 0.75rem; color: var(--admin-text-muted);">أساسي</span>`}
      </td>
    </tr>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>المستخدمون والصلاحيات (${users.length})</h1>
          <p class="view-subtitle">إدارة حسابات مسؤولي النظام المشفرة بـ Bcrypt وصلاحيات الوصول (RBAC)</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="add-user-modal-btn">
          ${getIcon('sparkles')}
          <span>إضافة مستخدم جديد</span>
        </button>
      </div>

      <div class="admin-card" style="padding: 0; overflow: hidden;">
        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>المستخدم</th>
                <th>الرتبة والدور</th>
                <th>آخر نشاط</th>
                <th>الحالة</th>
                <th>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function initUsersManagerListeners(onRefresh: () => void): void {
  const addBtn = document.getElementById('add-user-modal-btn');

  // Handle Add User
  addBtn?.addEventListener('click', () => {
    const existing = document.getElementById('add-user-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'add-user-modal';
    modal.className = 'admin-modal-backdrop active';

    modal.innerHTML = `
      <div class="admin-modal-box" style="max-width: 520px;">
        <div class="admin-modal-header">
          <h3 style="font-size: 1.25rem; font-weight: 800;">إضافة مستخدم جديد</h3>
          <button class="action-icon-btn" id="add-user-close">${getIcon('close')}</button>
        </div>

        <form id="add-user-form">
          <div class="admin-form-group">
            <label class="admin-label">الاسم الكامل</label>
            <input type="text" id="new-user-name" class="admin-input" required />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">البريد الإلكتروني</label>
            <input type="email" id="new-user-email" class="admin-input" required style="direction: ltr; text-align: left;" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">كلمة المرور (تُشفر آلياً بـ Bcrypt)</label>
            <input type="password" id="new-user-password" class="admin-input" required style="direction: ltr; text-align: left;" placeholder="••••••••" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">الرتبة والصلاحية</label>
            <select id="new-user-role" class="admin-select">
              <option value="content_manager">مدير محتوى (Content Manager)</option>
              <option value="media_manager">مسؤول وسائط (Media Manager)</option>
              <option value="viewer">مراقب للاطلاع فقط (Viewer)</option>
              <option value="super_admin">مدير عام (Super Admin)</option>
            </select>
          </div>

          <div class="admin-modal-footer">
            <button type="button" class="admin-btn admin-btn-secondary" id="add-user-cancel">إلغاء</button>
            <button type="submit" class="admin-btn admin-btn-primary" id="add-user-submit-btn">إضافة المستخدم</button>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(modal);

    const close = () => modal.remove();
    document.getElementById('add-user-close')?.addEventListener('click', close);
    document.getElementById('add-user-cancel')?.addEventListener('click', close);

    const form = document.getElementById('add-user-form');
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = (document.getElementById('new-user-name') as HTMLInputElement).value.trim();
      const email = (document.getElementById('new-user-email') as HTMLInputElement).value.trim();
      const password = (document.getElementById('new-user-password') as HTMLInputElement).value.trim();
      const role = (document.getElementById('new-user-role') as HTMLSelectElement).value as UserRole;

      const roleTitleMap: Record<UserRole, string> = {
        super_admin: 'مدير عام',
        content_manager: 'مدير محتوى',
        media_manager: 'مسؤول وسائط',
        viewer: 'مراقب'
      };

      const submitBtn = document.getElementById('add-user-submit-btn') as HTMLButtonElement;
      if (submitBtn) submitBtn.disabled = true;

      const result = await CMSStore.createUser({
        name,
        email,
        password,
        role,
        roleTitle: roleTitleMap[role]
      });

      if (result.success) {
        showToast(result.message);
        close();
        onRefresh();
      } else {
        showToast(result.message, 'error');
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  });

  // Handle Delete User
  document.querySelectorAll('.delete-user-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const name = btn.getAttribute('data-name');
      if (!id) return;

      showConfirmModal(
        'حذف المستخدم',
        `هل أنت متأكد من رغبتك في حذف المستخدم "${name}" نهائياً من النظام؟`,
        async () => {
          const res = await CMSStore.deleteUser(id);
          if (res.success) {
            showToast(res.message);
            onRefresh();
          } else {
            showToast(res.message, 'error');
          }
        }
      );
    });
  });
}
