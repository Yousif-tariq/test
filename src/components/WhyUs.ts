import { getIcon } from '../icons/serviceIcons';
import { WhyUsItem } from '../types';
import { whyUsData } from '../data/staticData';

export function renderWhyUs(whyUsItems?: WhyUsItem[]): string {
  const items = whyUsItems && whyUsItems.length > 0 ? whyUsItems : whyUsData;

  const cardsHtml = items.map(item => `
    <div class="why-card ${item.span === 2 ? 'span-2' : ''}">
      <div>
        <div class="why-card-header">
          <div class="why-card-icon">
            ${getIcon(item.icon)}
          </div>
          <span class="why-card-badge">${item.badge}</span>
        </div>

        <h3 class="why-card-title">${item.title}</h3>
        <div class="why-card-subtitle">${item.subtitle}</div>
        <p class="why-card-desc">${item.description}</p>
      </div>
    </div>
  `).join('');

  return `
    <section class="section-padding" id="why-us" style="background-color: #ffffff;">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-badge">
            ${getIcon('sparkles')}
            <span>القيمة المضافة والمزايا التنافسية</span>
          </div>
          <h2 class="section-title">
            <span>لماذا يختار عملاؤنا</span>
            <span class="text-gradient">أساسات المشاعر المحدودة؟</span>
          </h2>
          <p class="section-subtitle">
            نجمع بين الخبرة الهندسية المتراكمة والشراكات التقنية العالمية لنقدم حلولاً تتجاوز التوقعات.
          </p>
        </div>

        <!-- Bento Grid -->
        <div class="why-us-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}
