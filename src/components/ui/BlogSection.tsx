"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: "proces-realizacije-elektroinstalacija",
    title: "Od projekta do izvedenih radova: kako izgleda proces realizacije elektroinstalacija?",
    excerpt: "Kvalitetno izvedene elektroinstalacije rezultat su dobrog planiranja, koordinacije i stručnog izvođenja. Saznajte kako teče ceo proces od početka do kraja.",
    image: "/images/blog_project_execution.jpg",
    date: "17. Avg 2026.",
    readTime: "5 min čitanja",
    slug: "/blog/proces-realizacije-elektroinstalacija"
  },
  {
    id: "kako-pravilno-planirati-rasvetu",
    title: "Kako pravilno planirati rasvetu u stanu ili poslovnom prostoru?",
    excerpt: "Rasveta je jedan od elemenata prostora koji direktno utiče na njegovu funkcionalnost i atmosferu. Saznajte kako da je pravilno isplanirate.",
    image: "/images/blog_lighting_plan.jpg",
    date: "17. Avg 2026.",
    readTime: "4 min čitanja",
    slug: "/blog/kako-pravilno-planirati-rasvetu"
  },
  {
    id: "jaka-i-slaba-struja",
    title: "Jaka i slaba struja, koja je razlika?",
    excerpt: "Kada se govori o elektroinstalacijama, često se koriste izrazi jaka i slaba struja. Saznajte koja je razlika i zašto su oba sistema ključna za vaš objekat.",
    image: "/images/portfolio_2.jpg",
    date: "17. Avg 2026.",
    readTime: "3 min čitanja",
    slug: "/blog/jaka-i-slaba-struja"
  },
  {
    id: "kako-se-formira-cena",
    title: "Kako se formira cena elektroinstalacionih radova?",
    excerpt: "Kada planirate elektroinstalacione radove, jedno od prvih pitanja je: Koliko će to koštati? Saznajte od kojih faktora zavisi konačna ponuda.",
    image: "/images/blog_pricing.jpg",
    date: "17. Avg 2026.",
    readTime: "4 min čitanja",
    slug: "/blog/kako-se-formira-cena"
  },
  {
    id: "renovirate-stan-elektroinstalacije",
    title: "Renovirate stan? Ovo treba da znate o elektroinstalacijama",
    excerpt: "Renoviranje stana je prilika da prostor prilagodite svojim potrebama, ali i pravi trenutak da proverite da li postojeće elektroinstalacije mogu da odgovore.",
    image: "/images/blog_renovation.jpg",
    date: "17. Avg 2026.",
    readTime: "4 min čitanja",
    slug: "/blog/renovirate-stan-elektroinstalacije"
  },
  {
    id: "elektroinstalacije-u-poslovnim-i-industrijskim-objektima",
    title: "Elektroinstalacije u poslovnim i industrijskim objektima: šta je važno planirati na vreme",
    excerpt: "Za razliku od stambenih objekata, poslovni i industrijski objekti često zahtevaju složenije elektro sisteme, veće kapacitete, više priključnih mesta i pažljivo planiranje.",
    image: "/images/image_circuit_board.jpg",
    date: "17. Avg 2026.",
    readTime: "5 min čitanja",
    slug: "/blog/elektroinstalacije-u-poslovnim-i-industrijskim-objektima"
  },
  {
    id: "elektroinstalacije-u-novogradnji",
    title: "Elektroinstalacije u novogradnji: šta investitor treba da planira na vreme",
    excerpt: "Elektroinstalacije su jedan od ključnih sistema svakog objekta, iako se njihov značaj često primeti tek kada nastane problem. Saznajte zašto je važno planirati na vreme.",
    image: "/images/image_industrial_power.jpg",
    date: "17. Avg 2026.",
    readTime: "4 min čitanja",
    slug: "/blog/elektroinstalacije-u-novogradnji"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative bg-bhm-dark">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              Naš Blog
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mt-4"
            >
              Stručni saveti, vodiči i novosti iz sveta elektroinstalacija.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glow-card bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex flex-col group h-full cursor-pointer"
            >
              <Link href={post.slug} className="flex flex-col h-full">
                <div className="relative h-56 w-full overflow-hidden shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-gray-900">
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-bhm-orange transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sm font-semibold text-bhm-orange group-hover:text-white transition-colors">
                    Pročitaj članak
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
