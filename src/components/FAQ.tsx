import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do you work with international clients across time zones?',
    a: "Absolutely. I work with clients worldwide and adjust my schedule to ensure a good overlap with yours. I'm responsive, communicate in fluent English, and keep you updated regularly.",
  },
  {
    q: 'How do you handle communication and project updates?',
    a: 'I stay reachable over your preferred channel — email, Slack, WhatsApp, Zoom or Google Meet. I share regular progress demos and milestone updates so you always know the status of your project.',
  },
  {
    q: 'What is your pricing model?',
    a: "I'm flexible — fixed-price for well-defined projects, hourly for ongoing or evolving work, and monthly retainers for long-term support. We agree on scope and budget upfront, with no surprises.",
  },
  {
    q: 'How do payments and milestones work?',
    a: 'For larger projects I break the work into clear milestones with payments tied to deliverables. I work comfortably through Upwork, Fiverr, or direct contracts, whichever you prefer.',
  },
  {
    q: 'Will my idea and code stay confidential?',
    a: "Yes. I'm happy to sign an NDA before we start. Your code, data and business ideas remain fully confidential and you own 100% of the final deliverables.",
  },
  {
    q: 'Do you provide support after the project is delivered?',
    a: 'Yes. Every project includes a support window for bug fixes, and I offer ongoing maintenance and enhancement plans if you want me to keep improving your product after launch.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-purple-500 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-indigo-500 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="text-5xl md:text-6xl text-purple-400 mr-4 stroke-[1.5]" />
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
              FAQ
            </h2>
          </div>
          <p className="text-gray-300 max-w-2xl text-lg">
            Everything you need to know before we start working together.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-white/10 rounded-xl border border-purple-500/30 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-purple-300 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-gray-300 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
