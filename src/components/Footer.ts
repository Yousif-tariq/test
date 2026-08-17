import { getIcon } from '../icons/serviceIcons';
import { FooterContent, ContactContent, NavLinkItem } from '../types/admin';
import { companyData } from '../data/staticData';

export function renderFooter(
  footerData?: FooterContent,
  contactData?: ContactContent,
  navLinks?: NavLinkItem[]
): string {
  const footer = footerData || {
    logoPath: 'img/LOGO.jpeg',
    brandName: companyData.name,
    brandNameEn: companyData.nameEn,
    brandDesc: companyData.subtitle,
    copyrightText: `© 2026 ${companyData.name} — جميع الحقوق محفوظة`,
    featuredServices: [
      'أنظمة الأمان والمراقبة',
      'التحكم بالدخول والخروج',
      'أنظمة إنذار الحريق',
      'البنية التحتية للشبكات',
      'إدارة المباني BMS',
      'المنازل الذكية والصوتيات'
    ],
    isActive: true
  };

  const contact = contactData || {
    phone: 'استشارات المشاريع والحلول المتكاملة',
    email: 'info@asasat.sa',
    address: 'المملكة العربية السعودية',
    workingHours: 'على مدار الساعة 24/7 للدعم الفني',
    socialLinks: {},
    isActive: true
  };

  const links = (navLinks || [
    { id: 'nav-1', label: 'الرئيسية', url: '#hero', order: 1, isActive: true },
    { id: 'nav-2', label: 'من نحن', url: '#about', order: 2, isActive: true },
    { id: 'nav-3', label: 'خدماتنا وحلولنا', url: '#services', order: 3, isActive: true },
    { id: 'nav-4', label: 'الحلول المتكاملة', url: '#ecosystem', order: 4, isActive: true },
    { id: 'nav-5', label: 'لماذا نحن', url: '#why-us', order: 5, isActive: true },
    { id: 'nav-6', label: 'القطاعات', url: '#sectors', order: 6, isActive: true },
    { id: 'nav-7', label: 'تواصل معنا', url: '#contact', order: 7, isActive: true }
  ]).filter(l => l.isActive);

  const navLinksHtml = links.map(l => `
    <li><a href="${l.url}">${l.label}</a></li>
  `).join('');

  const servicesLinksHtml = footer.featuredServices.map(s => `
    <li><a href="#services">${s}</a></li>
  `).join('');

  return `
    <footer class="footer">
      <div class="container">
        <!-- Top 4 Columns Grid -->
        <div class="footer-top-grid">
          <!-- Column 1: Brand -->
          <div class="footer-brand-col">
            <img src="${footer.logoPath}" alt="شعار ${footer.brandName}" class="footer-logo" loading="lazy" />
            <p class="footer-brand-desc">
              ${footer.brandDesc}
            </p>
            <div style="margin-top: 0.5rem;">
              <button class="btn-primary" id="footer-consult-btn" style="padding: 0.6rem 1.4rem; font-size: 0.85rem;">
                <span>طلب دراسة فنية</span>
                ${getIcon('sparkles')}
              </button>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h4 class="footer-col-title">روابط سريعة</h4>
            <ul class="footer-links-list">
              ${navLinksHtml}
            </ul>
          </div>

          <!-- Column 3: Featured Systems -->
          <div>
            <h4 class="footer-col-title">الأنظمة والحلول</h4>
            <ul class="footer-links-list">
              ${servicesLinksHtml}
            </ul>
          </div>

          <!-- Column 4: Contact & Location -->
          <div>
            <h4 class="footer-col-title">المقر والتواصل</h4>
            <div class="footer-contact-item">
              ${getIcon('location')}
              <span>${contact.address}</span>
            </div>
            <div class="footer-contact-item">
              ${getIcon('phone')}
              <span>${contact.phone}</span>
            </div>
            <div class="footer-contact-item">
              ${getIcon('mail')}
              <span>${contact.email}</span>
            </div>
            <div class="footer-contact-item">
              ${getIcon('shield_check')}
              <span>${contact.workingHours}</span>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright -->
        <div class="footer-bottom">
          <div>
            ${footer.copyrightText}
          </div>
          <div style="display: flex; align-items: center; gap: 1.5rem;">
            <span>حلول هندسية وتقنية متقدمة</span>
            <a href="admin.html" style="font-size: 0.8rem; font-weight: 700; color: var(--blue-electric); opacity: 0.85; text-decoration: underline;" target="_blank">
              لوحة التحكم Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
