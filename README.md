# React Portfolio

## Overview
A modern, responsive portfolio website built with React and TypeScript, showcasing my projects, skills, and professional experience.

## Features
- **React Components**: Modular design with reusable components
- **TypeScript Integration**: Type-safe code with improved developer experience
- **Responsive Design**: Optimized for all device sizes
- **Project Showcase**: Interactive project gallery with modal details
- **Timeline View**: Chronological display of education and work experience
- **Skill Visualization**: Visual representation of technical skills
- **Contact Form**: Direct communication channel for visitors
- **Animation Effects**: Smooth transitions and engaging UI interactions

## Tech Stack
- **Framework**: React
- **Language**: TypeScript
- **Styling**: CSS with Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## Project Structure
```
/
├── node_modules/          # Dependencies
├── public/                # Static files
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── About.tsx      # About section
│   │   ├── Achievements.tsx # Achievements section
│   │   ├── Certifications.tsx # Certifications section
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Footer.tsx     # Footer component
│   │   ├── Gaming.tsx     # Gaming interests section
│   │   ├── Hero.tsx       # Hero/landing section
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── ProjectModal.tsx # Project details modal
│   │   ├── Projects.tsx   # Projects gallery
│   │   ├── Resume.tsx     # Resume section
│   │   ├── Skills.tsx     # Skills display
│   │   └── Timeline.tsx   # Timeline component
│   ├── data/              # Data files
│   │   ├── projects.ts    # Projects information
│   │   └── timeline.ts    # Timeline data
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       # Type declarations
│   ├── utils/             # Utility functions
│   │   ├── animations.ts  # Animation helpers
│   │   └── gradients.ts   # Gradient generators
│   ├── App.tsx            # Main application component
│   ├── index.css          # Global styles
│   └── main.tsx           # Entry point
├── .eslintrc.js           # ESLint configuration
├── .gitignore             # Git ignore rules
├── package-lock.json      # Package dependencies lock
├── package.json           # Project metadata and dependencies
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.app.json      # TypeScript app configuration
├── tsconfig.json          # Main TypeScript configuration
├── tsconfig.node.json     # Node-specific TypeScript config
└── vite.config.ts         # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-portfolio-master.git
cd react-portfolio-master
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open `http://localhost:5173` in your browser

### Building for Production
```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready to be deployed.

## Customization
Edit the following files to personalize your portfolio:
- `src/data/projects.ts` - Add or modify your projects
- `src/data/timeline.ts` - Update your experience and education
- `src/components/About.tsx` - Modify your about section
- `src/components/Skills.tsx` - Update your skills
- `src/components/Contact.tsx` - Configure contact information

## Deployment
This portfolio can be deployed to:
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Setup continuous deployment from your repo
- **GitHub Pages**: Deploy the built files to GitHub Pages

## Further Development
- Add dark/light mode toggle
- Implement blog section
- Add internationalization support
- Enhance accessibility features
- Implement testing with React Testing Library and Jest

## License
[MIT](LICENSE)

## Contact
- Ritwik Raj
- Email: ritwiksinghkkc@gmail.com
- LinkedIn: https://www.linkedin.com/in/kkc-ritwik/?profileId=ACoAADJac8IB7GnGK1zqU0ORR-yoO54q7kOg80A
- GitHub: https://github.com/kkc-ritwik