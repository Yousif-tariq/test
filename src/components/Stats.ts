import { getIcon } from '../icons/serviceIcons';
import { IndicatorItem } from '../types';
import { indicatorsData } from '../data/staticData';

export function renderStats(statsData?: IndicatorItem[]): string {
  const stats = statsData || indicatorsData;

  const statCardsHtml = stats.map(stat => `
    <div class="stat-card">
      <div class="stat-icon-wrapper">
        ${getIcon(stat.icon)}
      </div>
      <div class="stat-badge">${stat.badge}</div>
      <h3 class="stat-title">${stat.title}</h3>
      <p class="stat-desc">${stat.description}</p>
    </div>
  `).join('');

  return `
    <section class="section-padding stats-section" id="stats">
      <div class="container">
        <div class="stats-grid">
          ${statCardsHtml}
        </div>
      </div>
    </section>
  `;
}
