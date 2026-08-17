import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';

export function openSearchModal(onSelectRoute: (route: string) => void): void {
  const existing = document.getElementById('admin-search-modal');
  if (existing) existing.remove();

  const backdrop = document.createElement('div');
  backdrop.id = 'admin-search-modal';
  backdrop.className = 'admin-modal-backdrop active';

  backdrop.innerHTML = `
    <div class="admin-modal-box" style="max-width: 600px; padding: 1.5rem;">
      <div style="display: flex; align-items: center; gap: 0.8rem; border-bottom: 1px solid var(--admin-border); padding-bottom: 1rem; margin-bottom: 1rem;">
        <span style="color: var(--admin-primary);">${getIcon('sparkles')}</span>
        <input type="text" id="admin-global-search-input" placeholder="ابحث عن خدمة، صورة، قسم، إعداد، أو مستخدم..." style="flex: 1; border: none; outline: none; font-size: 1.1rem; font-family: var(--admin-font); background: transparent; color: var(--admin-text-main);" autofocus />
        <button class="action-icon-btn" id="search-modal-close">${getIcon('close')}</button>
      </div>

      <div id="search-results-list" style="max-height: 360px; overflow-y: auto; display: flex; flex-direction: column; gap: 0.5rem;">
        <div style="padding: 1.5rem; text-align: center; color: var(--admin-text-muted); font-size: 0.9rem;">
          اكتب كلمة البحث للوصول الفوري لأي عنصر في لوحة التحكم...
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  const input = document.getElementById('admin-global-search-input') as HTMLInputElement;
  const resultsContainer = document.getElementById('search-results-list');
  const closeBtn = document.getElementById('search-modal-close');

  const close = () => backdrop.remove();

  closeBtn?.addEventListener('click', close);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  const draft = CMSStore.getDraft();

  const searchItems = [
    ...draft.services.map(s => ({ title: s.title, subtitle: `خدمة رقم ${s.number} • ${s.category}`, route: 'services', type: 'خدمة' })),
    ...draft.sectors.map(s => ({ title: s.title, subtitle: s.subtitle, route: 'sectors', type: 'قطاع' })),
    ...draft.whyUs.map(w => ({ title: w.title, subtitle: w.subtitle, route: 'why-us', type: 'ميزة' })),
    ...draft.solutions.map(n => ({ title: n.title, subtitle: n.role, route: 'solutions', type: 'منظومة' })),
    ...draft.media.map(m => ({ title: m.name, subtitle: `${m.dimensions || m.type} • ${m.sizeKB} KB`, route: 'media', type: 'وسائط' })),
    { title: 'إعدادات قسم الهيرو (Hero Section)', subtitle: 'تعديل العنوان، الفيديو، والأزرار', route: 'hero', type: 'قسم' },
    { title: 'إدارة قسم من نحن (About Us)', subtitle: 'نبذة عن الشركة، الرؤية، والركائز', route: 'about', type: 'قسم' },
    { title: 'إعدادات الموقع و SEO', subtitle: 'اسم الموقع، الألوان، والكلمات المفتاحية', route: 'settings', type: 'إعدادات' },
    { title: 'بيانات التواصل والمقر', subtitle: 'الهاتف، البريد، وموقع المقر', route: 'contact', type: 'تواصل' },
    { title: 'إدارة المستخدمين والرتب', subtitle: 'الصلاحيات، الجلسات، والحسابات', route: 'users', type: 'مستخدمون' }
  ];

  input?.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!resultsContainer) return;

    if (!q) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--admin-text-muted); font-size: 0.9rem;">
          اكتب كلمة البحث للوصول الفوري لأي عنصر في لوحة التحكم...
        </div>
      `;
      return;
    }

    const filtered = searchItems.filter(item => 
      item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q) || item.type.toLowerCase().includes(q)
    );

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--admin-text-muted); font-size: 0.9rem;">
          لم يتم العثور على نتائج مطابقة لـ "${input.value}".
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = filtered.map(item => `
      <div class="search-result-item" data-route="${item.route}" style="padding: 0.8rem 1rem; border-radius: var(--radius-sm); background: var(--admin-surface-subtle); display: flex; align-items: center; justify-content: space-between; cursor: pointer; transition: all 0.2s ease;">
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: var(--admin-text-main);">${item.title}</div>
          <div style="font-size: 0.8rem; color: var(--admin-text-muted);">${item.subtitle}</div>
        </div>
        <span style="font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); background: var(--admin-primary-soft); color: var(--admin-primary);">${item.type}</span>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const r = el.getAttribute('data-route');
        if (r) {
          close();
          onSelectRoute(r);
        }
      });
    });
  });
}
