import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-violet-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-fuchsia-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-cyan-500 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Quote className="text-5xl md:text-6xl text-violet-400 mr-4 stroke-[1.5]" />
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
              What Clients Say
            </h2>
          </div>
          <p className="text-gray-300 max-w-2xl text-lg">
            Trusted by clients and companies to deliver reliable, production-grade software.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonialsData.map((t, index) => {
            const a = t.accent;
            return (
              <motion.div
                key={index}
                className={`backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-${a}-500/30 shadow-lg relative overflow-hidden flex flex-col`}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-${a}-500/20 to-transparent rounded-bl-full`}></div>

                <Quote className={`w-10 h-10 text-${a}-400/40 mb-4 relative z-10`} />

                <div className="flex mb-4 relative z-10">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-gray-200 italic leading-relaxed mb-6 relative z-10 flex-grow">
                  "{t.quote}"
                </p>

                <div className="flex items-center relative z-10 pt-4 border-t border-white/10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-${a}-600 to-${a}-500 flex items-center justify-center font-bold text-white mr-3 flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className={`text-sm text-${a}-300`}>
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
        </motion.div>
      </div>
    </section>
  );
}
