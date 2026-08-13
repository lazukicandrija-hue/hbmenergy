'use client';

import { motion } from 'framer-motion';
import { MessageSquare, ClipboardList, Wrench, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Konsultacija',
    description: 'Razgovaramo o vašim potrebama i ciljevima.',
    icon: MessageSquare,
  },
  {
    id: '02',
    title: 'Planiranje',
    description: 'Projektujemo optimalno rešenje za vaš prostor.',
    icon: ClipboardList,
  },
  {
    id: '03',
    title: 'Izvođenje',
    description: 'Stručna montaža sa premium materijalima.',
    icon: Wrench,
  },
  {
    id: '04',
    title: 'Garancija',
    description: 'Garantujemo kvalitet i sigurnost rada.',
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section id="about" className="py-24 bg-bhm-dark-50/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Kako Radimo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Od ideje do garancije — u četiri koraka
          </motion.p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id} className="relative flex-1 flex flex-col items-center w-full z-10">
                {/* Connecting Line - Desktop */}
                {!isLast && (
                  <div className="hidden md:block absolute top-[4rem] left-[50%] w-full h-0 z-[-1]">
                    <svg className="w-full h-1 overflow-visible text-bhm-orange/30" preserveAspectRatio="none">
                      <motion.line
                        x1="4rem"
                        y1="0"
                        x2="calc(100% - 4rem)"
                        y2="0"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      />
                    </svg>
                  </div>
                )}
                
                {/* Connecting Line - Mobile */}
                {!isLast && (
                  <div className="md:hidden absolute top-[5.5rem] left-1/2 w-0 h-full z-[-1]">
                    <svg className="w-1 h-full overflow-visible text-bhm-orange/30 -translate-x-1/2" preserveAspectRatio="none">
                      <motion.line
                        x1="0"
                        y1="2rem"
                        x2="0"
                        y2="calc(100% - 1rem)"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      />
                    </svg>
                  </div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center text-center max-w-[200px]"
                >
                  <span className="text-bhm-orange font-mono text-sm mb-2">{step.id}</span>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bhm-orange/20 to-bhm-navy/20 flex items-center justify-center border border-bhm-orange/20 bg-black/40">
                    <Icon className="text-bhm-orange w-7 h-7" />
                  </div>
                  <h3 className="text-white font-semibold mt-4">{step.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{step.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
