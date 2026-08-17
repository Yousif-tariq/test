import { getIcon } from '../icons/serviceIcons';
import { SectorItem } from '../types';
import { sectorsData } from '../data/staticData';

export function renderSectors(sectorsList?: SectorItem[]): string {
  const sectors = sectorsList && sectorsList.length > 0 ? sectorsList : sectorsData;
  const initialSector = sectors[0] || sectorsData[0];

  const tabsHtml = sectors.map((sec, index) => `
    <button class="sector-tab-btn ${index === 0 ? 'active' : ''}" data-sector-id="${sec.id}" data-index="${index}">
      ${sec.title}
    </button>
  `).join('');

  const highlightsHtml = initialSector.highlights.map(h => `
    <div class="sector-highlight-item">
      ${getIcon('check')}
      <span>${h}</span>
    </div>
  `).join('');

  return `
    <section class="section-padding" id="sectors" style="background: var(--bg-secondary); border-top: 1px solid var(--border-subtle);">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-badge">
            ${getIcon('layers')}
            <span>مجالات التطبيق والقطاعات</span>
          </div>
          <h2 class="section-title">
            <span>حلول هندسية مصممة خصيصاً</span>
            <span class="text-gradient">لكل قطاع</span>
          </h2>
          <p class="section-subtitle">
            نلبي متطلبات مختلف القطاعات الحيوية بأنظمة مخصصة تضمن الكفاءة التشغيلية وحماية الأصول.
          </p>
        </div>

        <!-- Sector Tabs -->
        <div class="sectors-tabs-wrapper" id="sectors-tabs">
          ${tabsHtml}
        </div>

        <!-- Sector Display Content -->
        <div class="sectors-display-grid">
          <!-- Image Box -->
          <div class="sector-image-box">
            <img id="sector-display-image" src="${initialSector.imagePath}" alt="${initialSector.title}" loading="lazy" />
          </div>

          <!-- Info Card -->
          <div class="sector-info-card" id="sector-info-card">
            <span class="sector-tag-pill" id="sector-display-tag">${initialSector.tag}</span>
            <h3 class="sector-title" id="sector-display-title">${initialSector.title}</h3>
            <div class="sector-subtitle" id="sector-display-subtitle">${initialSector.subtitle}</div>
            
            <p class="sector-description" id="sector-display-desc">
              ${initialSector.description}
            </p>

            <div class="sector-highlights-list" id="sector-display-highlights">
              ${highlightsHtml}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
