import { getIcon } from '../../icons/serviceIcons';

export function showConfirmModal(options: {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isDanger?: boolean;
  onConfirm: () => void;
}): void {
  const existing = document.getElementById('admin-confirm-modal');
  if (existing) existing.remove();

  const backdrop = document.createElement('div');
  backdrop.id = 'admin-confirm-modal';
  backdrop.className = 'admin-modal-backdrop active';

  backdrop.innerHTML = `
    <div class="admin-modal-box" style="max-width: 480px;">
      <div class="admin-modal-header">
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--admin-text-main);">
          ${options.title}
        </h3>
        <button class="action-icon-btn" id="confirm-modal-close-x">
          ${getIcon('close')}
        </button>
      </div>

      <p style="font-size: 0.95rem; color: var(--admin-text-muted); line-height: 1.7; margin-bottom: 2rem;">
        ${options.message}
      </p>

      <div class="admin-modal-footer">
        <button class="admin-btn admin-btn-secondary" id="confirm-modal-cancel">
          ${options.cancelText || 'إلغاء'}
        </button>
        <button class="admin-btn ${options.isDanger ? 'admin-btn-danger' : 'admin-btn-primary'}" id="confirm-modal-ok">
          ${options.confirmText || 'تأكيد العملية'}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  const close = () => backdrop.remove();

  document.getElementById('confirm-modal-close-x')?.addEventListener('click', close);
  document.getElementById('confirm-modal-cancel')?.addEventListener('click', close);
  document.getElementById('confirm-modal-ok')?.addEventListener('click', () => {
    close();
    options.onConfirm();
  });
}
