import { getIcon } from '../icons/serviceIcons';
import { AboutContent } from '../types/admin';
import { pillarsData } from '../data/staticData';

export function renderAbout(aboutData?: AboutContent): string {
  const about = aboutData || {
    badge: 'من نحن — نبذة عن الشركة',
    title: 'شريككم الاستراتيجي في بناء',
    titleHighlight: 'المنظومات التقنية الذكية',
    leadText: 'تُعد شركة أساسات المشاعر المحدودة رائدة في تقديم الحلول والأنظمة التقنية المتكاملة للمنشآت الذكية، البنية التحتية للشبكات، أنظمة الأمان والمراقبة، التحكم بالدخول، وإدارة المباني BMS.',
    subtitle: 'نعمل وفق أعلى معايير الجودة العالمية لنضمن لعملائنا في القطاعات التجارية، الإدارية، والحكومية بيئة تشغيلية ذكية، آمنة، ومستدامة تمتاز بأعلى درجات الكفاءة والموثوقية.',
    imagePath: 'img/IT TEAM.jpg',
    floatingBadgeText: 'فريق هندسي وتقني متخصص',
    imageOverlayTitle: 'خبرة هندسية موثوقة',
    imageOverlaySubtitle: 'كفاءة عالية في تنفيذ المشاريع الكبرى',
    pillars: pillarsData,
    isActive: true
  };

  const pillarsHtml = about.pillars.map(pillar => `
    <div class="pillar-item">
      <div class="pillar-header">
        <div class="pillar-icon">
          ${getIcon(pillar.icon)}
        </div>
        <h4 class="pillar-title">${pillar.title}</h4>
      </div>
      <p class="pillar-desc">${pillar.description}</p>
    </div>
  `).join('');

  return `
    <section class="section-padding" id="about" style="background-color: #ffffff;">
      <div class="container">
        <div class="about-grid">
          <!-- Column 1: Image Showcase -->
          <div class="about-image-column">
            <div class="about-image-card">
              <img src="${about.imagePath}" alt="فريق عمل ومهندسو شركة أساسات المشاعر المحدودة" loading="lazy" />
              
              <!-- Floating Badge -->
              <div class="about-badge-floating">
                ${getIcon('shield_check')}
                <span>${about.floatingBadgeText}</span>
              </div>

              <!-- Overlay Info -->
              <div class="about-image-overlay">
                <div>
                  <h4 style="color: #ffffff; font-weight: 800; font-size: 1.1rem; margin-bottom: 0.2rem;">
                    ${about.imageOverlayTitle}
                  </h4>
                  <p style="color: #cbd5e1; font-size: 0.85rem;">
                    ${about.imageOverlaySubtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Column 2: Text Content & Pillars -->
          <div class="about-text-column">
            <div class="section-badge">
              ${getIcon('sparkles')}
              <span>${about.badge}</span>
            </div>

            <h2 class="section-title">
              <span>${about.title}</span>
              <span class="text-gradient">${about.titleHighlight}</span>
            </h2>

            <p class="about-lead">
              ${about.leadText}
            </p>

            <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.7;">
              ${about.subtitle}
            </p>

            <!-- 4 Core Pillars Grid -->
            <div class="pillars-grid">
              ${pillarsHtml}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
