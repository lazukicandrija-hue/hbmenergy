"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PenTool, Network, Shield, CloudLightning, Lightbulb, Wrench, X } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Projektovanje i izvođenje instalacija",
    short: "Kompletna realizacija elektroinstalacija, od tehničkog rešenja i pripreme do stručnog izvođenja na objektu.",
    icon: PenTool,
    image: "/images/image_industrial_power.jpg",
    details: (
      <>
        <h4 className="text-xl font-semibold mb-4 text-white">Od ideje do funkcionalnog elektro sistema.</h4>
        <p className="mb-4 text-gray-300">BHM Energy pruža usluge projektovanja, organizacije i izvođenja elektroinstalacija za stambene, poslovne i industrijske objekte.</p>
        <p className="mb-4 text-gray-300">Radove realizujemo prema projektnoj dokumentaciji, tehničkim zahtevima i nameni objekta, uz pažljivo planiranje materijala, instalacija i dinamike izvođenja.</p>
        <p className="mb-2 text-white font-medium">Obuhvatamo:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          <li>projektovanje elektroinstalacija</li>
          <li>izvođenje elektroinstalacionih radova</li>
          <li>napajanje i distribuciju električne energije</li>
          <li>instalacije rasvete i utičnica</li>
          <li>razvodne ormare i povezivanje</li>
          <li>pripremu instalacija za različite sisteme</li>
          <li>ispitivanje i kontrolu izvedenih instalacija</li>
        </ul>
      </>
    )
  },
  {
    id: "02",
    title: "Šemiranje objekata",
    short: "Izrada i realizacija elektro šema i povezivanje instalacija u skladu sa projektom, namenom i tehničkim zahtevima objekta.",
    icon: Network,
    image: "/images/image_circuit_board.jpg",
    details: (
      <>
        <h4 className="text-xl font-semibold mb-4 text-white">Precizno povezivanje svakog sistema.</h4>
        <p className="mb-4 text-gray-300">Šemiranje predstavlja važan deo realizacije elektroinstalacija, posebno kod objekata sa većim brojem sistema, uređaja i razvodnih tačaka.</p>
        <p className="mb-4 text-gray-300">BHM Energy vrši povezivanje i organizaciju instalacija prema tehničkoj dokumentaciji i predviđenoj funkciji objekta.</p>
        <p className="mb-2 text-white font-medium">Usluge obuhvataju:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          <li>izradu i čitanje elektro šema</li>
          <li>povezivanje instalacija</li>
          <li>šemiranje i povezivanje razvodnih ormara</li>
          <li>obeležavanje vodova i elemenata</li>
          <li>povezivanje opreme i uređaja</li>
          <li>proveru ispravnosti i funkcionalnosti sistema</li>
        </ul>
      </>
    )
  },
  {
    id: "03",
    title: "Slaba struja",
    short: "Sistemi slabe struje za bezbednost, komunikaciju, kontrolu i savremeno upravljanje objektom.",
    icon: Shield,
    image: "/images/image_fine_fixtures.jpg",
    details: (
      <>
        <h4 className="text-xl font-semibold mb-4 text-white">Pametni sistemi za bezbedniji i funkcionalniji prostor.</h4>
        <p className="mb-4 text-gray-300">Sistemi slabe struje predstavljaju sastavni deo savremenih objekata. BHM Energy projektuje i izvodi instalacije za različite sisteme komunikacije, bezbednosti i kontrole.</p>
        <p className="mb-2 text-white font-medium">U zavisnosti od potreba objekta, realizujemo:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-4">
          <li>video nadzor</li>
          <li>protivprovalne sisteme</li>
          <li>interfonske sisteme</li>
          <li>kontrolu pristupa</li>
          <li>telefonske i računarske mreže</li>
          <li>TV i druge komunikacione instalacije</li>
          <li>pripremu instalacija za pametne sisteme</li>
        </ul>
        <p className="text-sm italic text-gray-500 mt-6">* Mogućnost prilagođavanja konkretnih sistema prema zahtevima klijenata.</p>
      </>
    )
  },
  {
    id: "04",
    title: "Gromobranska zaštita i uzemljenje",
    short: "Projektovanje i izvođenje sistema zaštite objekta od atmosferskog pražnjenja, uz odgovarajuće uzemljenje i izjednačavanje potencijala.",
    icon: CloudLightning,
    image: "/images/image_industrial_power.jpg",
    details: (
      <>
        <h4 className="text-xl font-semibold mb-4 text-white">Zaštita objekta počinje pravilno izvedenim sistemom.</h4>
        <p className="mb-4 text-gray-300">Projektujemo i izvodimo sisteme gromobranske zaštite i uzemljenja za stambene, poslovne i industrijske objekte.</p>
        <p className="mb-4 text-gray-300">Posebnu pažnju posvećujemo pravilnom izvođenju sistema, povezivanju svih elemenata i bezbednosti objekta i instalacija.</p>
        <p className="mb-2 text-white font-medium">Obuhvatamo:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          <li>gromobranske instalacije</li>
          <li>uzemljenje objekta</li>
          <li>temeljne uzemljivače</li>
          <li>povezivanje i izjednačavanje potencijala</li>
          <li>izvođenje instalacija prema projektnoj dokumentaciji</li>
          <li>kontrolu i ispitivanje sistema</li>
        </ul>
      </>
    )
  },
  {
    id: "05",
    title: "Rasveta",
    short: "Projektovanje i izvođenje funkcionalnih i dekorativnih sistema rasvete, prilagođenih nameni i karakteristikama prostora.",
    icon: Lightbulb,
    image: "/images/image_led_lighting.jpg",
    details: (
      <>
        <h4 className="text-xl font-semibold mb-4 text-white">Svetlo koje prati funkciju prostora.</h4>
        <p className="mb-4 text-gray-300">Od osnovne funkcionalne rasvete do kompleksnih sistema osvetljenja, BHM Energy realizuje rasvetu prilagođenu nameni, karakteristikama i zahtevima objekta.</p>
        <p className="mb-2 text-white font-medium">Radimo:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          <li>unutrašnju rasvetu</li>
          <li>spoljašnju rasvetu</li>
          <li>poslovnu i industrijsku rasvetu</li>
          <li>dekorativnu rasvetu</li>
          <li>LED sisteme</li>
          <li>rasvetu zajedničkih prostora</li>
          <li>povezivanje i upravljanje rasvetom</li>
        </ul>
      </>
    )
  },
  {
    id: "06",
    title: "Servis i održavanje",
    short: "Redovno i interventno održavanje elektroinstalacija, dijagnostika problema, otklanjanje kvarova i briga o pouzdanosti sistema.",
    icon: Wrench,
    image: "/images/image_circuit_board.jpg",
    details: (
      <>
        <h4 className="text-xl font-semibold mb-4 text-white">Pouzdane instalacije zahtevaju kontinuiranu brigu.</h4>
        <p className="mb-4 text-gray-300">Pored izvođenja novih sistema, BHM Energy pruža servis i održavanje postojećih elektroinstalacija i sistema.</p>
        <p className="mb-4 text-gray-300">Cilj je da se potencijalni problemi uoče na vreme, kvarovi brzo otklone, a sistemi održavaju sigurnim i funkcionalnim.</p>
        <p className="mb-2 text-white font-medium">Usluge uključuju:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          <li>dijagnostiku kvarova</li>
          <li>popravke elektroinstalacija</li>
          <li>servis elektro opreme</li>
          <li>proveru i održavanje razvodnih ormara</li>
          <li>zamenu dotrajalih elemenata</li>
          <li>održavanje rasvete</li>
          <li>preventivne preglede i održavanje</li>
          <li>interventne popravke</li>
        </ul>
      </>
    )
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setSelectedService(service)}
                className="glow-card rounded-2xl p-0 overflow-hidden group bg-gray-900 border border-gray-800 cursor-pointer flex flex-col h-full"
              >
                <div className="relative overflow-hidden h-48 w-full shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark gradient overlay so number is visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-4 left-6 text-4xl font-black text-white/20">
                    {service.id}
                  </div>
                </div>
                <div className="p-6 relative flex flex-col flex-grow">
                  <div className="bg-bhm-orange/10 p-3 rounded-xl inline-flex mb-4 w-fit group-hover:bg-bhm-orange/20 transition-colors">
                    <Icon className="w-6 h-6 text-bhm-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-bhm-orange transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.short}</p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sm font-semibold text-bhm-orange opacity-80 group-hover:opacity-100 transition-opacity">
                    Saznajte više <span className="ml-2">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
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
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black p-2 rounded-full text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="relative h-48 w-full">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="bg-bhm-orange p-3 rounded-xl shadow-lg">
                    <selectedService.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {selectedService.id} — {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                {selectedService.details}
                
                <div className="mt-8 pt-6 border-t border-gray-800 flex justify-end">
                  <button 
                    onClick={() => setSelectedService(null)}
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

export default Services;
