import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-bhm-dark text-gray-300">
      <Header />
      
      {/* Hero Section of the Article */}
      <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portfolio_2.jpg"
            alt="Jaka i slaba struja, koja je razlika?"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bhm-dark via-bhm-dark/80 to-bhm-dark/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Link href="/#blog" className="inline-flex items-center text-bhm-orange hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Nazad na Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Jaka i slaba struja, koja je razlika?
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>3 min čitanja</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>BHM Energy Tim</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <article className="text-gray-300 text-lg leading-relaxed">
          <p className="text-xl text-gray-200 font-medium mb-10 leading-relaxed">
            Kada se govori o elektroinstalacijama, često se koriste izrazi <strong className="text-white">jaka struja</strong> i <strong className="text-white">slaba struja</strong>.
          </p>

          <p className="mb-6">
            Iako oba sistema predstavljaju deo elektro infrastrukture objekta, njihova namena i funkcija nisu iste.
          </p>

          <p className="mb-6">
            Jednostavno rečeno, instalacije jake struje prvenstveno služe za <strong className="text-white">napajanje električnom energijom</strong>, dok sistemi slabe struje služe za <strong className="text-white">komunikaciju, prenos podataka, bezbednost, kontrolu i upravljanje</strong>.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Šta obuhvata jaka struja?</h2>

          <p className="mb-6">
            Jaka struja obuhvata elektroinstalacije koje služe za napajanje objekta i električnih uređaja.
          </p>

          <p className="mb-6">
            U zavisnosti od objekta, tu spadaju:
          </p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>napajanje objekta;</li>
            <li>razvod električne energije;</li>
            <li>razvodni ormari;</li>
            <li>utičnice i priključci;</li>
            <li>instalacije rasvete;</li>
            <li>napajanje uređaja i opreme;</li>
            <li>određeni sistemi zaštite i upravljanja.</li>
          </ul>

          <p className="mb-6">
            Kod poslovnih i industrijskih objekata ovi sistemi mogu biti znatno složeniji zbog većih potreba za električnom energijom i većeg broja potrošača.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Šta je slaba struja?</h2>

          <p className="mb-6">
            Sistemi slabe struje ne služe prvenstveno za napajanje uređaja, već za prenos informacija, komunikaciju, bezbednost i kontrolu.
          </p>

          <p className="mb-6">
            U zavisnosti od objekta, mogu obuhvatati:
          </p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>video nadzor;</li>
            <li>kontrolu pristupa;</li>
            <li>interfonske sisteme;</li>
            <li>računarske i komunikacione mreže;</li>
            <li>telefonske instalacije;</li>
            <li>TV sisteme;</li>
            <li>alarmne sisteme;</li>
            <li>druge komunikacione i sigurnosne sisteme.</li>
          </ul>

          <p className="mb-6">
            Konkretan obim zavisi od namene objekta i zahteva projekta.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Zašto su oba sistema važna?</h2>

          <p className="mb-6">
            Savremeni objekat ne može se posmatrati samo kroz napajanje električnom energijom.
          </p>

          <p className="mb-6">
            Poslovna zgrada, kancelarija, hala ili industrijski objekat često zahteva kombinaciju različitih sistema kako bi mogao bezbedno i efikasno da funkcioniše.
          </p>

          <p className="mb-6">
            Na primer, poslovni objekat može imati elektroinstalacije za napajanje i rasvetu, ali istovremeno i računarsku mrežu, video nadzor, kontrolu pristupa i druge sisteme.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Da li se jaka i slaba struja izvode zajedno?</h2>

          <p className="mb-6">
            Mogu biti deo istog projekta i realizacije, ali se njihovo izvođenje i organizacija moraju pravilno planirati.
          </p>

          <p className="mb-6">
            Posebno je važno voditi računa o trasama, pozicijama opreme i međusobnoj koordinaciji različitih instalacija.
          </p>

          <p className="mb-6">
            Kod većih objekata kvalitetna koordinacija od početka može značajno olakšati izvođenje i kasnije održavanje sistema.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Jaka i slaba struja u poslovnim objektima</h2>

          <p className="mb-6">
            Kod hala i poslovnih prostora oba sistema mogu imati veoma važnu ulogu.
          </p>

          <p className="mb-6">
            Jaka struja obezbeđuje napajanje rasvete, opreme, mašina i drugih potrošača, dok slaba struja može obezbediti komunikaciju, nadzor i kontrolu objekta.
          </p>

          <p className="mb-6">
            Zbog toga je važno da se oba segmenta planiraju u skladu sa namenom objekta.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-16 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bhm-orange/10 rounded-full blur-3xl" />
            <h2 className="text-2xl font-bold text-white mb-4 mt-0 relative z-10">BHM Energy</h2>
            <p className="mb-6 relative z-10">
              BHM Energy pruža usluge projektovanja i izvođenja elektroinstalacija, kao i realizaciju sistema slabe struje za stambene, poslovne i industrijske objekte.
            </p>
            <p className="mb-6 relative z-10">
              Naš cilj je da različiti sistemi budu pravilno planirani, izvedeni i međusobno usklađeni.
            </p>
            <p className="font-semibold text-white mb-8 relative z-10">
              Planirate novi objekat ili rekonstrukciju postojećeg?
            </p>
            <p className="mb-6 relative z-10">
              Kontaktirajte BHM Energy i zajedno definišimo elektro rešenje koje odgovara vašim potrebama.
            </p>
            <div className="relative z-10">
              <Link href="/#contact" className="btn-electric inline-block px-8 py-3">
                Zatražite ponudu
              </Link>
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </main>
  );
}
