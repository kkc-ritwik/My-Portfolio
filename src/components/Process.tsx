import { motion } from 'framer-motion';
import { Workflow, Search, PenTool, Code2, Rocket, Headphones } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We discuss your goals, scope and timeline. I ask the right questions to fully understand what you need.',
    accent: 'blue',
  },
  {
    icon: PenTool,
    title: 'Architecture & Plan',
    description: 'I design the system architecture, choose the right stack, and share a clear plan with milestones.',
    accent: 'cyan',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'I build in iterations with clean, tested code — keeping you updated with regular progress demos.',
    accent: 'teal',
  },
  {
    icon: Rocket,
    title: 'Deploy & Launch',
    description: 'I deploy to AWS/Azure with Docker & CI/CD, run final testing, and hand over full documentation.',
    accent: 'emerald',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Post-launch support, fixes and enhancements so your product keeps running smoothly.',
    accent: 'green',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-cyan-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-emerald-500 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Workflow className="text-5xl md:text-6xl text-cyan-400 mr-4 stroke-[1.5]" />
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              How I Work
            </h2>
          </div>
          <p className="text-gray-300 max-w-2xl text-lg">
            A clear, transparent process — so you always know exactly where your project stands.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const a = step.accent;
            return (
              <motion.div
                key={index}
                className={`backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-${a}-500/30 shadow-lg relative overflow-hidden`}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={`absolute -top-3 -right-2 text-7xl font-black text-${a}-500/10 select-none`}>
                  {index + 1}
                </div>
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-r from-${a}-600 to-${a}-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">{step.title}</h3>
                <p className="text-gray-300 text-sm relative z-10">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
