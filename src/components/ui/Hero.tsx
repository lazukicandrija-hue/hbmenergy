'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Zap, ChevronDown, Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Attempt to play the video once it's loaded
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, that's fine
      });
    }
  }, [videoLoaded]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      {!videoError && (
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Primary: local video if available */}
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Fallback static background (shows while video loads or if no video) */}
      <div
        className={`absolute inset-0 z-0 bg-[#0F172A] grid-pattern transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bhm-dark/80 via-bhm-dark/60 to-bhm-dark/90" />

      {/* Additional overlay: subtle navy tint for brand consistency */}
      <div className="absolute inset-0 z-[2] bg-bhm-navy/20 mix-blend-multiply" />

      {/* Animated circuit lines overlay */}
      <div className="absolute inset-0 z-[3] pointer-events-none opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M -100 200 L 200 200 L 300 100 L 800 100 L 900 300 L 1400 300"
            fill="transparent"
            stroke="#F15A29"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            strokeDasharray="10 10"
          />
          <motion.path
            d="M 1400 600 L 1000 600 L 900 500 L 400 500 L 300 650 L -100 650"
            fill="transparent"
            stroke="#3b82f6"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1.5 }}
            strokeDasharray="12 8"
          />
          <motion.path
            d="M -50 400 L 150 400 L 250 350 L 600 350 L 700 450 L 1000 450"
            fill="transparent"
            stroke="#F15A29"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 2.5 }}
            strokeDasharray="6 12"
          />
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative glow accent */}
        <motion.div variants={itemVariants} className="relative mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-bhm-orange to-bhm-orange/0 rounded-full" />
        </motion.div>

        {/* Slogan */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6 tracking-tight leading-tight"
        >
          Elektroinstalacije koje pokreću savremene prostore
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Kompletno izvođenje i obnova elektroinstalacija za stambene, poslovne i industrijske objekte
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-sm text-gray-300 mb-10 bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-lg shadow-black/10"
        >
          <MapPin className="w-4 h-4 text-bhm-orange" />
          <span className="font-medium">Novi Sad • Beograd • Cela Srbija</span>
          <Zap className="w-4 h-4 text-blue-400 ml-1" />
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link
            href="#contact"
            className="btn-electric group relative inline-flex items-center justify-center gap-2 text-white font-semibold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(241,90,41,0.3)] hover:shadow-[0_0_50px_rgba(241,90,41,0.5)] transition-all duration-300 overflow-hidden text-lg"
          >
            <span className="relative z-10">Zatražite ponudu</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-white/60"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link href="#services" aria-label="Scroll down" className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">Saznajte više</span>
            <ChevronDown className="w-6 h-6 opacity-70 hover:opacity-100 hover:text-white transition-all cursor-pointer" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bhm-dark to-transparent z-[4]" />
    </section>
  );
}
