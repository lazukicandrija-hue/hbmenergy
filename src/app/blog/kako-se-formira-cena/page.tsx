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
            src="/images/blog_pricing.jpg"
            alt="Kako se formira cena elektroinstalacionih radova?"
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
            Kako se formira cena elektroinstalacionih radova?
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
            Kada investitor ili vlasnik objekta planira elektroinstalacione radove, jedno od prvih pitanja je: <strong className="text-white">Koliko će radovi koštati?</strong>
          </p>

          <p className="mb-6">
            Međutim, elektroinstalacije nisu usluga kod koje postoji jedna univerzalna cena po kvadratnom metru. Konačna vrednost zavisi od velikog broja faktora – od namene objekta i obima radova do vrste materijala i tehničkih zahteva.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Od čega zavisi cena?</h2>

          <p className="mb-6">
            Na cenu najviše utiču:
          </p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>vrsta i namena objekta;</li>
            <li>površina i složenost objekta;</li>
            <li>obim elektroinstalacija;</li>
            <li>broj i vrsta priključaka;</li>
            <li>količina i vrsta materijala;</li>
            <li>rasveta;</li>
            <li>sistemi slabe struje;</li>
            <li>gromobranska zaštita i uzemljenje;</li>
            <li>razvodni ormari i oprema;</li>
            <li>uslovi izvođenja;</li>
            <li>projektna dokumentacija i tehnički zahtevi.</li>
          </ul>

          <p className="mb-6">
            Zbog toga dve hale iste površine ne moraju imati ni približno istu cenu elektroinstalacionih radova.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Površina objekta nije jedini kriterijum</h2>

          <p className="mb-6">
            Kvadratura može biti jedan od početnih podataka, ali sama po sebi nije dovoljna za formiranje kvalitetne ponude.
          </p>

          <p className="mb-6">
            Na primer, poslovni prostor od 1.000 m² sa kancelarijama nema iste potrebe kao proizvodna hala iste površine u kojoj se koriste mašine, proizvodna oprema i sistemi većih kapaciteta.
          </p>

          <p className="mb-6">
            Kod industrijskih objekata raspored opreme, potrebna snaga i način korišćenja prostora mogu značajno uticati na obim elektroinstalacija.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Materijal je važan deo ponude</h2>

          <p className="mb-6">
            Kvalitet i vrsta materijala direktno utiču na ukupnu vrednost radova.
          </p>

          <p className="mb-6">
            U ponudi se mogu naći kablovi i provodnici, razvodni ormari, zaštitni elementi, utičnice i prekidači, rasvetna tela, oprema za slabu struju i drugi elementi sistema.
          </p>

          <p className="mb-6">
            Zato je važno da ponuda jasno definiše šta je uključeno u cenu.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Rad i materijal</h2>

          <p className="mb-6">
            Kod elektroinstalacionih radova ukupna vrednost najčešće obuhvata kombinaciju materijala i rada.
          </p>

          <p className="mb-6">
            U zavisnosti od dogovora, izvođač može preuzeti nabavku kompletnog materijala ili se materijal može nabavljati prema dogovoru sa investitorom.
          </p>

          <p className="mb-6">
            Najvažnije je da pre početka radova bude jasno definisano šta ponuda obuhvata.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Projektna dokumentacija olakšava formiranje ponude</h2>

          <p className="mb-6">
            Kod većih projekata, posebno poslovnih i industrijskih objekata, projektna dokumentacija i predmer predstavljaju važnu osnovu za pripremu ponude.
          </p>

          <p className="mb-6">
            Na taj način moguće je preciznije definisati količine, obim radova i potrebnu opremu.
          </p>

          <p className="mb-6">
            Za manje radove ponuda se može formirati i na osnovu opisa radova i uvida u postojeće stanje.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Zašto dve ponude mogu imati različitu cenu?</h2>

          <p className="mb-6">
            Različita cena ne znači automatski da je jedna ponuda bolja ili lošija.
          </p>

          <p className="mb-6">
            Potrebno je uporediti šta je konkretno uključeno u svaku ponudu:
          </p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>koji materijal se koristi;</li>
            <li>koji obim radova je predviđen;</li>
            <li>da li su uključeni rad i materijal;</li>
            <li>da li su uključeni sistemi slabe struje;</li>
            <li>da li je obuhvaćena rasveta;</li>
            <li>da li su uključeni gromobranska zaštita i uzemljenje;</li>
            <li>da li su predviđena ispitivanja i završni radovi.</li>
          </ul>

          <p className="mb-6">
            Tek kada se uporede isti ili približno isti uslovi, moguće je realno porediti cene.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Najjeftinija ponuda nije uvek najpovoljnija</h2>

          <p className="mb-6">
            Kod elektroinstalacija cena ne bi trebalo da bude jedini kriterijum.
          </p>

          <p className="mb-6">
            Instalacije ostaju deo objekta dugi niz godina. Kvalitet materijala, način izvođenja, stručnost izvođača i mogućnost budućeg servisa mogu biti mnogo važniji od male početne razlike u ceni.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-16 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bhm-orange/10 rounded-full blur-3xl" />
            <h2 className="text-2xl font-bold text-white mb-4 mt-0 relative z-10">Kako BHM Energy priprema ponudu?</h2>
            <p className="mb-6 relative z-10">
              BHM Energy najpre sagleda vrstu objekta, obim radova i tehničke zahteve.
            </p>
            <p className="mb-6 relative z-10">
              Kod većih projekata analiziramo dostupnu projektnu dokumentaciju, predmer i druge relevantne informacije kako bi ponuda što preciznije odgovarala stvarnom obimu posla.
            </p>
            <p className="mb-6 relative z-10">
              Za manje radove procena se može izvršiti na osnovu opisa potrebnih radova i uvida u stanje na objektu.
            </p>
            <p className="font-semibold text-white mb-8 relative z-10">
              Želite konkretnu ponudu za vaš objekat?
            </p>
            <p className="mb-6 relative z-10">
              Pošaljite nam projekat, predmer ili osnovne informacije o radovima koje planirate i kontaktiraćemo vas radi dogovora.
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
