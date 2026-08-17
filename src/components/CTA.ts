import { getIcon } from '../icons/serviceIcons';
import { CTAContent } from '../types/admin';

export function renderCTA(ctaData?: CTAContent): string {
  const cta = ctaData || {
    badge: 'ابدأ مشروعك معنا اليوم',
    titlePrefix: 'هل تبحث عن',
    titleHighlight: 'حل تقني وهندسي متكامل لمشروعك؟',
    description: 'فريق مهندسينا ومستشارينا على أتم الاستعداد لدراسة متطلبات منشأتك، وتصميم وتوريد وتركيب أحدث المنظومات الأمنية والذكية بأعلى معايير الجودة العالمية.',
    buttonText: 'اطلب دراسة واستشارة لمشروعك',
    buttonUrl: '#contact',
    bgImagePath: 'img/FOTER BG.jpg',
    isActive: true
  };

  return `
    <section class="cta-section" id="contact">
      <!-- Background Image with Overlay -->
      <div class="cta-bg-wrapper">
        <img src="${cta.bgImagePath}" alt="خلفية تواصل شركة أساسات المشاعر" class="cta-bg-img" loading="lazy" />
      </div>
      <div class="cta-overlay"></div>

      <div class="container" style="position: relative; z-index: 10;">
        <div class="cta-box">
          <div class="section-badge" style="background: rgba(0, 102, 255, 0.08); margin-bottom: 1.5rem;">
            ${getIcon('sparkles')}
            <span>${cta.badge}</span>
          </div>

          <h2 class="cta-title">
            <span>${cta.titlePrefix}</span>
            <span class="text-gradient">${cta.titleHighlight}</span>
          </h2>

          <p class="cta-description">
            ${cta.description}
          </p>

          <div class="cta-actions">
            <button class="btn-primary" id="cta-consult-btn" style="padding: 0.9rem 2.2rem; font-size: 1.05rem;">
              <span>${cta.buttonText}</span>
              ${getIcon('sparkles')}
            </button>

            <a href="tel:+966" class="btn-secondary" style="padding: 0.9rem 2rem; font-size: 1.05rem;">
              <span>تواصل عبر الهاتف</span>
              ${getIcon('phone')}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
