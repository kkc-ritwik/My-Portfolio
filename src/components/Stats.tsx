import { motion } from 'framer-motion';
import { Briefcase, Users, Clock, Globe } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '10+', label: 'Projects Delivered', accent: 'indigo' },
  { icon: Clock, value: '2+', label: 'Years Experience', accent: 'fuchsia' },
  { icon: Users, value: '5+', label: 'Happy Clients', accent: 'cyan' },
  { icon: Globe, value: '24/7', label: 'Timezone Friendly', accent: 'emerald' },
];

export default function Stats() {
  return (
    <section className="py-12 relative overflow-hidden bg-gray-900 text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const a = stat.accent;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r from-${a}-600 to-${a}-500 flex items-center justify-center mb-3 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
