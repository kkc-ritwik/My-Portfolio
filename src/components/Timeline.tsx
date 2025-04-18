// import { Briefcase, GraduationCap } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { timelineData } from '../data/timeline';

// export default function Timeline() {
//   return (
//     <section id="timeline" className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//          💼 Experience & 🎓 Education
//         </motion.h2>
        
//         <div className="relative">
//           {/* Vertical Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />

//           <div className="space-y-12">
//             {timelineData.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
//               >
//                 {/* Content */}
//                 <div className="w-1/2 pr-8 pl-8">
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     className={`bg-white p-6 rounded-lg shadow-md ${
//                       index % 2 === 0 ? 'text-right' : 'text-left'
//                     }`}
//                   >
//                     <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-2">
//                       {item.year}
//                     </span>
//                     <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
//                     <p className="text-indigo-600 font-medium">{item.company}</p>
//                     <p className="text-gray-600 mt-2">{item.description}</p>
//                   </motion.div>
//                 </div>

//                 {/* Icon */}
//                 <motion.div
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                   className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10"
//                 >
//                   {item.icon === 'work' ? (
//                     <Briefcase className="w-6 h-6 text-white" />
//                   ) : (
//                     <GraduationCap className="w-6 h-6 text-white" />
//                   )}
//                 </motion.div>

//                 {/* Empty space for the other side */}
//                 <div className="w-1/2" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Briefcase, GraduationCap, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-green-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-purple-500 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-yellow-500 animate-ping"></div>
      </div>
      
      {/* Timeline grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <Clock className="text-5xl md:text-6xl text-blue-500 mr-4 stroke-[1.5]" />
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Experience & Education
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Vertical Line - Animated glow effect */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-teal-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="w-1/2 pr-8 pl-8">
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(59,130,246,0.4)" }}
                    className={`backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-blue-500/30 shadow-lg ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <motion.span 
                      className="inline-flex items-center px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm font-medium mb-2 border border-blue-500/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.year}
                    </motion.span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-blue-300 font-medium">{item.company}</p>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                    
                    {/* Decorative corner accent */}
                    <div className={`absolute ${index % 2 === 0 ? 'top-0 left-0' : 'top-0 right-0'} w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-br-full`}></div>
                  </motion.div>
                </div>

                {/* Icon - with animated glow effect */}
                <motion.div
                  whileHover={{ rotate: 360, boxShadow: "0 0 15px rgba(59,130,246,0.8)" }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                >
                  {item.icon === 'work' ? (
                    <Briefcase className="w-8 h-8 text-white" />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-white" />
                  )}
                </motion.div>

                {/* Empty space for the other side */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements at the bottom */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
        </motion.div>
      </div>
    </section>
  );
}
