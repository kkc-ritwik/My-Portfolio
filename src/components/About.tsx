// import { motion } from "framer-motion";
// import { fadeInUp, staggerContainer } from "../utils/animations";

// export default function About() {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-16"
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           👨‍💻 About Me
//         </motion.h2>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           <motion.div
//             className="aspect-square rounded-2xl overflow-hidden"
//             variants={fadeInUp}
//           >
//             <img
//               src="/piyush.png"
//               alt="Piyush Agarwal"
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </motion.div>

//           <motion.div className="space-y-6" variants={staggerContainer}>
//             <motion.p className="text-lg text-gray-600 text-justify" variants={fadeInUp}>
//               I'm Ritwik Raj, a passionate and results-driven Full Stack Developer with
//               hands-on experience in building scalable, production-grade web
//               applications using modern technologies like Spring Boot, ReactJS, and
//               NodeJS. I bring a solid foundation in computer science principles, cloud
//               deployment, and test-driven development, with a strong commitment to
//               writing clean, efficient, and maintainable code.
//             </motion.p>
//             <motion.p className="text-lg text-gray-600 text-justify" variants={fadeInUp}>
//               From designing backend microservices to deploying full-stack
//               applications with Docker and CI/CD pipelines, I focus on delivering
//               reliable, high-performance solutions. With 200+ DSA problems solved
//               and national-level hackathon experience, I combine problem-solving
//               skills with practical development to build impactful tech products.
//               I'm continuously learning, growing, and looking for opportunities to
//               contribute to challenging and innovative projects in the tech space.
//             </motion.p>

//             <motion.div
//               className="grid grid-cols-2 gap-4 pt-4"
//               variants={fadeInUp}
//             >
//               <div className="p-4 bg-gray-50 rounded-lg">
//                 <h3 className="font-bold text-xl text-gray-900">1+</h3>
//                 <p className="text-gray-600">Years Experience</p>
//               </div>
//               <div className="p-4 bg-gray-50 rounded-lg">
//                 <h3 className="font-bold text-xl text-gray-900">40 (but loyal)</h3>
//                 <p className="text-gray-600">YouTube Subscribers</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { User, Award, Youtube, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-green-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-purple-500 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-yellow-500 animate-ping"></div>
      </div>
      
      {/* About grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <User className="text-5xl md:text-6xl text-teal-500 mr-4 stroke-[1.5]" />
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            About Me
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="relative group"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src="/piyush.png"
                alt="Ritwik Raj"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <motion.div 
                className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                <p className="text-white text-sm font-medium">Full Stack Developer</p>
                <div className="flex items-center mt-2">
                  <Heart className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-xs text-gray-200">Passionate about coding</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.div 
              className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-teal-500/30 shadow-lg"
              variants={fadeInUp}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(45,212,191,0.3)" }}
            >
              <motion.p className="text-lg text-gray-300 leading-relaxed" variants={fadeInUp}>
                I'm Ritwik Raj, a passionate and results-driven Full Stack Developer with
                hands-on experience in building scalable, production-grade web
                applications using modern technologies like Spring Boot, ReactJS, and
                NodeJS. I bring a solid foundation in computer science principles, cloud
                deployment, and test-driven development, with a strong commitment to
                writing clean, efficient, and maintainable code.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-blue-500/30 shadow-lg"
              variants={fadeInUp}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(59,130,246,0.3)" }}
            >
              <motion.p className="text-lg text-gray-300 leading-relaxed" variants={fadeInUp}>
                From designing backend microservices to deploying full-stack
                applications with Docker and CI/CD pipelines, I focus on delivering
                reliable, high-performance solutions. With 200+ DSA problems solved
                and national-level hackathon experience, I combine problem-solving
                skills with practical development to build impactful tech products.
                I'm continuously learning, growing, and looking for opportunities to
                contribute to challenging and innovative projects in the tech space.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <motion.div 
                className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-teal-500/30 shadow-lg flex flex-col items-center justify-center"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 25px -5px rgba(45,212,191,0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(45,212,191,0.5)]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-bold text-2xl text-white mb-1">1+</h3>
                <p className="text-teal-300">Years Experience</p>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-blue-500/30 shadow-lg flex flex-col items-center justify-center"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 25px -5px rgba(59,130,246,0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Youtube className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-bold text-2xl text-white mb-1">40 (but loyal)</h3>
                <p className="text-blue-300">YouTube Subscribers</p>
              </motion.div>
            </motion.div>
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
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
        </motion.div>
      </div>
    </section>
  );
}
