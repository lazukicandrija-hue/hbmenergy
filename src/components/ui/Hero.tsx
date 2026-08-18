'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Zap, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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

// Advanced SVG Energy Flow Animation
const EnergyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bhm-dark">
      {/* Deep background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A365D]/40 via-[#0F172A] to-[#0F172A]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* SVG Cables and Energy Pulses */}
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        
        {/* Cable 1 - Left side flowing down and right */}
        <path d="M 0 100 Q 200 100, 300 400 T 700 800" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.05" />
        <motion.path
          d="M 0 100 Q 200 100, 300 400 T 700 800"
          fill="none"
          stroke="#F15A29"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
          style={{ filter: "drop-shadow(0 0 8px #F15A29)" }}
        />

        {/* Cable 2 - Right side flowing down and left */}
        <path d="M 1200 0 Q 1000 200, 800 500 T 200 900" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.05" />
        <motion.path
          d="M 1200 0 Q 1000 200, 800 500 T 200 900"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1, times: [0, 0.5, 1] }}
          style={{ filter: "drop-shadow(0 0 12px #3b82f6)" }}
        />

        {/* Cable 3 - Center complex routing */}
        <path d="M 400 -100 L 400 300 L 800 300 L 800 700 L 500 700 L 500 1200" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.05" />
        <motion.path
          d="M 400 -100 L 400 300 L 800 300 L 800 700 L 500 700 L 500 1200"
          fill="none"
          stroke="#F15A29"
          strokeWidth="2"
          strokeLinecap="square"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
          strokeDasharray="20 40"
          style={{ filter: "drop-shadow(0 0 6px #F15A29)" }}
        />

        {/* Glowing junction nodes */}
        <motion.circle cx="300" cy="400" r="4" fill="#F15A29" 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], filter: ["blur(2px)", "blur(6px)", "blur(2px)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle cx="800" cy="300" r="5" fill="#3b82f6" 
          animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], filter: ["blur(2px)", "blur(8px)", "blur(2px)"] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.circle cx="800" cy="500" r="4" fill="#3b82f6" 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], filter: ["blur(2px)", "blur(6px)", "blur(2px)"] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
      </svg>
      
      {/* Floating ambient light orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[120px]"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Pure CSS/SVG Animated Background */}
      {mounted && <EnergyBackground />}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bhm-dark/50 via-transparent to-bhm-dark/90 pointer-events-none" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative glow accent */}
        <motion.div variants={itemVariants} className="relative mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-bhm-orange to-bhm-orange/0 rounded-full shadow-[0_0_10px_#F15A29]" />
        </motion.div>

        {/* Slogan */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg"
        >
          <span className="text-bhm-orange drop-shadow-[0_0_15px_rgba(241,90,41,0.3)]">Elektroinstalacije</span> <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">koje pokreću savremene prostore</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          Kompletno izvođenje i obnova elektroinstalacija za industrijske, poslovne i stambene objekte
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-sm text-gray-200 mb-10 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 shadow-xl shadow-black/20"
        >
          <MapPin className="w-4 h-4 text-bhm-orange" />
          <span className="font-medium">Srbija</span>
          <Zap className="w-4 h-4 text-blue-400 ml-1 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link
            href="#contact"
            className="btn-electric group relative inline-flex items-center justify-center gap-2 text-white font-semibold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(241,90,41,0.4)] hover:shadow-[0_0_50px_rgba(241,90,41,0.6)] hover:-translate-y-1 transition-all duration-300 overflow-hidden text-lg bg-gradient-to-r from-orange-600 to-bhm-orange"
          >
            <span className="relative z-10">Zatražite ponudu</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-white/70"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link href="#services" aria-label="Scroll down" className="flex flex-col items-center gap-2 group">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium group-hover:text-white transition-colors">Saznajte više</span>
            <ChevronDown className="w-6 h-6 opacity-70 group-hover:opacity-100 group-hover:text-bhm-orange transition-all cursor-pointer" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
