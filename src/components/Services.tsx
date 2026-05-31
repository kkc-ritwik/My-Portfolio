import { motion } from 'framer-motion';
import { Briefcase, Check, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { servicesData } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-indigo-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-fuchsia-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-cyan-500 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-emerald-500 animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="text-5xl md:text-6xl text-indigo-400 mr-4 stroke-[1.5]" />
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-500">
              What I Offer
            </h2>
          </div>
          <p className="text-gray-300 max-w-2xl text-lg">
            Production-ready solutions delivered end to end. Pick a service or describe your idea —
            I'll handle the engineering so you can focus on your business.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const a = service.accent;
            return (
              <motion.div
                key={index}
                className={`backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-${a}-500/30 shadow-lg relative overflow-hidden flex flex-col`}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-${a}-500/20 to-transparent rounded-bl-full`}></div>

                <div className="flex items-center mb-5 relative z-10">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-r from-${a}-600 to-${a}-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg flex-shrink-0`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className={`text-sm text-${a}-300`}>{service.tagline}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-5 relative z-10">{service.description}</p>

                <ul className="space-y-2 mb-6 relative z-10 flex-grow">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-200 text-sm">
                      <Check className={`w-4 h-4 mr-2 mt-0.5 text-${a}-400 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
                  <span className={`text-sm font-medium text-${a}-300`}>{service.pricing}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                  >
                    Get a quote
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">Not sure which service fits? Let's figure it out together.</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-700 hover:to-fuchsia-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
