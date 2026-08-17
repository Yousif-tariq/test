import { getIcon } from '../icons/serviceIcons';
import { ServiceItem } from '../types';
import { initialServicesList } from '../data/defaultStore';

export function renderServices(services: ServiceItem[]): string {
  const list = services && services.length > 0 ? services : initialServicesList;

  const serviceCardsHtml = list.map((service, index) => {
    return `
      <article class="service-card" data-service-id="${service.id}" data-index="${index}" tabindex="0" role="button" aria-label="عرض تفاصيل ${service.title}">
        <!-- Top Number & Icon -->
        <div class="service-card-top">
          <div class="service-icon-box">
            <span class="service-svg-icon">${getIcon(service.iconName || 'cctv_security')}</span>
          </div>
          <span class="service-number">${service.number}</span>
        </div>

        <!-- Category & Title -->
        <div class="service-card-body">
          <span class="service-category-tag">${service.category}</span>
          <h3 class="service-card-title">${service.title}</h3>
          <p class="service-card-desc">${service.shortDescription}</p>
        </div>

        <!-- Footer Link -->
        <div class="service-card-footer">
          <span class="service-btn-link">
            <span>استكشف المنظومة</span>
            ${getIcon('arrow_left')}
          </span>
          <span style="font-size: 0.75rem; color: var(--blue-electric); font-family: var(--font-latin); font-weight: 700;">
            ${service.titleEn ? service.titleEn.split(' ')[0] : 'SYS'}
          </span>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section class="section-padding services-section" id="services">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-badge">
            ${getIcon('sparkles')}
            <span>منظومة الخدمات والحلول المتكاملة</span>
          </div>
          <h2 class="section-title">
            <span>10 حلول وأنظمة هندسية</span>
            <span class="text-gradient">لحماية وإدارة المنشآت الذكية</span>
          </h2>
          <p class="section-subtitle">
            نقدم مجموعة متكاملة وشاملة من الأنظمة الأمنية، الشبكات، إنذار الحريق، وإدارة المباني الذكية المصممة وفق أحدث المعايير العالمية.
          </p>
        </div>

        <!-- Services 10 Grid -->
        <div class="services-grid" id="services-grid-container">
          ${serviceCardsHtml}
        </div>
      </div>
    </section>
  `;
}
