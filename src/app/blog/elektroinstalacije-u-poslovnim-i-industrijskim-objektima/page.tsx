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
            src="/images/image_circuit_board.jpg"
            alt="Elektroinstalacije u poslovnim i industrijskim objektima"
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
            Elektroinstalacije u poslovnim i industrijskim objektima: šta je važno planirati na vreme
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
            Elektroinstalacije su jedan od najvažnijih sistema svakog poslovnog i industrijskog objekta. U halama, proizvodnim pogonima, magacinima, kancelarijskim i drugim poslovnim prostorima, elektro sistem mora biti projektovan i izveden tako da odgovara stvarnim potrebama objekta, njegovoj nameni i opremi koja će se koristiti.
          </p>

          <p className="mb-6">
            Za razliku od stambenih objekata, poslovni i industrijski objekti često zahtevaju složenije elektro sisteme, veće kapacitete, više priključnih mesta i pažljivo planiranje budućih potreba.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Dobra elektroinstalacija počinje pre početka radova</h2>

          <p className="mb-6">
            Jedna od najčešćih grešaka jeste da se elektroinstalacije posmatraju tek kada građevinski radovi već uđu u završnu fazu.
          </p>

          <p className="mb-6">
            Kod hala i poslovnih objekata elektro deo treba planirati od samog početka, zajedno sa ostalim instalacijama i tehnološkim zahtevima objekta.
          </p>

          <p className="mb-6">Pre početka izvođenja potrebno je sagledati:</p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>namenu objekta;</li>
            <li>raspored proizvodne ili druge opreme;</li>
            <li>potrebnu snagu i način napajanja;</li>
            <li>pozicije mašina i uređaja;</li>
            <li>raspored radnih i kancelarijskih prostora;</li>
            <li>unutrašnju i spoljašnju rasvetu;</li>
            <li>sisteme slabe struje;</li>
            <li>gromobransku zaštitu i uzemljenje;</li>
            <li>mogućnost budućeg proširenja sistema.</li>
          </ul>

          <p className="mb-6">
            Što su zahtevi objekta preciznije definisani na početku, to je kasnije manje potrebe za izmenama, dodatnim radovima i neplaniranim troškovima.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Elektroinstalacije moraju pratiti namenu objekta</h2>

          <p className="mb-6">
            Hala koja se koristi za proizvodnju nema iste elektro potrebe kao magacin, logistički centar ili kancelarijski prostor.
          </p>

          <p className="mb-6">
            Na primer, proizvodni objekat može zahtevati napajanje većeg broja mašina i uređaja, dok poslovni prostor može imati veći fokus na kancelarijsku infrastrukturu, rasvetu, komunikacione sisteme i kontrolu pristupa.
          </p>

          <p className="mb-6">
            Zato se elektroinstalacije ne mogu posmatrati kao univerzalno rešenje.
          </p>

          <p className="mb-6">
            <strong className="text-white">Svaki objekat zahteva pristup prilagođen njegovoj nameni, opremi i načinu korišćenja.</strong>
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Napajanje i raspodela električne energije</h2>

          <p className="mb-6">
            Kod poslovnih i industrijskih objekata posebno je važno pravilno planirati distribuciju električne energije kroz objekat.
          </p>

          <p className="mb-6">
            Potrebno je predvideti odgovarajuće razvodne ormare, trase instalacija, priključke i napajanje opreme, uzimajući u obzir trenutne i očekivane potrebe.
          </p>

          <p className="mb-6">
            Kod hala je posebno važno unapred definisati pozicije mašina, radnih zona, tehnološke opreme i drugih potrošača kako bi se instalacije pravilno pozicionirale.
          </p>

          <p className="mb-6">
            Dobro planirana distribucija omogućava jednostavnije održavanje i eventualno proširenje sistema u budućnosti.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Rasveta poslovnih i industrijskih objekata</h2>

          <p className="mb-6">
            Rasveta u hali ili poslovnom prostoru nije samo estetsko pitanje.
          </p>

          <p className="mb-6">
            U proizvodnim i radnim prostorima potrebno je obezbediti odgovarajuće osvetljenje za bezbedan i efikasan rad zaposlenih, dok se u kancelarijama i poslovnim prostorima rasveta prilagođava načinu korišćenja prostora.
          </p>

          <p className="mb-6">Prilikom planiranja rasvete potrebno je uzeti u obzir:</p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>namenu prostora;</li>
            <li>visinu objekta;</li>
            <li>raspored radnih površina;</li>
            <li>prirodno osvetljenje;</li>
            <li>vrstu aktivnosti koja se obavlja;</li>
            <li>energetske karakteristike sistema.</li>
          </ul>

          <p className="mb-6">
            Za hale se često koriste različita industrijska rasvetna rešenja, dok se za kancelarijske i reprezentativne prostore mogu kombinovati funkcionalna i dekorativna rasveta.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Slaba struja i bezbednost objekta</h2>

          <p className="mb-6">
            Savremeni poslovni objekti ne oslanjaju se samo na elektroenergetske instalacije.
          </p>

          <p className="mb-6">
            Sistemi slabe struje mogu biti važan deo ukupne infrastrukture objekta i mogu obuhvatiti video nadzor, kontrolu pristupa, interfonske sisteme, računarske i komunikacione mreže i druge sisteme, u zavisnosti od potreba objekta.
          </p>

          <p className="mb-6">
            Njihovo planiranje u ranoj fazi omogućava pravilno pozicioniranje instalacija i smanjuje potrebu za naknadnim intervencijama.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Gromobranska zaštita i uzemljenje</h2>

          <p className="mb-6">
            Kod poslovnih, industrijskih i posebno velikih objekata, pravilno izvedena gromobranska zaštita i sistem uzemljenja predstavljaju važan deo ukupne zaštite objekta i instalacija.
          </p>

          <p className="mb-6">
            Sistem treba planirati i izvesti u skladu sa projektom i odgovarajućim tehničkim zahtevima, uz pravilno povezivanje svih predviđenih elemenata.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Zašto je koordinacija izvođača važna?</h2>

          <p className="mb-6">
            Kod izgradnje hale ili poslovnog objekta na projektu često učestvuje više izvođača.
          </p>

          <p className="mb-6">
            Elektroinstalacije moraju biti usklađene sa građevinskim radovima, mašinskim instalacijama, vodovodom, ventilacijom, tehnološkom opremom i drugim sistemima.
          </p>

          <p className="mb-6">Dobra koordinacija omogućava:</p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>efikasniju organizaciju radova;</li>
            <li>manje naknadnih izmena;</li>
            <li>pravilno pozicioniranje instalacija;</li>
            <li>bolju kontrolu dinamike radova;</li>
            <li>smanjenje rizika od oštećenja izvedenih instalacija;</li>
            <li>jednostavniju završnu kontrolu objekta.</li>
          </ul>

          <p className="mb-6">
            Kod većih projekata upravo dobra organizacija može napraviti značajnu razliku u vremenu i troškovima realizacije.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Planirajte i buduće potrebe</h2>

          <p className="mb-6">
            Poslovanje se menja, a sa njim se menjaju i potrebe objekta.
          </p>

          <p className="mb-6">
            Moguće je da će se u budućnosti dodati nova oprema, proširiti proizvodnja, promeniti raspored prostora ili povećati broj zaposlenih.
          </p>

          <p className="mb-6">
            Zato je prilikom projektovanja i izvođenja elektroinstalacija korisno razmišljati i o mogućnosti budućih proširenja.
          </p>

          <p className="mb-6">
            Dobro projektovan sistem treba da bude dovoljno fleksibilan da može da prati razvoj objekta.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Od projekta do održavanja</h2>

          <p className="mb-6">
            Kvalitetna elektroinstalacija nije završena onog trenutka kada su radovi izvedeni.
          </p>

          <p className="mb-6">
            Nakon završetka radova potrebno je izvršiti odgovarajuće provere i ispitivanja, a tokom korišćenja objekta redovno održavanje može pomoći u ranom otkrivanju problema i smanjenju rizika od kvarova i zastoja.
          </p>

          <p className="mb-6">
            Za poslovne korisnike pouzdanost elektro sistema ima dodatnu važnost, jer kvar može direktno uticati na rad poslovanja.
          </p>

          <p className="mb-6">
            Zato servis i održavanje treba posmatrati kao deo životnog ciklusa objekta, a ne samo kao reakciju na nastali kvar.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-16 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bhm-orange/10 rounded-full blur-3xl" />
            <h2 className="text-2xl font-bold text-white mb-4 mt-0 relative z-10">BHM Energy za poslovne i industrijske objekte</h2>
            <p className="mb-4 relative z-10">
              BHM Energy pruža elektroenergetska rešenja za poslovne i industrijske objekte, uključujući hale, proizvodne i skladišne prostore, kancelarije i druge poslovne objekte.
            </p>
            <p className="mb-6 relative z-10">
              Naš posao obuhvata projektovanje i izvođenje elektroinstalacija, šemiranje objekata, sisteme slabe struje, rasvetu, gromobransku zaštitu i uzemljenje, kao i servis i održavanje.
            </p>
            <p className="font-semibold text-white mb-8 relative z-10">
              Planirate izgradnju ili rekonstrukciju poslovnog ili industrijskog objekta?
            </p>
            <p className="mb-6 relative z-10">
              Pošaljite nam osnovne informacije o projektu, projektnu dokumentaciju ili predmer i predračun, a naš tim će sagledati potrebe objekta i predložiti odgovarajuće rešenje.
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
