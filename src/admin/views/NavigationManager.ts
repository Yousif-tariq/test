import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderNavigationManager(): string {
  const links = CMSStore.getDraft().navigation;

  const rowsHtml = links.map((link, idx) => `
    <tr data-index="${idx}">
      <td style="font-weight: 800; font-family: var(--admin-font-latin); color: var(--admin-primary); width: 60px;">
        #${idx + 1}
      </td>
      <td>
        <input type="text" class="admin-input nav-label-input" data-index="${idx}" value="${link.label}" style="padding: 0.4rem 0.8rem;" />
      </td>
      <td>
        <input type="text" class="admin-input nav-url-input" data-index="${idx}" value="${link.url}" style="padding: 0.4rem 0.8rem; font-family: var(--admin-font-latin);" />
      </td>
      <td style="width: 100px; text-align: center;">
        <label class="admin-switch">
          <input type="checkbox" class="nav-active-input" data-index="${idx}" ${link.isActive ? 'checked' : ''} />
          <span class="switch-slider"></span>
        </label>
      </td>
    </tr>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إدارة روابط القائمة العلوية (Navbar)</h1>
          <p class="view-subtitle">تعديل نصوص الروابط، المسارات، وإظهار أو إخفاء عناصر القائمة</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="save-nav-btn">
          ${getIcon('sparkles')}
          <span>حفظ التعديلات كمسودة</span>
        </button>
      </div>

      <div class="admin-card" style="padding: 0; overflow: hidden;">
        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>اسم الرابط في القائمة</th>
                <th>الرابط / الـ Anchor ID</th>
                <th style="text-align: center;">الحالة (تفعيل)</th>
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

export function initNavigationManagerListeners(): void {
  const saveBtn = document.getElementById('save-nav-btn');

  saveBtn?.addEventListener('click', () => {
    const labelInputs = document.querySelectorAll('.nav-label-input') as NodeListOf<HTMLInputElement>;
    const urlInputs = document.querySelectorAll('.nav-url-input') as NodeListOf<HTMLInputElement>;
    const activeInputs = document.querySelectorAll('.nav-active-input') as NodeListOf<HTMLInputElement>;

    const currentNav = CMSStore.getDraft().navigation;
    const updatedNav = Array.from(labelInputs).map((el, idx) => ({
      id: currentNav[idx]?.id || `nav-${idx + 1}`,
      label: el.value.trim(),
      url: urlInputs[idx]?.value.trim() || '#',
      order: idx + 1,
      isActive: activeInputs[idx]?.checked ?? true
    }));

    CMSStore.updateDraft('navigation', updatedNav, 'تم تحديث روابط وتفعيل عناصر شريط التصفح Navbar');
    showToast('تم حفظ تعديلات القائمة بنجاح.');
  });
}
