import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderContactManager(): string {
  const contact = CMSStore.getDraft().contact;

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إدارة معلومات التواصل والمقر</h1>
          <p class="view-subtitle">تعديل أرقام الهواتف، البريد الإلكتروني، العنوان الجغرافي، وروابط منصات التواصل</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="save-contact-btn">
          ${getIcon('sparkles')}
          <span>حفظ التعديلات كمسودة</span>
        </button>
      </div>

      <div class="admin-card">
        <div class="admin-card-header">
          <h3 class="admin-card-title">${getIcon('location')} قنوات التواصل الرسمية</h3>
        </div>

        <form id="contact-edit-form">
          <div class="form-row-2">
            <div class="admin-form-group">
              <label class="admin-label">رقم الهاتف / خط الاستشارات</label>
              <input type="text" id="contact-phone" class="admin-input" value="${contact.phone}" required />
            </div>
            <div class="admin-form-group">
              <label class="admin-label">البريد الإلكتروني الرسمي</label>
              <input type="email" id="contact-email" class="admin-input" value="${contact.email}" required />
            </div>
          </div>

          <div class="form-row-2">
            <div class="admin-form-group">
              <label class="admin-label">رقم الواتساب (WhatsApp)</label>
              <input type="text" id="contact-whatsapp" class="admin-input" value="${contact.whatsapp || ''}" />
            </div>
            <div class="admin-form-group">
              <label class="admin-label">ساعات العمل والتشغيل</label>
              <input type="text" id="contact-hours" class="admin-input" value="${contact.workingHours}" required />
            </div>
          </div>

          <div class="admin-form-group">
            <label class="admin-label">العنوان الجغرافي للمقر الرئيسي</label>
            <input type="text" id="contact-address" class="admin-input" value="${contact.address}" required />
          </div>

          <div class="form-row-2">
            <div class="admin-form-group">
              <label class="admin-label">رابط منصة لينكد إن (LinkedIn)</label>
              <input type="url" id="contact-linkedin" class="admin-input" value="${contact.socialLinks?.linkedin || ''}" />
            </div>
            <div class="admin-form-group">
              <label class="admin-label">رابط منصة إكس (Twitter / X)</label>
              <input type="url" id="contact-twitter" class="admin-input" value="${contact.socialLinks?.twitter || ''}" />
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function initContactManagerListeners(): void {
  const saveBtn = document.getElementById('save-contact-btn');

  saveBtn?.addEventListener('click', () => {
    const phone = (document.getElementById('contact-phone') as HTMLInputElement)?.value;
    const email = (document.getElementById('contact-email') as HTMLInputElement)?.value;
    const whatsapp = (document.getElementById('contact-whatsapp') as HTMLInputElement)?.value;
    const workingHours = (document.getElementById('contact-hours') as HTMLInputElement)?.value;
    const address = (document.getElementById('contact-address') as HTMLInputElement)?.value;
    const linkedin = (document.getElementById('contact-linkedin') as HTMLInputElement)?.value;
    const twitter = (document.getElementById('contact-twitter') as HTMLInputElement)?.value;

    const updatedContact = {
      phone,
      email,
      whatsapp,
      workingHours,
      address,
      socialLinks: {
        linkedin,
        twitter
      },
      isActive: true
    };

    CMSStore.updateDraft('contact', updatedContact, 'تم تحديث معلومات وقنوات التواصل للمقر الرئيسي');
    showToast('تم حفظ تعديلات معلومات التواصل بنجاح.');
  });
}
