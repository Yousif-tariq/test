import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderWhyUsManager(): string {
  const whyUs = CMSStore.getDraft().whyUs;

  const itemsHtml = whyUs.map((item, i) => `
    <div style="background: var(--admin-surface-subtle); border: 1px solid var(--admin-border); border-radius: var(--radius-sm); padding: 1.2rem; margin-bottom: 1.2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <strong style="color: var(--admin-primary); font-size: 0.95rem;">بطاقة #${i + 1}: ${item.title}</strong>
        <span style="font-size: 0.8rem; color: var(--admin-text-muted);">اتساع الأعمدة: ${item.span === 2 ? 'عريض (2x)' : 'عادي (1x)'}</span>
      </div>

      <div class="form-row-3">
        <div class="admin-form-group">
          <label class="admin-label">العنوان الرئيسي</label>
          <input type="text" class="admin-input why-title-input" data-index="${i}" value="${item.title}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">العنوان الفرعي الملوّن</label>
          <input type="text" class="admin-input why-subtitle-input" data-index="${i}" value="${item.subtitle}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">الشارة / التصنيف (Badge)</label>
          <input type="text" class="admin-input why-badge-input" data-index="${i}" value="${item.badge}" required />
        </div>
      </div>

      <div class="form-row-2">
        <div class="admin-form-group">
          <label class="admin-label">اسم الأيقونة</label>
          <input type="text" class="admin-input why-icon-input" data-index="${i}" value="${item.icon}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">عرض البطاقة في الشبكة</label>
          <select class="admin-select why-span-input" data-index="${i}">
            <option value="1" ${item.span === 1 ? 'selected' : ''}>عمود واحد (1 Column)</option>
            <option value="2" ${item.span === 2 ? 'selected' : ''}>عمودان عريضان (2 Columns Span)</option>
          </select>
        </div>
      </div>

      <div class="admin-form-group" style="margin-bottom: 0;">
        <label class="admin-label">النص التفصيلي</label>
        <textarea class="admin-textarea why-desc-input" data-index="${i}" style="min-height: 60px;">${item.description}</textarea>
      </div>
    </div>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إدارة قسم لماذا أساسات المشاعر؟ (Bento Grid)</h1>
          <p class="view-subtitle">تعديل المزايا التنافسية، الأيقونات، والشارات في شبكة Bento التفاعلية</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="save-why-us-btn">
          ${getIcon('sparkles')}
          <span>حفظ التعديلات كمسودة</span>
        </button>
      </div>

      <div class="admin-card">
        <div class="admin-card-header">
          <h3 class="admin-card-title">${getIcon('sparkles')} بطاقات المزايا التنافسية (${whyUs.length} بطاقات)</h3>
        </div>

        <div id="why-us-items-container">
          ${itemsHtml}
        </div>
      </div>
    </div>
  `;
}

export function initWhyUsManagerListeners(): void {
  const saveBtn = document.getElementById('save-why-us-btn');

  saveBtn?.addEventListener('click', () => {
    const titles = document.querySelectorAll('.why-title-input') as NodeListOf<HTMLInputElement>;
    const subtitles = document.querySelectorAll('.why-subtitle-input') as NodeListOf<HTMLInputElement>;
    const badges = document.querySelectorAll('.why-badge-input') as NodeListOf<HTMLInputElement>;
    const icons = document.querySelectorAll('.why-icon-input') as NodeListOf<HTMLInputElement>;
    const spans = document.querySelectorAll('.why-span-input') as NodeListOf<HTMLSelectElement>;
    const descs = document.querySelectorAll('.why-desc-input') as NodeListOf<HTMLTextAreaElement>;

    const currentItems = CMSStore.getDraft().whyUs;
    const updatedItems = Array.from(titles).map((el, idx) => ({
      id: currentItems[idx]?.id || `why-${idx + 1}`,
      title: el.value.trim(),
      subtitle: subtitles[idx]?.value.trim() || '',
      badge: badges[idx]?.value.trim() || '',
      icon: icons[idx]?.value.trim() || 'shield_check',
      span: (parseInt(spans[idx]?.value || '1', 10) as 1 | 2),
      description: descs[idx]?.value.trim() || ''
    }));

    CMSStore.updateDraft('whyUs', updatedItems, 'تم تحديث بطاقات ومزايا قسم لماذا أساسات المشاعر');
    showToast('تم حفظ تعديلات قسم لماذا نحن بنجاح.');
  });
}
