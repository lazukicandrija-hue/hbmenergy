"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ToggleRight, Lightbulb, Shield, Building } from "lucide-react";

const services = [
  {
    title: "Fina Galanterija",
    image: "/images/image_fine_fixtures.jpg",
    description: "Montaža prekidača, utičnica, i pametnih sistema.",
    icon: ToggleRight,
  },
  {
    title: "LED Rasveta",
    image: "/images/image_led_lighting.jpg",
    description: "Projektovanje i ugradnja dekorativne rasvete.",
    icon: Lightbulb,
  },
  {
    title: "Razvodne Table",
    image: "/images/image_circuit_board.jpg",
    description: "Sigurni sistemi i automatski osigurači.",
    icon: Shield,
  },
  {
    title: "Kompletne Instalacije",
    image: "/images/image_industrial_power.jpg",
    description: "Grubi i fini radovi na novogradnjama i rekonstrukcijama.",
    icon: Building,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            Naše usluge
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Kompletna elektroenergetska rešenja – od projektovanja do izvođenja, puštanja u rad i održavanja.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="glow-card rounded-2xl p-0 overflow-hidden group bg-gray-900 border border-gray-800"
              >
                <div className="relative overflow-hidden h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 relative">
                  <div className="bg-bhm-orange/10 p-2 rounded-lg inline-flex">
                    <Icon className="w-6 h-6 text-bhm-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mt-3">{service.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
