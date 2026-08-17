import { getIcon } from '../../icons/serviceIcons';

export function showToast(message: string, type: 'success' | 'error' | 'info' = 'success'): void {
  let container = document.getElementById('admin-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'admin-toast-container';
    container.className = 'admin-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `admin-toast ${type}`;

  const iconName = type === 'success' ? 'check' : type === 'error' ? 'close' : 'sparkles';
  toast.innerHTML = `
    <span style="color: var(--admin-${type === 'error' ? 'danger' : type === 'info' ? 'info' : 'success'});">
      ${getIcon(iconName)}
    </span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}
