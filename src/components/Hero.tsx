// // // import { ArrowDown } from 'lucide-react';
// // // import { motion } from 'framer-motion';
// // // import { gradientText, gradientBg, gradientHover } from '../utils/gradients';
// // // import { fadeInUp, staggerContainer } from '../utils/animations';

// // // export default function Hero() {
// // //   return (
// // //     <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-900">
// // //       {/* Gradient Orbs */}
// // //       <motion.div 
// // //         className="absolute inset-0 overflow-hidden"
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 1 }}
// // //       >
// // //         <motion.div
// // //           className="absolute -top-48 -left-48 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
// // //           animate={{
// // //             x: [0, 30, 0],
// // //             y: [0, -30, 0],
// // //           }}
// // //           transition={{
// // //             duration: 8,
// // //             repeat: Infinity,
// // //             ease: "easeInOut"
// // //           }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
// // //           animate={{
// // //             x: [0, -30, 0],
// // //             y: [0, 30, 0],
// // //           }}
// // //           transition={{
// // //             duration: 8,
// // //             repeat: Infinity,
// // //             ease: "easeInOut",
// // //             delay: 1
// // //           }}
// // //         />
// // //       </motion.div>

// // //       <motion.div 
// // //         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10"
// // //         variants={staggerContainer}
// // //         initial="initial"
// // //         animate="animate"
// // //       >
// // //         <div className="space-y-8">
// // //           <motion.h1 
// // //             className="text-5xl md:text-7xl font-bold"
// // //             variants={fadeInUp}
// // //           >
// // //             <motion.span 
// // //               className="block text-white opacity-90"
// // //               variants={fadeInUp}
// // //             >
// // //               Building the Future
// // //             </motion.span>
// // //             <motion.span 
// // //               className={`block ${gradientText}`}
// // //               variants={fadeInUp}
// // //             >
// // //               One Line of Code
// // //             </motion.span>
// // //             <motion.span 
// // //               className="block text-white opacity-90"
// // //               variants={fadeInUp}
// // //             >
// // //               at a Time
// // //             </motion.span>
// // //           </motion.h1>

// // //           <motion.p 
// // //             className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
// // //             variants={fadeInUp}
// // //           >
// // //             Full Stack Developer | Java Backend Developer | Problem Solver
// // //           </motion.p>

// // //           <motion.div 
// // //             className="flex flex-col sm:flex-row items-center justify-center gap-4"
// // //             variants={fadeInUp}
// // //           >
// // //             <motion.a
// // //               href="#projects"
// // //               className={`px-8 py-3 rounded-full text-white ${gradientBg} ${gradientHover} transition-all duration-300 shadow-lg shadow-purple-500/25`}
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //             >
// // //               View My Work
// // //             </motion.a>
// // //             <motion.a
// // //               href="#contact"
// // //               className="px-8 py-3 rounded-full text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300"
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //             >
// // //               Contact Me
// // //             </motion.a>
// // //           </motion.div>
// // //         </div>

// // //         <motion.div 
// // //           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           transition={{ delay: 1 }}
// // //         >
// // //           <motion.div
// // //             animate={{
// // //               y: [0, 10, 0],
// // //             }}
// // //             transition={{
// // //               duration: 2,
// // //               repeat: Infinity,
// // //               ease: "easeInOut"
// // //             }}
// // //           >
// // //             <ArrowDown className="w-6 h-6 text-white/70" />
// // //           </motion.div>
// // //         </motion.div>
// // //       </motion.div>

// // //       {/* Gradient Overlay */}
// // //       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
// // //     </section>
// // //   );
// // // }

// // import { ArrowDown, Code, Terminal, Sparkles, Zap } from 'lucide-react';
// // import { motion } from 'framer-motion';
// // import { gradientText, gradientBg, gradientHover } from '../utils/gradients';
// // import { fadeInUp, staggerContainer } from '../utils/animations';

// // export default function Hero() {
// //   return (
// //     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900">
// //       {/* Animated background elements */}
// //       <div className="absolute inset-0 z-0">
// //         <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
        
