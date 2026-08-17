import { getIcon } from '../icons/serviceIcons';
import { HeroContent } from '../types/admin';

export function renderHero(heroData?: HeroContent): string {
  const hero = heroData || {
    statusPill: 'منظومة متكاملة • تقنيات وحلول المنشآت الذكية والأمنية',
    titlePrefix: 'أساسات المشاعر المحدودة',
    titleHighlight: 'حلول تقنية متكاملة لحماية وإدارة المنشآت الذكية',
    description: 'نصمم وننفذ أحدث منظومات المراقبة والأمان، التحكم بالدخول، إنذار الحريق، البنية التحتية للشبكات والاتصالات، وإدارة المباني الذكية BMS بأعلى المعايير الهندسية.',
    videoPath: 'img/BG_VEDIO.mp4',
    posterPath: 'img/JUST.jpg',
    primaryBtnText: 'استكشف خدماتنا وحلولنا',
    primaryBtnUrl: '#services',
    secondaryBtnText: 'تواصل مع خبرائنا',
    secondaryBtnUrl: '#contact',
    features: [
      { icon: 'shield_check', text: 'أنظمة معتمدة عالمياً' },
      { icon: 'network_nodes', text: 'تكامل ذكي موحد 100%' },
      { icon: 'cpu', text: 'دعم فني واستجابة 24/7' },
      { icon: 'layers', text: 'بنية تحتية متطورة قابلة للتوسع' }
    ],
    isActive: true
  };

  const featureItemsHtml = hero.features.map(f => `
    <div class="quick-feature-item">
      <div class="quick-feature-icon">
        ${getIcon(f.icon)}
      </div>
      <span class="quick-feature-text">${f.text}</span>
    </div>
  `).join('');

  return `
    <section class="hero-section" id="hero">
      <!-- Background Video with Overlay -->
      <div class="hero-video-wrapper">
        <video class="hero-video" autoplay muted loop playsinline poster="${hero.posterPath}">
          <source src="${hero.videoPath}" type="video/mp4" />
        </video>
        <div class="hero-overlay"></div>
        <div class="hero-grid-pattern"></div>
      </div>

      <!-- Ambient Glows -->
      <div class="bg-ambient-glow glow-top-left"></div>
      <div class="bg-ambient-glow glow-bottom-right"></div>

      <div class="container hero-content-wrapper">
        <!-- Status / Category Pill -->
        <div class="hero-status-pill">
          <span class="status-dot"></span>
          <span>${hero.statusPill}</span>
        </div>

        <!-- Main Title -->
        <h1 class="hero-title">
          <span>${hero.titlePrefix}</span>
          <span class="hero-title-highlight">${hero.titleHighlight}</span>
        </h1>

        <!-- Subtitle & Description -->
        <p class="hero-description">
          ${hero.description}
        </p>

        <!-- CTA Buttons -->
        <div class="hero-cta-group">
          <a href="${hero.primaryBtnUrl}" class="btn-primary">
            <span>${hero.primaryBtnText}</span>
            ${getIcon('sparkles')}
          </a>

          <a href="${hero.secondaryBtnUrl}" class="btn-secondary">
            <span>${hero.secondaryBtnText}</span>
            ${getIcon('phone')}
          </a>
        </div>

        <!-- Quick Trust Indicators -->
        <div class="hero-quick-features">
          ${featureItemsHtml}
        </div>
      </div>
    </section>
  `;
}
