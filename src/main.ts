import { renderNavbar } from './components/Navbar';
import { renderHero } from './components/Hero';
import { renderStats } from './components/Stats';
import { renderAbout } from './components/About';
import { renderServices } from './components/Services';
import { renderEcosystem } from './components/Ecosystem';
import { renderWhyUs } from './components/WhyUs';
import { renderSectors } from './components/Sectors';
import { renderCTA } from './components/CTA';
import { renderFooter } from './components/Footer';
import { renderServiceModal, openServiceModal, closeServiceModal } from './components/ServiceModal';
import { renderConsultationModal, openConsultationModal, closeConsultationModal } from './components/ConsultationModal';
import { ServiceItem } from './types';
import { CMSStore } from './services/cmsStore';

class App {
  private static root: HTMLElement | null = null;
  private static currentServices: ServiceItem[] = [];
  private static isPreviewMode = false;

  public static init(): void {
    CMSStore.init();

    this.root = document.getElementById('app');
    if (!this.root) {
      console.error('Root #app element not found');
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    this.isPreviewMode = urlParams.get('preview') === 'true';

    this.loadAndRender();

    // Listen to storage/CMSStore changes
    CMSStore.subscribe(() => {
      this.loadAndRender();
    });
  }

  private static loadAndRender(): void {
    const data = this.isPreviewMode ? CMSStore.getDraft() : CMSStore.getPublished();
    this.currentServices = data.services;

    const previewBarHtml = this.isPreviewMode ? `
      <div id="preview-mode-bar" style="position: fixed; top: 0; left: 0; right: 0; z-index: 99999; background: #0f172a; color: #ffffff; padding: 0.6rem 1.5rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 20px rgba(0,0,0,0.3); font-family: var(--font-arabic);">
        <div style="display: flex; align-items: center; gap: 0.8rem;">
          <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; animation: pulseGlow 1.5s infinite;"></span>
          <strong style="font-size: 0.92rem;">أنت الآن في وضع المعاينة المباشرة (مسودة غير منشورة)</strong>
        </div>
        <div style="display: flex; gap: 0.8rem; align-items: center;">
          <a href="admin.html" style="background: #ffffff; color: #0f172a; font-weight: 700; font-size: 0.82rem; padding: 0.35rem 0.9rem; border-radius: 99px; text-decoration: none;">
            العودة للوحة التحكم
          </a>
          <button id="preview-publish-btn" style="background: #0066ff; color: #ffffff; font-weight: 700; font-size: 0.82rem; padding: 0.35rem 0.9rem; border-radius: 99px; border: none; cursor: pointer;">
            نشر التغييرات الآن
          </button>
        </div>
      </div>
    ` : '';

    this.root!.innerHTML = `
      ${previewBarHtml}
      ${renderNavbar(data.navigation, data.settings)}
      <main>
        ${renderHero(data.hero)}
        ${renderStats(data.stats)}
        ${renderAbout(data.about)}
        ${renderServices(data.services)}
        ${renderEcosystem(data.solutions)}
        ${renderWhyUs(data.whyUs)}
        ${renderSectors(data.sectors)}
        ${renderCTA(data.cta)}
      </main>
      ${renderFooter(data.footer, data.contact, data.navigation)}
      ${renderServiceModal()}
      ${renderConsultationModal()}
    `;

    if (this.isPreviewMode) {
      const navEl = document.getElementById('navbar');
      if (navEl) navEl.style.top = '42px';
      
      const pubBtn = document.getElementById('preview-publish-btn');
      pubBtn?.addEventListener('click', () => {
        const res = CMSStore.publish('نشر التعديلات من شريط المعاينة المباشرة');
        if (res.success) {
          alert(`تم نشر التغييرات بنجاح بالنسخة (${res.version})!`);
          window.location.href = 'index.html';
        }
      });
    }

    this.wireEvents(data);
    this.initScrollReveal();
  }

  private static wireEvents(data: any): void {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });

