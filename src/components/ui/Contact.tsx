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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formDataObj = new FormData()
    formDataObj.append('Ime', formData.name)
    formDataObj.append('Telefon', formData.phone)
    formDataObj.append('Email', formData.email)
    formDataObj.append('Lokacija', formData.location)
    formDataObj.append('Tip_Objekta', formData.propertyType)
    formDataObj.append('Poruka', formData.message)

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbyt5V55k_xVDjcfuuiyunkD7CZe9wex82tJ5yDGMPM/exec'
      
      await fetch(scriptUrl, {
        method: 'POST',
        body: formDataObj,
        mode: 'no-cors', // Opaque request to bypass CORS restrictions of Google Apps Script
      })

      // When using no-cors mode, the response is opaque (status 0).
      // If fetch didn't throw a network error, we consider it a success.
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        propertyType: '',
        message: ''
      })
      setTimeout(() => setSubmitStatus('idle'), 5000)

    } catch (error) {
      console.error('Greška pri slanju forme:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const inputStyles = "w-full bg-bhm-dark/80 border border-white/10 rounded-xl px-4 py-3 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-bhm-orange/50 focus:ring-1 focus:ring-bhm-orange/30 transition"
  const labelStyles = "text-sm font-medium text-gray-400 mb-2 block"

  return (
    <section id="contact" className="relative z-10 py-24 bg-bhm-dark-50/30">
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
            <h3 className="relative z-10 text-xl font-semibold text-white mb-6">Kontakt informacije</h3>
            
            <div className="relative z-10 flex flex-col mb-8">
              <div className="flex items-center gap-4 py-4 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-bhm-orange/10 flex items-center justify-center">
                  <Mail className="text-bhm-orange w-6 h-6" />
                </div>
                <div className="text-gray-300">office@bhmenergy.rs</div>
              </div>
              
              <div className="flex items-center gap-4 py-4 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-bhm-orange/10 flex items-center justify-center">
                  <Phone className="text-bhm-orange w-6 h-6" />
                </div>
                <div className="text-gray-300">+381 69 2 737 737</div>
              </div>
              
              <div className="flex items-center gap-4 py-4">
                <div className="w-12 h-12 rounded-xl bg-bhm-orange/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-bhm-orange w-6 h-6" />
                </div>
                <div className="text-gray-300">
                  Rumenački put 38<br />
                  Novi Sad, Srbija
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-start gap-4 py-4 bg-white/5 rounded-xl px-6 mb-6">
              <Clock className="text-bhm-orange w-6 h-6 flex-shrink-0 mt-1" />
              <div className="text-gray-300 font-medium space-y-1">
                <p className="text-white mb-2">Radno vreme</p>
                <p className="text-sm">Pon do Pet: 08:00 do 16:00</p>
                <p className="text-sm">Subota: 08:00 do 14:00</p>
                <p className="text-sm">Nedelja: Neradni dan</p>
              </div>
            </div>

            <div className="relative z-10 py-4 bg-white/5 rounded-xl px-6 text-sm text-gray-400 leading-relaxed border border-white/5">
              <strong className="text-gray-300 block mb-1">COAL PROMET DOO PREDUZEĆE ZA TRGOVINU I USLUGE, NOVI SAD</strong>
              OGRANAK BHM Energy<br />
              PIB: 104234254<br />
              MB: 20120754
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:col-span-3 glow-card p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
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

              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl text-center">
                  Vaš upit je uspešno poslat! Javićemo vam se uskoro.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-center">
                  Došlo je do greške pri slanju upita. Pokušajte ponovo kasnije ili nas pozovite.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-electric w-full flex items-center justify-center gap-2 mt-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Slanje u toku...' : 'Pošalji Upit'}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
