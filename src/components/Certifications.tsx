import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          📜 Professional Certifications
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Web Development Bootcamp [MERN Stack]</h3>
            <p className="text-gray-700 mb-4">
              Completed intensive 4.5-month MERN stack course by CodeHelp. Developed 5+ full-stack applications.
            </p>
            <a 
              href="https://drive.google.com/file/d/1wqPgpEVKsR1kUkLAMHJ_ta7_YN7LSOiz/view" 
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
            className="bg-white rounded-xl p-6 shadow-sm"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">DSA Master Course [Supreme Batch]</h3>
            <p className="text-gray-700 mb-4">
              Completed intensive 5-month DSA course by CodeHelp. Implemented 200+ optimized solutions.
            </p>
            <a 
              href="https://drive.google.com/file/d/1sH7_QYtxElw-YXmCoh7GiBEYzHphyGGp/view" 
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
            className="bg-white rounded-xl p-6 shadow-sm"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Spring Boot Advanced Course</h3>
            <p className="text-gray-700 mb-4">
              Mastered 4-month enterprise Spring Boot development course by Coding Shuttle. Microservices, AWS, Docker & Kubernetes.
            </p>
            <a 
              href="https://drive.google.com/file/d/16uGzwLOMD9R4py57hrYeRjQ02ySm2tgp/view" 
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
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;