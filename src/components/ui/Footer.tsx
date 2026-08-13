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
                src="/logo.png" 
                alt="BHM Energy Logo" 
                width={120} 
                height={32} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-500">
              Elektroinstalacije i fina galanterija
            </p>
          </div>

          {/* Right side */}
          <nav className="flex gap-6">
            <Link href="#services" className="text-sm text-gray-500 hover:text-bhm-orange transition">
              Usluge
            </Link>
            <Link href="#about" className="text-sm text-gray-500 hover:text-bhm-orange transition">
              O nama
            </Link>
            <Link href="#contact" className="text-sm text-gray-500 hover:text-bhm-orange transition">
              Kontakt
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8"></div>

        {/* Bottom part */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; 2026 BHM Energy. Sva prava zadržana.
          </p>
          <div className="flex gap-4">
            <p className="text-xs text-gray-600">
              PIB: XXXXXXXXX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
