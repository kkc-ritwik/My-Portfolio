// import { motion } from "framer-motion";
// import { fadeInUp, staggerContainer } from "../utils/animations";

// const Certifications = () => {
//   return (
//     <section id="certifications" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-16"
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           📜 Professional Certifications
//         </motion.h2>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           <motion.div 
//             className="bg-white rounded-xl p-6 shadow-sm"
//             variants={fadeInUp}
//           >
//             <h3 className="text-xl font-bold text-gray-900 mb-3">Web Development Bootcamp [MERN Stack]</h3>
//             <p className="text-gray-700 mb-4">
//               Completed intensive 4.5-month MERN stack course by CodeHelp. Developed 5+ full-stack applications.
//             </p>
//             <a 
//               href="https://drive.google.com/file/d/1wqPgpEVKsR1kUkLAMHJ_ta7_YN7LSOiz/view" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
//             >
//               View Certificate
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//               </svg>
//             </a>
//           </motion.div>

//           <motion.div 
//             className="bg-white rounded-xl p-6 shadow-sm"
//             variants={fadeInUp}
//           >
//             <h3 className="text-xl font-bold text-gray-900 mb-3">DSA Master Course [Supreme Batch]</h3>
//             <p className="text-gray-700 mb-4">
//               Completed intensive 5-month DSA course by CodeHelp. Implemented 200+ optimized solutions.
//             </p>
//             <a 
//               href="https://drive.google.com/file/d/1sH7_QYtxElw-YXmCoh7GiBEYzHphyGGp/view" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
//             >
//               View Certificate
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//               </svg>
//             </a>
//           </motion.div>

//           <motion.div 
//             className="bg-white rounded-xl p-6 shadow-sm"
//             variants={fadeInUp}
//           >
//             <h3 className="text-xl font-bold text-gray-900 mb-3">Spring Boot Advanced Course</h3>
//             <p className="text-gray-700 mb-4">
//               Mastered 4-month enterprise Spring Boot development course by Coding Shuttle. Microservices, AWS, Docker & Kubernetes.
//             </p>
//             <a 
//               href="https://drive.google.com/file/d/16uGzwLOMD9R4py57hrYeRjQ02ySm2tgp/view" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
//             >
//               View Certificate
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//               </svg>
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Certifications;

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Scroll, ExternalLink, BookOpen, Code, Server } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-emerald-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-teal-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-green-500 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-lime-500 animate-ping"></div>
      </div>
      
      {/* Certifications pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <Scroll className="text-5xl md:text-6xl text-emerald-500 mr-4 stroke-[1.5]" />
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
            Professional Certifications
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-emerald-500/30 shadow-lg relative overflow-hidden"
            variants={fadeInUp}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 25px -5px rgba(16,185,129,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/20 to-transparent rounded-tr-full"></div>
            
            <motion.div 
              className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Code className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-xl font-bold text-white mb-3">Web Development Bootcamp [MERN Stack]</h3>
            <div className="inline-flex items-center px-3 py-1 bg-emerald-900/50 text-emerald-200 rounded-full text-sm font-medium mb-4 border border-emerald-500/30">
              <BookOpen className="w-3 h-3 mr-1" />
              CodeHelp
            </div>
            <p className="text-gray-300 mb-6">
              Completed intensive 4.5-month MERN stack course by CodeHelp. Developed 5+ full-stack applications.
            </p>
            <motion.a 
              href="https://drive.google.com/file/d/1wqPgpEVKsR1kUkLAMHJ_ta7_YN7LSOiz/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate
              <ExternalLink className="h-4 w-4 ml-2" />
            </motion.a>
          </motion.div>

          <motion.div 
            className="backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-teal-500/30 shadow-lg relative overflow-hidden"
            variants={fadeInUp}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 25px -5px rgba(20,184,166,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-tr-full"></div>
            
            <motion.div 
              className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(20,184,166,0.5)]"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Code className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-xl font-bold text-white mb-3">DSA Master Course [Supreme Batch]</h3>
            <div className="inline-flex items-center px-3 py-1 bg-teal-900/50 text-teal-200 rounded-full text-sm font-medium mb-4 border border-teal-500/30">
              <BookOpen className="w-3 h-3 mr-1" />
              CodeHelp
            </div>
            <p className="text-gray-300 mb-6">
              Completed intensive 5-month DSA course by CodeHelp. Implemented 200+ optimized solutions.
            </p>
            <motion.a 
              href="https://drive.google.com/file/d/1sH7_QYtxElw-YXmCoh7GiBEYzHphyGGp/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate
              <ExternalLink className="h-4 w-4 ml-2" />
            </motion.a>
          </motion.div>

          <motion.div 
            className="backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-green-500/30 shadow-lg relative overflow-hidden"
            variants={fadeInUp}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 25px -5px rgba(34,197,94,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-tr-full"></div>
            
            <motion.div 
              className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Server className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-xl font-bold text-white mb-3">Spring Boot Advanced Course</h3>
            <div className="inline-flex items-center px-3 py-1 bg-green-900/50 text-green-200 rounded-full text-sm font-medium mb-4 border border-green-500/30">
              <BookOpen className="w-3 h-3 mr-1" />
              Coding Shuttle
            </div>
            <p className="text-gray-300 mb-6">
              Mastered 4-month enterprise Spring Boot development course by Coding Shuttle. Microservices, AWS, Docker & Kubernetes.
            </p>
            <motion.a 
              href="https://drive.google.com/file/d/16uGzwLOMD9R4py57hrYeRjQ02ySm2tgp/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate
              <ExternalLink className="h-4 w-4 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements at the bottom */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
