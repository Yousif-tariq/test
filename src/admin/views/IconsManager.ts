import { getIcon, serviceIcons } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderIconsManager(): string {
  const icons = CMSStore.getDraft().icons;

  const cardsHtml = icons.map(ico => `
    <div class="admin-card" style="padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between; margin-bottom: 0;">
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
          <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(0, 102, 255, 0.08); border: 1px solid rgba(0, 102, 255, 0.2); display: flex; align-items: center; justify-content: center; color: var(--admin-primary);">
            ${getIcon(ico.name)}
          </div>
          <span style="font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); background: var(--admin-surface-subtle); color: var(--admin-text-muted);">
            ${ico.category}
          </span>
        </div>

        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--admin-text-main); margin-bottom: 0.3rem;">
          ${ico.serviceName}
        </h4>
        <div style="font-size: 0.78rem; color: var(--admin-primary); font-family: var(--admin-font-latin); font-weight: 700; margin-bottom: 0.6rem;">
          ${ico.name}
        </div>
        <p style="font-size: 0.85rem; color: var(--admin-text-muted); line-height: 1.5;">
          ${ico.usage}
        </p>
      </div>

      <div style="margin-top: 1.2rem; padding-top: 0.8rem; border-top: 1px solid var(--admin-border); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.75rem; color: var(--admin-text-dim); font-family: var(--admin-font-latin);">${ico.path}</span>
        <button class="admin-btn admin-btn-secondary copy-icon-id-btn" data-id="${ico.name}" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;">
          <span>نسخ الاسم</span>
        </button>
      </div>
    </div>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>مدير الأيقونات وبيانات CSV (${icons.length})</h1>
          <p class="view-subtitle">استعراض الأيقونات التفاعلية المربوطة بالخدمات وقاعدة بيانات CSV</p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
        ${cardsHtml}
      </div>
    </div>
  `;
}

export function initIconsManagerListeners(): void {
  document.querySelectorAll('.copy-icon-id-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id') || '';
      navigator.clipboard.writeText(id).then(() => {
        showToast(`تم نسخ اسم الأيقونة: "${id}"`);
      });
    });
  });
}
