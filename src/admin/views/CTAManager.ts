import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderCTAManager(): string {
  const cta = CMSStore.getDraft().cta;

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إدارة قسم الدعوة للتواصل (Call To Action)</h1>
          <p class="view-subtitle">تعديل رسالة التحفيز، زر الاتصال، والصورة الخلفية للقسم</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="save-cta-btn">
          ${getIcon('sparkles')}
          <span>حفظ التعديلات كمسودة</span>
        </button>
      </div>

      <div class="admin-card">
        <div class="admin-card-header">
          <h3 class="admin-card-title">${getIcon('phone')} نصوص ورسائل CTA</h3>
        </div>

        <form id="cta-edit-form">
          <div class="form-row-2">
            <div class="admin-form-group">
              <label class="admin-label">شارة القسم (Badge)</label>
              <input type="text" id="cta-badge" class="admin-input" value="${cta.badge}" required />
            </div>
            <div class="admin-form-group">
              <label class="admin-label">مسار صورة الخلفية</label>
              <input type="text" id="cta-bg-image" class="admin-input" value="${cta.bgImagePath}" required />
            </div>
          </div>

          <div class="form-row-2">
            <div class="admin-form-group">
              <label class="admin-label">بادئة العنوان الرئيسي</label>
              <input type="text" id="cta-title-prefix" class="admin-input" value="${cta.titlePrefix}" required />
            </div>
            <div class="admin-form-group">
              <label class="admin-label">العنوان الملون البارز</label>
              <input type="text" id="cta-title-highlight" class="admin-input" value="${cta.titleHighlight}" required />
            </div>
          </div>

          <div class="admin-form-group">
            <label class="admin-label">نص الوصف والرسالة</label>
            <textarea id="cta-desc" class="admin-textarea" required>${cta.description}</textarea>
          </div>

          <div class="form-row-2">
            <div class="admin-form-group">
              <label class="admin-label">نص زر الإجراء</label>
              <input type="text" id="cta-btn-text" class="admin-input" value="${cta.buttonText}" required />
            </div>
            <div class="admin-form-group">
              <label class="admin-label">رابط الزر (أو #contact)</label>
              <input type="text" id="cta-btn-url" class="admin-input" value="${cta.buttonUrl}" required />
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function initCTAManagerListeners(): void {
  const saveBtn = document.getElementById('save-cta-btn');

  saveBtn?.addEventListener('click', () => {
    const badge = (document.getElementById('cta-badge') as HTMLInputElement)?.value;
    const bgImagePath = (document.getElementById('cta-bg-image') as HTMLInputElement)?.value;
    const titlePrefix = (document.getElementById('cta-title-prefix') as HTMLInputElement)?.value;
    const titleHighlight = (document.getElementById('cta-title-highlight') as HTMLInputElement)?.value;
    const description = (document.getElementById('cta-desc') as HTMLTextAreaElement)?.value;
    const buttonText = (document.getElementById('cta-btn-text') as HTMLInputElement)?.value;
    const buttonUrl = (document.getElementById('cta-btn-url') as HTMLInputElement)?.value;

    const updatedCTA = {
      badge,
      bgImagePath,
      titlePrefix,
      titleHighlight,
      description,
      buttonText,
      buttonUrl,
      isActive: true
    };

    CMSStore.updateDraft('cta', updatedCTA, 'تم تحديث بيانات ونصوص قسم الدعوة للتواصل CTA');
    showToast('تم حفظ تعديلات قسم CTA بنجاح.');
  });
}
