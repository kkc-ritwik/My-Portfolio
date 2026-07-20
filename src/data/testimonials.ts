// NOTE: These are placeholder testimonials written in a realistic tone.
// Replace the `quote`, `name`, and `role` with the REAL words/details from your
// clients before sharing the portfolio. Never attribute a quote a client did not give.

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number; // 1-5
  accent: string;
  initials: string;
}

export const testimonialsData: Testimonial[] = [
  {
    quote:
      'Ritwik delivered our backend microservices ahead of schedule and the code quality was excellent. Clear communication throughout, and he handled the AWS deployment end to end. Will definitely work with him again.',
    name: 'Client Name',
    role: 'Project Lead',
    company: 'Private Client',
    rating: 5,
    accent: 'violet',
    initials: 'PC',
  },
  {
    quote:
      'We needed a reactive, scalable backend with a proper microservices architecture and Ritwik nailed it. Strong on Spring Boot, Kafka and security. A reliable developer who genuinely understands distributed systems.',
    name: 'Client Name',
    role: 'CTO',
    company: 'Freelance Client',
    rating: 5,
    accent: 'fuchsia',
    initials: 'FC',
  },
  {
    quote:
      'Great experience from start to finish. Ritwik took our rough idea, proposed a clean architecture, and shipped a full-stack app that just works. Responsive across time zones and easy to collaborate with.',
    name: 'Client Name',
    role: 'Founder',
    company: 'Freelance Project',
    rating: 5,
    accent: 'cyan',
    initials: 'FP',
  },
];
