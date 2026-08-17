'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bhm-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top part */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/">
              <Image 
                src="/logo-white.svg" 
                alt="BHM Energy Logo" 
                width={160} 
                height={44} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-500">
              Elektroinstalacije i fina galanterija
            </p>
          </div>

          {/* Right side */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#services" className="text-sm text-gray-500 hover:text-bhm-orange transition">
              Usluge
            </Link>
            <Link href="#blog" className="text-sm text-gray-500 hover:text-bhm-orange transition">
              Blog
            </Link>
            <Link href="#faq" className="text-sm text-gray-500 hover:text-bhm-orange transition">
              Najčešća pitanja
            </Link>
            <Link href="#contact" className="text-sm text-gray-500 hover:text-bhm-orange transition">
              Kontakt
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8"></div>

        {/* Bottom part */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <p className="text-xs text-gray-600 pb-1">
            &copy; 2026 BHM Energy. Sva prava zadržana.
          </p>
          <div className="flex flex-col items-center md:items-end gap-1 mt-4 md:mt-0">
            <p className="text-xs text-gray-500 font-medium text-center md:text-right">COAL PROMET DOO PREDUZEĆE ZA TRGOVINU I USLUGE, NOVI SAD</p>
            <p className="text-xs text-gray-600 text-center md:text-right">OGRANAK BHM Energy</p>
            <p className="text-xs text-gray-600 text-center md:text-right">PIB: 104234254 | MB: 20120754</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
