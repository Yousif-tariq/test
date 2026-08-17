import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showToast } from '../components/Toast';

export function renderHeroManager(): string {
  const hero = CMSStore.getDraft().hero;

  const featuresInputs = hero.features.map((f, i) => `
    <div class="form-row-2" style="margin-bottom: 0.8rem;">
      <input type="text" class="admin-input hero-feat-icon" data-index="${i}" value="${f.icon}" placeholder="اسم الأيقونة (shield_check, network_nodes, etc.)" />
      <input type="text" class="admin-input hero-feat-text" data-index="${i}" value="${f.text}" placeholder="نص الميزة (مثال: أنظمة معتمدة عالمياً)" />
    </div>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إدارة قسم الهيرو (Hero Section)</h1>
          <p class="view-subtitle">تعديل النصوص، العناوين، الفيديو الخلفي، وأزرار الدعوة للإجراء التفاعلية</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="save-hero-btn">
          ${getIcon('sparkles')}
          <span>حفظ التعديلات كمسودة</span>
        </button>
      </div>

      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2rem;">
        <!-- Edit Form -->
        <div class="admin-card">
          <div class="admin-card-header">
            <h3 class="admin-card-title">${getIcon('sparkles')} بيانات ونصوص الهيرو</h3>
          </div>

          <form id="hero-edit-form">
            <div class="admin-form-group">
              <label class="admin-label">نص مؤشر الحالة العلوي (Status Pill)</label>
              <input type="text" id="hero-status-pill" class="admin-input" value="${hero.statusPill}" required />
            </div>

            <div class="form-row-2">
              <div class="admin-form-group">
                <label class="admin-label">اسم الشركة / بادئة العنوان</label>
                <input type="text" id="hero-title-prefix" class="admin-input" value="${hero.titlePrefix}" required />
              </div>

              <div class="admin-form-group">
                <label class="admin-label">العنوان الرئيسي الملوّن</label>
                <input type="text" id="hero-title-highlight" class="admin-input" value="${hero.titleHighlight}" required />
              </div>
            </div>

            <div class="admin-form-group">
              <label class="admin-label">الوصف التمهيدي</label>
              <textarea id="hero-desc" class="admin-textarea" required>${hero.description}</textarea>
            </div>

            <div class="form-row-2">
              <div class="admin-form-group">
                <label class="admin-label">مسار فيديو الخلفية</label>
                <input type="text" id="hero-video-path" class="admin-input" value="${hero.videoPath}" />
              </div>

              <div class="admin-form-group">
                <label class="admin-label">صورة الغلاف البديلة (Poster Image)</label>
                <input type="text" id="hero-poster-path" class="admin-input" value="${hero.posterPath}" />
              </div>
            </div>

            <div class="form-row-2">
              <div class="admin-form-group">
                <label class="admin-label">نص الزر الرئيسي</label>
                <input type="text" id="hero-btn1-text" class="admin-input" value="${hero.primaryBtnText}" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">رابط الزر الرئيسي</label>
                <input type="text" id="hero-btn1-url" class="admin-input" value="${hero.primaryBtnUrl}" />
              </div>
            </div>

            <div class="form-row-2">
              <div class="admin-form-group">
                <label class="admin-label">نص الزر الثانوي</label>
                <input type="text" id="hero-btn2-text" class="admin-input" value="${hero.secondaryBtnText}" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">رابط الزر الثانوي</label>
                <input type="text" id="hero-btn2-url" class="admin-input" value="${hero.secondaryBtnUrl}" />
              </div>
            </div>

            <div class="admin-form-group" style="margin-top: 1.5rem;">
              <label class="admin-label">شريط المميزات السريعة (4 مميزات)</label>
              ${featuresInputs}
            </div>
          </form>
        </div>

        <!-- Live Preview Card -->
        <div class="admin-card" style="position: sticky; top: calc(var(--topbar-height) + 1.5rem); align-self: flex-start;">
          <div class="admin-card-header">
            <h3 class="admin-card-title">${getIcon('layers')} معاينة مباشرة مصغرة</h3>
          </div>

          <div style="background: #ffffff; border: 1px solid var(--admin-border); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--admin-shadow-sm);">
            <div style="font-size: 0.72rem; padding: 0.2rem 0.6rem; border-radius: 99px; background: rgba(0, 102, 255, 0.08); color: var(--admin-primary); display: inline-block; margin-bottom: 0.8rem; font-weight: 700;" id="prev-hero-pill">
              ${hero.statusPill}
            </div>

            <h3 style="font-size: 1.3rem; font-weight: 900; line-height: 1.3; margin-bottom: 0.6rem; color: #0f172a;" id="prev-hero-title">
              ${hero.titlePrefix} <span style="color: #0066ff;">${hero.titleHighlight}</span>
            </h3>

            <p style="font-size: 0.85rem; color: #475569; line-height: 1.6; margin-bottom: 1rem;" id="prev-hero-desc">
              ${hero.description}
            </p>

            <div style="display: flex; gap: 0.5rem;">
              <button class="admin-btn admin-btn-primary" style="font-size: 0.75rem; padding: 0.4rem 0.8rem;" id="prev-hero-btn1">${hero.primaryBtnText}</button>
              <button class="admin-btn admin-btn-secondary" style="font-size: 0.75rem; padding: 0.4rem 0.8rem;" id="prev-hero-btn2">${hero.secondaryBtnText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initHeroManagerListeners(): void {
  const saveBtn = document.getElementById('save-hero-btn');

  saveBtn?.addEventListener('click', () => {
    const pill = (document.getElementById('hero-status-pill') as HTMLInputElement)?.value;
    const prefix = (document.getElementById('hero-title-prefix') as HTMLInputElement)?.value;
    const highlight = (document.getElementById('hero-title-highlight') as HTMLInputElement)?.value;
    const desc = (document.getElementById('hero-desc') as HTMLTextAreaElement)?.value;
    const video = (document.getElementById('hero-video-path') as HTMLInputElement)?.value;
    const poster = (document.getElementById('hero-poster-path') as HTMLInputElement)?.value;
    const b1Text = (document.getElementById('hero-btn1-text') as HTMLInputElement)?.value;
    const b1Url = (document.getElementById('hero-btn1-url') as HTMLInputElement)?.value;
    const b2Text = (document.getElementById('hero-btn2-text') as HTMLInputElement)?.value;
    const b2Url = (document.getElementById('hero-btn2-url') as HTMLInputElement)?.value;

    const featIconEls = document.querySelectorAll('.hero-feat-icon') as NodeListOf<HTMLInputElement>;
    const featTextEls = document.querySelectorAll('.hero-feat-text') as NodeListOf<HTMLInputElement>;

    const features = Array.from(featIconEls).map((el, idx) => ({
      icon: el.value.trim() || 'shield_check',
      text: featTextEls[idx]?.value.trim() || 'ميزة هندسية'
    }));

    const updatedHero = {
      statusPill: pill,
      titlePrefix: prefix,
      titleHighlight: highlight,
      description: desc,
      videoPath: video,
      posterPath: poster,
      primaryBtnText: b1Text,
      primaryBtnUrl: b1Url,
      secondaryBtnText: b2Text,
      secondaryBtnUrl: b2Url,
      features,
      isActive: true
    };

    CMSStore.updateDraft('hero', updatedHero, 'تم تحديث نصوص وعناصر قسم الهيرو بنجاح');
    showToast('تم حفظ تعديلات قسم الهيرو كمسودة بنجاح.');
  });
}
