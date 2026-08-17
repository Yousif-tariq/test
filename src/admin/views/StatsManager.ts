import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderStatsManager(): string {
  const stats = CMSStore.getDraft().stats;

  const statsHtml = stats.map((st, i) => `
    <div style="background: var(--admin-surface-subtle); border: 1px solid var(--admin-border); border-radius: var(--radius-sm); padding: 1.2rem; margin-bottom: 1.2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <strong style="color: var(--admin-primary); font-size: 0.95rem;">المؤشر #${i + 1}: ${st.title}</strong>
        <span style="font-size: 0.8rem; color: var(--admin-text-muted); font-family: var(--admin-font-latin);">${st.badge}</span>
      </div>

      <div class="form-row-3">
        <div class="admin-form-group">
          <label class="admin-label">عنوان المؤشر</label>
          <input type="text" class="admin-input stat-title-input" data-index="${i}" value="${st.title}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">الشارة / الرمز اللاتيني (Badge)</label>
          <input type="text" class="admin-input stat-badge-input" data-index="${i}" value="${st.badge}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">اسم الأيقونة</label>
          <input type="text" class="admin-input stat-icon-input" data-index="${i}" value="${st.icon}" required />
        </div>
      </div>

      <div class="admin-form-group" style="margin-bottom: 0;">
        <label class="admin-label">الوصف التفصيلي للمؤشر</label>
        <textarea class="admin-textarea stat-desc-input" data-index="${i}" style="min-height: 60px;">${st.description}</textarea>
      </div>
    </div>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إدارة المؤشرات الهندسية والإحصاءات الوصفية</h1>
          <p class="view-subtitle">تعديل مؤشرات الجودة، نسب التكامل، ومعايير الاعتمادية للمنظومات</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="save-stats-btn">
          ${getIcon('sparkles')}
          <span>حفظ التعديلات كمسودة</span>
        </button>
      </div>

      <div class="admin-card">
        <div class="admin-card-header">
          <h3 class="admin-card-title">${getIcon('shield_check')} المؤشرات الهندسية (${stats.length} مؤشرات)</h3>
        </div>

        <div id="stats-items-container">
          ${statsHtml}
        </div>
      </div>
    </div>
  `;
}

export function initStatsManagerListeners(): void {
  const saveBtn = document.getElementById('save-stats-btn');

  saveBtn?.addEventListener('click', () => {
    const titles = document.querySelectorAll('.stat-title-input') as NodeListOf<HTMLInputElement>;
    const badges = document.querySelectorAll('.stat-badge-input') as NodeListOf<HTMLInputElement>;
    const icons = document.querySelectorAll('.stat-icon-input') as NodeListOf<HTMLInputElement>;
    const descs = document.querySelectorAll('.stat-desc-input') as NodeListOf<HTMLTextAreaElement>;

    const currentStats = CMSStore.getDraft().stats;
    const updatedStats = Array.from(titles).map((el, idx) => ({
      id: currentStats[idx]?.id || `stat-${idx + 1}`,
      title: el.value.trim(),
      badge: badges[idx]?.value.trim() || '',
      icon: icons[idx]?.value.trim() || 'shield_check',
      description: descs[idx]?.value.trim() || ''
    }));

    CMSStore.updateDraft('stats', updatedStats, 'تم تحديث المؤشرات الهندسية والإحصاءات الوصفية');
    showToast('تم حفظ تعديلات المؤشرات بنجاح.');
  });
}
