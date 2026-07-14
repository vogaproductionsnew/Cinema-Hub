import React from 'react';
import { Phone, Mail, MessageCircle, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-40 px-5 md:px-10 max-w-[1400px] mx-auto">
      <h2
        className="text-[#f0ead6] font-bold mb-16 text-center md:text-left"
        style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
      >
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        {/* Left Column: Info */}
        <div className="flex flex-col space-y-10">
          <p className="text-[20px] text-[#bbbbbb] leading-[30px] font-normal">
            Whether you have a fully developed concept or just the seed of an idea, we're here to bring it to life. Reach out to discuss your next production.
          </p>

          <div className="flex flex-col space-y-6">
            <a href="tel:+971552511761" className="flex items-center gap-4 text-xl text-[#f0ead6] hover:text-[#c9a84c] transition-colors">
              <Phone className="text-[#c9a84c] flex-shrink-0" />
              +971 55 251 1761
            </a>
            <a href="tel:+971554180369" className="flex items-center gap-4 text-xl text-[#f0ead6] hover:text-[#c9a84c] transition-colors">
              <Phone className="text-[#c9a84c] flex-shrink-0" />
              +971 55 418 0369
            </a>
            <a href="mailto:vogaproductions@gmail.com" className="flex items-center gap-4 text-xl text-[#f0ead6] hover:text-[#c9a84c] transition-colors">
              <Mail className="text-[#c9a84c] flex-shrink-0" />
              vogaproductions@gmail.com
            </a>
            <a href="https://wa.me/971554180369" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-[#f0ead6] hover:text-[#c9a84c] transition-colors">
              <MessageCircle className="text-[#c9a84c] flex-shrink-0" />
              WhatsApp: +971 55 418 0369
            </a>
            <a href="https://www.instagram.com/vogaproductionsllc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-[#f0ead6] hover:text-[#c9a84c] transition-colors">
              <Instagram className="text-[#c9a84c] flex-shrink-0" />
              @vogaproductionsllc
            </a>
            <a href="https://www.linkedin.com/company/vogaproductions/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-[#f0ead6] hover:text-[#c9a84c] transition-colors">
              <Linkedin className="text-[#c9a84c] flex-shrink-0" />
              LinkedIn
            </a>
            <a href="https://youtube.com/@vogaproductionsllc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-[#f0ead6] hover:text-[#c9a84c] transition-colors">
              <Youtube className="text-[#c9a84c] flex-shrink-0" />
              YouTube
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white/[0.02] p-8 md:p-10 border border-white/[0.05] rounded-xl">
          <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-[#bbbbbb] mb-2 uppercase tracking-wider">Name</label>
              <input
                type="text"
                id="name"
                className="bg-transparent border-b border-white/20 focus:border-[#c9a84c] outline-none py-3 text-white text-lg transition-colors placeholder:text-white/20"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm text-[#bbbbbb] mb-2 uppercase tracking-wider">Email</label>
              <input
                type="email"
                id="email"
                className="bg-transparent border-b border-white/20 focus:border-[#c9a84c] outline-none py-3 text-white text-lg transition-colors placeholder:text-white/20"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="msg" className="text-sm text-[#bbbbbb] mb-2 uppercase tracking-wider">Message</label>
              <textarea
                id="msg"
                rows={4}
                className="bg-transparent border-b border-white/20 focus:border-[#c9a84c] outline-none py-3 text-white text-lg transition-colors resize-none placeholder:text-white/20"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#c9a84c] text-black font-bold py-4 rounded-[4px] hover:bg-white transition-colors"
            >
              SEND INQUIRY
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
