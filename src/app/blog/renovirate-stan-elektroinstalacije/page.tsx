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
            src="/images/image_portfolio_4.jpg"
            alt="Renovirate stan? Ovo treba da znate o elektroinstalacijama"
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
            Renovirate stan? Ovo treba da znate o elektroinstalacijama
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
            Renoviranje stana je prilika da prostor prilagodite svojim potrebama, ali i pravi trenutak da proverite da li postojeće elektroinstalacije mogu da odgovore načinu na koji ćete prostor koristiti.
          </p>

          <p className="mb-6">
            Elektroinstalacije se nakon završetka renoviranja uglavnom ne vide, zbog čega se njihovom planiranju često posvećuje manje pažnje nego podovima, zidovima, kuhinji ili rasveti. Ipak, upravo instalacije predstavljaju osnovu za funkcionisanje svih uređaja i sistema u stanu.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Kada je potrebno razmišljati o zameni instalacija?</h2>

          <p className="mb-6">
            Ako je stan stariji i instalacije nisu dugo menjane, renoviranje je pravi trenutak za procenu njihovog stanja.
          </p>

          <p className="mb-6">
            Posebnu pažnju treba obratiti na starije instalacije, nedovoljan broj utičnica i priključaka, često opterećenje pojedinih strujnih krugova i planiranje novih uređaja koji ranije nisu bili predviđeni.
          </p>

          <p className="mb-6">
            Nije svaki stari stan potrebno kompletno „razbiti“ i uraditi sve iz početka, ali odluku o obimu radova treba doneti nakon procene postojećeg stanja.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Planirajte utičnice pre početka radova</h2>

          <p className="mb-6">
            Jedna od najčešćih grešaka je planiranje utičnica tek kada su zidovi već završeni.
          </p>

          <p className="mb-6">
            Pre početka radova treba razmisliti gde će se nalaziti nameštaj, televizor, kuhinjski uređaji, klima uređaj, radni sto i ostali potrošači.
          </p>

          <p className="mb-6">
            Posebno je važno predvideti dovoljan broj priključaka u kuhinji, dnevnoj sobi, radnoj sobi i spavaćim sobama.
          </p>

          <p className="mb-6">
            <strong className="text-white">Dobro planirane pozicije znače manje produžnih kablova i praktičniji prostor.</strong>
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Kuhinja zahteva posebno planiranje</h2>

          <p className="mb-6">
            Kuhinja je jedan od prostora sa najvećim brojem električnih uređaja.
          </p>

          <p className="mb-6">
            Frižider, rerna, ploča za kuvanje, aspirator, mašina za sudove, mikrotalasna pećnica, mali kućni aparati i drugi uređaji zahtevaju odgovarajuće priključke i pravilno raspoređene strujne krugove.
          </p>

          <p className="mb-6">
            Zbog toga elektroinstalacije treba planirati u skladu sa konačnim rasporedom kuhinje i predviđenom opremom.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Ne zaboravite internet, TV i druge sisteme</h2>

          <p className="mb-6">
            Savremeni stanovi imaju mnogo više od klasičnih utičnica i rasvete.
          </p>

          <p className="mb-6">
            Prilikom renoviranja treba razmišljati i o internet i komunikacionim instalacijama, TV priključcima, interfonskom sistemu, video nadzoru, alarmu i drugim sistemima ukoliko su potrebni.
          </p>

          <p className="mb-6">
            Čak i ako određeni sistem ne planirate odmah, odgovarajuća priprema može značajno olakšati njegovu naknadnu ugradnju.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Rasvetu planirajte zajedno sa enterijerom</h2>

          <p className="mb-6">
            Rasveta ne treba da bude poslednja stvar o kojoj se razmišlja.
          </p>

          <p className="mb-6">
            Pozicije prekidača, izvoda i rasvetnih tela treba uskladiti sa rasporedom nameštaja i načinom korišćenja prostorije.
          </p>

          <p className="mb-6">
            Dobra rasveta treba da bude funkcionalna, ali može imati i značajnu dekorativnu ulogu.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Šta treba definisati pre početka radova?</h2>

          <p className="mb-6">
            Pre nego što elektroinstalacioni radovi počnu, korisno je imati jasno definisane:
          </p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>raspored prostorija i nameštaja;</li>
            <li>pozicije utičnica i prekidača;</li>
            <li>rasvetna tela;</li>
            <li>kuhinjske uređaje;</li>
            <li>klima uređaje;</li>
            <li>TV i internet priključke;</li>
            <li>sisteme slabe struje;</li>
            <li>druge uređaje koji zahtevaju napajanje.</li>
          </ul>

          <p className="mb-6">
            Što se više detalja definiše unapred, manje je potrebe za naknadnim izmenama.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Renoviranje je pravo vreme za razmišljanje unapred</h2>

          <p className="mb-6">
            Dobra elektroinstalacija ne treba samo da odgovori na današnje potrebe. Ako je moguće, treba razmišljati i o tome kako ćete prostor koristiti za nekoliko godina.
          </p>

          <p className="mb-6">
            Možda ćete dodati novu opremu, promeniti raspored nameštaja ili uvesti dodatne sisteme. Pravovremena priprema može učiniti takve promene mnogo jednostavnijim.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-16 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bhm-orange/10 rounded-full blur-3xl" />
            <h2 className="text-2xl font-bold text-white mb-4 mt-0 relative z-10">BHM Energy</h2>
            <p className="mb-6 relative z-10">
              BHM Energy izvodi elektroinstalacione radove u stambenim, poslovnim i industrijskim objektima, uključujući adaptacije, rekonstrukcije i nove instalacije.
            </p>
            <p className="font-semibold text-white mb-8 relative z-10">
              Ako renovirate stan ili kuću i želite da postojeće instalacije prilagodite novom prostoru i potrebama, obratite nam se za procenu i ponudu.
            </p>
            <p className="text-lg font-bold text-bhm-orange mb-6 relative z-10">
              Planirate renoviranje? Počnite od instalacija.
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