// //         {/* Animated code particles */}
// //         <div className="absolute inset-0 overflow-hidden">
// //           {[...Array(20)].map((_, i) => (
// //             <motion.div
// //               key={i}
// //               className="absolute text-gray-700 text-opacity-20 font-mono text-xs"
// //               initial={{ 
// //                 x: Math.random() * window.innerWidth, 
// //                 y: -100,
// //                 opacity: 0,
// //                 rotate: Math.random() * 360
// //               }}
// //               animate={{ 
// //                 y: window.innerHeight + 100,
// //                 opacity: [0, 0.5, 0],
// //                 rotate: Math.random() * 360
// //               }}
// //               transition={{ 
// //                 duration: Math.random() * 20 + 10,
// //                 repeat: Infinity,
// //                 delay: Math.random() * 5,
// //                 ease: "linear"
// //               }}
// //             >
// //               {['<div>', '</div>', '<span>', '{code}', '()', '=>', '&&', '||', '0101', 'async', 'await', 'function', '</>'][Math.floor(Math.random() * 13)]}
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Gradient Orbs */}
// //       <motion.div 
// //         className="absolute inset-0 overflow-hidden"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 1 }}
// //       >
// //         <motion.div
// //           className="absolute -top-48 -left-48 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
// //           animate={{
// //             x: [0, 30, 0],
// //             y: [0, -30, 0],
// //           }}
// //           transition={{
// //             duration: 8,
// //             repeat: Infinity,
// //             ease: "easeInOut"
// //           }}
// //         />
// //         <motion.div
// //           className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
// //           animate={{
// //             x: [0, -20, 0],
// //             y: [0, 20, 0],
// //           }}
// //           transition={{
// //             duration: 10,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //             delay: 0.5
// //           }}
// //         />
// //         <motion.div
// //           className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
// //           animate={{
// //             x: [0, -30, 0],
// //             y: [0, 30, 0],
// //           }}
// //           transition={{
// //             duration: 8,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //             delay: 1
// //           }}
// //         />
// //       </motion.div>

// //       <motion.div 
// //         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10"
// //         variants={staggerContainer}
// //         initial="initial"
// //         animate="animate"
// //       >
// //         <div className="space-y-8">
// //           {/* Animated badge */}
// //           <motion.div
// //             className="flex justify-center mb-6"
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.2, duration: 0.7 }}
// //           >
// //             <motion.div 
// //               className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
// //               whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
// //             >
// //               <Zap className="w-4 h-4 text-indigo-400" />
// //               <span className="text-sm font-medium text-white">Full Stack Developer</span>
// //             </motion.div>
// //           </motion.div>

// //           <motion.h1 
// //             className="text-5xl md:text-7xl font-bold"
// //             variants={fadeInUp}
// //           >
// //             <motion.span 
// //               className="block text-white opacity-90"
// //               variants={fadeInUp}
// //             >
// //               Building the Future
// //             </motion.span>
// //             <motion.div 
// //               className={`relative inline-block ${gradientText}`}
// //               variants={fadeInUp}
// //             >
// //               <span className="relative z-10">One Line of Code</span>
// //               <motion.div 
// //                 className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-30 rounded-full blur-sm"
// //                 initial={{ width: 0 }}
// //                 animate={{ width: "100%" }}
// //                 transition={{ delay: 1.2, duration: 0.8 }}
// //               />
// //             </motion.div>
// //             <motion.span 
// //               className="block text-white opacity-90"
// //               variants={fadeInUp}
// //             >
// //               at a Time
// //             </motion.span>
// //           </motion.h1>

// //           <motion.p 
// //             className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
// //             variants={fadeInUp}
// //           >
// //             <span className="inline-block mx-1 relative">
// //               <span className="relative z-10">Full Stack Developer</span>
// //               <motion.span 
// //                 className="absolute bottom-0 left-0 right-0 h-2 bg-indigo-500/30 rounded-full"
// //                 initial={{ width: 0 }}
// //                 animate={{ width: "100%" }}
// //                 transition={{ delay: 1.5, duration: 0.4 }}
// //               />
// //             </span>
// //             <span className="mx-2">|</span>
// //             <span className="inline-block mx-1 relative">
// //               <span className="relative z-10">Java Backend Developer</span>
// //               <motion.span 
// //                 className="absolute bottom-0 left-0 right-0 h-2 bg-purple-500/30 rounded-full"
// //                 initial={{ width: 0 }}
// //                 animate={{ width: "100%" }}
// //                 transition={{ delay: 1.7, duration: 0.4 }}
// //               />
// //             </span>
// //             <span className="mx-2">|</span>
// //             <span className="inline-block mx-1 relative">
// //               <span className="relative z-10">Problem Solver</span>
// //               <motion.span 
// //                 className="absolute bottom-0 left-0 right-0 h-2 bg-blue-500/30 rounded-full"
// //                 initial={{ width: 0 }}
// //                 animate={{ width: "100%" }}
// //                 transition={{ delay: 1.9, duration: 0.4 }}
// //               />
// //             </span>
// //           </motion.p>

