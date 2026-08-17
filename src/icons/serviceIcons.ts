export const serviceIcons: Record<string, string> = {
  cctv_security: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-svg-icon">
      <defs>
        <linearGradient id="cctv-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0066FF"/>
          <stop offset="1" stop-color="#0284C7"/>
        </linearGradient>
      </defs>
      <path d="M6 16L24 6L42 16V30C42 37.5 34.5 43.5 24 46C13.5 43.5 6 37.5 6 30V16Z" stroke="url(#cctv-grad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="24" cy="24" r="8" stroke="#0066FF" stroke-width="2.5"/>
      <circle cx="24" cy="24" r="3.5" fill="#0284C7"/>
      <path d="M19 12H29" stroke="url(#cctv-grad)" stroke-width="2" stroke-linecap="round"/>
      <path d="M24 6V10" stroke="#0066FF" stroke-width="2"/>
      <path d="M16 24C16 28.4183 19.5817 32 24 32" stroke="#0284C7" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 2"/>
    </svg>
  `,

  access_control: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-svg-icon">
      <defs>
        <linearGradient id="acc-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0066FF"/>
          <stop offset="1" stop-color="#3B82F6"/>
        </linearGradient>
      </defs>
      <rect x="10" y="8" width="28" height="34" rx="5" stroke="url(#acc-grad)" stroke-width="2.5"/>
      <circle cx="24" cy="18" r="5" stroke="#0066FF" stroke-width="2.5"/>
      <path d="M16 32C16 27.5817 19.5817 24 24 24C28.4183 24 32 27.5817 32 32" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M24 35V38" stroke="#0066FF" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="24" cy="18" r="2" fill="#0066FF"/>
      <path d="M6 22H10" stroke="#0066FF" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M38 22H42" stroke="#0066FF" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M6 26H10" stroke="#0066FF" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M38 26H42" stroke="#0066FF" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  intrusion_alarm: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-svg-icon">
      <defs>
        <linearGradient id="alarm-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0284C7"/>
          <stop offset="1" stop-color="#1E40AF"/>
        </linearGradient>
      </defs>
      <path d="M24 6V10" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M34 14C37.5 17 39 21 39 26V34L42 37H6L9 34V26C9 21 10.5 17 14 14" stroke="url(#alarm-grad)" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M20 40C20 42.2091 21.7909 44 24 44C26.2091 44 28 42.2091 28 40" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M24 16V26" stroke="#0066FF" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="24" cy="30" r="2" fill="#0066FF"/>
      <path d="M10 8L13 11" stroke="#0284C7" stroke-width="2" stroke-linecap="round"/>
      <path d="M38 8L35 11" stroke="#0284C7" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  fire_alarm: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-svg-icon">
      <defs>
        <linearGradient id="fire-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E11D48"/>
          <stop offset="1" stop-color="#F97316"/>
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" stroke="url(#fire-grad)" stroke-width="2.5"/>
      <path d="M24 12C24 12 28 17 28 21C28 23.5 26.5 25.5 24 25.5C21.5 25.5 20 23.5 20 21C20 17 24 12 24 12Z" fill="url(#fire-grad)"/>
      <path d="M24 22C24 22 32 27 32 32C32 36.4183 28.4183 40 24 40C19.5817 40 16 36.4183 16 32C16 27 24 22 24 22Z" stroke="url(#fire-grad)" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="24" cy="33" r="3" fill="#F59E0B"/>
      <path d="M12 24H6" stroke="#E11D48" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M42 24H36" stroke="#E11D48" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  networks_telecom: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-svg-icon">
      <defs>
        <linearGradient id="net-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0066FF"/>
          <stop offset="1" stop-color="#4F46E5"/>
        </linearGradient>
      </defs>
      <rect x="6" y="8" width="36" height="8" rx="3" stroke="url(#net-grad)" stroke-width="2.5"/>
      <rect x="6" y="20" width="36" height="8" rx="3" stroke="url(#net-grad)" stroke-width="2.5"/>
      <rect x="6" y="32" width="36" height="8" rx="3" stroke="url(#net-grad)" stroke-width="2.5"/>
      <circle cx="12" cy="12" r="2" fill="#0066FF"/>
      <circle cx="18" cy="12" r="2" fill="#0066FF"/>
      <circle cx="12" cy="24" r="2" fill="#0066FF"/>
      <circle cx="18" cy="24" r="2" fill="#0066FF"/>
      <circle cx="12" cy="36" r="2" fill="#0066FF"/>
      <circle cx="18" cy="36" r="2" fill="#0066FF"/>
      <path d="M30 12H36" stroke="#0066FF" stroke-width="2" stroke-linecap="round"/>
      <path d="M30 24H36" stroke="#0066FF" stroke-width="2" stroke-linecap="round"/>
      <path d="M30 36H36" stroke="#0066FF" stroke-width="2" stroke-linecap="round"/>
      <path d="M24 16V20" stroke="#0284C7" stroke-width="2"/>
      <path d="M24 28V32" stroke="#0284C7" stroke-width="2"/>
    </svg>
  `,

  smart_audio: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-svg-icon">
      <defs>
        <linearGradient id="snd-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0284C7"/>
          <stop offset="1" stop-color="#0D9488"/>
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" stroke="url(#snd-grad)" stroke-width="2.5"/>
      <circle cx="24" cy="24" r="10" stroke="#0066FF" stroke-width="2.5"/>
      <circle cx="24" cy="24" r="4" fill="#0066FF"/>
      <path d="M12 24C12 17.3726 17.3726 12 24 12" stroke="#0284C7" stroke-width="2" stroke-linecap="round"/>
      <path d="M24 36C30.6274 36 36 30.6274 36 24" stroke="#0284C7" stroke-width="2" stroke-linecap="round"/>
      <path d="M7 16L4 14" stroke="#0066FF" stroke-width="2" stroke-linecap="round"/>
      <path d="M41 16L44 14" stroke="#0066FF" stroke-width="2" stroke-linecap="round"/>
      <path d="M7 32L4 34" stroke="#0066FF" stroke-width="2" stroke-linecap="round"/>
      <path d="M41 32L44 34" stroke="#0066FF" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  ip_pbx: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-svg-icon">
      <defs>
        <linearGradient id="pbx-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0284C7"/>
          <stop offset="1" stop-color="#6366F1"/>
        </linearGradient>
      </defs>
      <path d="M10 8H38C39.1046 8 40 8.89543 40 10V38C40 39.1046 39.1046 40 38 40H10C8.89543 40 8 39.1046 8 38V10C8 8.89543 8.89543 8 10 8Z" stroke="url(#pbx-grad)" stroke-width="2.5"/>
      <path d="M14 16H34" stroke="#0066FF" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="16" cy="24" r="2.5" fill="#0066FF"/>
      <circle cx="24" cy="24" r="2.5" fill="#0066FF"/>
      <circle cx="32" cy="24" r="2.5" fill="#0066FF"/>
      <circle cx="16" cy="32" r="2.5" fill="#0066FF"/>
      <circle cx="24" cy="32" r="2.5" fill="#0066FF"/>
      <circle cx="32" cy="32" r="2.5" fill="#0066FF"/>
      <path d="M20 8V4" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M28 8V4" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  bms_systems: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-svg-icon">
      <defs>
        <linearGradient id="bms-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0066FF"/>
          <stop offset="1" stop-color="#059669"/>
        </linearGradient>
      </defs>
      <path d="M8 42V12L24 4L40 12V42H8Z" stroke="url(#bms-grad)" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="14" y="16" width="6" height="6" rx="1.5" stroke="#0066FF" stroke-width="2"/>
      <rect x="28" y="16" width="6" height="6" rx="1.5" stroke="#0066FF" stroke-width="2"/>
      <rect x="14" y="26" width="6" height="6" rx="1.5" stroke="#0066FF" stroke-width="2"/>
      <rect x="28" y="26" width="6" height="6" rx="1.5" stroke="#0066FF" stroke-width="2"/>
      <path d="M21 42V34H27V42" stroke="#059669" stroke-width="2"/>
      <circle cx="24" cy="8" r="2" fill="#0066FF"/>
    </svg>
  `,

  smart_home: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-svg-icon">
      <defs>
        <linearGradient id="home-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0066FF"/>
          <stop offset="1" stop-color="#7C3AED"/>
        </linearGradient>
      </defs>
      <path d="M6 20L24 6L42 20V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V20Z" stroke="url(#home-grad)" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="24" cy="27" r="6" stroke="#0066FF" stroke-width="2.5"/>
      <path d="M24 23V27L27 29" stroke="#0066FF" stroke-width="2" stroke-linecap="round"/>
      <path d="M19 14L24 10L29 14" stroke="#0284C7" stroke-width="2" stroke-linecap="round"/>
      <path d="M18 42V35H30V42" stroke="#7C3AED" stroke-width="2"/>
    </svg>
  `,

  audiovisual: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-svg-icon">
      <defs>
        <linearGradient id="av-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0066FF"/>
          <stop offset="1" stop-color="#DB2777"/>
        </linearGradient>
      </defs>
      <rect x="6" y="8" width="36" height="24" rx="4" stroke="url(#av-grad)" stroke-width="2.5"/>
      <path d="M16 38L20 32H28L32 38" stroke="url(#av-grad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 42H34" stroke="#0066FF" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="21,15 29,20 21,25" fill="#0066FF"/>
      <circle cx="36" cy="13" r="2" fill="#0066FF"/>
    </svg>
  `,

  shield_check: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  `,

  cpu: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
    </svg>
  `,

  network_nodes: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  `,

  arrow_left: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  `,

  arrow_right: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `,

  close: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `,

  check: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `,

  phone: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  `,

  mail: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,

  location: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  `,

  sparkles: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  `,

  layers: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  `
};

export function getIcon(name: string): string {
  return serviceIcons[name] || serviceIcons['shield_check'];
}
