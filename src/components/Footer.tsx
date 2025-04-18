// // // import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
// // // import { useState } from 'react';

// // // export default function Footer() {
// // //   const [hoverIcon, setHoverIcon] = useState(null);
  
// // //   const socialLinks = [
// // //     { name: 'GitHub', icon: Github, url: 'https://github.com/kkc-ritwik' },
// // //     { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/kkc-ritwik/?profileId=ACoAADJac8IB7GnGK1zqU0ORR-yoO54q7kOg80A' },
// // //     { name: 'Twitter', icon: Twitter, url: 'https://x.com/kkc_ritwik' },
// // //     { name: 'Email', icon: Mail, url: 'mailto:ritwiksinghkkc@gmail.com' }
// // //   ];

// // //   return (
// // //     <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
// // //       <div className="max-w-7xl mx-auto px-6 lg:px-8">
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
// // //           {/* Profile Section */}
// // //           <div className="space-y-4">
// // //             <div className="flex items-center space-x-3">
// // //               <div className="h-10 w-1 bg-blue-500"></div>
// // //               <h3 className="text-2xl font-bold">Ritwik Raj</h3>
// // //             </div>
// // //             <p className="text-gray-300 pl-4">Building digital experiences that matter</p>
// // //             <p className="text-gray-400 pl-4 text-sm">Full Stack Developer & UI/UX Enthusiast</p>
// // //           </div>
          
// // //           {/* Navigation Links */}
// // //           <div className="space-y-4">
// // //             <div className="flex items-center space-x-3">
// // //               <div className="h-10 w-1 bg-blue-500"></div>
// // //               <h4 className="text-xl font-semibold">Quick Links</h4>
// // //             </div>
// // //             <div className="grid grid-cols-2 gap-2 pl-4">
// // //               <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
// // //               <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
// // //               <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
// // //               <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a>
// // //               <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
// // //               <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
// // //             </div>
// // //           </div>
          
// // //           {/* Social & Contact */}
// // //           <div className="space-y-4">
// // //             <div className="flex items-center space-x-3">
// // //               <div className="h-10 w-1 bg-blue-500"></div>
// // //               <h4 className="text-xl font-semibold">Connect</h4>
// // //             </div>
// // //             <div className="flex space-x-4 pl-4">
// // //               {socialLinks.map((social) => (
// // //                 <a
// // //                   key={social.name}
// // //                   href={social.url}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="relative group"
// // //                   onMouseEnter={() => setHoverIcon(social.name)}
// // //                   onMouseLeave={() => setHoverIcon(null)}
// // //                 >
// // //                   <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-all duration-300 transform group-hover:scale-110">
// // //                     <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
// // //                   </div>
// // //                   {hoverIcon === social.name && (
// // //                     <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
// // //                       {social.name}
// // //                     </span>
// // //                   )}
// // //                 </a>
// // //               ))}
// // //             </div>
// // //             <p className="text-gray-400 text-sm pl-4 mt-4">
// // //               Feel free to reach out. I'm always open to discussing new projects and opportunities.
// // //             </p>
// // //           </div>
// // //         </div>
        
// // //         {/* Bottom Section */}
// // //         <div className="mt-12 pt-8 border-t border-gray-700">
// // //           <div className="flex flex-col md:flex-row justify-between items-center">
// // //             <p className="text-gray-400 text-sm mb-4 md:mb-0">
// // //               © {new Date().getFullYear()} Ritwik Raj. All rights reserved.
// // //             </p>
// // //             <div className="flex space-x-6 text-xs text-gray-500">
// // //               <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
// // //               <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
// // //               <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // }

// // import { Github, Linkedin, Mail, Twitter, Code, ExternalLink, Heart } from 'lucide-react';
// // import { useState } from 'react';
// // import { motion } from 'framer-motion';

// // export default function Footer() {
// //   const [hoverIcon, setHoverIcon] = useState(null);
  
// //   const socialLinks = [
// //     { name: 'GitHub', icon: Github, url: 'https://github.com/kkc-ritwik' },
// //     { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/kkc-ritwik/?profileId=ACoAADJac8IB7GnGK1zqU0ORR-yoO54q7kOg80A' },
// //     { name: 'Twitter', icon: Twitter, url: 'https://x.com/kkc_ritwik' },
// //     { name: 'Email', icon: Mail, url: 'mailto:ritwiksinghkkc@gmail.com' }
// //   ];

