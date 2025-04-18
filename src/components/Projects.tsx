// import { useState } from 'react';
// import { Github, ExternalLink } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { projectsData } from '../data/projects';
// import ProjectModal from './ProjectModal';
// import type { ProjectItem } from '../types';

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//       🚀 Featured Projects
//         </motion.h2>
        
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 gap-8"
//           variants={{
//             hidden: { opacity: 0 },
//             show: {
//               opacity: 1,
//               transition: { staggerChildren: 0.2 }
//             }
//           }}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           {projectsData.map((project, index) => (
//             <motion.div
//               key={index}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 show: { opacity: 1, y: 0 }
//               }}
//               whileHover={{ y: -8 }}
//               onClick={() => setSelectedProject(project)}
//               className="group relative bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
//             >
//               <div className="aspect-video overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
//                 />
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
//                 <p className="text-gray-600 mb-4">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-4">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <Github className="w-5 h-5" />
//                     Code
//                   </a>
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <ExternalLink className="w-5 h-5" />
//                     Live Demo Coming Soon 🚀
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       <ProjectModal
//         project={selectedProject!}
//         isOpen={!!selectedProject}
//         onClose={() => setSelectedProject(null)}
//       />
//     </section>
//   );
// }


import { useState } from 'react';
import { Github, ExternalLink, Code, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';
import type { ProjectItem } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-purple-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-blue-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-green-500 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-red-500 animate-ping"></div>
      </div>
      
      {/* Code pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <Code className="text-5xl md:text-6xl text-purple-500 mr-4 stroke-[1.5]" />
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Featured Projects
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(123,58,180,0.4)" }}
              onClick={() => setSelectedProject(project)}
              className="group relative backdrop-blur-sm bg-white/10 rounded-xl overflow-hidden border border-purple-500/30 shadow-lg cursor-pointer transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20">
                  <motion.div 
                    className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Layers className="w-3 h-3 inline mr-1" /> Project {index + 1}
                  </motion.div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-full transition-colors duration-300 border border-gray-600/30"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white bg-purple-800/50 hover:bg-purple-700/50 px-4 py-2 rounded-full transition-colors duration-300 border border-purple-500/30"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo Coming Soon 🚀
                  </motion.a>
                </div>
              </div>
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