// //           <motion.div 
// //             className="flex flex-col sm:flex-row items-center justify-center gap-4"
// //             variants={fadeInUp}
// //           >
// //             <motion.a
// //               href="#projects"
// //               className="group relative px-8 py-3 rounded-full text-white overflow-hidden"
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25"></span>
// //               <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-indigo-500/25"></span>
// //               <span className="relative flex items-center justify-center">
// //                 View My Work
// //                 <Sparkles className="w-4 h-4 ml-2 opacity-70" />
// //               </span>
// //             </motion.a>
// //             <motion.a
// //               href="#contact"
// //               className="group relative px-8 py-3 rounded-full text-white overflow-hidden"
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               <span className="absolute inset-0 border-2 border-white/20 rounded-full"></span>
// //               <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
// //               <span className="relative">Contact Me</span>
// //             </motion.a>
// //           </motion.div>
// //         </div>

// //         {/* Tech stack icons */}
// //         <motion.div
// //           className="mt-16 flex justify-center"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 1.5, duration: 0.8 }}
// //         >
// //           <div className="flex flex-wrap justify-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
// //             {['react', 'node', 'typescript', 'java', 'spring', 'mongodb'].map((tech, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="flex items-center space-x-1 text-gray-400 text-sm"
// //                 whileHover={{ scale: 1.1, color: "#a5b4fc" }}
// //               >
// //                 <span className="text-xs text-indigo-400">#</span>
// //                 <span>{tech}</span>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>

// //         <motion.div 
// //           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 2 }}
// //         >
// //           <motion.div
// //             animate={{
// //               y: [0, 10, 0],
// //             }}
// //             transition={{
// //               duration: 2,
// //               repeat: Infinity,
// //               ease: "easeInOut"
// //             }}
// //           >
// //             <ArrowDown className="w-6 h-6 text-white/70" />
// //           </motion.div>
// //         </motion.div>
// //       </motion.div>

// //       {/* Terminal effect */}
// //       <motion.div
// //         className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-md"
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 2.2, duration: 0.8 }}
// //       >
// //         <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-lg overflow-hidden shadow-2xl mx-4">
// //           <div className="flex items-center px-4 py-2 bg-gray-800/80 border-b border-gray-700">
// //             <div className="flex space-x-2">
// //               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
// //               <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
// //               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
// //             </div>
// //             <div className="flex-1 text-center">
// //               <span className="text-xs text-gray-400 font-mono">terminal</span>
// //             </div>
// //           </div>
// //           <div className="p-4 font-mono text-sm text-gray-300">
// //             <div className="flex">
// //               <span className="text-green-400">➜</span>
// //               <span className="text-blue-400 ml-2">~</span>
// //               <span className="ml-2 text-white">npm run start:portfolio</span>
// //             </div>
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 2.5 }}
// //             >
// //               <span className="text-gray-400">Starting development server...</span>
// //             </motion.div>
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 3 }}
// //             >
// //               <span className="text-green-400">✓</span>
// //               <span className="text-gray-400 ml-2">Ready in 1.2s</span>
// //             </motion.div>
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 3.5 }}
// //               className="flex items-center"
// //             >
// //               <span className="text-gray-400">➜</span>
// //               <span className="text-gray-400 ml-2">Local:</span>
// //               <span className="text-blue-400 ml-2 underline">http://localhost:3000</span>
// //               <motion.span 
// //                 className="ml-1 inline-block w-2 h-4 bg-gray-300"
// //                 animate={{ opacity: [1, 0, 1] }}
// //                 transition={{ duration: 1, repeat: Infinity }}
// //               />
// //             </motion.div>
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* Gradient Overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 pointer-events-none" />
// //     </section>
// //   );
// // }


// import { ArrowDown, Code, Terminal, Sparkles, Zap } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { fadeInUp, staggerContainer } from '../utils/animations';

// export default function Hero() {
//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
        
//         {/* Animated code particles */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute text-gray-700 text-opacity-20 font-mono text-xs"
//               initial={{ 
//                 x: Math.random() * window.innerWidth, 
//                 y: -100,
//                 opacity: 0,
//                 rotate: Math.random() * 360
//               }}
//               animate={{ 
//                 y: window.innerHeight + 100,
//                 opacity: [0, 0.5, 0],
//                 rotate: Math.random() * 360
//               }}
//               transition={{ 
//                 duration: Math.random() * 20 + 10,
//                 repeat: Infinity,
//                 delay: Math.random() * 5,
//                 ease: "linear"
//               }}
//             >
//               {['<div>', '</div>', '<span>', '{code}', '()', '=>', '&&', '||', '0101', 'async', 'await', 'function', '</>'][Math.floor(Math.random() * 13)]}
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Gradient Orbs */}
//       <motion.div 
//         className="absolute inset-0 overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="absolute -top-48 -left-48 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
//           animate={{
//             x: [0, 30, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
//           animate={{
//             x: [0, -20, 0],
//             y: [0, 20, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 0.5
//           }}
//         />
//         <motion.div
//           className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
//           animate={{
//             x: [0, -30, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1
//           }}
//         />
//       </motion.div>

