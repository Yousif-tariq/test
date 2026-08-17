import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderSolutionsManager(): string {
  const nodes = CMSStore.getDraft().solutions;

  const nodesHtml = nodes.map((node, i) => `
    <div style="background: var(--admin-surface-subtle); border: 1px solid var(--admin-border); border-radius: var(--radius-sm); padding: 1.2rem; margin-bottom: 1.2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <strong style="color: var(--admin-primary); font-size: 0.95rem;">عقدة النظام #${i + 1}: ${node.title}</strong>
        <span style="font-size: 0.78rem; padding: 0.2rem 0.6rem; border-radius: 99px; background: rgba(0, 102, 255, 0.08); color: var(--admin-primary); font-weight: 700; font-family: var(--admin-font-latin);">${node.metric}</span>
      </div>

      <div class="form-row-3">
        <div class="admin-form-group">
          <label class="admin-label">اسم المنظومة</label>
          <input type="text" class="admin-input eco-title-input" data-index="${i}" value="${node.title}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">الدور الوظيفي / الاختصاص</label>
          <input type="text" class="admin-input eco-role-input" data-index="${i}" value="${node.role}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">مؤشر الأداء / القياس</label>
          <input type="text" class="admin-input eco-metric-input" data-index="${i}" value="${node.metric}" required />
        </div>
      </div>

      <div class="form-row-2">
        <div class="admin-form-group">
          <label class="admin-label">اسم الأيقونة</label>
          <input type="text" class="admin-input eco-icon-input" data-index="${i}" value="${node.icon}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">الأنظمة المرتبطة بها (مفصولة بفواصل)</label>
          <input type="text" class="admin-input eco-conn-input" data-index="${i}" value="${node.connectedTo.join(', ')}" />
        </div>
      </div>

      <div class="admin-form-group" style="margin-bottom: 0;">
        <label class="admin-label">الوصف التقني للتكامل</label>
        <textarea class="admin-textarea eco-desc-input" data-index="${i}" style="min-height: 60px;">${node.description}</textarea>
      </div>
    </div>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إدارة خريطة الأنظمة المتكاملة (Technology Ecosystem)</h1>
          <p class="view-subtitle">تعديل العقد البرمجية، الروابط بين الأنظمة الأمنية والذكية، ومؤشرات التكامل</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="save-solutions-btn">
          ${getIcon('sparkles')}
          <span>حفظ التعديلات كمسودة</span>
        </button>
      </div>

      <div class="admin-card">
        <div class="admin-card-header">
          <h3 class="admin-card-title">${getIcon('network_nodes')} عقد الأنظمة الذكية (${nodes.length} أنظمة)</h3>
        </div>

        <div id="solutions-nodes-container">
          ${nodesHtml}
        </div>
      </div>
    </div>
  `;
}

export function initSolutionsManagerListeners(): void {
  const saveBtn = document.getElementById('save-solutions-btn');

  saveBtn?.addEventListener('click', () => {
    const titles = document.querySelectorAll('.eco-title-input') as NodeListOf<HTMLInputElement>;
    const roles = document.querySelectorAll('.eco-role-input') as NodeListOf<HTMLInputElement>;
    const metrics = document.querySelectorAll('.eco-metric-input') as NodeListOf<HTMLInputElement>;
    const icons = document.querySelectorAll('.eco-icon-input') as NodeListOf<HTMLInputElement>;
    const conns = document.querySelectorAll('.eco-conn-input') as NodeListOf<HTMLInputElement>;
    const descs = document.querySelectorAll('.eco-desc-input') as NodeListOf<HTMLTextAreaElement>;

    const currentNodes = CMSStore.getDraft().solutions;
    const updatedNodes = Array.from(titles).map((el, idx) => ({
      id: currentNodes[idx]?.id || `node-${idx + 1}`,
      title: el.value.trim(),
      role: roles[idx]?.value.trim() || '',
      metric: metrics[idx]?.value.trim() || '',
      icon: icons[idx]?.value.trim() || 'cpu',
      connectedTo: (conns[idx]?.value || '').split(',').map(s => s.trim()).filter(Boolean),
      description: descs[idx]?.value.trim() || ''
    }));

    CMSStore.updateDraft('solutions', updatedNodes, 'تم تحديث عقد وبيانات خريطة الأنظمة المتكاملة');
    showToast('تم حفظ تعديلات خريطة الأنظمة بنجاح.');
  });
}
