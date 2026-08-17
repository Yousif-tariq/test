import { AuthService } from '../services/authService';
import { CMSStore } from '../services/cmsStore';
import { renderSidebar } from './components/Sidebar';
import { renderTopbar } from './components/Topbar';
import { showToast } from './components/Toast';
import { showConfirmModal } from './components/ConfirmModal';
import { openSearchModal } from './components/SearchModal';

// Views
import { renderLoginView, initLoginViewListeners } from './views/LoginView';
import { renderDashboardView } from './views/DashboardView';
import { renderHeroManager, initHeroManagerListeners } from './views/HeroManager';
import { renderAboutManager, initAboutManagerListeners } from './views/AboutManager';
import { renderServicesManager, initServicesManagerListeners } from './views/ServicesManager';
import { renderSolutionsManager, initSolutionsManagerListeners } from './views/SolutionsManager';
import { renderWhyUsManager, initWhyUsManagerListeners } from './views/WhyUsManager';
import { renderSectorsManager, initSectorsManagerListeners } from './views/SectorsManager';
import { renderStatsManager, initStatsManagerListeners } from './views/StatsManager';
import { renderCTAManager, initCTAManagerListeners } from './views/CTAManager';
import { renderContactManager, initContactManagerListeners } from './views/ContactManager';
import { renderNavigationManager, initNavigationManagerListeners } from './views/NavigationManager';
import { renderFooterManager, initFooterManagerListeners } from './views/FooterManager';
import { renderMediaLibrary, initMediaLibraryListeners } from './views/MediaLibrary';
import { renderIconsManager, initIconsManagerListeners } from './views/IconsManager';
import { renderSettingsManager, initSettingsManagerListeners } from './views/SettingsManager';
import { renderUsersManager, initUsersManagerListeners } from './views/UsersManager';
import { renderActivityLogsView } from './views/ActivityLogsView';
import { renderRevisionsView, initRevisionsViewListeners } from './views/RevisionsView';

class AdminApp {
  private static rootEl: HTMLElement | null = null;

