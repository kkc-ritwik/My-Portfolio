import { Mail, MapPin, Send, MessageSquare, User, AtSign } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
                    <p className="text-white font-medium">Patna, India</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Social media links - Simplified and moved */}
              <div className="mt-8 flex justify-center space-x-6">
                <a 
                  href="https://github.com/kkc-ritwik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-lg border border-white/10">
                    <FaGithub className="w-6 h-6 text-white" />
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/kkc-ritwik/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg border border-white/10">
                    <FaLinkedin className="w-6 h-6 text-white" />
                  </div>
                </a>
                
                <a 
                  href="https://x.com/kkc_ritwik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center shadow-lg border border-white/10">
                    <FaTwitter className="w-6 h-6 text-white" />
                  </div>
                </a>
              </div>
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
