import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderFooterManager(): string {
  const footer = CMSStore.getDraft().footer;

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إدارة تذييل الموقع (Footer)</h1>
          <p class="view-subtitle">تعديل نبذة الفوتر، الشعار، نص الحقوق الملكية، والخدمات المميزة</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="save-footer-btn">
          ${getIcon('sparkles')}
          <span>حفظ التعديلات كمسودة</span>
        </button>
      </div>

      <div class="admin-card">
        <div class="admin-card-header">
          <h3 class="admin-card-title">${getIcon('shield_check')} نصوص ومعلومات الفوتر</h3>
        </div>

        <form id="footer-edit-form">
          <div class="form-row-2">
            <div class="admin-form-group">
              <label class="admin-label">مسار شعار الفوتر</label>
              <input type="text" id="footer-logo" class="admin-input" value="${footer.logoPath}" required />
            </div>
            <div class="admin-form-group">
              <label class="admin-label">اسم الشركة بالإنجليزية</label>
              <input type="text" id="footer-brand-en" class="admin-input" value="${footer.brandNameEn}" required />
            </div>
          </div>

          <div class="admin-form-group">
            <label class="admin-label">النبذة التعريفية المختصرة في الفوتر</label>
            <textarea id="footer-brand-desc" class="admin-textarea" required>${footer.brandDesc}</textarea>
          </div>

          <div class="admin-form-group">
            <label class="admin-label">نص حقوق الملكية والطباعة (Copyright Text)</label>
            <input type="text" id="footer-copyright" class="admin-input" value="${footer.copyrightText}" required />
          </div>

          <div class="admin-form-group">
            <label class="admin-label">قائمة الخدمات السريعة المميزة في الفوتر (سطر لكل خدمة)</label>
            <textarea id="footer-services-list" class="admin-textarea" style="min-height: 90px;">${(footer.featuredServices || []).join('\n')}</textarea>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function initFooterManagerListeners(): void {
  const saveBtn = document.getElementById('save-footer-btn');

  saveBtn?.addEventListener('click', () => {
    const logoPath = (document.getElementById('footer-logo') as HTMLInputElement)?.value;
    const brandNameEn = (document.getElementById('footer-brand-en') as HTMLInputElement)?.value;
    const brandDesc = (document.getElementById('footer-brand-desc') as HTMLTextAreaElement)?.value;
    const copyrightText = (document.getElementById('footer-copyright') as HTMLInputElement)?.value;
    const servicesRaw = (document.getElementById('footer-services-list') as HTMLTextAreaElement)?.value;

    const featuredServices = servicesRaw.split('\n').map(s => s.trim()).filter(Boolean);

    const updatedFooter = {
      ...CMSStore.getDraft().footer,
      logoPath,
      brandNameEn,
      brandDesc,
      copyrightText,
      featuredServices,
      isActive: true
    };

    CMSStore.updateDraft('footer', updatedFooter, 'تم تحديث نصوص ومعلومات تذييل الموقع Footer');
    showToast('تم حفظ تعديلات الفوتر بنجاح.');
  });
}