// //   const fadeInUpVariant = {
// //     initial: { opacity: 0, y: 20 },
// //     animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// //   };

// //   return (
// //     <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white py-16">
// //       {/* Animated background elements */}
// //       <div className="absolute inset-0 z-0 opacity-10">
// //         <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500 animate-pulse"></div>
// //         <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-indigo-500 animate-ping"></div>
// //         <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-violet-500 animate-pulse"></div>
// //         <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-purple-500 animate-ping"></div>
// //       </div>
      
// //       {/* Footer pattern overlay */}
// //       <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

// //       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
// //         <motion.div 
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
// //           initial="initial"
// //           whileInView="animate"
// //           viewport={{ once: true }}
// //         >
// //           {/* Profile Section */}
// //           <motion.div 
// //             className="space-y-4"
// //             variants={fadeInUpVariant}
// //           >
// //             <div className="flex items-center space-x-3">
// //               <div className="h-10 w-1 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
// //               <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Ritwik Raj</h3>
// //             </div>
// //             <p className="text-gray-300 pl-4">Building digital experiences that matter</p>
// //             <p className="text-gray-400 pl-4 text-sm">Full Stack Developer & UI/UX Enthusiast</p>
            
// //             <motion.div 
// //               className="pl-4 mt-6"
// //               initial={{ opacity: 0, y: 10 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.2 }}
// //               viewport={{ once: true }}
// //             >
// //               <motion.div 
// //                 className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
// //                 whileHover={{ 
// //                   backgroundColor: "rgba(255,255,255,0.2)",
// //                   scale: 1.05,
// //                   transition: { duration: 0.2 }
// //                 }}
// //               >
// //                 <Code className="w-4 h-4 mr-2 text-blue-400" />
// //                 <span className="text-sm font-medium">Portfolio v1.0</span>
// //               </motion.div>
// //             </motion.div>
// //           </motion.div>
          
// //           {/* Navigation Links */}
// //           <motion.div 
// //             className="space-y-4"
// //             variants={fadeInUpVariant}
// //           >
// //             <div className="flex items-center space-x-3">
// //               <div className="h-10 w-1 bg-gradient-to-b from-indigo-400 to-violet-600 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
// //               <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">Quick Links</h4>
// //             </div>
// //             <div className="grid grid-cols-2 gap-3 pl-4">
// //               {[
// //                 { name: 'Home', href: '#' },
// //                 { name: 'Projects', href: '#projects' },
// //                 { name: 'About', href: '#about' },
// //                 { name: 'Blog', href: '#' },
// //                 { name: 'Services', href: '#' },
// //                 { name: 'Contact', href: '#contact' }
// //               ].map((link, index) => (
// //                 <motion.a 
// //                   key={index}
// //                   href={link.href} 
// //                   className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-1 group"
// //                   whileHover={{ x: 5 }}
// //                 >
// //                   <span>{link.name}</span>
// //                   <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
// //                 </motion.a>
// //               ))}
// //             </div>
// //           </motion.div>
          
// //           {/* Social & Contact */}
// //           <motion.div 
// //             className="space-y-4"
// //             variants={fadeInUpVariant}
// //           >
// //             <div className="flex items-center space-x-3">
// //               <div className="h-10 w-1 bg-gradient-to-b from-violet-400 to-purple-600 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
// //               <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-500">Connect</h4>
// //             </div>
// //             <div className="flex space-x-4 pl-4">
// //               {socialLinks.map((social) => (
// //                 <motion.a
// //                   key={social.name}
// //                   href={social.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="relative group"
// //                   onMouseEnter={() => setHoverIcon(social.name)}
// //                   onMouseLeave={() => setHoverIcon(null)}
// //                   whileHover={{ y: -5 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   <motion.div 
// //                     className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg group-hover:bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300"
// //                     whileHover={{ 
// //                       boxShadow: "0 0 15px rgba(139,92,246,0.5)",
// //                     }}
// //                   >
// //                     <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
// //                   </motion.div>
// //                   {hoverIcon === social.name && (
// //                     <motion.span 
// //                       className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs py-1 px-2 rounded-md shadow-lg"
// //                       initial={{ opacity: 0, y: 10 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       exit={{ opacity: 0, y: 10 }}
// //                     >
// //                       {social.name}
// //                     </motion.span>
// //                   )}
// //                 </motion.a>
// //               ))}
// //             </div>
// //             <p className="text-gray-400 text-sm pl-4 mt-4">
// //               Feel free to reach out. I'm always open to discussing new projects and opportunities.
// //             </p>
// //           </motion.div>
// //         </motion.div>
        
