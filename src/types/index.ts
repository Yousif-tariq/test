export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  category: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  applications: string[];
  technologies: string[];
  imagePath?: string;
}

export interface EcosystemNode {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  role: string;
  description: string;
  connectsTo: string[];
  iconKey: string;
  metrics: string;
}

export interface SectorItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
  tag: string;
}

export interface IndicatorItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  icon: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge?: string;
  spanCol?: number;
}
