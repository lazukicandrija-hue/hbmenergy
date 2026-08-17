"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone */}
      <a
        href="tel:+381692737737"
        className="w-12 h-12 bg-bhm-dark border border-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-bhm-orange hover:border-bhm-orange transition-all duration-300 shadow-lg group relative"
        title="Pozovite nas"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-full mr-4 bg-bhm-dark border border-white/10 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-white">
          +381 69 2 737 737
        </span>
      </a>

      {/* Viber */}
      <a
        href="viber://chat?number=%2B381692737737"
        className="w-12 h-12 bg-bhm-dark border border-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#7360F2] hover:border-[#7360F2] transition-all duration-300 shadow-lg group relative"
        title="Kontaktirajte nas putem Vibera"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.5 9.75c-.32-3.13-2.6-5.69-5.73-6.04-1.21-.13-3.83-.13-5.04 0-3.13.35-5.41 2.91-5.73 6.04-.08 1.05-.08 2.76 0 3.81.25 2.51 1.79 4.62 4.09 5.56l.3.11-1.01 2.65c-.17.47.01.99.44 1.25.18.11.39.17.6.17.26 0 .52-.1.72-.28l3.19-2.73c.52.1 1.05.15 1.58.15.54 0 1.08-.05 1.61-.15 3.01-.58 5.23-3.15 5.48-6.22.08-1.05.08-2.76 0-3.81zm-7.66 4.31c-.34.34-.78.5-1.22.45-.6-.08-1.57-.45-2.82-1.7-1.25-1.25-1.62-2.22-1.7-2.82-.05-.44.11-.88.45-1.22.35-.35.8-.49 1.28-.4l.32.07c.36.08.66.36.77.72l.27 1.01c.14.52-.02 1.09-.43 1.41l-.22.18c.24.47.6.93 1.06 1.39.46.46.92.82 1.39 1.06l.18-.22c.32-.41.89-.57 1.41-.43l1.01.27c.36.11.64.41.72.77l.07.32c.09.48-.05.93-.4 1.28zm2.46-4.64c-.16-.62-.64-1.1-1.26-1.26-.69-.18-1.42.24-1.6.93-.18.69.24 1.42.93 1.6.24.06.49.03.7-.08.21-.11.37-.29.43-.52.06-.24.03-.49-.08-.7-.11-.21-.29-.37-.52-.43-.17-.05-.35-.02-.5.06-.15.08-.26.21-.31.37-.05.17-.02.35.06.5.08.15.21.26.37.31.27.07.56.02.79-.14.23-.16.37-.4.4-.68.03-.28-.05-.56-.23-.77-.18-.21-.44-.33-.72-.31-.28.02-.53.16-.69.38-.16.22-.21.5-.13.76.08.26.27.46.52.53.51.13 1.05-.18 1.18-.69.13-.51-.18-1.05-.69-1.18zM14.56 5.86c-.95-.25-1.95.32-2.2 1.27-.25.95.32 1.95 1.27 2.2 1.34.35 2.25 1.55 2.25 2.94 0 .99-.81 1.79-1.8 1.79s-1.8-.8-1.8-1.79c0-.44-.36-.8-.8-.8s-.8.36-.8.8c0 1.87 1.52 3.39 3.39 3.39 2.27 0 4.12-1.85 4.12-4.12 0-2.28-1.49-4.24-3.69-4.81z" />
        </svg>
        <span className="absolute right-full mr-4 bg-[#7360F2] text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          Viber
        </span>
      </a>

      {/* Email */}
      <a
        href="mailto:office@bhmenergy.rs"
        className="w-12 h-12 bg-bhm-dark border border-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-bhm-orange hover:border-bhm-orange transition-all duration-300 shadow-lg group relative"
        title="Pošaljite nam email"
      >
        <Mail className="w-5 h-5" />
        <span className="absolute right-full mr-4 bg-bhm-dark border border-white/10 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-white">
          office@bhmenergy.rs
        </span>
      </a>
    </div>
  );
}
