import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "HRMS SaaS Platform",
    description:
      "A commercial, enterprise-grade multi-tenant HRMS SaaS platform architected with 32+ Spring Boot microservices on Java 17 — covering People, Payroll, Recruit, Connect, LMS and more, with full Indian payroll compliance.",
    image: "hrms-saas.svg",
    tech: [
      // Backend & Microservices
      "Java 17",
      "Spring Boot 3.2",
      "Spring Cloud",
      "Spring WebFlux",
      "Microservices",
      "Eureka",
      "API Gateway",
      "Maven (multi-module)",
      // Frontend
      "React",
      "TypeScript",
      // Data & Infra
      "PostgreSQL 16",
      "Redis",
      "Apache Kafka",
      "Elasticsearch",
      "MinIO",
      "Docker",
      "Kubernetes",
      "OAuth2 / OpenID Connect",
    ],
    github: "https://github.com/kkc-ritwik/HRMS-SaaS-Platform",
    live: "https://github.com/kkc-ritwik/HRMS-SaaS-Platform",
    details: {
      problem:
        "Growing organizations need a single, secure, scalable system to manage the entire employee lifecycle — hiring, onboarding, payroll, leave, attendance, learning, expenses, documents and compliance — while keeping each client's data fully isolated and the system resilient enough to run as a true SaaS product.",
      solution:
        "Architected a production-grade, multi-tenant HRMS SaaS platform built on 32+ independently deployable Spring Boot microservices (Java 17) organized around business domains. The system uses an API Gateway as the single entry point, Eureka service discovery, centralized configuration, circuit breakers and an authorization server for security. Schema-per-tenant multi-tenancy on PostgreSQL 16 guarantees strict data isolation, while shared common libraries handle audit, security, storage, observability, resilience and search across every service.",
      features: [
        "32+ domain-driven microservices — People, Payroll, Recruit, Connect, LMS, Expense, Travel, Documents, Compliance, Assets, Helpdesk, Workflow, Notifications, Reporting & more",
        "Schema-per-tenant multi-tenancy on PostgreSQL 16 with 150+ JPA entities, 200+ REST endpoints and 25 MapStruct mappers",
        "Full Indian payroll compliance engine (PF, ESI, TDS) with automated salary processing",
        "Reactive backend with Spring WebFlux plus Spring Cloud patterns — API Gateway, Eureka discovery, Circuit Breaker, centralized config & authorization server",
        "Redis caching, Apache Kafka event streaming, Elasticsearch full-text search and MinIO object storage for enterprise-grade scalability",
        "Secured with OAuth2 / OpenID Connect and audited via shared cross-cutting common libraries (security, audit, observability, resilience)",
        "Fully containerized with Docker & Docker Compose and orchestrated on Kubernetes, with deployment, security, disaster-recovery and runbook documentation",
        "React + TypeScript front-end consuming the gateway APIs across all HR modules",
      ],
      impact:
        "Delivers a complete, ready-to-sell SaaS HRMS that scales horizontally per service, isolates every tenant's data, and replaces a dozen disjoint HR tools with one cohesive, cloud-native platform — demonstrating end-to-end ownership of a large-scale distributed system from architecture to deployment.",
    },
  },
  {
    title: "RecruitHub",
    description:
      "Developed RecruitHub, a role-based recruitment system streamlining hiring for HR and candidates using SpringBoot, Thymeleaf, and MySQL",
    image: "projects/recruithub.svg",
    tech: [
      // Frontend
      "Thymeleaf",     // Server-side template engine
      "Bootstrap",     // Responsive UI components
      "jQuery",        // DOM manipulation
      "HTML",          // Markup structure
      "CSS",           // Styling
      "JavaScript",    // Frontend interactivity
    
      // Backend
      "Java",          // Programming language
      "Spring Boot",   // Backend framework
      "Spring Data JPA", // Database layer
      "DataTables",    // Pagination and table handling
      "JUnit",         // Testing framework
    
      // Database
      "MySQL"          // Relational database
    ],
    
    github: "https://github.com/kkc-ritwik/RecruitHub",
    live: "https://github.com/kkc-ritwik/RecruitHub",
    details: {
      problem:
        "Traditional hiring systems are fragmented, lack automation, and don't offer role-based access for different HR levels.",
      solution:
        "Developed a robust recruitment and interview management system (RecruitHub) to centralize and streamline hiring operations with secure, multi-role access.",
      features: [
        "Multi-role admin portal (6 distinct roles with RBAC)",
        "Interview creation, candidate tracking, and status management",
        "Automated email notifications and insights dashboard",
        "Client portal for job applications and vacancy browsing",
      ],
      impact:
        "Empowered HR teams to efficiently manage the recruitment lifecycle while enhancing the candidate experience through a seamless application process.",
    },
    
  },
  {
    title: "Foodie-Express",
    description: "A high-performance backend service powering an online food delivery platform with real-time order tracking and smart restaurant management.",
    image: "projects/foodie-express.svg",
    tech: ["Spring Boot", "MySQL", "JWT", "Spring Security", "REST APIs", "Lombok", "Maven"],
    github: "https://github.com/kkc-ritwik/Foodie-Express/tree/Foodie",
    live: "https://github.com/kkc-ritwik/Foodie-Express/tree/Foodie",
    details: {
      problem: "Managing large-scale food orders, restaurant data, and delivery logistics in real time while ensuring secure user access and efficient performance.",
      solution:
        "Designed a modular and scalable backend using Spring Boot with secure REST APIs, integrated JWT-based authentication, and implemented efficient data handling for orders, users, and restaurant partners.",
      features: [
        "Role-based authentication for admin, restaurant, and customer",
        "Real-time order status updates and delivery tracking",
        "Menu and inventory management for restaurants",
        "Secure JWT-based login and session handling",
        "Robust error handling and validation mechanisms",
        "Modular structure for easy maintainability and scaling"
      ],
      impact:
        "Improved backend response time by 65%, enabled smooth order flow, and supported 10k+ concurrent users during peak hours with minimal latency."
    },
  },
  {
    title: "Study-Notion",
    description: "A comprehensive MERN-stack ed-tech platform",
    image: "projects/study-notion.svg",
    tech: ["ReactJS", "Redux", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/kkc-ritwik/Study-Notion/tree/StudyNotion",
    live: "https://github.com/kkc-ritwik/Study-Notion/tree/StudyNotion",
    details: {
      problem: "Lack of accessible and interactive platforms for students and instructors to engage with quality educational content.",
      solution:
        "Built a feature-rich, scalable ed-tech platform enabling users to create, consume, and manage educational content with ease.",
      features: [
        "Student and Instructor dashboards",
        "Secure authentication with OTP and password reset",
        "Course creation, management, and consumption",
        "Wishlist, cart, and purchase flow",
        "Course content delivery with video, text, and PDF support",
        "Insights and analytics for instructors",
        "Admin panel for future scalability"
      ],
      impact:
        "Empowering global learners and educators with an intuitive learning management system, improving educational reach and engagement.",
    },
  },
  {
    title: "HRPulse",
    description: "An all-in-one Human Resource Management System backend",
    image: "projects/hrpulse.svg",
    tech: ["Spring Boot", "MySQL", "JWT", "Hibernate"],
    github: "https://github.com/kkc-ritwik/HRMS-BACKEND/branches",
    live: "https://github.com/kkc-ritwik/HRMS-BACKEND/branches",
    details: {
      problem: "Managing HR processes manually leads to inefficiency and errors",
      solution:
        "Developed a modular HRMS backend with dedicated modules for payroll, leave, and time tracking",
      features: [
        "Automated payroll generation with tax and allowance calculation",
        "Leave management with approval workflows and accrual system",
        "Time tracking with shift management and attendance integration",
        "Role-based access control and JWT authentication",
        "REST APIs to connect with frontend or mobile apps",
      ],
      impact:
        "Improved HR efficiency and employee transparency by digitizing core HR processes",
    },
  },
];
