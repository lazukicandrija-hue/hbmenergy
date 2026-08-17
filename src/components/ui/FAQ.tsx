"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    category: "O uslugama",
    questions: [
      {
        q: "1. Koje elektroinstalacione radove izvodite?",
        a: "Izvodimo kompletne elektroinstalacione radove za industrijske objekte, poslovne i stambene objekte. Naše usluge obuhvataju projektovanje i izvođenje elektroinstalacija, šemiranje objekata, sisteme slabe struje, gromobransku zaštitu i uzemljenje, rasvetu, kao i servis i održavanje."
      },
      {
        q: "2. Za koje vrste objekata radite?",
        a: "Radimo na industrijskim objektima i halama, poslovnim prostorima, lokalima i na stambeno-poslovnim objektima u izgradnji, stambenim objektima, uključujući stanove i kuće."
      },
      {
        q: "3. Da li radite novogradnju?",
        a: "Da. Sarađujemo sa investitorima, izvođačima i drugim učesnicima u izgradnji na realizaciji elektroinstalacija u novim objektima, od pripreme i projektovanja do izvođenja i završetka radova."
      },
      {
        q: "4. Da li radite adaptaciju i rekonstrukciju postojećih elektroinstalacija?",
        a: "Da. Izvodimo radove na rekonstrukciji, adaptaciji i proširenju postojećih elektroinstalacija, kao i zameni dotrajalih ili neadekvatnih instalacija."
      }
    ]
  },
  {
    category: "O načinu rada",
    questions: [
      {
        q: "5. Da li radite na osnovu projekta i predmera?",
        a: "Da. Radove možemo izvoditi na osnovu projektne dokumentacije, predmera i tehničke specifikacije. Na osnovu dostavljene dokumentacije možemo pripremiti ponudu za izvođenje radova."
      },
      {
        q: "6. Da li obezbeđujete materijal?",
        a: "Da. U zavisnosti od dogovora i vrste projekta, praksa je da mi preuzimamo nabavku i organizaciju potrebnog materijala prema projektu, specifikaciji i zahtevima."
      },
      {
        q: "7. Da li radite kompletan elektro deo projekta?",
        a: "Da. U zavisnosti od obima projekta, možemo preuzeti kompletan elektro deo — od projektovanja i pripreme, preko nabavke i izvođenja, do povezivanja, ispitivanja i završetka radova."
      },
      {
        q: "8. Kako izgleda proces saradnje?",
        a: "Nakon prvog upita prikupljamo osnovne informacije o objektu i potrebnim radovima. Ukoliko je potrebno, vršimo uvid u projektnu dokumentaciju ili stanje na objektu, definišemo obim radova i pripremamo ponudu. Nakon dogovora pristupamo organizaciji i izvođenju radova."
      }
    ]
  },
  {
    category: "Konkretne usluge",
    questions: [
      {
        q: "9. Šta obuhvataju sistemi slabe struje?",
        a: "U zavisnosti od potreba objekta, sistemi slabe struje mogu obuhvatati video nadzor, kontrolu pristupa, interfonske sisteme, računarske i komunikacione mreže i druge sisteme koji doprinose bezbednosti, komunikaciji i funkcionalnosti objekta."
      },
      {
        q: "10. Da li izvodite gromobransku zaštitu i uzemljenje?",
        a: "Da. Izvodimo sisteme gromobranske zaštite, uzemljenja i izjednačavanja potencijala za stambene, poslovne i industrijske objekte, u skladu sa projektnom dokumentacijom i tehničkim zahtevima."
      },
      {
        q: "11. Da li radite rasvetu?",
        a: "Da. Izvodimo unutrašnju i spoljašnju rasvetu, funkcionalnu, dekorativnu i LED rasvetu, kao i pripremu, povezivanje i upravljanje sistemima rasvete."
      },
      {
        q: "12. Da li pružate servis i održavanje?",
        a: "Da. Pružamo usluge servisa, dijagnostike kvarova, popravki i redovnog održavanja elektroinstalacija i sistema, kako bi objekat ostao bezbedan i funkcionalan."
      }
    ]
  },
  {
    category: "Ponuda i saradnja",
    questions: [
      {
        q: "13. Kako se formira cena elektroinstalacionih radova?",
        a: "Cena zavisi od vrste i obima radova, karakteristika objekta, projektne dokumentacije, količine materijala i drugih tehničkih zahteva. Nakon uvida u dostupnu dokumentaciju i definisanja obima radova, pripremamo konkretnu ponudu."
      },
      {
        q: "14. Da li mogu da dobijem ponudu bez projekta?",
        a: "U određenim slučajevima da. Za manje radove i adaptacije ponudu možemo pripremiti na osnovu opisa radova i uvida u postojeće stanje. Za kompleksnije projekte potrebna je odgovarajuća projektna dokumentacija ili predmer."
      },
      {
        q: "15. Kako mogu da zatražim ponudu?",
        a: "Pošaljite nam upit putem kontakt forme, e-maila ili telefona. Uz osnovne informacije o objektu i željenim radovima, poželjno je dostaviti projekat, predmer ili drugu dostupnu dokumentaciju. Naš tim će vas kontaktirati radi dogovora o narednim koracima."
      }
    ]
  }
];

const FAQItem = ({ q, a, isOpen, onClick }: { q: string, a: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border border-gray-800 bg-gray-900/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-bhm-orange/50">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <h4 className={`text-lg font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-bhm-orange' : 'text-gray-200'}`}>
          {q}
        </h4>
        <ChevronDown 
          className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-bhm-orange' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState<number>(0);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (q: string) => {
    setOpenItem(openItem === q ? null : q);
  };

  return (
    <section id="faq" className="py-24 bg-bhm-dark relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bhm-orange/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            Najčešća pitanja
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Pronađite odgovore na najčešća pitanja o našim uslugama, načinu rada i saradnji.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Category Tabs (Desktop) / Select (Mobile) */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 flex flex-col gap-2">
              {faqData.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setOpenCategory(idx)}
                  className={`text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    openCategory === idx 
                      ? 'bg-bhm-orange text-white shadow-lg shadow-bhm-orange/20 scale-105' 
                      : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:w-2/3">
            <motion.div 
              key={openCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4 lg:hidden">
                {faqData[openCategory].category}
              </h3>
              
              {faqData[openCategory].questions.map((faq, idx) => (
                <FAQItem 
                  key={idx} 
                  q={faq.q} 
                  a={faq.a} 
                  isOpen={openItem === faq.q}
                  onClick={() => toggleItem(faq.q)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
