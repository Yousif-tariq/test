import { getIcon } from '../icons/serviceIcons';
import { ServiceItem } from '../types';

export function renderConsultationModal(): string {
  return `
    <div class="consult-modal-backdrop" id="consult-modal-backdrop" role="dialog" aria-modal="true">
      <div class="consult-modal-container">
        <button class="service-modal-close" id="consult-modal-close-btn" aria-label="إغلاق">
          ${getIcon('close')}
        </button>

        <div class="section-badge" style="margin-bottom: 1rem;">
          ${getIcon('sparkles')}
          <span>طلب استشارة ودراسة فنية</span>
        </div>

        <h3 style="font-size: 1.8rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">
          تواصل مع خبرائنا الهندسيين
        </h3>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 2rem;">
          املأ النموذج التالي وسيقوم أحد مهندسينا المختصين بالتواصل معك لدراسة متطلبات مشروعك وتقديم العرض الفني المناسب.
        </p>

        <form id="consultation-form">
          <div class="form-group">
            <label class="form-label" for="consult-name">الاسم الكريم / ممثل المنشأة *</label>
            <input type="text" id="consult-name" class="form-input" placeholder="مثال: م. فهد الحربي" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="consult-company">اسم الشركة / الجهة *</label>
            <input type="text" id="consult-company" class="form-input" placeholder="مثال: شركة التطوير العقاري" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="consult-service">الخدمة أو المنظومة المطلوبة *</label>
            <select id="consult-service" class="form-select" required>
              <option value="">-- اختر الخدمة أو المنظومة --</option>
              <option value="أنظمة الأمان والمراقبة">01 — أنظمة الأمان والمراقبة</option>
              <option value="أنظمة التحكم بالدخول والخروج">02 — أنظمة التحكم بالدخول والخروج</option>
              <option value="أنظمة الإنذار والاتصالات">03 — أنظمة الإنذار والاتصالات</option>
              <option value="إنذار الحريق">04 — إنذار الحريق</option>
              <option value="الشبكات والاتصالات">05 — الشبكات والاتصالات</option>
              <option value="الأنظمة الذكية والصوتيات">06 — الأنظمة الذكية والصوتيات</option>
              <option value="السنترال">07 — السنترال</option>
              <option value="إدارة المباني BMS">08 — إدارة المباني BMS</option>
              <option value="المنازل الذكية">09 — المنازل الذكية</option>
              <option value="الأنظمة المرئية والصوتية">10 — الأنظمة المرئية والصوتية</option>
              <option value="حلول متكاملة شاملة لكامل المشروع">حلول متكاملة شاملة لكامل المشروع</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="consult-contact">رقم التواصل / البريد الإلكتروني *</label>
            <input type="text" id="consult-contact" class="form-input" placeholder="رقم الهاتف أو البريد الإلكتروني" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="consult-notes">نبذة مختصرة عن المشروع والموقع</label>
            <textarea id="consult-notes" class="form-textarea" placeholder="اذكر نوع المنشأة، المساحة، أو أية متطلبات فنية خاصة..."></textarea>
          </div>

          <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 2rem;">
            <button type="submit" id="consult-submit-btn" class="btn-primary" style="width: 100%;">
              <span>إرسال طلب الدراسة الفنية</span>
              ${getIcon('sparkles')}
            </button>
          </div>
        </form>

        <div id="consult-success-msg" style="display: none; padding: 2rem; text-align: center; background: rgba(0, 102, 255, 0.05); border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-top: 1rem;">
          <div class="check-icon-box">
            ${getIcon('check')}
          </div>
          <h4 style="font-size: 1.3rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">تم استلام طلبكم بنجاح</h4>
          <p style="font-size: 0.95rem; color: var(--text-secondary);">
            شكراً لاهتمامكم بشركة أساسات المشاعر المحدودة. سيقوم فريقنا الهندسي بالتواصل معكم خلال وقت وجيز.
          </p>
        </div>
      </div>
    </div>
  `;
}

export function openConsultationModal(preselectedService?: string): void {
  const backdrop = document.getElementById('consult-modal-backdrop');
  const serviceSelect = document.getElementById('consult-service') as HTMLSelectElement | null;
  const form = document.getElementById('consultation-form');
  const successMsg = document.getElementById('consult-success-msg');

  if (form) form.style.display = 'block';
  if (successMsg) successMsg.style.display = 'none';

  if (serviceSelect && preselectedService) {
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].value.includes(preselectedService) || preselectedService.includes(serviceSelect.options[i].value)) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }

  backdrop?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closeConsultationModal(): void {
  const backdrop = document.getElementById('consult-modal-backdrop');
  backdrop?.classList.remove('active');
  document.body.style.overflow = '';
}

export function initConsultationModalListeners(): void {
  const backdrop = document.getElementById('consult-modal-backdrop');
  const closeBtn = document.getElementById('consult-modal-close-btn');
  const form = document.getElementById('consultation-form');
  const successMsg = document.getElementById('consult-success-msg');
  const submitBtn = document.getElementById('consult-submit-btn');

  closeBtn?.addEventListener('click', closeConsultationModal);

  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeConsultationModal();
    }
  });

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = (document.getElementById('consult-name') as HTMLInputElement)?.value || '';
    const company = (document.getElementById('consult-company') as HTMLInputElement)?.value || '';
    const service = (document.getElementById('consult-service') as HTMLSelectElement)?.value || '';
    const contact = (document.getElementById('consult-contact') as HTMLInputElement)?.value || '';
    const notes = (document.getElementById('consult-notes') as HTMLTextAreaElement)?.value || '';

    if (submitBtn) (submitBtn as HTMLButtonElement).disabled = true;

    try {
      await fetch('/api/contact/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${name} (${company})`,
          phone: contact,
          email: contact.includes('@') ? contact : '',
          service,
          projectType: company,
          notes
        })
      });
    } catch (err) {
      // Still show success UI to user if offline
    }

    if (form && successMsg) {
      form.style.display = 'none';
      successMsg.style.display = 'block';
      setTimeout(() => {
        closeConsultationModal();
        if (submitBtn) (submitBtn as HTMLButtonElement).disabled = false;
      }, 3500);
    }
  });
}
