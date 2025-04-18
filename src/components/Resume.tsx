import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { FaBriefcase, FaGraduationCap, FaDownload, FaCode, FaServer, FaDatabase, FaReact, FaJava, FaJs } from "react-icons/fa";
import { SiTypescript, SiMysql, SiMongodb } from "react-icons/si";

const Resume = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Spring Boot", icon: <FaServer className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  ];

  // const experiences = [
  //   {
  //     title: "Web Developer Intern",
  //     company: "Tech Solutions Inc.",
  //     period: "2022 - Present",
  //     description: "Working on frontend development using React and TypeScript. Building responsive and interactive user interfaces."
  //   },
  //   {
  //     title: "Java Backend Developer",
  //     company: "Digital Innovations",
  //     period: "2021 - 2022",
  //     description: "Developed RESTful APIs using Spring Boot and integrated with various databases. Implemented authentication and authorization systems."
  //   }
  // ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-green-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-purple-500 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-yellow-500 animate-ping"></div>
      </div>
      
      {/* Code pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <FaBriefcase className="text-5xl md:text-6xl text-blue-500 mr-4" />
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Professional Journey
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 mb-12 border border-white/20 shadow-xl"
            variants={fadeInUp}
          >
            <motion.p 
              className="text-lg text-gray-200 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm an aspiring developer specializing in web development and Java backend development. 
              My goal is to leverage these technologies to create innovative solutions for real-world problems.
              With a passion for clean code and user-centered design, I strive to build applications that make a difference.
            </motion.p>
            
            <motion.div 
              className="flex justify-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <a 
                href="https://drive.google.com/file/d/1-H-H-8n4XKgSZis77Z4I-kbO_y0Kn5Bu/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                <FaDownload className="h-5 w-5 mr-2" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
          
          {/* Skills section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* <h3 className="text-2xl font-bold mb-6 text-center text-blue-300 flex items-center justify-center">
              <FaCode className="mr-2" /> Technical Skills
            </h3> */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl text-center border border-blue-500/30 shadow-lg flex flex-col items-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59,130,246,0.4)" }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <span className="text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
          
          {/* Experience section
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-300 flex items-center justify-center">
              <FaGraduationCap className="mr-2" /> Experience
            </h3> */}
            {/* <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-500/30 shadow-lg relative overflow-hidden"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ boxShadow: "0 10px 25px -5px rgba(59,130,246,0.4)" }}
                  viewport={{ once: true }}
                > */}
                  {/* <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full"></div>
                  <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-blue-400">{exp.company}</span>
                    <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
          
          {/* Education section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <h3 className="text-2xl font-bold mb-6 text-center text-blue-300 flex items-center justify-center">
              <FaGraduationCap className="mr-2" /> Education
            </h3> */}
            {/* <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-500/30 shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(59,130,246,0.4)" }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white mb-1">Bachelor of Technology in Computer Science</h4>
              <div className="flex justify-between items-center mb-3">
                <span className="text-blue-400">University of Technology</span>
                <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">2019 - 2023</span>
              </div>
              <p className="text-gray-300">Focused on software development, algorithms, and data structures. Participated in various coding competitions and hackathons.</p>
            </motion.div> */}
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center justify-center">
              <FaServer className="mr-2" /> Certifications
            </h3> */}
            {/* <div className="flex flex-wrap justify-center gap-3">
              {["AWS Certified Developer", "Oracle Java Certification", "React Developer", "Full Stack Web Development"].map((cert, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full text-white font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  {cert}
                </motion.span>
              ))}
            </div> */}
          </motion.div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default Resume;
