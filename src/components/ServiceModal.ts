import { ServiceItem } from '../types';
import { getIcon } from '../icons/serviceIcons';

export function renderServiceModal(): string {
  return `
    <div class="service-modal-backdrop" id="service-modal-backdrop" role="dialog" aria-modal="true">
      <div class="service-modal-container" id="service-modal-container">
        <button class="service-modal-close" id="service-modal-close-btn" aria-label="إغلاق">
          ${getIcon('close')}
        </button>

        <div id="service-modal-dynamic-content">
          <!-- Populated dynamically -->
        </div>
      </div>
    </div>
  `;
}

export function openServiceModal(service: ServiceItem, onOpenConsultation?: (serviceName: string) => void): void {
  const backdrop = document.getElementById('service-modal-backdrop');
  const container = document.getElementById('service-modal-dynamic-content');

  if (!backdrop || !container) return;

  const featuresHtml = service.features.map(f => `
    <div class="service-feature-item">
      ${getIcon('check')}
      <span>${f}</span>
    </div>
  `).join('');

  const techsHtml = service.technologies.map(t => `
    <span class="tech-tag">${t}</span>
  `).join('');

  const appsHtml = service.applications.map(a => `
    <div class="service-feature-item">
      ${getIcon('shield_check')}
      <span>${a}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="service-modal-header">
      <div class="service-modal-icon">
        ${getIcon(service.iconName)}
      </div>
      <div class="service-modal-title-wrap">
        <span class="service-modal-badge">${service.number} • ${service.category}</span>
        <h3 class="service-modal-title">${service.title}</h3>
        <span class="service-modal-title-en">${service.titleEn}</span>
      </div>
    </div>

    <div class="service-modal-full-desc">
      ${service.fullDescription}
    </div>

    <h4 class="modal-section-heading">
      ${getIcon('sparkles')}
      <span>أبرز المميزات والمواصفات الفنية</span>
    </h4>
    <div class="service-modal-features">
      ${featuresHtml}
    </div>

    ${service.applications.length ? `
      <h4 class="modal-section-heading">
        ${getIcon('layers')}
        <span>مجالات الاستخدام والتطبيق</span>
      </h4>
      <div class="service-modal-features" style="margin-bottom: 2rem;">
        ${appsHtml}
      </div>
    ` : ''}

    ${service.technologies.length ? `
      <h4 class="modal-section-heading">
        ${getIcon('cpu')}
        <span>التقنيات والبروتوكولات المدعومة</span>
      </h4>
      <div class="service-modal-tech-tags">
        ${techsHtml}
      </div>
    ` : ''}

    <div class="service-modal-actions">
      <button class="btn-primary" id="modal-service-consult-btn">
        <span>طلب استشارة لهذه الخدمة</span>
        ${getIcon('sparkles')}
      </button>
    </div>
  `;

  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';

  const consultBtn = document.getElementById('modal-service-consult-btn');
  consultBtn?.addEventListener('click', () => {
    closeServiceModal();
    onOpenConsultation(service.title);
  });
}

export function closeServiceModal(): void {
  const backdrop = document.getElementById('service-modal-backdrop');
  backdrop?.classList.remove('active');
  document.body.style.overflow = '';
}

export function initServiceModalListeners(): void {
  const backdrop = document.getElementById('service-modal-backdrop');
  const closeBtn = document.getElementById('service-modal-close-btn');

  closeBtn?.addEventListener('click', closeServiceModal);

  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeServiceModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop?.classList.contains('active')) {
      closeServiceModal();
    }
  });
}
