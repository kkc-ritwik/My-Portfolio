// import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
// import { useState, useEffect } from 'react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
      
//       // Determine active section based on scroll position
//       const sections = [
//         'hero', 'about', 'skills', 'projects', 'resume', 
//         'gaming', 'achievements', 'certifications', 'contact'
//       ];
      
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { href: '#about', label: 'About' },
//     { href: '#skills', label: 'Skills' },
//     { href: '#projects', label: 'Projects' },
//     { href: '#resume', label: 'Resume' },
//     { href: '#gaming', label: 'Gaming' },
//     { href: '#achievements', label: 'Achievements' },
//     { href: '#certifications', label: 'Certifications' },
//     { href: '#contact', label: 'Contact' }
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled 
//         ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
//         : 'bg-transparent py-4'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           <a 
//             href="#hero" 
//             className={`text-2xl font-bold transition-all duration-300 ${
//               scrolled ? 'text-indigo-600' : 'text-gray-900'
//             } hover:scale-105`}
//           >
//             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               Portfolio
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.href}
//                 href={link.href} 
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
//                   activeSection === link.href.substring(1)
//                     ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md' 
//                     : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
//                 }`}
//               >
//                 {link.label}
//               </a>
//             ))}
            
//             <div className="flex items-center pl-6 space-x-4 border-l border-gray-200">
//               <a 
//                 href="https://github.com/kkc-ritwik" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="text-gray-700 hover:text-indigo-600 hover:scale-110 transition-all"
//                 aria-label="GitHub"
//               >
//                 <Github className="w-5 h-5" />
//               </a>
//               <a 
//                 href="https://www.linkedin.com/in/kkc-ritwik/" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="text-gray-700 hover:text-blue-600 hover:scale-110 transition-all"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a 
//                 href="mailto:ritwiksinghkkc@gmail.com" 
//                 className="text-gray-700 hover:text-red-500 hover:scale-110 transition-all"
//                 aria-label="Email"
//               >
//                 <Mail className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Mobile Navigation Button */}
//           <div className="md:hidden">
//             <button 
//               onClick={() => setIsOpen(!isOpen)} 
//               className={`p-2 rounded-md transition-colors ${
//                 scrolled ? 'text-indigo-600 hover:bg-indigo-100' : 'text-gray-700 hover:bg-gray-100'
//               }`}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isOpen && (
//           <div className="md:hidden absolute left-0 right-0 bg-white shadow-xl rounded-b-xl mt-2 animate-fadeIn border-t border-gray-100">
//             <div className="flex flex-col space-y-1 px-3 pt-2 pb-4">
//               {navLinks.map((link) => (
//                 <a 
//                   key={link.href}
//                   href={link.href} 
//                   className={`px-3 py-2 rounded-md text-base font-medium transition-all ${
//                     activeSection === link.href.substring(1)
//                       ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600' 
//                       : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.label}
//                 </a>
//               ))}
              
//               <div className="flex space-x-6 px-3 py-4 border-t border-gray-100 mt-2">
//                 <a 
//                   href="https://github.com/kkc-ritwik" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="text-gray-700 hover:text-indigo-600 transition-colors"
//                   aria-label="GitHub"
//                 >
//                   <Github className="w-6 h-6" />
//                 </a>
//                 <a 
//                   href="https://www.linkedin.com/in/kkc-ritwik/" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="text-gray-700 hover:text-blue-600 transition-colors"
//                   aria-label="LinkedIn"
//                 >
//                   <Linkedin className="w-6 h-6" />
//                 </a>
//                 <a 
//                   href="mailto:ritwiksinghkkc@gmail.com" 
//                   className="text-gray-700 hover:text-red-500 transition-colors"
//                   aria-label="Email"
//                 >
//                   <Mail className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }


import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = [
        'hero', 'about', 'skills', 'projects', 'resume', 
        'gaming', 'achievements', 'certifications', 'contact'
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
    { href: '#gaming', label: 'Gaming' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#hero" 
            className={`text-2xl font-bold transition-all duration-300 ${
              scrolled ? 'text-indigo-600' : 'text-gray-900'
            } hover:scale-105 relative group`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              <Code className={`w-6 h-6 mr-2 ${scrolled ? 'text-indigo-600' : 'text-white'}`} />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </span>
            <motion.span 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.a 
                key={link.href}
                href={link.href} 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                  activeSection === link.href.substring(1)
                    ? 'text-white' 
                    : scrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-gray-200 hover:text-white'
                }`}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === link.href.substring(1) && (
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md -z-10"
                    layoutId="activeNavBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {hoveredLink === link.href && activeSection !== link.href.substring(1) && (
                  <motion.span 
                    className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-md -z-10"
                    layoutId="hoverNavBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {link.label}
              </motion.a>
            ))}
            
            <div className="flex items-center pl-6 space-x-4 border-l border-gray-200">
              <motion.a 
                href="https://github.com/kkc-ritwik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${scrolled ? 'text-gray-700' : 'text-gray-200'} hover:text-indigo-600 transition-all`}
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/kkc-ritwik/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${scrolled ? 'text-gray-700' : 'text-gray-200'} hover:text-blue-600 transition-all`}
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="mailto:ritwiksinghkkc@gmail.com" 
                className={`${scrolled ? 'text-gray-700' : 'text-gray-200'} hover:text-red-500 transition-all`}
                aria-label="Email"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-md transition-colors ${
                scrolled ? 'text-indigo-600 hover:bg-indigo-100' : 'text-gray-200 hover:bg-gray-800'
              }`}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 shadow-xl rounded-b-xl mt-2 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex flex-col space-y-1 px-3 pt-2 pb-4"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                initial="closed"
                animate="open"
              >
                {navLinks.map((link) => (
                  <motion.a 
                    key={link.href}
                    href={link.href} 
                    className={`px-3 py-2 rounded-md text-base font-medium transition-all relative ${
                      activeSection === link.href.substring(1)
                        ? 'text-white' 
                        : 'text-gray-700 hover:text-indigo-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeSection === link.href.substring(1) && (
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md -z-10"
                        layoutId="activeMobileNavBackground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {link.label}
                  </motion.a>
                ))}
                
                <motion.div 
                  className="flex space-x-6 px-3 py-4 border-t border-gray-100 mt-2"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                >
                  <motion.a 
                    href="https://github.com/kkc-ritwik" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/kkc-ritwik/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a 
                    href="mailto:ritwiksinghkkc@gmail.com" 
                    className="text-gray-700 hover:text-red-500 transition-colors"
                    aria-label="Email"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
