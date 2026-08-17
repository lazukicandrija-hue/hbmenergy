'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { id: 1, image: '/images/real_electrical_board.jpg', title: 'Šemiranje razvodnih ormara' },
  { id: 2, image: '/images/real_cable_trays.jpg', title: 'Industrijske instalacije i kablovski regali' },
  { id: 3, image: '/images/real_wall_wiring.jpg', title: 'Stambeni objekti - gruba faza' },
  { id: 4, image: '/images/real_panel_testing.jpg', title: 'Ispitivanje i puštanje u rad' },
  { id: 5, image: '/images/real_rough_wiring.jpg', title: 'Razvod instalacija u novogradnji' },
  { id: 6, image: '/images/real_grounding_trench.jpg', title: 'Uzemljenje i podzemni vodovi' },
];

export default function Portfolio() {
  return (
    <section className="py-24">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Naši Projekti
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Pogledajte neke od naših nedavnih realizacija
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group overflow-hidden rounded-2xl border border-white/5 aspect-[4/3]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bhm-dark via-bhm-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10">
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
