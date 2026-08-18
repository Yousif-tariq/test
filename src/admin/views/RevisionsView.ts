import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { showConfirmModal } from '../components/ConfirmModal';
import { showToast } from '../components/Toast';

export function renderRevisionsView(): string {
  const revisions = CMSStore.getState().revisions;
  const currentVersion = CMSStore.getState().currentVersion;

  const rowsHtml = revisions.map((rev, idx) => `
    <tr>
      <td style="font-weight: 800; font-family: var(--admin-font-latin); color: var(--admin-primary); width: 80px;">
        ${rev.version}
      </td>
      <td style="font-size: 0.85rem; font-family: var(--admin-font-latin); color: var(--admin-text-muted); width: 170px;">
        ${rev.timestamp}
      </td>
      <td style="font-weight: 700; color: var(--admin-text-main);">
        ${rev.authorName}
      </td>
      <td style="font-size: 0.9rem; color: var(--admin-text-main);">
        ${rev.summary}
      </td>
      <td style="width: 140px; text-align: center;">
        ${rev.version === currentVersion ? `
          <span style="font-size: 0.8rem; font-weight: 800; color: var(--admin-success); background: var(--admin-success-soft); padding: 0.25rem 0.7rem; border-radius: var(--radius-full);">
            النسخة الحالية النشطة
          </span>
        ` : `
          <button class="admin-btn admin-btn-secondary restore-rev-btn" data-id="${rev.id}" data-ver="${rev.version}" style="padding: 0.35rem 0.8rem; font-size: 0.8rem;">
            <span>استعادة هذه النسخة</span>
          </button>
        `}
      </td>
    </tr>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>النسخ السابقة وسجل المراجعات (Revisions History)</h1>
          <p class="view-subtitle">استعراض الإصدارات المنشورة مع إمكانية استعادة أي نسخة سابقة بضغطة زر</p>
        </div>
      </div>

      <div class="admin-card" style="padding: 0; overflow: hidden;">
        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>الإصدار</th>
                <th>تاريخ النشر</th>
                <th>المسؤول عن النشر</th>
                <th>ملخص التعديلات المنشورة</th>
                <th style="text-align: center;">الإجراء</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function initRevisionsViewListeners(onRefresh: () => void): void {
  document.querySelectorAll('.restore-rev-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const ver = btn.getAttribute('data-ver') || '';

      showConfirmModal({
        title: `استعادة النسخة (${ver})`,
        message: `هل أنت متأكد من استعادة النسخة (${ver})؟ سيتم استبدال محتوى الموقع الحالي ببيانات هذه النسخة فوراً.`,
        confirmText: 'نعم، استعد النسخة الآن',
        isDanger: true,
        onConfirm: async () => {
          if (id) {
            const success = await CMSStore.restoreRevision(id);
            if (success) {
              showToast(`تمت استعادة النسخة (${ver}) بنجاح.`);
              onRefresh();
            }
          }
        }
      });
    });
  });
}
