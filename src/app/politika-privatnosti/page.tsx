import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export default function PolitikaPrivatnosti() {
  return (
    <main className="relative min-h-screen bg-bhm-dark text-gray-300">
      <Header />
      
      <div className="pt-32 pb-24 px-4 container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Politika Privatnosti</h1>
        
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            Ova Politika privatnosti objašnjava kako <strong>COAL PROMET DOO, Ogranak BHM Energy</strong> (u daljem tekstu "mi", "naš", ili "kompanija") prikuplja, koristi, održava i otkriva informacije prikupljene od korisnika (u daljem tekstu "Korisnik") veb-sajta bhmenergy.rs.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Podaci o rukovaocu</h2>
          <p>
            Rukovalac podacima je:<br />
            <strong>COAL PROMET DOO PREDUZEĆE ZA TRGOVINU I USLUGE, NOVI SAD, OGRANAK BHM Energy</strong><br />
            Adresa: Rumenački put 38, Novi Sad, Srbija<br />
            PIB: 104234254<br />
            Matični broj: 20120754<br />
            Email adresa: office@bhmenergy.rs
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Prikupljanje ličnih podataka</h2>
          <p>
            Mi možemo prikupljati lične identifikacione podatke od Korisnika na različite načine, uključujući, ali ne ograničavajući se na to kada Korisnici posete naš veb-sajt, popune formu (npr. kontakt formu) i u vezi sa drugim aktivnostima, uslugama, funkcijama ili resursima koje stavljamo na raspolaganje na našem sajtu.
          </p>
          <p>
            Od Korisnika se prema potrebi mogu tražiti ime, prezime, e-mail adresa i broj telefona. Korisnici mogu posetiti naš sajt i anonimno. Mi ćemo prikupljati lične informacije od Korisnika samo ako nam oni dobrovoljno dostave te informacije.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Kako koristimo prikupljene podatke</h2>
          <p>
            BHM Energy može prikupljati i koristiti lične podatke Korisnika za sledeće svrhe:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Da bismo poboljšali korisničku uslugu:</strong> Informacije koje nam pružite pomažu nam da efikasnije odgovorimo na vaše zahteve za korisničkom uslugom i potrebama za podrškom.</li>
            <li><strong>Za slanje povremenih e-mailova:</strong> Možemo koristiti e-mail adresu da odgovorimo na upite, pitanja i/ili druge zahteve Korisnika.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Zaštita vaših podataka</h2>
          <p>
            Usvajamo odgovarajuće prakse prikupljanja, skladištenja i obrade podataka, kao i bezbednosne mere radi zaštite od neovlašćenog pristupa, izmene, otkrivanja ili uništavanja vaših ličnih informacija i podataka koji se čuvaju na našem sajtu.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Deljenje vaših ličnih podataka</h2>
          <p>
            Mi ne prodajemo, ne trgujemo i ne iznajmljujemo lične identifikacione podatke Korisnika trećim licima. 
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Vaša prava</h2>
          <p>
            U skladu sa važećim Zakonom o zaštiti podataka o ličnosti (ZZPL), imate pravo na uvid u svoje podatke, pravo na ispravku, brisanje ("pravo na zaborav"), ograničenje obrade, kao i pravo na prigovor. Da biste ostvarili ova prava, možete nas kontaktirati na <strong>office@bhmenergy.rs</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Promene ove politike privatnosti</h2>
          <p>
            BHM Energy ima diskreciono pravo da ažurira ovu politiku privatnosti u bilo kom trenutku. Kada to učinimo, revidiraćemo ažurirani datum na dnu ove stranice. Preporučujemo Korisnicima da često proveravaju ovu stranicu radi bilo kakvih promena.
          </p>
          
          <p className="mt-12 text-sm text-gray-500">
            Poslednji put ažurirano: Avgust 2026.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
