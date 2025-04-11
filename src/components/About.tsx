import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          👨‍💻 About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/piyush.png"
              alt="Piyush Agarwal"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600 text-justify" variants={fadeInUp}>
              I'm Ritwik Raj, a passionate and results-driven Full Stack Developer with
              hands-on experience in building scalable, production-grade web
              applications using modern technologies like Spring Boot, ReactJS, and
              NodeJS. I bring a solid foundation in computer science principles, cloud
              deployment, and test-driven development, with a strong commitment to
              writing clean, efficient, and maintainable code.
            </motion.p>
            <motion.p className="text-lg text-gray-600 text-justify" variants={fadeInUp}>
              From designing backend microservices to deploying full-stack
              applications with Docker and CI/CD pipelines, I focus on delivering
              reliable, high-performance solutions. With 200+ DSA problems solved
              and national-level hackathon experience, I combine problem-solving
              skills with practical development to build impactful tech products.
              I'm continuously learning, growing, and looking for opportunities to
              contribute to challenging and innovative projects in the tech space.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">1+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">40 (but loyal)</h3>
                <p className="text-gray-600">YouTube Subscribers</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}