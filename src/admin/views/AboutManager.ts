import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderAboutManager(): string {
  const about = CMSStore.getDraft().about;

  const pillarsHtml = about.pillars.map((p, i) => `
    <div style="background: var(--admin-surface-subtle); border: 1px solid var(--admin-border); border-radius: var(--radius-sm); padding: 1.2rem; margin-bottom: 1rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <strong style="color: var(--admin-primary); font-size: 0.95rem;">الركيزة ${i + 1}</strong>
        <span style="font-size: 0.8rem; color: var(--admin-text-muted); font-family: var(--admin-font-latin);">${p.icon}</span>
      </div>
      <div class="form-row-2">
        <div class="admin-form-group">
          <label class="admin-label">عنوان الركيزة</label>
          <input type="text" class="admin-input pillar-title-input" data-index="${i}" value="${p.title}" required />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">أيقونة الركيزة</label>
          <input type="text" class="admin-input pillar-icon-input" data-index="${i}" value="${p.icon}" required />
        </div>
      </div>
      <div class="admin-form-group" style="margin-bottom: 0;">
        <label class="admin-label">وصف الركيزة</label>
        <textarea class="admin-textarea pillar-desc-input" data-index="${i}" style="min-height: 60px;">${p.description}</textarea>
      </div>
    </div>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إدارة قسم من نحن والرسالة المؤسسية</h1>
          <p class="view-subtitle">تعديل النبذة التعريفية، الركائز الهندسية، الصورة، الرؤية، والرسالة</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="save-about-btn">
          ${getIcon('sparkles')}
          <span>حفظ التعديلات كمسودة</span>
        </button>
      </div>

      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2rem;">
        <!-- Left: Details Form -->
        <div class="admin-card">
          <div class="admin-card-header">
            <h3 class="admin-card-title">${getIcon('shield_check')} النبذة والصورة التعريفية</h3>
          </div>

          <form id="about-edit-form">
            <div class="form-row-2">
              <div class="admin-form-group">
                <label class="admin-label">شارة القسم (Section Badge)</label>
                <input type="text" id="about-badge" class="admin-input" value="${about.badge}" required />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">مسار صورة الفريق الهندسي</label>
                <input type="text" id="about-image-path" class="admin-input" value="${about.imagePath}" required />
              </div>
            </div>

            <div class="form-row-2">
              <div class="admin-form-group">
                <label class="admin-label">العنوان الرئيسي</label>
                <input type="text" id="about-title" class="admin-input" value="${about.title}" required />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">العنوان الملون</label>
                <input type="text" id="about-title-highlight" class="admin-input" value="${about.titleHighlight}" required />
              </div>
            </div>

            <div class="admin-form-group">
              <label class="admin-label">النص التمهيدي البارز (Lead Text)</label>
              <textarea id="about-lead" class="admin-textarea" required>${about.leadText}</textarea>
            </div>

            <div class="admin-form-group">
              <label class="admin-label">الوصف الإضافي والمبادئ</label>
              <textarea id="about-subtitle" class="admin-textarea" required>${about.subtitle}</textarea>
            </div>

            <div class="form-row-2">
              <div class="admin-form-group">
                <label class="admin-label">نص الشارة العائمة على الصورة</label>
                <input type="text" id="about-floating-badge" class="admin-input" value="${about.floatingBadgeText}" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">عنوان التراكب السفلي للصورة</label>
                <input type="text" id="about-overlay-title" class="admin-input" value="${about.imageOverlayTitle}" />
              </div>
            </div>

            <div class="form-row-2">
              <div class="admin-form-group">
                <label class="admin-label">الرؤية (Vision)</label>
                <textarea id="about-vision" class="admin-textarea" style="min-height: 70px;">${about.vision || ''}</textarea>
              </div>
              <div class="admin-form-group">
                <label class="admin-label">الرسالة (Mission)</label>
                <textarea id="about-mission" class="admin-textarea" style="min-height: 70px;">${about.mission || ''}</textarea>
              </div>
            </div>
          </form>
        </div>

        <!-- Right: Pillars Manager -->
        <div class="admin-card">
          <div class="admin-card-header">
            <h3 class="admin-card-title">${getIcon('cpu')} الركائز والقيم الأربع</h3>
          </div>

          <div id="about-pillars-container">
            ${pillarsHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initAboutManagerListeners(): void {
  const saveBtn = document.getElementById('save-about-btn');

  saveBtn?.addEventListener('click', () => {
    const badge = (document.getElementById('about-badge') as HTMLInputElement)?.value;
    const imagePath = (document.getElementById('about-image-path') as HTMLInputElement)?.value;
    const title = (document.getElementById('about-title') as HTMLInputElement)?.value;
    const titleHighlight = (document.getElementById('about-title-highlight') as HTMLInputElement)?.value;
    const leadText = (document.getElementById('about-lead') as HTMLTextAreaElement)?.value;
    const subtitle = (document.getElementById('about-subtitle') as HTMLTextAreaElement)?.value;
    const floatingBadgeText = (document.getElementById('about-floating-badge') as HTMLInputElement)?.value;
    const imageOverlayTitle = (document.getElementById('about-overlay-title') as HTMLInputElement)?.value;
    const vision = (document.getElementById('about-vision') as HTMLTextAreaElement)?.value;
    const mission = (document.getElementById('about-mission') as HTMLTextAreaElement)?.value;

    const titleInputs = document.querySelectorAll('.pillar-title-input') as NodeListOf<HTMLInputElement>;
    const iconInputs = document.querySelectorAll('.pillar-icon-input') as NodeListOf<HTMLInputElement>;
    const descInputs = document.querySelectorAll('.pillar-desc-input') as NodeListOf<HTMLTextAreaElement>;

    const pillars = Array.from(titleInputs).map((el, i) => ({
      icon: iconInputs[i]?.value.trim() || 'shield_check',
      title: el.value.trim(),
      description: descInputs[i]?.value.trim() || ''
    }));

    const currentAbout = CMSStore.getDraft().about;
    const updatedAbout = {
      ...currentAbout,
      badge,
      imagePath,
      title,
      titleHighlight,
      leadText,
      subtitle,
      floatingBadgeText,
      imageOverlayTitle,
      vision,
      mission,
      pillars,
      isActive: true
    };

    CMSStore.updateDraft('about', updatedAbout, 'تم تحديث بيانات وركائز قسم من نحن بنجاح');
    showToast('تم حفظ تعديلات قسم من نحن كمسودة بنجاح.');
  });
}
