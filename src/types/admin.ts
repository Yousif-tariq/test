import { ServiceItem, EcosystemNode, SectorItem, IndicatorItem, PillarItem, WhyUsItem } from './index';

export type UserRole = 'super_admin' | 'content_manager' | 'media_manager' | 'viewer';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  roleTitle: string;
  avatar?: string;
  status: 'active' | 'inactive';
  lastLogin?: string;
  createdAt: string;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  actionType: 'create' | 'update' | 'delete' | 'publish' | 'restore' | 'upload' | 'login' | 'reorder' | 'security';
  section: string;
  details: string;
}

export interface Revision {
  id: string;
  version: string;
  timestamp: string;
  authorName: string;
  summary: string;
  snapshot: any; // Full CMSState snapshot
}

export interface MediaItem {
  id: string;
  name: string;
  path: string;
  type: 'image' | 'video' | 'svg';
  sizeKB: number;
  dimensions?: string;
  usedIn: string[];
  uploadedAt: string;
}

export interface IconItem {
  id: string;
  name: string;
  serviceName: string;
  category: string;
  path: string;
  usage: string;
  status: 'active' | 'inactive';
}

export interface NavLinkItem {
  id: string;
  label: string;
  url: string;
  order: number;
  isActive: boolean;
}

export interface HeroContent {
  statusPill: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  videoPath: string;
  posterPath: string;
  primaryBtnText: string;
  primaryBtnUrl: string;
  secondaryBtnText: string;
  secondaryBtnUrl: string;
  features: { icon: string; text: string }[];
  isActive: boolean;
}

export interface AboutContent {
  badge: string;
  title: string;
  titleHighlight: string;
  leadText: string;
  subtitle: string;
  imagePath: string;
  floatingBadgeText: string;
  imageOverlayTitle: string;
  imageOverlaySubtitle: string;
  pillars: PillarItem[];
  vision?: string;
  mission?: string;
  values?: string[];
  isActive: boolean;
}

export interface CTAContent {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  bgImagePath: string;
  isActive: boolean;
}

export interface ContactContent {
  phone: string;
  email: string;
  whatsapp?: string;
  address: string;
  locationMap?: string;
  workingHours: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  isActive: boolean;
}

export interface FooterContent {
  logoPath: string;
  brandName: string;
  brandNameEn: string;
  brandDesc: string;
  copyrightText: string;
  featuredServices: string[];
  isActive: boolean;
}

export interface SiteSettings {
  siteName: string;
  companyName: string;
  companyNameEn: string;
  tagline: string;
  logoPath: string;
  faviconPath: string;
  primaryColor: string;
  secondaryColor: string;
  themePreference: 'light' | 'dark' | 'auto';
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogImage: string;
}

export interface CMSData {
  settings: SiteSettings;
  navigation: NavLinkItem[];
  hero: HeroContent;
  stats: IndicatorItem[];
  about: AboutContent;
  services: ServiceItem[];
  solutions: EcosystemNode[];
  whyUs: WhyUsItem[];
  sectors: SectorItem[];
  cta: CTAContent;
  contact: ContactContent;
  footer: FooterContent;
  media: MediaItem[];
  icons: IconItem[];
}

export interface CMSStoreState {
  draft: CMSData;
  published: CMSData;
  isDraftDirty: boolean;
  lastSavedAt: string;
  lastPublishedAt: string;
  currentVersion: string;
  users: AdminUser[];
  activityLogs: ActivityLog[];
  revisions: Revision[];
}
