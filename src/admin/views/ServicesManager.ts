import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { openServiceEditor } from './ServiceEditor';
import { showConfirmModal } from '../components/ConfirmModal';
import { showToast } from '../components/Toast';

export function renderServicesManager(): string {
  const services = CMSStore.getDraft().services;

  const rowsHtml = services.map((s, idx) => `
    <tr data-id="${s.id}" data-index="${idx}">
      <td style="width: 40px; text-align: center;">
        <span class="table-drag-handle" title="اسحب لإعادة الترتيب">⋮⋮</span>
      </td>
      <td style="font-weight: 800; font-family: var(--admin-font-latin); color: var(--admin-primary); width: 60px;">
        #${s.number}
      </td>
      <td style="width: 60px;">
        <div style="width: 38px; height: 38px; border-radius: 8px; background: rgba(0, 102, 255, 0.08); display: flex; align-items: center; justify-content: center; color: var(--admin-primary);">
          ${getIcon(s.iconName || 'cpu')}
        </div>
      </td>
      <td>
        <div style="font-weight: 800; color: var(--admin-text-main); font-size: 0.98rem;">${s.title}</div>
        <div style="font-size: 0.78rem; color: var(--admin-text-muted); font-family: var(--admin-font-latin);">${s.titleEn || ''}</div>
      </td>
      <td>
        <span style="font-size: 0.8rem; font-weight: 700; padding: 0.25rem 0.7rem; border-radius: var(--radius-full); background: var(--admin-surface-subtle); color: var(--admin-text-muted); border: 1px solid var(--admin-border);">
          ${s.category}
        </span>
      </td>
      <td style="font-size: 0.85rem; color: var(--admin-text-muted); max-width: 260px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
        ${s.shortDescription}
      </td>
      <td style="width: 140px;">
        <div class="table-actions">
          <button class="action-icon-btn move-up-btn" data-index="${idx}" title="نقل للأعلى" ${idx === 0 ? 'disabled style="opacity: 0.3;"' : ''}>
            ↑
          </button>
          <button class="action-icon-btn move-down-btn" data-index="${idx}" title="نقل للأسفل" ${idx === services.length - 1 ? 'disabled style="opacity: 0.3;"' : ''}>
            ↓
          </button>
          <button class="action-icon-btn edit-service-btn" data-id="${s.id}" title="تعديل الخدمة">
            ${getIcon('sparkles')}
          </button>
          <button class="action-icon-btn danger delete-service-btn" data-id="${s.id}" data-title="${s.title}" title="حذف الخدمة">
            ${getIcon('close')}
          </button>
        </div>
      </td>
    </tr>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>إدارة الخدمات والحلول الهندسية (${services.length})</h1>
          <p class="view-subtitle">إضافة، تعديل، حذف، وإعادة ترتيب الخدمات المعروضة في الموقع الرئيسي</p>
        </div>

        <button class="admin-btn admin-btn-primary" id="add-service-btn">
          ${getIcon('sparkles')}
          <span>إضافة خدمة جديدة</span>
        </button>
      </div>

      <div class="admin-card" style="padding: 0; overflow: hidden;">
        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th></th>
                <th>#</th>
                <th>الأيقونة</th>
                <th>اسم الخدمة</th>
                <th>التصنيف</th>
                <th>الوصف المختصر</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody id="services-table-body">
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function initServicesManagerListeners(onRefresh: () => void): void {
  const addBtn = document.getElementById('add-service-btn');
  addBtn?.addEventListener('click', () => {
    openServiceEditor(null, onRefresh);
  });

  document.querySelectorAll('.edit-service-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const service = CMSStore.getDraft().services.find(s => s.id === id);
      if (service) {
        openServiceEditor(service, onRefresh);
      }
    });
  });

  document.querySelectorAll('.delete-service-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const title = btn.getAttribute('data-title') || 'هذه الخدمة';

      showConfirmModal({
        title: 'تأكيد حذف الخدمة',
        message: `هل أنت متأكد من رغبتك في حذف خدمة "${title}" من المسودة؟ لن تظهر في الموقع بعد النشر.`,
        confirmText: 'نعم، احذف الخدمة',
        isDanger: true,
        onConfirm: () => {
          const draft = CMSStore.getDraft();
          const updated = draft.services.filter(s => s.id !== id);
          CMSStore.updateDraft('services', updated, `تم حذف خدمة (${title}) من المسودة`);
          showToast(`تم حذف خدمة "${title}" بنجاح.`);
          onRefresh();
        }
      });
    });
  });

  // Reorder up/down
  document.querySelectorAll('.move-up-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index') || '0', 10);
      if (idx > 0) {
        const draft = CMSStore.getDraft();
        const arr = [...draft.services];
        const temp = arr[idx];
        arr[idx] = arr[idx - 1];
        arr[idx - 1] = temp;
        // update numbering
        arr.forEach((item, i) => {
          item.number = String(i + 1).padStart(2, '0');
        });
        CMSStore.updateDraft('services', arr, `تمت إعادة ترتيب خدمة (${temp.title}) للأعلى`);
        onRefresh();
      }
    });
  });

  document.querySelectorAll('.move-down-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index') || '0', 10);
      const draft = CMSStore.getDraft();
      if (idx < draft.services.length - 1) {
        const arr = [...draft.services];
        const temp = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
        // update numbering
        arr.forEach((item, i) => {
          item.number = String(i + 1).padStart(2, '0');
        });
        CMSStore.updateDraft('services', arr, `تمت إعادة ترتيب خدمة (${temp.title}) للأسفل`);
        onRefresh();
      }
    });
  });
}
