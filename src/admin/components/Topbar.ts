import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';

export function renderTopbar(): string {
  const isDirty = CMSStore.isDraftDirty();
  const state = CMSStore.getState();

  return `
    <header class="admin-topbar">
      <div class="topbar-left-tools">
        <button class="topbar-mobile-toggle" id="admin-mobile-toggle" aria-label="فتح القائمة">
          ${getIcon('layers')}
        </button>

        <button class="topbar-search-btn" id="topbar-search-trigger">
          ${getIcon('sparkles')}
          <span>بحث سريع في الموقع... (Ctrl + K)</span>
        </button>
      </div>

      <div class="topbar-right-tools">
        <div class="topbar-status-badge ${isDirty ? 'status-badge-dirty' : 'status-badge-published'}">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: currentColor;"></span>
          <span>${isDirty ? 'مسودة غير منشورة' : 'النسخة المنشورة متطابقة'}</span>
        </div>

        <button class="admin-btn admin-btn-secondary" id="admin-preview-btn" title="معاينة الموقع مع تعديلات المسودة">
          ${getIcon('layers')}
          <span>معاينة الموقع</span>
        </button>

        ${isDirty ? `
          <button class="admin-btn admin-btn-secondary" id="admin-discard-btn" title="إلغاء المسودة والعودة للمنشور">
            <span>تراجع</span>
          </button>
        ` : ''}

        <button class="admin-btn admin-btn-primary" id="admin-publish-btn" title="نشر التعديلات لزوار الموقع">
          ${getIcon('sparkles')}
          <span>نشر التغييرات</span>
        </button>

        <button class="theme-toggle-btn" id="admin-theme-toggle" title="تبديل الثيم الداكن / الفاتح">
          ${getIcon('cpu')}
        </button>
      </div>
    </header>
  `;
}
