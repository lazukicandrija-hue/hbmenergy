import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export default function UsloviKoriscenja() {
  return (
    <main className="relative min-h-screen bg-bhm-dark text-gray-300">
      <Header />
      
      <div className="pt-32 pb-24 px-4 container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Uslovi Korišćenja</h1>
        
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            Pristupanjem veb-sajtu <strong>bhmenergy.rs</strong>, prihvatate ove Uslove korišćenja. Ako se ne slažete sa bilo kojim delom ovih uslova, molimo vas da ne koristite naš sajt.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Osnovne informacije</h2>
          <p>
            Ovim sajtom upravlja <strong>COAL PROMET DOO PREDUZEĆE ZA TRGOVINU I USLUGE, NOVI SAD, OGRANAK BHM Energy</strong> (u daljem tekstu "BHM Energy"), Rumenački put 38, Novi Sad, PIB: 104234254, MB: 20120754.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Upotreba sajta</h2>
          <p>
            Sadržaj na stranicama ovog veb-sajta je isključivo za vaše opšte informacije i upotrebu. Podložan je promenama bez prethodne najave. 
            Neovlašćena upotreba ovog veb-sajta može dovesti do zahteva za naknadu štete i/ili predstavljati krivično delo.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Autorska prava i intelektualna svojina</h2>
          <p>
            Ovaj veb-sajt sadrži materijal koji je u našem vlasništvu ili za koji imamo licencu. Ovaj materijal uključuje, ali se ne ograničava na, dizajn, izgled, grafiku i tekst (osim u slučajevima gde je drugačije naznačeno). Reprodukcija je zabranjena osim u skladu sa obaveštenjem o autorskim pravima.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Ograničenje odgovornosti</h2>
          <p>
            Informacije na ovom sajtu pružaju se "kakve jesu". BHM Energy ne snosi odgovornost za bilo kakvu štetu nastalu direktno ili indirektno usled korišćenja informacija sa ovog sajta.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Linkovi ka drugim sajtovima</h2>
          <p>
            Naš sajt može sadržati linkove ka drugim veb-sajtovima od interesa. Međutim, kada upotrebite ove linkove da napustite naš sajt, treba da imate na umu da mi nemamo nikakvu kontrolu nad tim drugim veb-sajtom. Zato ne možemo biti odgovorni za zaštitu i privatnost bilo kojih informacija koje date tokom posete takvim sajtovima.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Nadležnost i primenljivo pravo</h2>
          <p>
            Vaše korišćenje ovog veb-sajta i bilo kakav spor koji proizađe iz takve upotrebe veb-sajta podležu zakonima Republike Srbije. 
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
