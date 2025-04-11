import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "RecruitHub",
    description:
      "Developed RecruitHub, a role-based recruitment system streamlining hiring for HR and candidates using SpringBoot, Thymeleaf, and MySQL",
    image: "hirrd.png",
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
    live: "https://youtu.be/2XF-HgauItk?si=xnuz7_gpUVBBgdW6",
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
    image: "schedulrr.png",
    tech: ["Spring Boot", "MySQL", "JWT", "Spring Security", "REST APIs", "Lombok", "Maven"],
    github: "https://github.com/kkc-ritwik/Foodie-Express/tree/Foodie",
    live: "https://youtu.be/glAC7d-TYSM?si=KW5Wrdeh5uVPpu7c",
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
    image: "zcrum.png",
    tech: ["ReactJS", "Redux", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/kkc-ritwik/Study-Notion/tree/StudyNotion",
    live: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
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
    image: "reflct.png",
    tech: ["Spring Boot", "MySQL", "JWT", "Hibernate"],
    github: "https://github.com/kkc-ritwik/HRMS-BACKEND/branches",
    live: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
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
