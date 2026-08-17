import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';

export function renderDashboardView(): string {
  const state = CMSStore.getState();
  const draft = state.draft;
  const isDirty = state.isDraftDirty;

  const totalServices = draft.services.length;
  const totalSectors = draft.sectors.length;
  const totalMedia = draft.media.length;
  const totalUsers = state.users.length;

  const recentLogsHtml = state.activityLogs.slice(0, 6).map(log => `
    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 0.9rem 0; border-bottom: 1px solid var(--admin-border);">
      <div style="width: 36px; height: 36px; border-radius: 8px; background: var(--admin-primary-soft); color: var(--admin-primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        ${getIcon('sparkles')}
      </div>
      <div style="flex: 1;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.2rem;">
          <span style="font-weight: 700; font-size: 0.92rem; color: var(--admin-text-main);">${log.userName}</span>
          <span style="font-size: 0.75rem; color: var(--admin-text-muted); font-family: var(--admin-font-latin);">${log.timestamp}</span>
        </div>
        <div style="font-size: 0.85rem; color: var(--admin-text-muted);">
          <span style="font-weight: 600; color: var(--admin-primary);">${log.section}:</span> ${log.details}
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>لوحة القيادة الرئيسية</h1>
          <p class="view-subtitle">نظرة عامة على حالة الموقع الإلكتروني والمحتوى وآخر الأنشطة والعمليات</p>
        </div>

        <div style="display: flex; gap: 0.8rem;">
          <a href="index.html" target="_blank" class="admin-btn admin-btn-secondary">
            ${getIcon('layers')}
            <span>زيارة الموقع المباشر</span>
          </a>
        </div>
      </div>

      <!-- Website Status & Metrics -->
      <div class="dashboard-stats-grid">
        <div class="metric-card">
          <div class="metric-icon-box" style="background: rgba(0, 102, 255, 0.08); color: var(--admin-primary);">
            ${getIcon('cpu')}
          </div>
          <div class="metric-info">
            <span class="metric-value">${totalServices}</span>
            <span class="metric-label">الخدمات والحلول الفعالة</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-icon-box" style="background: rgba(16, 185, 129, 0.08); color: var(--admin-success);">
            ${getIcon('layers')}
          </div>
          <div class="metric-info">
            <span class="metric-value">${totalSectors}</span>
            <span class="metric-label">القطاعات ومجالات التطبيق</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-icon-box" style="background: rgba(245, 158, 11, 0.08); color: var(--admin-warning);">
            ${getIcon('sparkles')}
          </div>
          <div class="metric-info">
            <span class="metric-value">${totalMedia}</span>
            <span class="metric-label">ملفات الوسائط المرفوعة</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-icon-box" style="background: rgba(2, 132, 199, 0.08); color: var(--admin-info);">
            ${getIcon('shield_check')}
          </div>
          <div class="metric-info">
            <span class="metric-value">${state.currentVersion}</span>
            <span class="metric-label">الإصدار المنشور حالياً</span>
          </div>
        </div>
      </div>

      <!-- Quick Actions Grid -->
      <div class="admin-card">
        <div class="admin-card-header">
          <h2 class="admin-card-title">
            ${getIcon('sparkles')}
            <span>إجراءات سريعة واختصارات الإدارة</span>
          </h2>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <button class="admin-btn admin-btn-secondary" onclick="location.hash='#services'" style="padding: 1.2rem 1rem; border-radius: var(--radius-md); flex-direction: column; gap: 0.6rem; height: auto;">
            <div class="quick-action-icon" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(0, 102, 255, 0.08); display: flex; align-items: center; justify-content: center; color: var(--admin-primary);">${getIcon('cpu')}</div>
            <span style="font-weight: 700;">إدارة الخدمات العشر</span>
          </button>

          <button class="admin-btn admin-btn-secondary" onclick="location.hash='#hero'" style="padding: 1.2rem 1rem; border-radius: var(--radius-md); flex-direction: column; gap: 0.6rem; height: auto;">
            <div class="quick-action-icon" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(2, 132, 199, 0.08); display: flex; align-items: center; justify-content: center; color: var(--admin-info);">${getIcon('sparkles')}</div>
            <span style="font-weight: 700;">تعديل قسم الهيرو (Hero)</span>
          </button>

          <button class="admin-btn admin-btn-secondary" onclick="location.hash='#media'" style="padding: 1.2rem 1rem; border-radius: var(--radius-md); flex-direction: column; gap: 0.6rem; height: auto;">
            <div class="quick-action-icon" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(245, 158, 11, 0.08); display: flex; align-items: center; justify-content: center; color: var(--admin-warning);">${getIcon('layers')}</div>
            <span style="font-weight: 700;">مكتبة الوسائط والملفات</span>
          </button>

          <button class="admin-btn admin-btn-secondary" onclick="location.hash='#contact'" style="padding: 1.2rem 1rem; border-radius: var(--radius-md); flex-direction: column; gap: 0.6rem; height: auto;">
            <div class="quick-action-icon" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(16, 185, 129, 0.08); display: flex; align-items: center; justify-content: center; color: var(--admin-success);">${getIcon('phone')}</div>
            <span style="font-weight: 700;">تحديث بيانات الاتصال</span>
          </button>
        </div>
      </div>

      <!-- Two Columns: Status & Recent Activity -->
      <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 1.8rem;">
        <div class="admin-card">
          <div class="admin-card-header">
            <h3 class="admin-card-title">
              ${getIcon('shield_check')}
              <span>حالة النشر والجاهزية</span>
            </h3>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1.2rem;">
            <div style="padding: 1rem; border-radius: var(--radius-sm); background: ${isDirty ? 'var(--admin-warning-soft)' : 'var(--admin-success-soft)'}; border: 1px solid ${isDirty ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)'};">
              <div style="font-weight: 800; color: ${isDirty ? 'var(--admin-warning)' : 'var(--admin-success)'}; margin-bottom: 0.3rem;">
                ${isDirty ? 'توجد تعديلات قيد المسودة غير منشورة' : 'جميع البيانات منشورة ومتطابقة مع الموقع المباشر'}
              </div>
              <div style="font-size: 0.85rem; color: var(--admin-text-muted);">
                ${isDirty ? 'قم بالمعاينة للتأكد من التغييرات ثم اضغط نشر التغييرات لنقلها للموقع العام.' : 'الموقع يعمل بأحدث نسخة معتمدة بدون أي مسودات معلقة.'}
              </div>
            </div>

            <div style="font-size: 0.88rem; color: var(--admin-text-muted); display: flex; flex-direction: column; gap: 0.5rem;">
              <div style="display: flex; justify-content: space-between;">
                <span>آخر حفظ للمسودة:</span>
                <strong style="color: var(--admin-text-main); font-family: var(--admin-font-latin);">${state.lastSavedAt}</strong>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>آخر نشر رسمي:</span>
                <strong style="color: var(--admin-text-main); font-family: var(--admin-font-latin);">${state.lastPublishedAt}</strong>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>رقم الإصدار الحالي:</span>
                <strong style="color: var(--admin-primary); font-family: var(--admin-font-latin);">${state.currentVersion}</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-card">
          <div class="admin-card-header">
            <h3 class="admin-card-title">
              ${getIcon('sparkles')}
              <span>سجل آخر النشاطات والتعديلات</span>
            </h3>
            <a href="#activity" style="font-size: 0.82rem; font-weight: 700; color: var(--admin-primary);">عرض الكل</a>
          </div>

          <div style="display: flex; flex-direction: column;">
            ${recentLogsHtml || '<p style="text-align: center; color: var(--admin-text-muted); padding: 1.5rem;">لا توجد نشاطات مسجلة بعد.</p>'}
          </div>
        </div>
      </div>
    </div>
  `;
}
