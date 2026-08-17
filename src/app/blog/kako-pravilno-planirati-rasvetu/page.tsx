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
            src="/images/portfolio_3.jpg"
            alt="Kako pravilno planirati rasvetu u stanu ili poslovnom prostoru?"
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
            Kako pravilno planirati rasvetu u stanu ili poslovnom prostoru?
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>4 min čitanja</span>
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
            Rasveta je jedan od elemenata prostora koji direktno utiče na njegovu funkcionalnost, atmosferu i način korišćenja.
          </p>

          <p className="mb-6">
            Dobra rasveta nije samo pitanje izbora lepog rasvetnog tela. Potrebno je unapred razmišljati o nameni prostora, pozicijama radnih površina, načinu korišćenja i potrebnom intenzitetu osvetljenja.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Počnite od namene prostora</h2>

          <p className="mb-6">
            Različiti prostori imaju različite potrebe.
          </p>

          <p className="mb-6">
            U kancelariji je potrebno obezbediti odgovarajuće osvetljenje za rad, dok prodajni prostor može zahtevati kombinaciju opšte i akcentne rasvete.
          </p>

          <p className="mb-6">
            U hali je važno uzeti u obzir visinu objekta, raspored radnih zona, mašina i opreme, dok se u stanu rasveta najčešće planira prema rasporedu prostorija i načinu korišćenja.
          </p>

          <p className="mb-6">
            Zato ne postoji jedno rešenje koje odgovara svim prostorima.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Tri osnovne uloge rasvete</h2>

          <p className="mb-6">
            Rasveta se može posmatrati kroz nekoliko različitih funkcija.
          </p>

          <p className="mb-6">
            <strong className="text-white">Opšta rasveta</strong> obezbeđuje osnovno osvetljenje prostora.
          </p>

          <p className="mb-6">
            <strong className="text-white">Radna rasveta</strong> usmerena je na određene površine na kojima se obavljaju aktivnosti, poput radnog stola ili kuhinjske radne površine.
          </p>

          <p className="mb-6">
            <strong className="text-white">Akcentna ili dekorativna rasveta</strong> koristi se za naglašavanje određenih elemenata prostora i stvaranje željene atmosfere.
          </p>

          <p className="mb-6">
            Kombinovanjem različitih vrsta rasvete prostor može postati funkcionalniji i prijatniji.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Rasveta u poslovnim prostorima</h2>

          <p className="mb-6">
            Kod kancelarija i drugih poslovnih prostora potrebno je posebno voditi računa o tome da osvetljenje odgovara vrsti posla koji se obavlja.
          </p>

          <p className="mb-6">
            Radne površine, komunikacioni prostori, sale za sastanke, prijemni deo i pomoćne prostorije mogu imati različite zahteve.
          </p>

          <p className="mb-6">
            Dobro planirana rasveta doprinosi funkcionalnosti prostora i omogućava zaposlenima da obavljaju posao u odgovarajućim uslovima.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Rasveta u halama i industrijskim objektima</h2>

          <p className="mb-6">
            Industrijski objekti predstavljaju poseban izazov zbog svojih dimenzija, visine i načina korišćenja.
          </p>

          <p className="mb-6">Prilikom planiranja potrebno je uzeti u obzir:</p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>visinu hale;</li>
            <li>raspored radnih površina;</li>
            <li>pozicije mašina i opreme;</li>
            <li>prirodno osvetljenje;</li>
            <li>specifičnosti radnog procesa;</li>
            <li>održavanje i pristup rasvetnim telima;</li>
            <li>energetske karakteristike sistema.</li>
          </ul>

          <p className="mb-6">
            Pravilno raspoređena rasveta može značajno uticati na funkcionalnost radnog prostora.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Planirajte pozicije pre završnih radova</h2>

          <p className="mb-6">
            Jedna od najčešćih grešaka jeste da se rasveta bira tek kada su završeni svi ostali radovi.
          </p>

          <p className="mb-6">
            Pozicije izvoda, prekidača i upravljanja rasvetom treba definisati dovoljno rano kako bi se instalacije pravilno pripremile.
          </p>

          <p className="mb-6">
            Kod poslovnih i industrijskih objekata ovo je posebno važno zbog velikog broja rasvetnih tela i složenosti sistema.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">LED rasveta</h2>

          <p className="mb-6">
            LED tehnologija danas predstavlja često rešenje za različite vrste objekata.
          </p>

          <p className="mb-6">
            Pored mogućnosti različitih oblika i dizajna, LED rasveta može ponuditi odgovarajuće rešenje za različite namene, uključujući kancelarije, prodajne prostore, hale i spoljašnje površine.
          </p>

          <p className="mb-6">
            Prilikom izbora nije dovoljno gledati samo snagu rasvetnog tela. Važno je uzeti u obzir karakteristike prostora i način na koji će se rasveta koristiti.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Rasveta kao deo kompletnog elektro sistema</h2>

          <p className="mb-6">
            Rasvetu treba posmatrati kao deo celokupnih elektroinstalacija.
          </p>

          <p className="mb-6">
            Njene pozicije, način upravljanja i napajanje treba uskladiti sa ostatkom instalacija i projektom objekta.
          </p>

          <p className="mb-6">
            Kod većih projekata kvalitetno projektovanje i koordinacija mogu smanjiti potrebu za naknadnim izmenama.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-16 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bhm-orange/10 rounded-full blur-3xl" />
            <h2 className="text-2xl font-bold text-white mb-4 mt-0 relative z-10">BHM Energy</h2>
            <p className="mb-6 relative z-10">
              BHM Energy projektuje i izvodi sisteme rasvete za stambene, poslovne i industrijske objekte.
            </p>
            <p className="mb-6 relative z-10">
              Od osnovne funkcionalne rasvete do kompleksnijih rešenja za hale, kancelarije i poslovne prostore, pristupamo svakom projektu u skladu sa njegovom namenom i tehničkim zahtevima.
            </p>
            <p className="font-semibold text-white mb-8 relative z-10">
              Planirate rasvetu za novi objekat ili rekonstrukciju postojećeg prostora?
            </p>
            <p className="mb-6 relative z-10">
              Obratite nam se i zajedno pronađimo rešenje koje odgovara vašem prostoru.
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