//       <motion.div 
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10"
//         variants={staggerContainer}
//         initial="initial"
//         animate="animate"
//       >
//         <div className="space-y-8">
//           {/* Animated badge */}
//           <motion.div
//             className="flex justify-center mb-6"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.7 }}
//           >
//             <motion.div 
//               className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
//               whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
//             >
//               <Zap className="w-4 h-4 text-indigo-400" />
//               <span className="text-sm font-medium text-white">Full Stack Developer</span>
//             </motion.div>
//           </motion.div>

//           <motion.h1 
//             className="text-5xl md:text-7xl font-bold"
//             variants={fadeInUp}
//           >
//             <motion.span 
//               className="block text-white opacity-90"
//               variants={fadeInUp}
//             >
//               Building the Future
//             </motion.span>
//             <motion.span 
//               className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 relative"
//               variants={fadeInUp}
//             >
//               One Line of Code
//               <motion.div 
//                 className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-30 rounded-full blur-sm"
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ delay: 1.2, duration: 0.8 }}
//               />
//             </motion.span>
//             <motion.span 
//               className="block text-white opacity-90"
//               variants={fadeInUp}
//             >
//               at a Time
//             </motion.span>
//           </motion.h1>

//           <motion.p 
//             className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
//             variants={fadeInUp}
//           >
//             <span className="inline-block mx-1 relative">
//               <span className="relative z-10">Full Stack Developer</span>
//               <motion.span 
//                 className="absolute bottom-0 left-0 right-0 h-2 bg-indigo-500/30 rounded-full"
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ delay: 1.5, duration: 0.4 }}
//               />
//             </span>
//             <span className="mx-2">|</span>
//             <span className="inline-block mx-1 relative">
//               <span className="relative z-10">Java Backend Developer</span>
//               <motion.span 
//                 className="absolute bottom-0 left-0 right-0 h-2 bg-purple-500/30 rounded-full"
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ delay: 1.7, duration: 0.4 }}
//               />
//             </span>
//             <span className="mx-2">|</span>
//             <span className="inline-block mx-1 relative">
//               <span className="relative z-10">Problem Solver</span>
//               <motion.span 
//                 className="absolute bottom-0 left-0 right-0 h-2 bg-blue-500/30 rounded-full"
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ delay: 1.9, duration: 0.4 }}
//               />
//             </span>
//           </motion.p>

//           <motion.div 
//             className="flex flex-col sm:flex-row items-center justify-center gap-4"
//             variants={fadeInUp}
//           >
//             <motion.a
//               href="#projects"
//               className="group relative px-8 py-3 rounded-full text-white overflow-hidden"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-indigo-500/25"></span>
//               <span className="relative flex items-center justify-center">
//                 View My Work
//                 <Sparkles className="w-4 h-4 ml-2 opacity-70" />
//               </span>
//             </motion.a>
//             <motion.a
//               href="#contact"
//               className="group relative px-8 py-3 rounded-full text-white overflow-hidden"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="absolute inset-0 border-2 border-white/20 rounded-full"></span>
//               <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
//               <span className="relative">Contact Me</span>
//             </motion.a>
//           </motion.div>
//         </div>

