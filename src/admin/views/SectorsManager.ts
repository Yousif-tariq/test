import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderSectorsManager(): string {
  const sectors = CMSStore.getDraft().sectors;

  const sectorsHtml = sectors.map((sec, i) => `
    <div style="background: var(--admin-surface-subtle); border: 1px solid var(--admin-border); border-radius: var(--radius-sm); padding: 1.2rem; margin-bottom: 1.2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <strong style="color: var(--admin-primary); font-size: 0.95rem;">القطاع #${i + 1}: ${sec.title}</strong>
        <span style="font-size: 0.8rem; color: var(--admin-text-muted); font-family: var(--admin-font-latin);">${sec.subtitle}</span>
      </div>

      <div class="form-row-3">
        <div class="admin-form-group">
          <label class="admin-label">اسم القطاع</label>
          <input type="text" class="admin-input sector-title-input" data-index="${i}" value="${sec.title}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">الاسم بالإنجليزية</label>
          <input type="text" class="admin-input sector-sub-input" data-index="${i}" value="${sec.subtitle}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">شارة التخصص (Badge)</label>
          <input type="text" class="admin-input sector-tag-input" data-index="${i}" value="${sec.tag}" required />
        </div>
      </div>

      <div class="form-row-2">
        <div class="admin-form-group">
          <label class="admin-label">اسم الأيقونة</label>
          <input type="text" class="admin-input sector-icon-input" data-index="${i}" value="${sec.icon}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">مسار صورة القطاع</label>
          <input type="text" class="admin-input sector-img-input" data-index="${i}" value="${sec.imagePath}" required />
        </div>
      </div>

      <div class="admin-form-group">
        <label class="admin-label">وصف متطلبات وحلول القطاع</label>
        <textarea class="admin-textarea sector-desc-input" data-index="${i}" style="min-height: 60px;">${sec.description}</textarea>
      </div>

      <div class="admin-form-group" style="margin-bottom: 0;">
        <label class="admin-label">أهم الحلول المقدمة للقطاع (سطر لكل حل)</label>
        <textarea class="admin-textarea sector-high-input" data-index="${i}" style="min-height: 70px;">${sec.highlights.join('\n')}</textarea>
      </div>
    </div>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إدارة القطاعات ومجالات التطبيق</h1>
          <p class="view-subtitle">تعديل القطاعات المستهدفة، الحلول المخصصة لكل قطاع، والصور المرفقة</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="save-sectors-btn">
          ${getIcon('sparkles')}
          <span>حفظ التعديلات كمسودة</span>
        </button>
      </div>

      <div class="admin-card">
        <div class="admin-card-header">
          <h3 class="admin-card-title">${getIcon('layers')} القطاعات التشغيلية (${sectors.length} قطاعات)</h3>
        </div>

        <div id="sectors-items-container">
          ${sectorsHtml}
        </div>
      </div>
    </div>
  `;
}

export function initSectorsManagerListeners(): void {
  const saveBtn = document.getElementById('save-sectors-btn');

  saveBtn?.addEventListener('click', () => {
    const titles = document.querySelectorAll('.sector-title-input') as NodeListOf<HTMLInputElement>;
    const subs = document.querySelectorAll('.sector-sub-input') as NodeListOf<HTMLInputElement>;
    const tags = document.querySelectorAll('.sector-tag-input') as NodeListOf<HTMLInputElement>;
    const icons = document.querySelectorAll('.sector-icon-input') as NodeListOf<HTMLInputElement>;
    const imgs = document.querySelectorAll('.sector-img-input') as NodeListOf<HTMLInputElement>;
    const descs = document.querySelectorAll('.sector-desc-input') as NodeListOf<HTMLTextAreaElement>;
    const highs = document.querySelectorAll('.sector-high-input') as NodeListOf<HTMLTextAreaElement>;

    const currentSectors = CMSStore.getDraft().sectors;
    const updatedSectors = Array.from(titles).map((el, idx) => ({
      id: currentSectors[idx]?.id || `sector-${idx + 1}`,
      title: el.value.trim(),
      subtitle: subs[idx]?.value.trim() || '',
      tag: tags[idx]?.value.trim() || '',
      icon: icons[idx]?.value.trim() || 'layers',
      imagePath: imgs[idx]?.value.trim() || 'img/JUST.jpg',
      description: descs[idx]?.value.trim() || '',
      highlights: (highs[idx]?.value || '').split('\n').map(s => s.trim()).filter(Boolean)
    }));

    CMSStore.updateDraft('sectors', updatedSectors, 'تم تحديث بيانات القطاعات والحلول المخصصة');
    showToast('تم حفظ تعديلات القطاعات بنجاح.');
  });
}
