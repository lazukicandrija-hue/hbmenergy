'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    propertyType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Hvala na interesovanju. Vaš upit je uspešno poslat!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const inputStyles = "w-full bg-bhm-dark/80 border border-white/10 rounded-xl px-4 py-3 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-bhm-orange/50 focus:ring-1 focus:ring-bhm-orange/30 transition"
  const labelStyles = "text-sm font-medium text-gray-400 mb-2 block"

  return (
    <section id="contact" className="py-24 bg-bhm-dark-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kontaktirajte Nas</h2>
          <p className="text-gray-400">Opišite vaš projekat i javicemo vam se u roku od 24h</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-2 glow-card p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Kontakt informacije</h3>
            
            <div className="flex flex-col mb-8">
              <div className="flex items-center gap-4 py-4 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-bhm-orange/10 flex items-center justify-center">
                  <Mail className="text-bhm-orange w-6 h-6" />
                </div>
                <div className="text-gray-300">info@bhmenergy.rs</div>
              </div>
              
              <div className="flex items-center gap-4 py-4 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-bhm-orange/10 flex items-center justify-center">
                  <Phone className="text-bhm-orange w-6 h-6" />
                </div>
                <div className="text-gray-300">+381 60 123 4567</div>
              </div>
              
              <div className="flex items-center gap-4 py-4">
                <div className="w-12 h-12 rounded-xl bg-bhm-orange/10 flex items-center justify-center">
                  <MapPin className="text-bhm-orange w-6 h-6" />
                </div>
                <div className="text-gray-300">Novi Sad, Srbija</div>
              </div>
            </div>

            <div className="mt-4 mb-8 h-48 w-full rounded-xl bg-bhm-dark/50 border border-white/10 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bhm-orange/20 via-transparent to-transparent"></div>
              <MapPin className="w-10 h-10 text-bhm-orange/40" />
            </div>

            <div className="flex items-center gap-4 py-4 bg-white/5 rounded-xl px-6">
              <Clock className="text-bhm-orange w-6 h-6 flex-shrink-0" />
              <div className="text-gray-300 font-medium">Radno vreme: Pon-Pet 08:00-18:00</div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:col-span-3 glow-card p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className={labelStyles}>Ime i prezime</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputStyles}
                  placeholder="Unesite vaše ime i prezime"
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelStyles}>Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputStyles}
                  placeholder="Unesite vaš broj telefona"
                />
              </div>

              <div>
                <label htmlFor="email" className={labelStyles}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputStyles}
                  placeholder="Unesite vašu email adresu"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="location" className={labelStyles}>Lokacija objekta</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={inputStyles}
                    placeholder="Grad ili opština"
                  />
                </div>
                <div>
                  <label htmlFor="propertyType" className={labelStyles}>Tip objekta</label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className={`${inputStyles} appearance-none`}
                  >
                    <option value="" disabled>Izaberite tip objekta</option>
                    <option value="Stan">Stan</option>
                    <option value="Kuca">Kuća</option>
                    <option value="Poslovni prostor">Poslovni prostor</option>
                    <option value="Industrija">Industrija</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelStyles}>Poruka</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputStyles} resize-none`}
                  placeholder="Opišite vaš projekat ili postavite pitanje..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-electric w-full flex items-center justify-center gap-2 mt-4 py-3"
              >
                Pošalji Upit
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