// //         {/* Bottom Section */}
// //         <motion.div 
// //           className="mt-12 pt-8 border-t border-gray-800"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.5 }}
// //           viewport={{ once: true }}
// //         >
// //           <div className="flex flex-col md:flex-row justify-between items-center">
// //             <motion.p 
// //               className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
// //               whileHover={{ color: "#a5b4fc" }}
// //             >
// //               © {new Date().getFullYear()} Ritwik Raj. All rights reserved.
// //               <motion.span 
// //                 className="inline-flex items-center ml-2"
// //                 initial={{ scale: 1 }}
// //                 whileHover={{ scale: 1.2 }}
// //               >
// //                 <Heart className="h-3 w-3 text-red-500 mr-1" fill="#ef4444" />
// //               </motion.span>
// //             </motion.p>
// //             <div className="flex space-x-6 text-xs text-gray-500">
// //               {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
// //                 <motion.a 
// //                   key={index}
// //                   href="#" 
// //                   className="hover:text-gray-300 transition-colors"
// //                   whileHover={{ 
// //                     color: "#a5b4fc",
// //                     y: -2
// //                   }}
// //                 >
// //                   {item}
// //                 </motion.a>
// //               ))}
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </footer>
// //   );
// // }


// import { Github, Linkedin, Mail, Twitter, Code, ExternalLink, Heart } from 'lucide-react';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Footer() {
//   const [hoverIcon, setHoverIcon] = useState(null);
  
//   const socialLinks = [
//     { name: 'GitHub', icon: Github, url: 'https://github.com/kkc-ritwik' },
//     { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/kkc-ritwik/?profileId=ACoAADJac8IB7GnGK1zqU0ORR-yoO54q7kOg80A' },
//     { name: 'Twitter', icon: Twitter, url: 'https://x.com/kkc_ritwik' },
//     { name: 'Email', icon: Mail, url: 'mailto:ritwiksinghkkc@gmail.com' }
//   ];

//   const fadeInUpVariant = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   // Quick links with their respective URLs
//   const quickLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'About', href: '#about' },
//     { name: 'Blog', href: 'https://likhadilse81.blogspot.com/' },
//     { name: 'Services', href: 'https://drive.google.com/file/d/1IKhqVEoRgHuuJbl4wzMv1upmdiJbFdly/view?usp=drive_link' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   // Policy links
//   const policyLinks = [
//     { name: 'Privacy Policy', href: 'https://www.privacypolicygenerator.info/live.php?token=1XxNqXMUXqLHCvvMmYQNj9xwVLnXULHs' },
//     { name: 'Terms of Service', href: 'https://www.termsofservicegenerator.net/live.php?token=aqFQShdQJZkP9XE4lQcbdZQJAZvLAGYs' },
//     { name: 'Cookie Policy', href: 'https://www.cookiepolicygenerator.com/live.php?token=Ue2ULKNbKQeAn9UDZnBRrfGWJvLpMWvs' }
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white py-16">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 z-0 opacity-10">
//         <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-indigo-500 animate-ping"></div>
//         <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-violet-500 animate-pulse"></div>
//         <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-purple-500 animate-ping"></div>
//       </div>
      
//       {/* Footer pattern overlay */}
//       <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           {/* Profile Section */}
//           <motion.div 
//             className="space-y-4"
//             variants={fadeInUpVariant}
//           >
//             <div className="flex items-center space-x-3">
//               <div className="h-10 w-1 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
//               <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Ritwik Raj</h3>
//             </div>
//             <p className="text-gray-300 pl-4">Building digital experiences that matter</p>
//             <p className="text-gray-400 pl-4 text-sm">Full Stack Developer & UI/UX Enthusiast</p>
            
