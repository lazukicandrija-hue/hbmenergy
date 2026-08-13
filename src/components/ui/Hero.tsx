'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Zap, ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-[#0F172A] grid-pattern flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative Circuit Lines (Background) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M -100 200 L 200 200 L 300 100 L 800 100 L 900 300 L 1200 300"
            fill="transparent"
            stroke="#f97316"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            strokeDasharray="10 10"
          />
          <motion.path
            d="M 1200 500 L 900 500 L 800 600 L 300 600 L 200 400 L -100 400"
            fill="transparent"
            stroke="#3b82f6"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1 }}
            strokeDasharray="15 15"
          />
        </svg>
      </div>

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo with Glow */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/30 to-blue-900/30 blur-[60px] scale-[1.5]"></div>
          <Image 
            src="/logo.png" 
            alt="BHM Energy Logo" 
            width={280} 
            height={280} 
            className="relative drop-shadow-2xl object-contain z-10"
            priority
          />
        </motion.div>

        {/* Slogan */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6 tracking-tight"
        >
          Pretvaramo energiju u sigurnost.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Fina elektrogalanterija i instalacije za vaš prostor.
        </motion.p>

        {/* Trust Badges */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-2 text-sm text-gray-400 mb-10 bg-slate-800/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-700/50 shadow-sm"
        >
          <MapPin className="w-4 h-4 text-orange-500" />
          <span className="font-medium">Novi Sad • Beograd • Cela Srbija</span>
          <Zap className="w-4 h-4 text-blue-400 ml-1" />
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link 
            href="#contact" 
            className="btn-electric group relative inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3.5 px-8 rounded-lg shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Zatražite ponudu</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link href="#about" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8 opacity-60 hover:opacity-100 hover:text-white transition-all cursor-pointer" />
        </Link>
      </motion.div>
    </section>
  );
}
