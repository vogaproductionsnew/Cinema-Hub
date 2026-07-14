import React from 'react';
import { ArrowUp, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-5 md:px-10 border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 mb-20">

          <div className="md:col-span-5">
            <img
              src="https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Logos/Voga_Logo_White.png"
              alt="Voga Productions"
              className="h-[35px] w-auto mb-6"
            />
            <p className="max-w-[300px] text-[14px] text-[#bbbbbb] leading-relaxed">
              Crafting cinematic visuals that elevate brands through storytelling, motion, and creative direction.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <div className="flex flex-col space-y-3 text-[#bbbbbb] text-sm">
              <a href="tel:+971552511761" className="hover:text-[#c9a84c] transition-colors">+971 55 251 1761</a>
              <a href="tel:+971554180369" className="hover:text-[#c9a84c] transition-colors">+971 55 418 0369</a>
              <a href="mailto:vogaproductions@gmail.com" className="hover:text-[#c9a84c] transition-colors">vogaproductions@gmail.com</a>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/vogaproductionsllc" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#c9a84c] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/vogaproductions/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#c9a84c] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/971554180369" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#c9a84c] transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
              <a href="https://youtube.com/@vogaproductionsllc" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#c9a84c] transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <div className="flex flex-col space-y-3 text-[#bbbbbb] text-sm md:text-right">
              <h4 className="text-white font-bold mb-3 md:mb-6">Explore</h4>
              <a href="#home" className="hover:text-[#c9a84c] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#c9a84c] transition-colors">About</a>
              <a href="#services" className="hover:text-[#c9a84c] transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-[#c9a84c] transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-[#c9a84c] transition-colors">Contact</a>
            </div>
          </div>

        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-white/[0.05]">
          <p className="text-[#bbbbbb] text-xs mt-6 md:mt-0">
            © 2025 Voga Productions. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-black transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