//             <motion.div 
//               className="pl-4 mt-6"
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <motion.div 
//                 className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
//                 whileHover={{ 
//                   backgroundColor: "rgba(255,255,255,0.2)",
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <Code className="w-4 h-4 mr-2 text-blue-400" />
//                 <span className="text-sm font-medium">Portfolio v1.0</span>
//               </motion.div>
//             </motion.div>
//           </motion.div>
          
//           {/* Navigation Links */}
//           <motion.div 
//             className="space-y-4"
//             variants={fadeInUpVariant}
//           >
//             <div className="flex items-center space-x-3">
//               <div className="h-10 w-1 bg-gradient-to-b from-indigo-400 to-violet-600 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
//               <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">Quick Links</h4>
//             </div>
//             <div className="grid grid-cols-2 gap-3 pl-4">
//               {quickLinks.map((link, index) => (
//                 <motion.a 
//                   key={index}
//                   href={link.href}
//                   target={link.href.startsWith('#') ? '_self' : '_blank'}
//                   rel={link.href.startsWith('#') ? '' : 'noopener noreferrer'}
//                   className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-1 group"
//                   whileHover={{ x: 5 }}
//                 >
//                   <span>{link.name}</span>
//                   {!link.href.startsWith('#') && (
//                     <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   )}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
          
//           {/* Social & Contact */}
//           <motion.div 
//             className="space-y-4"
//             variants={fadeInUpVariant}
//           >
//             <div className="flex items-center space-x-3">
//               <div className="h-10 w-1 bg-gradient-to-b from-violet-400 to-purple-600 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
//               <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-500">Connect</h4>
//             </div>
//             <div className="flex space-x-4 pl-4">
//               {socialLinks.map((social) => (
//                 <motion.a
//                   key={social.name}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="relative group"
//                   onMouseEnter={() => setHoverIcon(social.name)}
//                   onMouseLeave={() => setHoverIcon(null)}
//                   whileHover={{ y: -5 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <motion.div 
//                     className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg group-hover:bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300"
//                     whileHover={{ 
//                       boxShadow: "0 0 15px rgba(139,92,246,0.5)",
//                     }}
//                   >
//                     <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
//                   </motion.div>
//                   {hoverIcon === social.name && (
//                     <motion.span 
//                       className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs py-1 px-2 rounded-md shadow-lg"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                     >
//                       {social.name}
//                     </motion.span>
//                   )}
//                 </motion.a>
//               ))}
//             </div>
//             <p className="text-gray-400 text-sm pl-4 mt-4">
//               Feel free to reach out. I'm always open to discussing new projects and opportunities.
//             </p>
//           </motion.div>
//         </motion.div>
        
//         {/* Bottom Section */}
//         <motion.div 
//           className="mt-12 pt-8 border-t border-gray-800"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <motion.p 
//               className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
//               whileHover={{ color: "#a5b4fc" }}
//             >
//               © {new Date().getFullYear()} Ritwik Raj. All rights reserved.
//               <motion.span 
//                 className="inline-flex items-center ml-2"
//                 initial={{ scale: 1 }}
//                 whileHover={{ scale: 1.2 }}
//               >
//                 <Heart className="h-3 w-3 text-red-500 mr-1" fill="#ef4444" />
//               </motion.span>
//             </motion.p>
//             <div className="flex space-x-6 text-xs text-gray-500">
//               {policyLinks.map((item, index) => (
//                 <motion.a 
//                   key={index}
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-gray-300 transition-colors"
//                   whileHover={{ 
//                     color: "#a5b4fc",
//                     y: -2
//                   }}
//                 >
//                   {item.name}
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }

