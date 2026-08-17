import { getIcon } from '../../icons/serviceIcons';
import { CMSStore } from '../../services/cmsStore';
import { MediaItem } from '../../types/admin';
import { showToast } from '../components/Toast';
import { showConfirmModal } from '../components/ConfirmModal';

export function renderMediaLibrary(): string {
  const mediaItems = CMSStore.getDraft().media;

  const mediaCardsHtml = mediaItems.map(m => `
    <div class="media-item-card" data-id="${m.id}">
      <div class="media-preview-box">
        ${m.type === 'video' ? `
          <video src="${m.path}" muted loop autoplay playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
        ` : `
          <img src="${m.path}" alt="${m.name}" loading="lazy" />
        `}
      </div>

      <div class="media-card-body">
        <div class="media-file-name" title="${m.name}">${m.name}</div>
        <div class="media-file-meta">
          <span>${m.dimensions || m.type.toUpperCase()}</span> • <span>${m.sizeKB} KB</span>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: 0.4rem;">
          ${m.usedIn.map(u => `<span class="media-used-badge">مستخدم في: ${u}</span>`).join('')}
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.8rem; padding-top: 0.6rem; border-top: 1px solid var(--admin-border);">
          <button class="admin-btn admin-btn-secondary copy-media-path-btn" data-path="${m.path}" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;">
            <span>نسخ المسار</span>
          </button>
          
          <button class="action-icon-btn danger delete-media-btn" data-id="${m.id}" data-name="${m.name}" title="حذف الملف">
            ${getIcon('close')}
          </button>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="admin-view-content">
      <div class="view-header">
        <div class="view-title-wrap">
          <h1>مكتبة الوسائط والملفات (${mediaItems.length})</h1>
          <p class="view-subtitle">استعراض، رفع، تتبع أماكن الاستخدام، وإدارة الصور والفيديوهات في الموقع</p>
        </div>

        <div style="display: flex; gap: 0.8rem;">
          <label class="admin-btn admin-btn-primary" style="cursor: pointer;">
            ${getIcon('sparkles')}
            <span>رفع ملف وسائط جديد</span>
            <input type="file" id="media-upload-input" accept="image/*,video/*" style="display: none;" />
          </label>
        </div>
      </div>

      <!-- Upload Drop Zone -->
      <div id="media-drop-zone" style="border: 2px dashed var(--admin-border); border-radius: var(--radius-md); padding: 2rem; text-align: center; background: var(--admin-surface); margin-bottom: 2rem; transition: all 0.2s ease;">
        <div style="color: var(--admin-primary); margin-bottom: 0.5rem;">
          ${getIcon('sparkles')}
        </div>
        <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--admin-text-main); margin-bottom: 0.3rem;">
          اسحب وأفلت الصور أو مقاطع الفيديو هنا للرفع
        </h4>
        <p style="font-size: 0.85rem; color: var(--admin-text-muted);">
          يدعم صيغ JPG, PNG, WEBP, MP4, SVG حتى حجم 10 ميغابايت
        </p>
      </div>

      <!-- Media Grid -->
      <div class="media-grid">
        ${mediaCardsHtml}
      </div>
    </div>
  `;
}

export function initMediaLibraryListeners(onRefresh: () => void): void {
  const uploadInput = document.getElementById('media-upload-input') as HTMLInputElement;
  const dropZone = document.getElementById('media-drop-zone');

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const isVideo = file.type.startsWith('video');
      const isSvg = file.type.includes('svg');

      const newMedia: MediaItem = {
        id: `med-${Date.now()}`,
        name: file.name,
        path: dataUrl,
        type: isVideo ? 'video' : isSvg ? 'svg' : 'image',
        sizeKB: parseFloat((file.size / 1024).toFixed(1)),
        dimensions: isVideo ? 'Video MP4' : 'Custom Image',
        usedIn: ['Media Library'],
        uploadedAt: new Date().toLocaleString('ar-SA', { hour12: false })
      };

      const draft = CMSStore.getDraft();
      const updatedMedia = [newMedia, ...draft.media];
      CMSStore.updateDraft('media', updatedMedia, `تم رفع ملف وسائط جديد (${file.name})`);
      showToast(`تم رفع ملف "${file.name}" بنجاح.`);
      onRefresh();
    };

    reader.readAsDataURL(file);
  };

  uploadInput?.addEventListener('change', () => {
    handleFiles(uploadInput.files);
  });

  dropZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--admin-primary)';
    dropZone.style.background = 'var(--admin-primary-soft)';
  });

  dropZone?.addEventListener('dragleave', () => {
    dropZone.style.borderColor = 'var(--admin-border)';
    dropZone.style.background = 'var(--admin-surface)';
  });

  dropZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--admin-border)';
    dropZone.style.background = 'var(--admin-surface)';
    if (e.dataTransfer?.files) {
      handleFiles(e.dataTransfer.files);
    }
  });

  document.querySelectorAll('.copy-media-path-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.getAttribute('data-path') || '';
      navigator.clipboard.writeText(p).then(() => {
        showToast('تم نسخ مسار الملف للحافظة.');
      }).catch(() => {
        showToast(`المسار: ${p}`);
      });
    });
  });

  document.querySelectorAll('.delete-media-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const name = btn.getAttribute('data-name') || 'هذا الملف';

      showConfirmModal({
        title: 'حذف ملف وسائط',
        message: `هل أنت متأكد من رغبتك في إزالة ملف "${name}" من مكتبة الوسائط؟`,
        confirmText: 'نعم، احذف الملف',
        isDanger: true,
        onConfirm: () => {
          const draft = CMSStore.getDraft();
          const updated = draft.media.filter(m => m.id !== id);
          CMSStore.updateDraft('media', updated, `تم حذف ملف الوسائط (${name})`);
          showToast(`تم حذف ملف "${name}" بنجاح.`);
          onRefresh();
        }
      });
    });
  });
}