  public static async init(): Promise<void> {
    AuthService.init();
    CMSStore.init();

    this.rootEl = document.getElementById('admin-app');
    if (!this.rootEl) {
      this.rootEl = document.createElement('div');
      this.rootEl.id = 'admin-app';
      document.body.appendChild(this.rootEl);
    }

    // Validate active session with server
    if (AuthService.isAuthenticated()) {
      await AuthService.validateSession();
      await CMSStore.syncWithServer();
    }

    window.addEventListener('hashchange', () => this.render());
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal((route) => {
          window.location.hash = `#${route}`;
        });
      }
    });

    CMSStore.subscribe(() => {
      // Re-render topbar to reflect draft/publish status updates
      const topbarEl = document.querySelector('.admin-topbar');
      if (topbarEl && AuthService.isAuthenticated()) {
        topbarEl.outerHTML = renderTopbar();
        this.wireTopbarListeners();
      }
    });

    this.render();
  }

  public static render(): void {
    if (!this.rootEl) return;

    if (!AuthService.isAuthenticated()) {
      this.rootEl.innerHTML = renderLoginView();
      initLoginViewListeners(async () => {
        await CMSStore.syncWithServer();
        window.location.hash = '#dashboard';
        this.render();
      });
      return;
    }

    const currentHash = window.location.hash.replace(/^#/, '') || 'dashboard';
    const validRoutes = [
      'dashboard', 'hero', 'about', 'services', 'solutions', 'why-us',
      'sectors', 'stats', 'cta', 'contact', 'navigation', 'footer',
      'media', 'icons', 'settings', 'users', 'activity', 'revisions'
    ];

    const currentRoute = validRoutes.includes(currentHash) ? currentHash : 'dashboard';

    let viewContentHtml = '';
    switch (currentRoute) {
      case 'dashboard':
        viewContentHtml = renderDashboardView();
        break;
      case 'hero':
        viewContentHtml = renderHeroManager();
        break;
      case 'about':
        viewContentHtml = renderAboutManager();
        break;
      case 'services':
        viewContentHtml = renderServicesManager();
        break;
      case 'solutions':
        viewContentHtml = renderSolutionsManager();
        break;
      case 'why-us':
        viewContentHtml = renderWhyUsManager();
        break;
      case 'sectors':
        viewContentHtml = renderSectorsManager();
        break;
      case 'stats':
        viewContentHtml = renderStatsManager();
        break;
      case 'cta':
        viewContentHtml = renderCTAManager();
        break;
      case 'contact':
        viewContentHtml = renderContactManager();
        break;
      case 'navigation':
        viewContentHtml = renderNavigationManager();
        break;
      case 'footer':
        viewContentHtml = renderFooterManager();
        break;
      case 'media':
        viewContentHtml = renderMediaLibrary();
        break;
      case 'icons':
        viewContentHtml = renderIconsManager();
        break;
      case 'settings':
        viewContentHtml = renderSettingsManager();
        break;
      case 'users':
        viewContentHtml = renderUsersManager();
        break;
      case 'activity':
        viewContentHtml = renderActivityLogsView();
        break;
      case 'revisions':
        viewContentHtml = renderRevisionsView();
        break;
    }

    this.rootEl.innerHTML = `
      <div class="admin-layout">
        ${renderSidebar(currentRoute)}
        <div class="admin-main-wrapper">
          ${renderTopbar()}
          <main id="admin-view-mount">
            ${viewContentHtml}
          </main>
        </div>
      </div>
    `;

    this.wireSidebarListeners();
    this.wireTopbarListeners();
    this.initCurrentViewListeners(currentRoute);
  }

  private static wireSidebarListeners(): void {
    const logoutBtn = document.getElementById('admin-logout-btn');
    logoutBtn?.addEventListener('click', () => {
      showConfirmModal(
        'تسجيل الخروج',
        'هل أنت متأكد من رغبتك في تسجيل الخروج من لوحة التحكم؟',
        async () => {
          await AuthService.logout();
          showToast('تم تسجيل الخروج بنجاح.');
          this.render();
        }
      );
    });

    const mobileToggle = document.getElementById('admin-mobile-toggle');
    const sidebar = document.getElementById('admin-sidebar');
    mobileToggle?.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
    });
  }

  private static wireTopbarListeners(): void {
    const searchBtn = document.getElementById('topbar-search-trigger');
    searchBtn?.addEventListener('click', () => {
      openSearchModal((route) => {
        window.location.hash = `#${route}`;
      });
    });

    const previewBtn = document.getElementById('admin-preview-btn');
    previewBtn?.addEventListener('click', () => {
      window.open('index.html?preview=true', '_blank');
    });

    const discardBtn = document.getElementById('admin-discard-btn');
    discardBtn?.addEventListener('click', () => {
      showConfirmModal(
        'التراجع عن المسودة',
        'هل أنت متأكد من رغبتك في إلغاء كافة التعديلات غير المنشورة والعودة للنسخة المنشورة حالياً؟',
        async () => {
          await CMSStore.discardDraft();
          showToast('تم التراجع عن المسودة بنجاح.');
          this.render();
        }
      );
    });

    const publishBtn = document.getElementById('admin-publish-btn');
    publishBtn?.addEventListener('click', () => {
      showConfirmModal(
        'نشر التغييرات على الموقع العام',
        'سيتم تطبيق كافة التعديلات المحفوظة في المسودة مباشرة وحفظها في قاعدة البيانات ونقلها لجميع الزوار فوراً.',
        async () => {
          const res = await CMSStore.publish();
          if (res.success) {
            showToast(`تم نشر التغييرات بنجاح بالنسخة (${res.version})!`);
            this.render();
          } else {
            showToast(res.message || 'حدث خطأ أثناء النشر', 'error');
          }
        }
      );
    });

    const themeToggle = document.getElementById('admin-theme-toggle');
    themeToggle?.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      showToast('تم تبديل المظهر.');
    });
  }

  private static initCurrentViewListeners(route: string): void {
    const refresh = () => this.render();

    switch (route) {
      case 'hero':
        initHeroManagerListeners();
        break;
      case 'about':
        initAboutManagerListeners();
        break;
      case 'services':
        initServicesManagerListeners(refresh);
        break;
      case 'solutions':
        initSolutionsManagerListeners();
        break;
      case 'why-us':
        initWhyUsManagerListeners();
        break;
      case 'sectors':
        initSectorsManagerListeners();
        break;
      case 'stats':
        initStatsManagerListeners();
        break;
      case 'cta':
        initCTAManagerListeners();
        break;
      case 'contact':
        initContactManagerListeners();
        break;
      case 'navigation':
        initNavigationManagerListeners();
        break;
      case 'footer':
        initFooterManagerListeners();
        break;
      case 'media':
        initMediaLibraryListeners(refresh);
        break;
      case 'icons':
        initIconsManagerListeners();
        break;
      case 'settings':
        initSettingsManagerListeners();
        break;
      case 'users':
        initUsersManagerListeners(refresh);
        break;
      case 'revisions':
        initRevisionsViewListeners(refresh);
        break;
    }
  }
}

// Bootstrap on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => AdminApp.init());
} else {
  AdminApp.init();
}
