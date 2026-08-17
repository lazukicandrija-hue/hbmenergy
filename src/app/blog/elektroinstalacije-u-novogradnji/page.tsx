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
            src="/images/image_industrial_power.jpg"
            alt="Elektroinstalacije u novogradnji"
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
            Elektroinstalacije u novogradnji: šta investitor treba da planira na vreme
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>17. Avgust 2026.</span>
            </div>
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
            Elektroinstalacije su jedan od ključnih sistema svakog objekta, iako se njihov značaj često primeti tek kada nastane problem. Kod novogradnje, kvalitetno planiranje elektroinstalacija od samog početka omogućava veću sigurnost, funkcionalnost i jednostavnije održavanje objekta u budućnosti.
          </p>

          <p className="mb-6">
            Za investitora, elektroinstalacije nisu samo pitanje postavljanja kablova i utičnica. One obuhvataju čitav sistem koji treba da bude usklađen sa projektom, namenom objekta i potrebama njegovih budućih korisnika.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Sve počinje dobrim planiranjem</h2>

          <p className="mb-6">
            Pre početka izvođenja radova potrebno je jasno definisati šta objekat treba da podrži – od osnovnog napajanja i rasvete do sistema slabe struje, gromobranske zaštite, uzemljenja i drugih instalacija.
          </p>

          <p className="mb-6">
            Kod stambenih i stambeno-poslovnih objekata posebno je važno unapred predvideti dovoljan broj priključnih mesta, odgovarajuće razvodne ormare, instalacije za rasvetu i uređaje, kao i sisteme koji se mogu naknadno proširivati.
          </p>

          <p className="mb-6">
            <strong className="text-white">Dobra priprema smanjuje mogućnost naknadnih izmena, dodatnih radova i nepotrebnih troškova tokom izgradnje.</strong>
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Elektroinstalacije treba uskladiti sa projektom</h2>

          <p className="mb-6">
            Elektroinstalacije moraju biti usklađene sa projektom objekta i drugim instalacijama koje se izvode na objektu.
          </p>

          <p className="mb-6">
            Koordinacija između elektroinstalacija, građevinskih radova, vodovoda, grejanja, ventilacije i drugih sistema posebno je važna kod većih projekata. Pravovremeno usklađivanje omogućava da se radovi izvode po planu i smanjuje mogućnost naknadnog pomeranja ili prepravki.
          </p>

          <p className="mb-6">
            Zato je važno da izvođač elektroinstalacija bude uključen dovoljno rano u proces realizacije projekta.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Šta sve treba predvideti?</h2>

          <p className="mb-6">
            Kompletan elektro deo novog objekta može obuhvatiti različite sisteme, u zavisnosti od njegove namene i tehničkih zahteva. Najčešće se planiraju:
          </p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>elektroenergetske instalacije i napajanje;</li>
            <li>razvodni ormari i pripadajuće instalacije;</li>
            <li>instalacije utičnica i priključaka;</li>
            <li>unutrašnja i spoljašnja rasveta;</li>
            <li>sistemi slabe struje;</li>
            <li>video nadzor i kontrola pristupa, kada su predviđeni;</li>
            <li>interfonski i komunikacioni sistemi;</li>
            <li>gromobranska zaštita;</li>
            <li>uzemljenje i izjednačavanje potencijala;</li>
            <li>instalacije za uređaje i opremu prema nameni objekta.</li>
          </ul>

          <p className="mb-6">
            Kod savremenih objekata sve je važnije razmišljati i o budućim potrebama. Odgovarajuća priprema instalacija može omogućiti jednostavnije uvođenje dodatne opreme i sistema u budućnosti.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Predmer i specifikacija materijala</h2>

          <p className="mb-6">
            Za investitora je važno da pre početka radova bude jasno definisan obim posla.
          </p>

          <p className="mb-6">
            Projektna dokumentacija, predmer i tehnička specifikacija omogućavaju preciznije sagledavanje potrebnih radova i materijala, a samim tim i realnije formiranje ponude. Dobro definisan predmer takođe olakšava praćenje realizacije radova i kontrolu utrošenog materijala.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Kvalitet izvođenja je jednako važan kao i kvalitet materijala</h2>

          <p className="mb-6">
            Odabir odgovarajućeg materijala jeste važan, ali sam materijal ne garantuje kvalitetnu instalaciju.
          </p>

          <p className="mb-6">
            Na konačan kvalitet utiču način izvođenja, pravilno povezivanje, organizacija instalacija, poštovanje projektne dokumentacije i kontrola izvedenih radova. Zbog toga je važno angažovati izvođača koji može da preuzme odgovornost za celinu elektro radova, a ne samo za pojedinačne faze.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Zašto je važna dobra koordinacija sa drugim izvođačima?</h2>

          <p className="mb-6">
            Na gradilištu se istovremeno odvija veliki broj različitih radova. Elektroinstalacije moraju biti usklađene sa građevinskim radovima i ostalim instalacijama. Dobra koordinacija omogućava da se:
          </p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>radovi izvode prema predviđenoj dinamici;</li>
            <li>izbegnu nepotrebne prepravke;</li>
            <li>pravovremeno definišu pozicije instalacija;</li>
            <li>smanji mogućnost oštećenja već izvedenih instalacija;</li>
            <li>lakše kontroliše kvalitet izvedenih radova.</li>
          </ul>

          <p className="mb-6">
            Kod većih objekata upravo organizacija i komunikacija između učesnika na projektu mogu imati veliki uticaj na završetak radova u planiranom roku.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Kontrola i završetak radova</h2>

          <p className="mb-6">
            Nakon izvođenja instalacija, potrebno je izvršiti odgovarajuće provere i ispitivanja u skladu sa vrstom sistema i zahtevima projekta. Cilj nije samo da instalacija bude izvedena, već da bude funkcionalna, bezbedna i spremna za korišćenje. Dokumentacija o izvedenim radovima i izvršenim proverama predstavlja važan deo završne faze projekta.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Kada je najbolje uključiti elektroizvođača?</h2>

          <p className="mb-6"><strong className="text-white">Što ranije.</strong></p>

          <p className="mb-6">
            Uključivanje izvođača u odgovarajućoj fazi projekta omogućava bolje sagledavanje obima radova, pravovremenu pripremu materijala, organizaciju radne snage i koordinaciju sa drugim izvođačima. Za investitora to znači manje nepredviđenih situacija i bolju kontrolu nad realizacijom elektro dela projekta.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-16 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bhm-orange/10 rounded-full blur-3xl" />
            <h2 className="text-2xl font-bold text-white mb-4 mt-0 relative z-10">BHM Energy – partner za elektroinstalacije</h2>
            <p className="mb-4 relative z-10">
              BHM Energy pruža usluge projektovanja i izvođenja elektroinstalacija za stambene, poslovne i industrijske objekte. Naš pristup zasniva se na kvalitetnoj pripremi, preciznom izvođenju i usklađenosti radova sa potrebama i tehničkim zahtevima objekta.
            </p>
            <p className="mb-6 relative z-10">
              Od projektovanja i pripreme, preko izvođenja elektroinstalacija, slabe struje, rasvete, gromobranske zaštite i uzemljenja, do servisa i održavanja – cilj je da svaki deo sistema bude pouzdan i funkcionalan.
            </p>
            <p className="font-semibold text-white mb-8 relative z-10">
              Gradite novi objekat? Razgovarajmo o elektro delu vašeg projekta.
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
