import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          📋 Resume
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="mb-10" variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            <p className="text-lg text-gray-700 mb-8">
              I'm an aspiring developer specializing in web development, java backend development. 
              My goal is to leverage these technologies to create innovative solutions for real-world problems.
            </p>
            
            <motion.div 
              className="flex justify-center"
              variants={fadeInUp}
            >
              <a 
                href="https://drive.google.com/file/d/1cIYmBgxBeO00kxNTbBrlxHGVDbUvd-TB/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;