import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const Gaming = () => {
  return (
    <section id="gaming" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
         🎮 My Passion for Competitive Gaming
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg text-gray-700 mb-10"
            variants={fadeInUp}
          >
            Check out my gameplay on my YouTube channel!
          </motion.p>
          
          <motion.div 
            className="aspect-video rounded-xl overflow-hidden shadow-lg mb-8 mx-auto"
            variants={fadeInUp}
          >
            <iframe
              src="https://www.youtube.com/embed/OfHGK3Pq08o"
              title="My Gameplay Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Gaming;