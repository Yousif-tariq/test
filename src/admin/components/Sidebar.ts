import { getIcon } from '../../icons/serviceIcons';
import { AuthService } from '../../services/authService';

export interface NavRoute {
  id: string;
  label: string;
  icon: string;
  badge?: string;
}

export function renderSidebar(currentRoute: string): string {
  const user = AuthService.getCurrentUser();
  const userName = user ? user.name : 'مسؤول النظام';
  const userRole = user ? user.roleTitle : 'مدير عام';
  const initialLetter = userName.charAt(0) || 'م';

  const menuSections = [
    {
      title: 'نظرة عامة',
      routes: [
        { id: 'dashboard', label: 'لوحة التحكم الرئيسية', icon: 'layers' }
      ]
    },
    {
      title: 'إدارة محتوى الموقع',
      routes: [
        { id: 'hero', label: 'قسم الهيرو (Hero)', icon: 'sparkles' },
        { id: 'about', label: 'من نحن والرسالة', icon: 'shield_check' },
        { id: 'services', label: 'إدارة الخدمات (10)', icon: 'cpu', badge: '10' },
        { id: 'solutions', label: 'خريطة الأنظمة (Ecosystem)', icon: 'network_nodes' },
        { id: 'why-us', label: 'لماذا أساسات المشاعر', icon: 'sparkles' },
        { id: 'sectors', label: 'القطاعات والتطبيقات', icon: 'layers' },
        { id: 'stats', label: 'المؤشرات الهندسية', icon: 'shield_check' },
        { id: 'cta', label: 'قسم الدعوة للتواصل (CTA)', icon: 'phone' },
        { id: 'contact', label: 'معلومات الاتصال والمقر', icon: 'location' },
        { id: 'navigation', label: 'القائمة العلوية (Navbar)', icon: 'layers' },
        { id: 'footer', label: 'إدارة الفوتر والحقوق', icon: 'shield_check' }
      ]
    },
    {
      title: 'الوسائط والأصول',
      routes: [
        { id: 'media', label: 'مكتبة الوسائط والملفات', icon: 'layers', badge: 'Assets' },
        { id: 'icons', label: 'مدير الأيقونات والـ CSV', icon: 'cpu' }
      ]
    },
    {
      title: 'النظام والتحكم',
      routes: [
        { id: 'settings', label: 'إعدادات الموقع و SEO', icon: 'layers' },
        { id: 'users', label: 'المستخدمون والصلاحيات', icon: 'shield_check' },
        { id: 'activity', label: 'سجل النشاطات الحي', icon: 'sparkles' },
        { id: 'revisions', label: 'النسخ السابقة والمراجعات', icon: 'cpu' }
      ]
    }
  ];

  let menuHtml = '';
  menuSections.forEach(section => {
    menuHtml += `<div class="sidebar-section-title">${section.title}</div>`;
    section.routes.forEach(r => {
      const isActive = currentRoute === r.id;
      menuHtml += `
        <a class="sidebar-nav-item ${isActive ? 'active' : ''}" data-route="${r.id}" href="#${r.id}">
          <span class="sidebar-nav-icon">${getIcon(r.icon)}</span>
          <span style="flex: 1;">${r.label}</span>
          ${r.badge ? `<span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; border-radius: var(--radius-full); background: ${isActive ? 'var(--admin-primary)' : 'var(--admin-surface-hover)'}; color: ${isActive ? '#fff' : 'var(--admin-text-muted)'}; font-weight: 700;">${r.badge}</span>` : ''}
        </a>
      `;
    });
  });

  return `
    <aside class="admin-sidebar" id="admin-sidebar">
      <div class="sidebar-header">
        <img src="img/LOGO.jpeg" alt="شعار أساسات المشاعر" class="sidebar-logo" />
        <div style="display: flex; flex-direction: column;">
          <span class="sidebar-brand-name">لوحة التحكم CMS</span>
          <span style="font-size: 0.72rem; color: var(--admin-primary); font-weight: 700; font-family: var(--admin-font-latin);">ASASAT CMS v2.0</span>
        </div>
      </div>

      <div class="sidebar-nav-container">
        ${menuHtml}
      </div>

      <div class="sidebar-footer">
        <div class="sidebar-user-card">
          <div class="sidebar-user-avatar">${initialLetter}</div>
          <div class="sidebar-user-info">
            <span class="sidebar-user-name">${userName}</span>
            <span class="sidebar-user-role">${userRole}</span>
          </div>
        </div>

        <button class="action-icon-btn danger" id="admin-logout-btn" title="تسجيل الخروج">
          ${getIcon('close')}
        </button>
      </div>
    </aside>
  `;
}