    // 2. Mobile Drawer Toggle
    const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    mobileToggleBtn?.addEventListener('click', () => {
      const isOpen = mobileDrawer?.classList.toggle('open');
      mobileToggleBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // 3. Smooth Scroll Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          mobileDrawer?.classList.remove('open');
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // 4. Service Card Click -> Open Detail Modal
    document.querySelectorAll('.service-card').forEach(card => {
      const clickHandler = () => {
        const serviceId = card.getAttribute('data-service-id');
        const service = this.currentServices.find(s => s.id === serviceId);
        if (service) {
          openServiceModal(service);
        }
      };

      card.addEventListener('click', clickHandler);
      card.addEventListener('keydown', (e: Event) => {
        const keyEvent = e as KeyboardEvent;
        if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
          e.preventDefault();
          clickHandler();
        }
      });
    });

    // 5. Service Modal Close Handlers
    document.getElementById('service-modal-close-btn')?.addEventListener('click', closeServiceModal);
    document.getElementById('modal-close-action-btn')?.addEventListener('click', closeServiceModal);
    document.getElementById('service-modal-backdrop')?.addEventListener('click', (e) => {
      if (e.target === document.getElementById('service-modal-backdrop')) {
        closeServiceModal();
      }
    });

    // 6. Consultation Modal Triggers
    const openConsultHandler = (serviceName?: string) => {
      closeServiceModal();
      openConsultationModal(serviceName);
    };

    document.getElementById('open-consult-btn')?.addEventListener('click', () => openConsultHandler());
    document.getElementById('mobile-consult-btn')?.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
      openConsultHandler();
    });
    document.getElementById('cta-consult-btn')?.addEventListener('click', () => openConsultHandler());
    document.getElementById('footer-consult-btn')?.addEventListener('click', () => openConsultHandler());

    document.getElementById('modal-service-consult-btn')?.addEventListener('click', () => {
      const currentTitle = document.getElementById('modal-service-title')?.textContent || undefined;
      openConsultHandler(currentTitle);
    });

    // 7. Consultation Modal Close Handlers
    document.getElementById('consult-modal-close-btn')?.addEventListener('click', closeConsultationModal);
    document.getElementById('consult-modal-backdrop')?.addEventListener('click', (e) => {
      if (e.target === document.getElementById('consult-modal-backdrop')) {
        closeConsultationModal();
      }
    });

    // 8. Consultation Form Submit
    document.getElementById('consultation-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = document.getElementById('consultation-form');
      const successMsg = document.getElementById('consult-success-msg');
      if (form && successMsg) {
        form.style.display = 'none';
        successMsg.style.display = 'block';
      }
    });

    // 9. Ecosystem Interactive Nodes Click
    const ecoNodes = data.solutions || [];
    document.querySelectorAll('.eco-node-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.eco-node-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const nodeId = btn.getAttribute('data-node-id');
        const node = ecoNodes.find((n: any) => n.id === nodeId);
        if (node) {
          const titleEl = document.getElementById('eco-detail-title');
          const roleEl = document.getElementById('eco-detail-role');
          const descEl = document.getElementById('eco-detail-desc');
          const badgeEl = document.getElementById('eco-detail-badge-text');

          if (titleEl) titleEl.textContent = node.title;
          if (roleEl) roleEl.textContent = node.role;
          if (descEl) descEl.textContent = node.description;
          if (badgeEl) badgeEl.textContent = node.metric;
        }
      });
    });

    // 10. Sectors Tab Switching
    const sectors = data.sectors || [];
    document.querySelectorAll('.sector-tab-btn').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.sector-tab-btn').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const sectorId = tab.getAttribute('data-sector-id');
        const sector = sectors.find((s: any) => s.id === sectorId);
        if (sector) {
          const imgEl = document.getElementById('sector-display-image') as HTMLImageElement | null;
          const tagEl = document.getElementById('sector-display-tag');
          const titleEl = document.getElementById('sector-display-title');
          const subEl = document.getElementById('sector-display-subtitle');
          const descEl = document.getElementById('sector-display-desc');
          const highEl = document.getElementById('sector-display-highlights');

          if (imgEl) {
            imgEl.style.opacity = '0';
            setTimeout(() => {
              imgEl.src = sector.imagePath;
              imgEl.style.opacity = '1';
            }, 150);
          }
          if (tagEl) tagEl.textContent = sector.tag;
          if (titleEl) titleEl.textContent = sector.title;
          if (subEl) subEl.textContent = sector.subtitle;
          if (descEl) descEl.textContent = sector.description;
          if (highEl) {
            highEl.innerHTML = sector.highlights.map((h: string) => `
              <div class="sector-highlight-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--blue-electric);"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${h}</span>
              </div>
            `).join('');
          }
        }
      });
    });
  }

  private static initScrollReveal(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .stat-card, .why-card, .pillar-item, .section-header').forEach(el => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  }
}

// Initialize Application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
