import { getIcon, serviceIcons } from '../../icons/serviceIcons';
import { ServiceItem } from '../../types';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function openServiceEditor(service: ServiceItem | null, onSave: () => void): void {
  const isNew = service === null;
  const draft = CMSStore.getDraft();

  const current: ServiceItem = service ? JSON.parse(JSON.stringify(service)) : {
    id: `service-${Date.now()}`,
    number: String(draft.services.length + 1).padStart(2, '0'),
    title: '',
    titleEn: '',
    category: 'الأمن والحماية',
    iconName: 'cctv_security',
    shortDescription: '',
    fullDescription: '',
    features: ['ميزة هندسية أولى', 'ميزة هندسية ثانية', 'ميزة هندسية ثالثة'],
    applications: ['المنشآت التجارية والمكاتب', 'المشاريع الحكومية والخاصة'],
    technologies: ['Smart Tech', 'AI Systems'],
    imagePath: 'img/JUST.jpg'
  };

  const existing = document.getElementById('service-editor-modal');
  if (existing) existing.remove();

  const backdrop = document.createElement('div');
  backdrop.id = 'service-editor-modal';
  backdrop.className = 'admin-modal-backdrop active';

  const iconOptions = Object.keys(serviceIcons).map(k => `
    <option value="${k}" ${current.iconName === k ? 'selected' : ''}>${k}</option>
  `).join('');

  backdrop.innerHTML = `
    <div class="admin-modal-box" style="max-width: 840px;">
      <div class="admin-modal-header">
        <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--admin-text-main);">
          ${isNew ? 'إضافة خدمة جديدة' : `تعديل خدمة: ${current.title}`}
        </h2>
        <button class="action-icon-btn" id="editor-close-btn">${getIcon('close')}</button>
      </div>

      <form id="service-editor-form">
        <div class="form-row-3">
          <div class="admin-form-group">
            <label class="admin-label">رقم الترتيب</label>
            <input type="text" id="svc-number" class="admin-input" value="${current.number}" required />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">التصنيف الرئيسي</label>
            <input type="text" id="svc-category" class="admin-input" value="${current.category}" required />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">الأيقونة (SVG Icon)</label>
            <select id="svc-icon" class="admin-select">${iconOptions}</select>
          </div>
        </div>

        <div class="form-row-2">
          <div class="admin-form-group">
            <label class="admin-label">اسم الخدمة باللغة العربية</label>
            <input type="text" id="svc-title" class="admin-input" value="${current.title}" required />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">الاسم بالإنجليزية</label>
            <input type="text" id="svc-title-en" class="admin-input" value="${current.titleEn}" required />
          </div>
        </div>

        <div class="admin-form-group">
          <label class="admin-label">الوصف القصير (المعروض في البطاقة الرئيسية)</label>
          <textarea id="svc-short-desc" class="admin-textarea" style="min-height: 60px;" required>${current.shortDescription}</textarea>
        </div>

        <div class="admin-form-group">
          <label class="admin-label">الوصف التفصيلي الكامل (المعروض في النافذة المنبثقة)</label>
          <textarea id="svc-full-desc" class="admin-textarea" style="min-height: 90px;" required>${current.fullDescription}</textarea>
        </div>

        <div class="form-row-2">
          <div class="admin-form-group">
            <label class="admin-label">مسار الصورة المرتبطة</label>
            <input type="text" id="svc-image" class="admin-input" value="${current.imagePath || 'img/JUST.jpg'}" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">التقنيات المستخدمة (مفصولة بفواصل)</label>
            <input type="text" id="svc-tech" class="admin-input" value="${(current.technologies || []).join(', ')}" />
          </div>
        </div>

        <div class="admin-form-group">
          <label class="admin-label">المميزات الرئيسية للخدمة (سطر لكل ميزة)</label>
          <textarea id="svc-features" class="admin-textarea" style="min-height: 90px;">${(current.features || []).join('\n')}</textarea>
        </div>

        <div class="admin-form-group">
          <label class="admin-label">مجالات وتطبيقات الاستخدام (سطر لكل تطبيق)</label>
          <textarea id="svc-applications" class="admin-textarea" style="min-height: 70px;">${(current.applications || []).join('\n')}</textarea>
        </div>

        <div class="admin-modal-footer">
          <button type="button" class="admin-btn admin-btn-secondary" id="editor-cancel-btn">إلغاء</button>
          <button type="submit" class="admin-btn admin-btn-primary">
            ${getIcon('sparkles')}
            <span>${isNew ? 'إضافة الخدمة للمسودة' : 'حفظ التعديلات'}</span>
          </button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(backdrop);

  const close = () => backdrop.remove();
  document.getElementById('editor-close-btn')?.addEventListener('click', close);
  document.getElementById('editor-cancel-btn')?.addEventListener('click', close);

  const form = document.getElementById('service-editor-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const number = (document.getElementById('svc-number') as HTMLInputElement).value.trim();
    const category = (document.getElementById('svc-category') as HTMLInputElement).value.trim();
    const iconName = (document.getElementById('svc-icon') as HTMLSelectElement).value;
    const title = (document.getElementById('svc-title') as HTMLInputElement).value.trim();
    const titleEn = (document.getElementById('svc-title-en') as HTMLInputElement).value.trim();
    const shortDescription = (document.getElementById('svc-short-desc') as HTMLTextAreaElement).value.trim();
    const fullDescription = (document.getElementById('svc-full-desc') as HTMLTextAreaElement).value.trim();
    const imagePath = (document.getElementById('svc-image') as HTMLInputElement).value.trim();
    
    const techRaw = (document.getElementById('svc-tech') as HTMLInputElement).value;
    const technologies = techRaw.split(',').map(s => s.trim()).filter(Boolean);

    const featRaw = (document.getElementById('svc-features') as HTMLTextAreaElement).value;
    const features = featRaw.split('\n').map(s => s.trim()).filter(Boolean);

    const appsRaw = (document.getElementById('svc-applications') as HTMLTextAreaElement).value;
    const applications = appsRaw.split('\n').map(s => s.trim()).filter(Boolean);

    const updatedItem: ServiceItem = {
      id: current.id,
      number,
      title,
      titleEn,
      category,
      iconName,
      shortDescription,
      fullDescription,
      imagePath,
      technologies,
      features,
      applications
    };

    let updatedServices = [...draft.services];
    if (isNew) {
      updatedServices.push(updatedItem);
    } else {
      updatedServices = updatedServices.map(s => s.id === current.id ? updatedItem : s);
    }

    CMSStore.updateDraft('services', updatedServices, isNew ? `تمت إضافة خدمة جديدة (${title})` : `تم تعديل بيانات خدمة (${title})`);
    showToast(isNew ? 'تمت إضافة الخدمة بنجاح.' : 'تم تحديث بيانات الخدمة بنجاح.');
    close();
    onSave();
  });
}
