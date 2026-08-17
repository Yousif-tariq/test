import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';

export function renderActivityLogsView(): string {
  const logs = CMSStore.getState().activityLogs;

  const rowsHtml = logs.map((log, idx) => `
    <tr>
      <td style="font-weight: 800; font-family: var(--admin-font-latin); color: var(--admin-primary); width: 60px;">
        #${idx + 1}
      </td>
      <td style="font-size: 0.85rem; font-family: var(--admin-font-latin); color: var(--admin-text-muted); width: 170px;">
        ${log.timestamp}
      </td>
      <td>
        <div style="font-weight: 700; color: var(--admin-text-main); font-size: 0.92rem;">${log.userName}</div>
        <div style="font-size: 0.75rem; color: var(--admin-text-muted);">${log.userRole}</div>
      </td>
      <td>
        <span style="font-size: 0.8rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); background: var(--admin-primary-soft); color: var(--admin-primary);">
          ${log.section}
        </span>
      </td>
      <td style="font-size: 0.9rem; color: var(--admin-text-main);">
        ${log.details}
      </td>
    </tr>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>سجل النشاطات والعمليات الحي (${logs.length})</h1>
          <p class="view-subtitle">تتبع زمني شامل لكافة عمليات الحفظ، التعديل، النشر، وتغيير الإعدادات</p>
        </div>
      </div>

      <div class="admin-card" style="padding: 0; overflow: hidden;">
        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>التاريخ والوقت</th>
                <th>المستخدم المسؤول</th>
                <th>القسم المستهدف</th>
                <th>تفاصيل الإجراء</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml || '<tr><td colspan="5" style="text-align: center; padding: 2rem; color: var(--admin-text-muted);">لا توجد نشاطات مسجلة بعد.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
