// import { motion } from "framer-motion";
// import { fadeInUp, staggerContainer } from "../utils/animations";

// const Achievements = () => {
//   return (
//     <section id="achievements" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-16"
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           🏆 Achievements
//         </motion.h2>

//         <motion.div
//           className="max-w-4xl mx-auto space-y-12"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           <motion.div 
//             className="bg-gray-50 rounded-xl p-8 shadow-sm"
//             variants={fadeInUp}
//           >
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart India Hackathon National Finalist</h3>
//             <p className="text-lg text-gray-700 mb-6">
//               Led team of 6 to develop ML-based traffic management solution reducing congestion by 30% - National Level
//             </p>
//             <a 
//               href="https://drive.google.com/file/d/19rz_jw3ElrWwymocVvOP6jtBk5dSADPS/view" 
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
//             className="bg-gray-50 rounded-xl p-8 shadow-sm"
//             variants={fadeInUp}
//           >
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">GP Birla Scholarship Academic Excellence</h3>
//             <p className="text-lg text-gray-700 mb-6">
//               Recognized for consistent performance and dedication to studies - University Level
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Achievements;

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Award, ExternalLink, Medal, Trophy } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-yellow-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-amber-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-orange-500 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-red-500 animate-ping"></div>
      </div>
      
      {/* Achievements pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <Trophy className="text-5xl md:text-6xl text-yellow-500 mr-4 stroke-[1.5]" />
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            Achievements
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-yellow-500/30 shadow-lg relative overflow-hidden"
            variants={fadeInUp}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 25px -5px rgba(234,179,8,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-tr-full"></div>
            
            <div className="flex items-start">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mr-6 shadow-[0_0_15px_rgba(234,179,8,0.5)] flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Smart India Hackathon National Finalist</h3>
                <div className="inline-flex items-center px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm font-medium mb-4 border border-yellow-500/30">
                  <Medal className="w-3 h-3 mr-1" />
                  National Level
                </div>
                <p className="text-lg text-gray-300 mb-6">
                  Led team of 6 to develop ML-based traffic management solution reducing congestion by 30%
                </p>
                <motion.a 
                  href="https://drive.google.com/file/d/19rz_jw3ElrWwymocVvOP6jtBk5dSADPS/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4 ml-2" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-orange-500/30 shadow-lg relative overflow-hidden"
            variants={fadeInUp}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 25px -5px rgba(249,115,22,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-tr-full"></div>
            
            <div className="flex items-start">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex items-center justify-center mr-6 shadow-[0_0_15px_rgba(249,115,22,0.5)] flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Medal className="w-8 h-8 text-white" />
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">GP Birla Scholarship Academic Excellence</h3>
                <div className="inline-flex items-center px-3 py-1 bg-orange-900/50 text-orange-200 rounded-full text-sm font-medium mb-4 border border-orange-500/30">
                  <Trophy className="w-3 h-3 mr-1" />
                  University Level
                </div>
                <p className="text-lg text-gray-300 mb-6">
                  Recognized for consistent performance and dedication to studies
                </p>
                <div className="h-[36px]"></div> {/* Spacer to align with button in first card */}
              </div>
            </div>
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
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
