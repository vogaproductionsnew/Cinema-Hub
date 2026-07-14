import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Voga Productions completely transformed our brand. Their cinematic approach to storytelling elevated every piece of content they created for us.",
    author: "Sarah Al Rashidi",
    role: "Marketing Director, Orientica"
  },
  {
    quote: "Working with Voga was an exceptional experience. From concept to final cut, every detail was handled with precision and artistry.",
    author: "Ahmad Khalil",
    role: "CEO, Nayaat"
  },
  {
    quote: "The team brought our vision to life in ways we never imagined. The quality of their work speaks for itself — truly world-class.",
    author: "Priya Sharma",
    role: "Brand Manager, Bright Interior"
  },
  {
    quote: "Professional, creative, and always on time. Voga Productions is our go-to partner for all video content needs.",
    author: "Mohammed Al Farsi",
    role: "Director, Elite Luxury"
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(headRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 85%"
        }
      }
    );
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-32 px-5 md:px-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2
            ref={headRef}
            className="text-[#f0ead6] font-bold"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
          >
            Client Stories
          </h2>
          <div className="flex gap-4">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-[#f0ead6]/20 flex items-center justify-center hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-black transition-all">
              <ChevronLeft />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-[#f0ead6]/20 flex items-center justify-center hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-black transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${index * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-full px-2">
                  <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 md:p-12 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex gap-1 mb-6 text-[#c9a84c] text-xl">
                        ★★★★★ <span className="ml-2 text-white/50 text-sm font-medium self-center">5.0</span>
                      </div>
                      <p className="text-xl md:text-3xl text-[#f0ead6] leading-relaxed font-medium mb-10">
                        "{t.quote}"
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#f0ead6]">{t.author}</h4>
                      <p className="text-sm text-[#bbbbbb]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