//         {/* Tech stack icons */}
//         <motion.div
//           className="mt-16 flex justify-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5, duration: 0.8 }}
//         >
//           <div className="flex flex-wrap justify-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//             {['react', 'node', 'typescript', 'java', 'spring', 'mongodb'].map((tech, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-center space-x-1 text-gray-400 text-sm"
//                 whileHover={{ scale: 1.1, color: "#a5b4fc" }}
//               >
//                 <span className="text-xs text-indigo-400">#</span>
//                 <span>{tech}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div 
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2 }}
//         >
//           <motion.div
//             animate={{
//               y: [0, 10, 0],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           >
//             <ArrowDown className="w-6 h-6 text-white/70" />
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Terminal effect */}
//       <motion.div
//         className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-md"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 2.2, duration: 0.8 }}
//       >
//         <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-lg overflow-hidden shadow-2xl mx-4">
//           <div className="flex items-center px-4 py-2 bg-gray-800/80 border-b border-gray-700">
//             <div className="flex space-x-2">
//               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//             </div>
//             <div className="flex-1 text-center">
//               <span className="text-xs text-gray-400 font-mono">terminal</span>
//             </div>
//           </div>
//           <div className="p-4 font-mono text-sm text-gray-300">
//             <div className="flex">
//               <span className="text-green-400">➜</span>
//               <span className="text-blue-400 ml-2">~</span>
//               <span className="ml-2 text-white">npm run start:portfolio</span>
//             </div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 2.5 }}
//             >
//               <span className="text-gray-400">Starting development server...</span>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 3 }}
//             >
//               <span className="text-green-400">✓</span>
//               <span className="text-gray-400 ml-2">Ready in 1.2s</span>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 3.5 }}
//               className="flex items-center"
//             >
//               <span className="text-gray-400">➜</span>
//               <span className="text-gray-400 ml-2">Local:</span>
//               <span className="text-blue-400 ml-2 underline">http://localhost:3000</span>
//               <motion.span 
//                 className="ml-1 inline-block w-2 h-4 bg-gray-300"
//                 animate={{ opacity: [1, 0, 1] }}
//                 transition={{ duration: 1, repeat: Infinity }}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 pointer-events-none" />
//     </section>
//   );
// }



import { ArrowDown, Code, Terminal, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
        
        {/* Animated code particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-gray-700 text-opacity-20 font-mono text-xs"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: -100,
                opacity: 0,
                rotate: Math.random() * 360
              }}
              animate={{ 
                y: window.innerHeight + 100,
                opacity: [0, 0.5, 0],
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              {['<div>', '</div>', '<span>', '{code}', '()', '=>', '&&', '||', '0101', 'async', 'await', 'function', '</>'][Math.floor(Math.random() * 13)]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-48 -left-48 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="space-y-8">
          {/* Animated badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <motion.div 
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-white">Full Stack Developer</span>
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold"
            variants={fadeInUp}
          >
            <motion.span 
              className="block text-white opacity-90"
              variants={fadeInUp}
            >
              Building the Future
            </motion.span>
            <motion.span 
              className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 relative"
              variants={fadeInUp}
            >
              One Line of Code
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-30 rounded-full blur-sm"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </motion.span>
            <motion.span 
              className="block text-white opacity-90"
              variants={fadeInUp}
            >
              at a Time
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <span className="inline-block mx-1 relative">
              <span className="relative z-10">Full Stack Developer</span>
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-2 bg-indigo-500/30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 0.4 }}
              />
            </span>
            <span className="mx-2">|</span>
            <span className="inline-block mx-1 relative">
              <span className="relative z-10">Java Backend Developer</span>
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-2 bg-purple-500/30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.7, duration: 0.4 }}
              />
            </span>
            <span className="mx-2">|</span>
            <span className="inline-block mx-1 relative">
              <span className="relative z-10">Problem Solver</span>
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-2 bg-blue-500/30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.9, duration: 0.4 }}
              />
            </span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeInUp}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-3 rounded-full text-white overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-indigo-500/25"></span>
              <span className="relative flex items-center justify-center">
                View My Work
                <Sparkles className="w-4 h-4 ml-2 opacity-70" />
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              className="group relative px-8 py-3 rounded-full text-white overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 border-2 border-white/20 rounded-full"></span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <span className="relative">Contact Me</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Tech stack icons */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            {['react', 'node', 'typescript', 'java', 'spring', 'mongodb'].map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-1 text-gray-400 text-sm"
                whileHover={{ scale: 1.1, color: "#a5b4fc" }}
              >
                <span className="text-xs text-indigo-400">#</span>
                <span>{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terminal effect - Moved up to avoid overlap with skills section */}
        <motion.div
          className="mt-12 w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-lg overflow-hidden shadow-2xl">
            <div className="flex items-center px-4 py-2 bg-gray-800/80 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-gray-400 font-mono">terminal</span>
              </div>
            </div>
            <div className="p-4 font-mono text-sm text-gray-300">
              <div className="flex">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400 ml-2">~</span>
                <span className="ml-2 text-white">npm run start:portfolio</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <span className="text-gray-400">Starting development server...</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <span className="text-green-400">✓</span>
                <span className="text-gray-400 ml-2">Ready in 1.2s</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                className="flex items-center"
              >
                <span className="text-gray-400">➜</span>
                <span className="text-gray-400 ml-2">Local:</span>
                <span className="text-blue-400 ml-2 underline">http://localhost:3000</span>
                <motion.span 
                  className="ml-1 inline-block w-2 h-4 bg-gray-300"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown className="w-6 h-6 text-white/70 mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 pointer-events-none" />
    </section>
  );
}
