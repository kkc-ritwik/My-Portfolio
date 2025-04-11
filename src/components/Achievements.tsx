import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          🏆 Achievements
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gray-50 rounded-xl p-8 shadow-sm"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart India Hackathon National Finalist</h3>
            <p className="text-lg text-gray-700 mb-6">
              Led team of 6 to develop ML-based traffic management solution reducing congestion by 30% - National Level
            </p>
            <a 
              href="https://drive.google.com/file/d/19rz_jw3ElrWwymocVvOP6jtBk5dSADPS/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              View Certificate
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

          <motion.div 
            className="bg-gray-50 rounded-xl p-8 shadow-sm"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">GP Birla Scholarship Academic Excellence</h3>
            <p className="text-lg text-gray-700 mb-6">
              Recognized for consistent performance and dedication to studies - University Level
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;