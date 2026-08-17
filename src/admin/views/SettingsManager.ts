import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderSettingsManager(): string {
  const settings = CMSStore.getDraft().settings;

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إعدادات الموقع العام والهوية و SEO</h1>
          <p class="view-subtitle">تعديل اسم الموقع، الشعار، الألوان الرئيسية، ومحركات البحث</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="save-settings-btn">
          ${getIcon('sparkles')}
          <span>حفظ التعديلات كمسودة</span>
        </button>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        <!-- General & Brand -->
        <div class="admin-card">
          <div class="admin-card-header">
            <h3 class="admin-card-title">${getIcon('layers')} الهوية الأساسية والشعار</h3>
          </div>

          <form id="settings-general-form">
            <div class="admin-form-group">
              <label class="admin-label">اسم الموقع</label>
              <input type="text" id="set-site-name" class="admin-input" value="${settings.siteName}" required />
            </div>

            <div class="form-row-2">
              <div class="admin-form-group">
                <label class="admin-label">اسم الشركة (عربي)</label>
                <input type="text" id="set-company-name" class="admin-input" value="${settings.companyName}" required />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">اسم الشركة (English)</label>
                <input type="text" id="set-company-en" class="admin-input" value="${settings.companyNameEn}" required />
              </div>
            </div>

            <div class="admin-form-group">
              <label class="admin-label">الشعار اللفظي (Tagline)</label>
              <input type="text" id="set-tagline" class="admin-input" value="${settings.tagline}" required />
            </div>

            <div class="form-row-2">
              <div class="admin-form-group">
                <label class="admin-label">مسار الشعار (Logo)</label>
                <input type="text" id="set-logo" class="admin-input" value="${settings.logoPath}" required />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">مسار الأيقونة (Favicon)</label>
                <input type="text" id="set-favicon" class="admin-input" value="${settings.faviconPath}" required />
              </div>
            </div>

            <div class="form-row-2">
              <div class="admin-form-group">
                <label class="admin-label">اللون الرئيسي (Primary Brand Color)</label>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                  <input type="color" id="set-primary-color-picker" value="${settings.primaryColor}" style="width: 44px; height: 38px; border: none; cursor: pointer; border-radius: 6px;" />
                  <input type="text" id="set-primary-color" class="admin-input" value="${settings.primaryColor}" style="font-family: var(--admin-font-latin);" />
                </div>
              </div>

              <div class="admin-form-group">
                <label class="admin-label">اللون الثانوي (Secondary Color)</label>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                  <input type="color" id="set-sec-color-picker" value="${settings.secondaryColor}" style="width: 44px; height: 38px; border: none; cursor: pointer; border-radius: 6px;" />
                  <input type="text" id="set-sec-color" class="admin-input" value="${settings.secondaryColor}" style="font-family: var(--admin-font-latin);" />
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- SEO & Metadata -->
        <div class="admin-card">
          <div class="admin-card-header">
            <h3 class="admin-card-title">${getIcon('sparkles')} تحسين محركات البحث (SEO)</h3>
          </div>

          <form id="settings-seo-form">
            <div class="admin-form-group">
              <label class="admin-label">عنوان الصفحة (Meta Title)</label>
              <input type="text" id="set-meta-title" class="admin-input" value="${settings.metaTitle}" required />
            </div>

            <div class="admin-form-group">
              <label class="admin-label">الوصف لمحركات البحث (Meta Description)</label>
              <textarea id="set-meta-desc" class="admin-textarea" style="min-height: 90px;" required>${settings.metaDescription}</textarea>
            </div>

            <div class="admin-form-group">
              <label class="admin-label">الكلمات المفتاحية (Keywords)</label>
              <textarea id="set-meta-keywords" class="admin-textarea" style="min-height: 70px;" required>${settings.keywords}</textarea>
            </div>

            <div class="admin-form-group">
              <label class="admin-label">صورة المشاركة الاجتماعية (Open Graph Image)</label>
              <input type="text" id="set-og-image" class="admin-input" value="${settings.ogImage}" required />
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

export function initSettingsManagerListeners(): void {
  const saveBtn = document.getElementById('save-settings-btn');
  const primPicker = document.getElementById('set-primary-color-picker') as HTMLInputElement;
  const primInput = document.getElementById('set-primary-color') as HTMLInputElement;
  const secPicker = document.getElementById('set-sec-color-picker') as HTMLInputElement;
  const secInput = document.getElementById('set-sec-color') as HTMLInputElement;

  primPicker?.addEventListener('input', () => {
    if (primInput) primInput.value = primPicker.value;
  });
  primInput?.addEventListener('input', () => {
    if (primPicker && primInput.value.startsWith('#')) primPicker.value = primInput.value;
  });

  secPicker?.addEventListener('input', () => {
    if (secInput) secInput.value = secPicker.value;
  });
  secInput?.addEventListener('input', () => {
    if (secPicker && secInput.value.startsWith('#')) secPicker.value = secInput.value;
  });

  saveBtn?.addEventListener('click', () => {
    const siteName = (document.getElementById('set-site-name') as HTMLInputElement)?.value;
    const companyName = (document.getElementById('set-company-name') as HTMLInputElement)?.value;
    const companyNameEn = (document.getElementById('set-company-en') as HTMLInputElement)?.value;
    const tagline = (document.getElementById('set-tagline') as HTMLInputElement)?.value;
    const logoPath = (document.getElementById('set-logo') as HTMLInputElement)?.value;
    const faviconPath = (document.getElementById('set-favicon') as HTMLInputElement)?.value;
    const primaryColor = primInput?.value || '#0066ff';
    const secondaryColor = secInput?.value || '#0284c7';
    const metaTitle = (document.getElementById('set-meta-title') as HTMLInputElement)?.value;
    const metaDescription = (document.getElementById('set-meta-desc') as HTMLTextAreaElement)?.value;
    const keywords = (document.getElementById('set-meta-keywords') as HTMLTextAreaElement)?.value;
    const ogImage = (document.getElementById('set-og-image') as HTMLInputElement)?.value;

    const updatedSettings = {
      siteName,
      companyName,
      companyNameEn,
      tagline,
      logoPath,
      faviconPath,
      primaryColor,
      secondaryColor,
      themePreference: 'light' as const,
      metaTitle,
      metaDescription,
      keywords,
      ogImage
    };

    CMSStore.updateDraft('settings', updatedSettings, 'تم تحديث إعدادات الموقع العام والهوية وبيانات SEO');
    showToast('تم حفظ إعدادات الموقع بنجاح.');
  });
}
