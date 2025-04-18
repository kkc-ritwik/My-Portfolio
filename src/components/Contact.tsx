// import { Mail, MapPin, Send } from 'lucide-react';
// import { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { motion } from 'framer-motion';
// import toast, { Toaster } from 'react-hot-toast';
// import { fadeInUp, staggerContainer } from '../utils/animations';

// export default function Contact() {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     try {
//       setIsSubmitting(true);
//       await emailjs.sendForm(
//         'service_p3f9vjr',
//         'template_nlz32tp',
//         formRef.current,
//         'R51tUKDUUK_3doTy8'
//       );
//       toast.success('Message sent successfully!');
//       formRef.current.reset();
//     } catch (error) {
//       toast.error('Failed to send message. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <Toaster position="top-right" />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-center mb-16"
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           📬 Get In Touch
//         </motion.h2>
        
//         <motion.div 
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           {/* Contact Information */}
//           <motion.div 
//             className="space-y-8"
//             variants={fadeInUp}
//           >
//             <h3 className="text-2xl font-bold text-gray-900">Let's talk about everything!</h3>
//             <p className="text-gray-600">
//               Feel free to reach out for collaborations, opportunities, or just a friendly chat.
//             </p>
            
//             <div className="space-y-6">
//               <motion.div 
//                 className="flex items-center space-x-4"
//                 whileHover={{ x: 10 }}
//               >
//                 <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
//                   <Mail className="w-6 h-6 text-indigo-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-600">Email</p>
//                   <p className="text-gray-900 font-medium">ritwiksinghkkc@gmail.com</p>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 className="flex items-center space-x-4"
//                 whileHover={{ x: 10 }}
//               >
//                 <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
//                   <MapPin className="w-6 h-6 text-indigo-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-600">Location</p>
//                   <p className="text-gray-900 font-medium">Pune, India</p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="space-y-6"
//             variants={fadeInUp}
//           >
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="user_name"
//                 id="name"
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="user_email"
//                 id="email"
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
            
//             <motion.button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {isSubmitting ? (
//                 'Sending...'
//               ) : (
//                 <>
//                   Send Message
//                   <Send className="w-5 h-5" />
//                 </>
//               )}
//             </motion.button>
//           </motion.form>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { Mail, MapPin, Send, MessageSquare, User, AtSign } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        'service_p3f9vjr',
        'template_nlz32tp',
        formRef.current,
        'R51tUKDUUK_3doTy8'
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Toaster position="top-right" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-purple-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-fuchsia-500 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-rose-500 animate-ping"></div>
      </div>
      
      {/* Contact pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <MessageSquare className="text-5xl md:text-6xl text-pink-500 mr-4 stroke-[1.5]" />
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
            Get In Touch
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={fadeInUp}
          >
            <motion.div
              className="backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-pink-500/30 shadow-lg relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(236,72,153,0.3)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Let's talk about everything!</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-pink-300">Email</p>
                    <p className="text-white font-medium">ritwiksinghkkc@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-purple-300">Location</p>
                    <p className="text-white font-medium">Pune, India</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Social media links */}
              <motion.div 
                className="flex space-x-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="https://github.com/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20"
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20"
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://twitter.com/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20"
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-purple-500/30 shadow-lg relative overflow-hidden"
            variants={fadeInUp}
            whileHover={{ 
              boxShadow: "0 20px 25px -5px rgba(168,85,247,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-tr-full"></div>
            
            <div className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 mr-2 text-pink-400" />
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="block w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white focus:border-pink-500 focus:ring-pink-500 backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <AtSign className="w-4 h-4 mr-2 text-pink-400" />
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="block w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white focus:border-pink-500 focus:ring-pink-500 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 mr-2 text-pink-400" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white focus:border-pink-500 focus:ring-pink-500 backdrop-blur-sm"
                  placeholder="Your message here..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(236,72,153,0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
        
        {/* Decorative elements at the bottom */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
        </motion.div>
      </div>
    </section>
  );
}
