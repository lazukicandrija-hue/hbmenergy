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
            src="/images/portfolio_5.jpg"
            alt="Od projekta do izvedenih radova: kako izgleda proces realizacije elektroinstalacija?"
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
            Od projekta do izvedenih radova: kako izgleda proces realizacije elektroinstalacija?
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min čitanja</span>
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
            Kvalitetno izvedene elektroinstalacije rezultat su dobrog planiranja, koordinacije i stručnog izvođenja.
          </p>

          <p className="mb-6">
            Bez obzira da li je u pitanju stambena zgrada, poslovni prostor, hala ili industrijski objekat, proces realizacije ne počinje prvim kablom koji se postavi na objektu. Pravi posao počinje mnogo ranije – analizom projekta, definisanjem obima radova i organizacijom izvođenja.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. Analiza projekta i potreba objekta</h2>

          <p className="mb-6">
            Prvi korak je razumevanje objekta.
          </p>

          <p className="mb-6">
            Potrebno je sagledati njegovu namenu, površinu, raspored prostorija, opremu koja će se koristiti i sve tehničke zahteve koji utiču na elektroinstalacije.
          </p>

          <p className="mb-6">
            Kod poslovnih i industrijskih objekata posebno je važno razumeti način rada budućeg korisnika objekta.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Definisanje obima radova</h2>

          <p className="mb-6">
            Nakon analize definiše se šta je potrebno izvesti. To može obuhvatiti:
          </p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>elektroenergetske instalacije;</li>
            <li>razvodne ormare;</li>
            <li>utičnice i priključke;</li>
            <li>rasvetu;</li>
            <li>sisteme slabe struje;</li>
            <li>gromobransku zaštitu;</li>
            <li>uzemljenje;</li>
            <li>napajanje opreme;</li>
            <li>druge specifične sisteme.</li>
          </ul>

          <p className="mb-6">
            Jasno definisan obim radova predstavlja osnovu za pripremu ponude i organizaciju projekta.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Predmer i ponuda</h2>

          <p className="mb-6">
            Kod većih projekata predmer i projektna dokumentacija omogućavaju preciznije sagledavanje količina i potrebnih radova.
          </p>

          <p className="mb-6">
            Na osnovu dostupne dokumentacije priprema se ponuda koja treba jasno da definiše obim posla, materijal i druge elemente koji su predmet dogovora.
          </p>

          <p className="mb-6">
            Cilj je da pre početka radova obe strane imaju jasno razumevanje onoga što treba da bude izvedeno.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">4. Priprema i nabavka materijala</h2>

          <p className="mb-6">
            Nakon dogovora pristupa se pripremi izvođenja.
          </p>

          <p className="mb-6">
            U zavisnosti od projekta, organizuje se nabavka potrebnog materijala i opreme, planira radna snaga i definiše dinamika radova.
          </p>

          <p className="mb-6">
            Kod većih objekata dobra logistika je posebno važna kako bi radovi tekli bez nepotrebnih zastoja.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. Koordinacija sa drugim izvođačima</h2>

          <p className="mb-6">
            Elektroinstalacije se na gradilištu ne izvode izolovano.
          </p>

          <p className="mb-6">
            Potrebna je koordinacija sa građevinskim, mašinskim i drugim izvođačima kako bi se radovi odvijali pravilnim redosledom.
          </p>

          <p className="mb-6">
            Ovo je posebno važno kod hala i poslovnih objekata gde postoji veliki broj različitih instalacija i sistema.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">6. Izvođenje elektroinstalacija</h2>

          <p className="mb-6">
            Nakon pripreme počinje izvođenje radova prema projektu i dogovorenom obimu.
          </p>

          <p className="mb-6">
            Radovi mogu uključivati postavljanje instalacija, razvoda, kablova, razvodnih ormara, rasvete, sistema slabe struje i drugih elemenata.
          </p>

          <p className="mb-6">
            Tokom izvođenja važno je pratiti kvalitet radova i usklađenost sa projektom.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">7. Povezivanje i šemiranje</h2>

          <p className="mb-6">
            Nakon postavljanja instalacija vrši se povezivanje predviđenih elemenata i sistema.
          </p>

          <p className="mb-6">
            Kod složenijih objekata posebno je važno pravilno označavanje, organizacija i šemiranje instalacija kako bi kasnije servis i održavanje bili jednostavniji.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">8. Provera i ispitivanje</h2>

          <p className="mb-6">
            Po završetku radova vrše se odgovarajuće provere i ispitivanja u skladu sa vrstom instalacija i zahtevima projekta.
          </p>

          <p className="mb-6">
            Cilj je da se utvrdi da su sistemi pravilno izvedeni i funkcionalni pre nego što objekat počne da se koristi.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">9. Završetak radova i dokumentacija</h2>

          <p className="mb-6">
            Završna faza obuhvata kontrolu izvedenih radova, otklanjanje eventualnih nedostataka i završnu dokumentaciju, u skladu sa vrstom projekta i ugovorenim obimom.
          </p>

          <p className="mb-6">
            Dobro dokumentovan izvedeni sistem olakšava kasnije održavanje i eventualne intervencije.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">10. Servis i održavanje</h2>

          <p className="mb-6">
            Elektroinstalacije su deo objekta tokom celog njegovog životnog veka.
          </p>

          <p className="mb-6">
            Redovno održavanje omogućava da se potencijalni problemi uoče na vreme, a eventualni kvarovi brže dijagnostikuju i otklone.
          </p>

          <p className="mb-6">
            Za poslovne i industrijske korisnike održavanje je posebno značajno jer pouzdanost elektro sistema može direktno uticati na kontinuitet poslovanja.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Zašto je važno imati pouzdanog izvođača?</h2>

          <p className="mb-6">
            Kada je elektro deo projekta poveren jednom stručnom timu koji može da sagleda ceo proces, komunikacija i koordinacija mogu biti jednostavnije.
          </p>

          <p className="mb-6">
            Od prvog pregleda projekta do završetka radova, cilj treba da bude isti: pouzdan, funkcionalan i kvalitetno izveden elektro sistem.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-16 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bhm-orange/10 rounded-full blur-3xl" />
            <h2 className="text-2xl font-bold text-white mb-4 mt-0 relative z-10">BHM Energy</h2>
            <p className="mb-6 relative z-10">
              BHM Energy pruža kompletna rešenja za elektroinstalacije u stambenim, poslovnim i industrijskim objektima.
            </p>
            <p className="mb-6 relative z-10">
              Naš pristup obuhvata projektovanje i pripremu, organizaciju izvođenja, elektroinstalacije, šemiranje objekata, sisteme slabe struje, rasvetu, gromobransku zaštitu i uzemljenje, kao i servis i održavanje.
            </p>
            <p className="font-semibold text-white mb-8 relative z-10">
              Imate projekat ili planirate izgradnju, rekonstrukciju ili adaptaciju objekta?
            </p>
            <p className="mb-6 relative z-10">
              Pošaljite nam osnovne informacije ili projektnu dokumentaciju i kontaktirajte BHM Energy za razgovor o vašem projektu.
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
