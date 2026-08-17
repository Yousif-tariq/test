import { getIcon } from '../../icons/serviceIcons';
import { AuthService } from '../../services/authService';
import { showToast } from '../components/Toast';

export function renderLoginView(): string {
  return `
    <div style="min-height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center; background: #f8fafc; padding: 1.5rem;">
      <div class="admin-card" style="max-width: 460px; width: 100%; padding: 2.5rem; border-radius: var(--radius-lg); box-shadow: var(--admin-shadow-modal); background: #ffffff;">
        <div style="text-align: center; margin-bottom: 1.8rem;">
          <img src="img/LOGO.jpeg" alt="أساسات المشاعر" style="height: 58px; margin: 0 auto 1.2rem auto; border-radius: 8px; padding: 4px 12px; background: #ffffff; border: 1px solid var(--admin-border);" />
          <h2 style="font-size: 1.55rem; font-weight: 900; color: var(--admin-text-main); margin-bottom: 0.4rem;">
            تسجيل دخول لوحة الإدارة
          </h2>
          <p style="font-size: 0.88rem; color: var(--admin-text-muted);">
            شركة أساسات المشاعر المحدودة — نظام الإدارة والتحكم الآمن
          </p>
        </div>

        <!-- Quick Demo Credentials Box -->
        <div style="margin-bottom: 1.5rem; padding: 0.85rem 1rem; border-radius: var(--radius-sm); background: rgba(0, 102, 255, 0.05); border: 1px dashed rgba(0, 102, 255, 0.4); display: flex; justify-content: space-between; align-items: center;">
          <div style="font-size: 0.82rem; color: var(--admin-text-main); line-height: 1.6;">
            <div><span style="color: var(--admin-text-muted);">البريد:</span> <strong style="font-family: var(--admin-font-latin); direction: ltr; display: inline-block;">admin@asasat.sa</strong></div>
            <div><span style="color: var(--admin-text-muted);">كلمة المرور:</span> <strong style="font-family: var(--admin-font-latin); direction: ltr; display: inline-block;">Admin@123456</strong></div>
          </div>
          <button type="button" id="fill-demo-creds-btn" class="admin-btn admin-btn-secondary" style="font-size: 0.78rem; padding: 0.4rem 0.8rem; font-weight: 700;">
            ${getIcon('sparkles')}
            <span>تعبئة تلقائية</span>
          </button>
        </div>

        <form id="admin-login-form">
          <div class="admin-form-group" style="margin-bottom: 1.2rem;">
            <label class="admin-label" for="login-email" style="font-weight: 700; margin-bottom: 0.4rem; display: block;">البريد الإلكتروني للادمن</label>
            <input 
              type="email" 
              id="login-email" 
              class="admin-input" 
              value="admin@asasat.sa"
              placeholder="admin@asasat.sa" 
              autocomplete="username" 
              required 
              style="direction: ltr; text-align: left;"
            />
          </div>

          <div class="admin-form-group" style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <label class="admin-label" for="login-password" style="font-weight: 700; display: block; margin: 0;">كلمة المرور</label>
              <button type="button" id="toggle-password-btn" style="background: none; border: none; font-size: 0.78rem; color: var(--admin-primary); cursor: pointer; font-weight: 600; font-family: var(--admin-font);">إظهار كلمة المرور</button>
            </div>
            <input 
              type="password" 
              id="login-password" 
              class="admin-input" 
              value="Admin@123456"
              placeholder="••••••••" 
              autocomplete="current-password" 
              required 
              style="direction: ltr; text-align: left;"
            />
          </div>

          <div id="login-error-msg" style="display: none; padding: 0.8rem; border-radius: var(--radius-sm); background: var(--admin-danger-soft); color: var(--admin-danger); font-size: 0.85rem; font-weight: 700; margin-bottom: 1.2rem; text-align: center; line-height: 1.5;"></div>

          <button type="submit" id="login-submit-btn" class="admin-btn admin-btn-primary" style="width: 100%; padding: 0.85rem; font-size: 1rem; font-weight: 700; border-radius: var(--radius-sm); justify-content: center; gap: 0.6rem;">
            ${getIcon('shield_check')}
            <span id="login-btn-text">دخول آمن للوحة التحكم</span>
          </button>
        </form>

        <!-- Security Badge -->
        <div style="margin-top: 2rem; padding: 0.85rem 1rem; border-radius: var(--radius-sm); background: #f8fafc; border: 1px solid var(--admin-border); display: flex; align-items: center; gap: 0.75rem; text-align: right;">
          <div style="color: var(--admin-primary); flex-shrink: 0; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;">
            ${getIcon('shield_check')}
          </div>
          <span style="font-size: 0.76rem; color: var(--admin-text-muted); font-weight: 600; line-height: 1.5;">
            بوابة مؤمنة بالكامل بتشفير Bcrypt وجلسات JWT و Rate-Limiting لحماية المنظومة.
          </span>
        </div>
      </div>
    </div>
  `;
}

export function initLoginViewListeners(onSuccess: () => void): void {
  const form = document.getElementById('admin-login-form');
  const errorMsg = document.getElementById('login-error-msg');
  const submitBtn = document.getElementById('login-submit-btn') as HTMLButtonElement;
  const btnText = document.getElementById('login-btn-text');
  const emailInput = document.getElementById('login-email') as HTMLInputElement;
  const passInput = document.getElementById('login-password') as HTMLInputElement;
  const autoFillBtn = document.getElementById('fill-demo-creds-btn');
  const togglePassBtn = document.getElementById('toggle-password-btn');

  autoFillBtn?.addEventListener('click', () => {
    if (emailInput) emailInput.value = 'admin@asasat.sa';
    if (passInput) passInput.value = 'Admin@123456';
    showToast('تمت تعبئة بيانات الدخول.');
  });

  togglePassBtn?.addEventListener('click', () => {
    if (passInput) {
      const isPass = passInput.type === 'password';
      passInput.type = isPass ? 'text' : 'password';
      if (togglePassBtn) togglePassBtn.textContent = isPass ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور';
    }
  });

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput?.value || '';
    const pass = passInput?.value || '';

    if (errorMsg) errorMsg.style.display = 'none';
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.textContent = 'جاري التحقق والمصادقة...';

    try {
      const res = await AuthService.login(email, pass);
      if (res.success) {
        showToast(res.message);
        onSuccess();
      } else {
        if (errorMsg) {
          errorMsg.textContent = res.message;
          errorMsg.style.display = 'block';
        }
      }
    } catch (err) {
      if (errorMsg) {
        errorMsg.textContent = 'حدث خطأ في الاتصال بالخادم، يرجى المحاولة لاحقاً.';
        errorMsg.style.display = 'block';
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.textContent = 'دخول آمن للوحة التحكم';
    }
  });
}

