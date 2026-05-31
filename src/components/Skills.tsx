import { Cloud, Code, Database, Globe, Palette, Server, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code,
    skills: ['Java', 'C#', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend Development',
    icon: Globe,
    skills: ['React.js', 'Angular', 'Blazor', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Thymeleaf'],
  },
  {
    category: 'Backend & Frameworks',
    icon: Server,
    skills: [
      'Spring Boot',
      'Spring WebFlux',
      '.NET Web API',
      'Entity Framework Core',
      'Node.js',
      'Express',
      'REST APIs',
      'Microservices',
      'Kafka',
      'Maven'
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MinIO'],
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      'AWS (EC2)',
      'Microsoft Azure',
      'Azure DevOps',
      'GCP',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Git',
      'GitHub'
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: Terminal,
    skills: [
      'IntelliJ IDEA',
      'VS Code',
      'Postman',
      'Swagger',
      'Jira',
      'JUnit',
      'OAuth2 / OpenID Connect'
    ],
  },
  {
    category: 'Design',
    icon: Palette,
    skills: [
      'Figma',
      'UI/UX',
      'Responsive Design',
      'Canva',
      'Adobe Photoshop',
      'Adobe Illustrator'
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-indigo-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-purple-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-pink-500 animate-ping"></div>
      </div>

      {/* Skills grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <Code className="text-5xl md:text-6xl text-indigo-500 mr-4 stroke-[1.5]" />
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
            Skills & Expertise
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-indigo-500/30 shadow-lg relative overflow-hidden"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(99,102,241,0.4)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-bl-full"></div>

                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full text-sm border border-indigo-500/30"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(99,102,241,0.3)" }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * skillIndex }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Skill level indicator */}
                <motion.div
                  className="w-full h-1 bg-gray-700 rounded-full mt-6 overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${85 - index * 5}%` }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Decorative elements at the bottom */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
        </motion.div>
      </div>
    </section>
  );
}
