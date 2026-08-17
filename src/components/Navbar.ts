import { getIcon } from '../icons/serviceIcons';
import { NavLinkItem, SiteSettings } from '../types/admin';

export function renderNavbar(navLinks?: NavLinkItem[], settings?: SiteSettings): string {
  const activeLinks = (navLinks || [
    { id: 'nav-1', label: 'الرئيسية', url: '#hero', order: 1, isActive: true },
    { id: 'nav-2', label: 'من نحن', url: '#about', order: 2, isActive: true },
    { id: 'nav-3', label: 'خدماتنا وحلولنا', url: '#services', order: 3, isActive: true },
    { id: 'nav-4', label: 'الحلول المتكاملة', url: '#ecosystem', order: 4, isActive: true },
    { id: 'nav-5', label: 'لماذا نحن', url: '#why-us', order: 5, isActive: true },
    { id: 'nav-6', label: 'القطاعات', url: '#sectors', order: 6, isActive: true },
    { id: 'nav-7', label: 'تواصل معنا', url: '#contact', order: 7, isActive: true }
  ]).filter(l => l.isActive);

  const navItemsHtml = activeLinks.map(link => `
    <li>
      <a href="${link.url}" class="nav-link" data-target="${link.url.replace('#', '')}">
        ${link.label}
      </a>
    </li>
  `).join('');

  const mobileNavItemsHtml = activeLinks.map(link => `
    <a href="${link.url}" class="nav-link mobile-nav-link" data-target="${link.url.replace('#', '')}">
      ${link.label}
    </a>
  `).join('');

  const logoSrc = settings?.logoPath || 'img/LOGO.jpeg';
  const brandName = settings?.companyName || 'أساسات المشاعر المحدودة';
  const brandTag = settings?.companyNameEn || 'ASASAT AL-MASHATER CO.';

  return `
    <header class="navbar" id="navbar">
      <div class="container navbar-container">
        <!-- Logo & Brand Info -->
        <a href="#hero" class="navbar-logo-link" aria-label="الرئيسية - أساسات المشاعر المحدودة">
          <img src="${logoSrc}" alt="شعار شركة أساسات المشاعر المحدودة" class="navbar-logo-img" />
          <div class="navbar-brand-info">
            <span class="navbar-brand-title">${brandName}</span>
            <span class="navbar-brand-tag">${brandTag}</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav aria-label="القائمة الرئيسية">
          <ul class="navbar-nav">
            ${navItemsHtml}
          </ul>
        </nav>

        <!-- CTA & Actions -->
        <div class="navbar-actions">
          <button class="btn-primary" id="open-consult-btn">
            <span>طلب دراسة فنية</span>
            ${getIcon('sparkles')}
          </button>

          <!-- Mobile Toggle Button -->
          <button class="mobile-toggle-btn" id="mobile-toggle-btn" aria-label="فتح القائمة الرئيسية" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Drawer Menu -->
      <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
        ${mobileNavItemsHtml}
        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
          <button class="btn-primary" id="mobile-consult-btn" style="width: 100%;">
            <span>طلب دراسة فنية</span>
            ${getIcon('sparkles')}
          </button>
        </div>
      </div>
    </header>
  `;
}
