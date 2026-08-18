"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 relative bg-bhm-dark">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-bhm-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Main Narrative */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6"
              >
                O nama
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight"
              >
                Pouzdan partner za elektro deo vašeg projekta.
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 text-gray-300 text-lg leading-relaxed"
              >
                <p>
                  BHM Energy je specijalizovana kompanija, usmerena na projektovanje, izvođenje i održavanje elektroinstalacija za poslovne, industrijske i stambene objekte.
                </p>
                <p>
                  Naš tim objedinjuje tehničko znanje, iskustvo na projektima i praktično razumevanje procesa izgradnje, kako bismo elektro deo svakog projekta realizovali precizno, odgovorno i u skladu sa zahtevima objekta.
                </p>
                <p>
                  Poseban fokus stavljamo na <strong className="text-white">hale, industrijske objekte, poslovne prostore i stambeno-poslovne projekte</strong>, gde su kvalitetna organizacija, pouzdanost sistema i poštovanje dinamike radova od ključnog značaja.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-2xl font-bold text-white mb-4"
              >
                Iskustvo koje stoji iza našeg rada
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 }}
                className="space-y-4 text-gray-300 text-lg leading-relaxed"
              >
                <p>
                  Iza BHM Energy stoji tim sa iskustvom u realizaciji elektro radova na različitim vrstama objekata.
                </p>
                <p>
                  Razumemo da svaki projekat ima svoje specifičnosti, od tehničkih zahteva i projektne dokumentacije, do rokova, koordinacije na gradilištu i potreba krajnjeg korisnika.
                </p>
                <p>
                  Zato svakom poslu pristupamo individualno, sa jasnim fokusom na kvalitet izvedenih radova i pouzdanost sistema koji ostaju deo objekta godinama nakon završetka izgradnje.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-2xl font-bold text-white mb-4"
              >
                Naš cilj
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 }}
                className="space-y-4 text-gray-300 text-lg leading-relaxed"
              >
                <p>
                  Želimo da BHM Energy bude više od izvođača elektro radova, <strong className="text-white">partner na kojeg investitori, izvođači i vlasnici objekata mogu da računaju.</strong>
                </p>
                <p>
                  Gradimo dugoročne odnose kroz profesionalan pristup, odgovornost prema poslu i kvalitet koji se vidi u svakom detalju izvedenog sistema.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
                className="mt-8 p-6 bg-gray-900 border-l-4 border-bhm-orange rounded-r-xl"
              >
                <div className="font-bold text-white text-xl">BHM Energy</div>
                <div className="text-bhm-orange italic">Elektro rešenja za objekte koji traju.</div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Highlight Box & CTA */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glow-card sticky top-24 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 p-8 md:p-10 rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Od planiranja do realizacije
              </h3>
              
              <div className="space-y-4 text-gray-300 mb-8 leading-relaxed">
                <p>
                  Elektroinstalacije posmatramo kao celinu, od prvog tehničkog rešenja i pripreme, preko organizacije i izvođenja radova, do završne kontrole i održavanja.
                </p>
                <p className="font-medium text-white pt-2">Naše usluge obuhvataju:</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Projektovanje i izvođenje elektroinstalacija",
                  "Šemiranje objekata",
                  "Sistemi slabe struje",
                  "Gromobranska zaštita i uzemljenje",
                  "Rasveta",
                  "Servis i održavanje"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-bhm-orange shrink-0 mt-0.5" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                U radu se oslanjamo na dobru pripremu, jasnu komunikaciju i koordinaciju sa ostalim učesnicima na projektu. Cilj nam je da svaki sistem bude funkcionalan, pouzdan i prilagođen stvarnim potrebama objekta.
              </p>

              <Link 
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 w-full bg-bhm-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(241,90,41,0.3)] hover:shadow-[0_0_30px_rgba(241,90,41,0.5)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  POŠALJITE UPIT
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </Link>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
