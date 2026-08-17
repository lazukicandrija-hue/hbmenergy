import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export default function Kolacici() {
  return (
    <main className="relative min-h-screen bg-bhm-dark text-gray-300">
      <Header />
      
      <div className="pt-32 pb-24 px-4 container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Politika Kolačića (Cookies)</h1>
        
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            Ova Politika kolačića objašnjava šta su kolačići i kako ih <strong>BHM Energy</strong> koristi na veb-sajtu <strong>bhmenergy.rs</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Šta su kolačići?</h2>
          <p>
            Kolačići (cookies) su male tekstualne datoteke koje se čuvaju na vašem računaru ili mobilnom uređaju kada posetite veb-sajt. Oni omogućavaju sajtu da zapamti vaše akcije i željene postavke (kao što su prijava, jezik, veličina fonta i druge željene postavke za prikaz) tokom određenog perioda.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Kako koristimo kolačiće?</h2>
          <p>
            Naš sajt koristi kolačiće iz sledećih razloga:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Neophodni kolačići:</strong> Ovi kolačići su ključni za osnovne funkcije veb-sajta. Bez njih, sajt ne može ispravno da funkcioniše.</li>
            <li><strong>Analitički kolačići:</strong> Ovi kolačići nam pomažu da razumemo kako posetioci komuniciraju sa našim sajtom prikupljanjem i prijavljivanjem informacija anonimno (npr. Google Analytics).</li>
            <li><strong>Funkcionalni kolačići:</strong> Omogućavaju sajtu da zapamti izbore koje ste napravili u prošlosti, radi boljeg korisničkog iskustva.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Kako da kontrolišete kolačiće?</h2>
          <p>
            Možete kontrolisati i/ili brisati kolačiće kako želite. Možete izbrisati sve kolačiće koji su već na vašem računaru i možete podesiti većinu pretraživača da spreče njihovo postavljanje. Međutim, ako to učinite, možda ćete morati ručno da prilagođavate neke željene postavke svaki put kada posetite sajt, a neke usluge i funkcionalnosti možda neće raditi.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Više informacija</h2>
          <p>
            Ukoliko su vam potrebne dodatne informacije u vezi sa našom upotrebom kolačića, možete nas kontaktirati putem e-maila: <strong>office@bhmenergy.rs</strong>.
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