import { Github, Linkedin, Mail, Twitter, Code, ExternalLink, Heart, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [hoverIcon, setHoverIcon] = useState(null);
  const [activePolicy, setActivePolicy] = useState<string | null>(null);
  
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/kkc-ritwik' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/kkc-ritwik/?profileId=ACoAADJac8IB7GnGK1zqU0ORR-yoO54q7kOg80A' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/kkc_ritwik' },
    { name: 'Email', icon: Mail, url: 'mailto:ritwiksinghkkc@gmail.com' }
  ];

  const fadeInUpVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Quick links with their respective URLs
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: 'https://likhadilse81.blogspot.com/' },
    { name: 'Services', href: 'https://drive.google.com/file/d/1IKhqVEoRgHuuJbl4wzMv1upmdiJbFdly/view?usp=drive_link' },
    { name: 'Contact', href: '#contact' }
  ];

  // Policy content
  const policyContent = {
    'Privacy Policy': (
      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit my portfolio website.
        </p>
        <h3 className="text-lg font-semibold mt-4">PERSONAL INFORMATION I COLLECT</h3>
        <p>
          When you visit the Site, I automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>
        <p>
          Additionally, as you browse the Site, I collect information about the individual web pages that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
        </p>
        <h3 className="text-lg font-semibold mt-4">HOW I USE YOUR PERSONAL INFORMATION</h3>
        <p>
          I use the information collected to improve and optimize my website (for example, by generating analytics about how visitors browse and interact with the Site).
        </p>
        <h3 className="text-lg font-semibold mt-4">SHARING YOUR PERSONAL INFORMATION</h3>
        <p>
          I do not share your Personal Information with third parties except to comply with applicable laws and regulations.
        </p>
        <h3 className="text-lg font-semibold mt-4">YOUR RIGHTS</h3>
        <p>
          If you are a European resident, you have the right to access personal information I hold about you and to ask that your personal information be corrected, updated, or deleted.
        </p>
        <h3 className="text-lg font-semibold mt-4">CHANGES</h3>
        <p>
          I may update this privacy policy from time to time in order to reflect, for example, changes to my practices or for other operational, legal or regulatory reasons.
        </p>
        <h3 className="text-lg font-semibold mt-4">CONTACT ME</h3>
        <p>
          For more information about my privacy practices, if you have questions, or if you would like to make a complaint, please contact me by e-mail at ritwiksinghkkc@gmail.com.
        </p>
      </div>
    ),
    'Terms of Service': (
      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          These Terms of Service ("Terms") govern your access to and use of my portfolio website. Please read these Terms carefully before using the website.
        </p>
        <h3 className="text-lg font-semibold mt-4">1. AGREEMENT TO TERMS</h3>
        <p>
          By accessing or using my website, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
        <h3 className="text-lg font-semibold mt-4">2. INTELLECTUAL PROPERTY RIGHTS</h3>
        <p>
          Unless otherwise stated, I own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
        </p>
        <h3 className="text-lg font-semibold mt-4">3. RESTRICTIONS</h3>
        <p>You are specifically restricted from all of the following:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Publishing any website material in any other media</li>
          <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
          <li>Publicly performing and/or showing any website material</li>
          <li>Using this website in any way that is or may be damaging to this website</li>
          <li>Using this website in any way that impacts user access to this website</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">4. LIMITATION OF LIABILITY</h3>
        <p>
          In no event shall I be liable for any damages arising out of the use or inability to use the materials on my website.
        </p>
        <h3 className="text-lg font-semibold mt-4">5. GOVERNING LAW</h3>
        <p>
          These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>
        <h3 className="text-lg font-semibold mt-4">6. CHANGES TO TERMS</h3>
        <p>
          I reserve the right, at my sole discretion, to modify or replace these Terms at any time.
        </p>
        <h3 className="text-lg font-semibold mt-4">7. CONTACT INFORMATION</h3>
        <p>
          If you have any questions about these Terms, please contact me at ritwiksinghkkc@gmail.com.
        </p>
      </div>
    ),
    'Cookie Policy': (
      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-4">Cookie Policy</h2>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          This Cookie Policy explains how I use cookies and similar technologies to recognize you when you visit my portfolio website.
        </p>
        <h3 className="text-lg font-semibold mt-4">WHAT ARE COOKIES?</h3>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
        <h3 className="text-lg font-semibold mt-4">WHY I USE COOKIES</h3>
        <p>I use cookies for several reasons:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>To enable certain functions of the website</li>
          <li>To provide analytics</li>
          <li>To store your preferences</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">TYPES OF COOKIES I USE</h3>
        <p>
          <strong>Essential cookies:</strong> These cookies are required for the operation of my website. They include, for example, cookies that enable you to navigate the website and use its features.
        </p>
        <p>
          <strong>Analytical/performance cookies:</strong> These allow me to recognize and count the number of visitors and to see how visitors move around my website when they are using it. This helps me to improve the way my website works.
        </p>
        <h3 className="text-lg font-semibold mt-4">HOW TO CONTROL COOKIES</h3>
        <p>
          You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
        </p>
        <h3 className="text-lg font-semibold mt-4">CHANGES TO THE COOKIE POLICY</h3>
        <p>
          I may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies I use or for other operational, legal or regulatory reasons.
        </p>
        <h3 className="text-lg font-semibold mt-4">CONTACT ME</h3>
        <p>
          If you have any questions about my use of cookies, please contact me at ritwiksinghkkc@gmail.com.
        </p>
      </div>
    )
  };

  // Policy links
  const policyLinks = [
    { name: 'Privacy Policy' },
    { name: 'Terms of Service' },
    { name: 'Cookie Policy' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-indigo-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-violet-500 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-purple-500 animate-ping"></div>
      </div>
      
      {/* Footer pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Profile Section */}
          <motion.div 
            className="space-y-4"
            variants={fadeInUpVariant}
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-1 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Ritwik Raj</h3>
            </div>
            <p className="text-gray-300 pl-4">Building digital experiences that matter</p>
            <p className="text-gray-400 pl-4 text-sm">Full Stack Developer & UI/UX Enthusiast</p>
            
            <motion.div 
              className="pl-4 mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                whileHover={{ 
                  backgroundColor: "rgba(255,255,255,0.2)",
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Code className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm font-medium">Portfolio v1.0</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Navigation Links */}
          <motion.div 
            className="space-y-4"
            variants={fadeInUpVariant}
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-1 bg-gradient-to-b from-indigo-400 to-violet-600 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">Quick Links</h4>
            </div>
            <div className="grid grid-cols-2 gap-3 pl-4">
              {quickLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('#') ? '_self' : '_blank'}
                  rel={link.href.startsWith('#') ? '' : 'noopener noreferrer'}
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-1 group"
                  whileHover={{ x: 5 }}
                >
                  <span>{link.name}</span>
                  {!link.href.startsWith('#') && (
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Social & Contact */}
          <motion.div 
            className="space-y-4"
            variants={fadeInUpVariant}
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-1 bg-gradient-to-b from-violet-400 to-purple-600 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
              <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-500">Connect</h4>
            </div>
            <div className="flex space-x-4 pl-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  onMouseEnter={() => setHoverIcon(social.name)}
                  onMouseLeave={() => setHoverIcon(null)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg group-hover:bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300"
                    whileHover={{ 
                      boxShadow: "0 0 15px rgba(139,92,246,0.5)",
                    }}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </motion.div>
                  {hoverIcon === social.name && (
                    <motion.span 
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs py-1 px-2 rounded-md shadow-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {social.name}
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm pl-4 mt-4">
              Feel free to reach out. I'm always open to discussing new projects and opportunities.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
              whileHover={{ color: "#a5b4fc" }}
            >
              © {new Date().getFullYear()} Ritwik Raj. All rights reserved.
              <motion.span 
                className="inline-flex items-center ml-2"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
              >
                <Heart className="h-3 w-3 text-red-500 mr-1" fill="#ef4444" />
              </motion.span>
            </motion.p>
            <div className="flex space-x-6 text-xs text-gray-500">
              {policyLinks.map((item, index) => (
                <motion.button 
                  key={index}
                  onClick={() => setActivePolicy(item.name)}
                  className="hover:text-gray-300 transition-colors"
                  whileHover={{ 
                    color: "#a5b4fc",
                    y: -2
                  }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Policy Modal */}
      <AnimatePresence>
        {activePolicy && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePolicy(null)}
          >
            <motion.div 
              className="bg-gray-900 border border-gray-700 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">{activePolicy}</h2>
                <motion.button
                  onClick={() => setActivePolicy(null)}
                  className="p-1 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-400" />
                </motion.button>
              </div>
              <div className="p-6 text-gray-300">
                {activePolicy && policyContent[activePolicy]}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
