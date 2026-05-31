import { Server, Layers, Cloud, Plug, LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  pricing: string;
  accent: string; // tailwind color name used for gradients/borders
}

export const servicesData: ServiceItem[] = [
  {
    icon: Server,
    title: 'Backend & Microservices',
    tagline: 'Java • Spring Boot • .NET',
    description:
      'Scalable, secure backend systems and microservice architectures built to handle real production load.',
    deliverables: [
      'Spring Boot / .NET Web API services',
      'Microservices with API Gateway & service discovery',
      'JWT / OAuth2 authentication & RBAC',
      'Database design (PostgreSQL, SQL Server, MongoDB)',
      'Clean, documented, tested code (JUnit)',
    ],
    pricing: 'Fixed-price or hourly',
    accent: 'indigo',
  },
  {
    icon: Layers,
    title: 'Full-Stack Web Apps',
    tagline: 'React • Angular • Blazor',
    description:
      'End-to-end web applications — from a polished, responsive UI to a robust backend and database.',
    deliverables: [
      'React / Angular / Blazor front-ends',
      'Responsive, modern UI with Tailwind CSS',
      'REST API integration & state management',
      'Authentication, dashboards & admin panels',
      'Deployment & handover documentation',
    ],
    pricing: 'Project-based',
    accent: 'fuchsia',
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment & DevOps',
    tagline: 'AWS • Azure • Docker • K8s',
    description:
      'Get your app live and reliable on the cloud, with containerization and automated pipelines.',
    deliverables: [
      'AWS EC2 & Microsoft Azure deployment',
      'Docker containerization',
      'Kubernetes orchestration',
      'CI/CD pipelines (Azure DevOps, GitHub)',
      'Monitoring, scaling & security setup',
    ],
    pricing: 'Fixed-price or retainer',
    accent: 'cyan',
  },
  {
    icon: Plug,
    title: 'API Design & Integration',
    tagline: 'REST • Kafka • Third-party',
    description:
      'Well-designed APIs and seamless integrations that connect your systems and third-party services.',
    deliverables: [
      'RESTful API design & documentation (Swagger)',
      'Third-party & payment integrations',
      'Event streaming with Apache Kafka',
      'Caching (Redis) & search (Elasticsearch)',
      'Performance optimization & versioning',
    ],
    pricing: 'Hourly or fixed-price',
    accent: 'emerald',
  },
];
