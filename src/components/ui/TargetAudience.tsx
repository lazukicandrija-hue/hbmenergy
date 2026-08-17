"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, HardHat, Home, X } from "lucide-react";

const audiences = [
  {
    id: "🏢",
    title: "Poslovni objekti",
    short: "Industrije • Hale • Kancelarije • Lokali • Poslovni prostori",
    icon: Building2,
    image: "/images/audience_poslovni.jpg",
    details: (
      <>
        <h4 className="text-xl font-semibold mb-4 text-white">Industrije • Hale • Kancelarije • Lokali • Poslovni prostori</h4>
        <p className="text-gray-300 leading-relaxed">
          Kompletne elektroinstalacije i sistemi za poslovne i industrijske objekte, od pripreme i izvođenja do servisa i održavanja.
        </p>
      </>
    )
  },
  {
    id: "🏗️",
    title: "Investitori",
    short: "Stambene i stambeno-poslovne zgrade • Novogradnja • Projekti u izgradnji",
    icon: HardHat,
    image: "/images/real_rough_wiring.jpg",
    details: (
      <>
        <h4 className="text-xl font-semibold mb-4 text-white">Stambene i stambeno-poslovne zgrade • Novogradnja • Projekti u izgradnji</h4>
        <p className="text-gray-300 leading-relaxed">
          Partner za investitore u svim fazama realizacije elektroinstalacija — od projektovanja i pripreme do izvođenja, kontrole i završetka radova.
        </p>
      </>
    )
  },
  {
    id: "🏠",
    title: "Stambeni objekti",
    short: "Stanovi • Kuće • Vikendice • Adaptacije i renoviranja",
    icon: Home,
    image: "/images/blog_renovation.jpg",
    details: (
      <>
        <h4 className="text-xl font-semibold mb-4 text-white">Stanovi • Kuće • Vikendice • Adaptacije i renoviranja</h4>
        <p className="text-gray-300 leading-relaxed">
          Elektroinstalacije za nove i postojeće stambene objekte, uključujući rekonstrukcije, adaptacije, rasvetu, slabu struju i druge sisteme.
        </p>
      </>
    )
  }
];

const TargetAudience = () => {
  const [selectedAudience, setSelectedAudience] = useState<typeof audiences[0] | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAudience(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="audience" className="py-24 relative bg-gray-900/50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            Za koga radimo
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Elektroenergetska rešenja prilagođena svakom objektu i njegovoj nameni.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setSelectedAudience(audience)}
                className="glow-card rounded-2xl p-0 overflow-hidden group bg-gray-900 border border-gray-800 cursor-pointer flex flex-col h-full"
              >
                <div className="relative overflow-hidden h-56 w-full shrink-0">
                  <Image
                    src={audience.image}
                    alt={audience.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark gradient overlay so icon is visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-6 left-6 text-5xl opacity-40 group-hover:opacity-100 transition-opacity drop-shadow-lg filter grayscale group-hover:grayscale-0">
                    {audience.id}
                  </div>
                </div>
                <div className="p-8 relative flex flex-col flex-grow bg-gray-900">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-bhm-orange transition-colors">{audience.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{audience.short}</p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sm font-semibold text-bhm-orange opacity-80 group-hover:opacity-100 transition-opacity">
                    Detaljnije <span className="ml-2">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedAudience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAudience(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative my-8"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedAudience(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black p-2 rounded-full text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="relative h-48 w-full">
                <Image
                  src={selectedAudience.image}
                  alt={selectedAudience.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="bg-bhm-orange p-3 rounded-xl shadow-lg text-2xl">
                    {selectedAudience.id}
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {selectedAudience.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                {selectedAudience.details}
                
                <div className="mt-8 pt-6 border-t border-gray-800 flex justify-end">
                  <button 
                    onClick={() => setSelectedAudience(null)}
                    className="px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
                  >
                    Zatvori
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TargetAudience;
