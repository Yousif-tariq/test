import { getIcon } from '../icons/serviceIcons';
import { EcosystemNode } from '../types';
import { ecosystemNodes } from '../data/staticData';

export function renderEcosystem(nodesData?: EcosystemNode[]): string {
  const nodes = nodesData && nodesData.length > 0 ? nodesData : ecosystemNodes;
  const initialNode = nodes[0] || ecosystemNodes[0];

  const nodesButtonsHtml = nodes.map((node, index) => `
    <button class="eco-node-btn ${index === 0 ? 'active' : ''}" data-node-id="${node.id}" data-index="${index}">
      <div class="eco-node-icon">
        ${getIcon(node.icon)}
      </div>
      <span class="eco-node-title">${node.title}</span>
      <span class="eco-node-metric">${node.metric}</span>
    </button>
  `).join('');

  return `
    <section class="section-padding ecosystem-section" id="ecosystem">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-badge">
            ${getIcon('network_nodes')}
            <span>التكامل والترابط الرقمي</span>
          </div>
          <h2 class="section-title">
            <span>منظومة متكاملة تعمل ككيان واحد</span>
            <span class="text-gradient">(Integrated Ecosystem)</span>
          </h2>
          <p class="section-subtitle">
            نربط جميع الأنظمة الأمنية والذكية في بيئة تشغيلية موحدة لضمان أقصى درجات الأمان والكفاءة وسرعة الاستجابة.
          </p>
        </div>

        <div class="ecosystem-wrapper">
          <!-- Left: Node Visualizer Grid -->
          <div class="ecosystem-visualizer-card">
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--blue-electric); margin-bottom: 1.2rem;">
              اضغط على أي منظومة لاستعراض دورها في التكامل الرقمي:
            </div>
            
            <div class="ecosystem-nodes-grid" id="eco-nodes-grid">
              ${nodesButtonsHtml}
            </div>
          </div>

          <!-- Right: Interactive Detail Display -->
          <div class="ecosystem-detail-card" id="eco-detail-card">
            <div class="eco-detail-badge">
              ${getIcon('sparkles')}
              <span id="eco-detail-badge-text">${initialNode.metric}</span>
            </div>

            <h3 class="eco-detail-title" id="eco-detail-title">${initialNode.title}</h3>
            <div class="eco-detail-role" id="eco-detail-role">${initialNode.role}</div>
            
            <p class="eco-detail-desc" id="eco-detail-desc">
              ${initialNode.description}
            </p>

            <div style="padding-top: 1.2rem; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.85rem; color: var(--text-muted);">حالة الربط والاتصال:</span>
              <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue-electric); display: flex; align-items: center; gap: 0.4rem;">
                <span class="status-dot"></span>
                <span>متصل بالشبكة المركزية</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
