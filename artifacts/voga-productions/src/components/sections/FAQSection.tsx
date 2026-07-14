import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "What types of video projects do you handle?", a: "We handle a full spectrum: brand films, corporate videos, lifestyle and product content, luxury real estate, automotive, event coverage, documentaries, and social media content optimised for every platform." },
  { q: "How long does a video project usually take?", a: "Timelines depend on the scope and complexity of the project. A short-form social media video may take 3–5 days, while a full brand film can take 2–4 weeks from brief to delivery." },
  { q: "Do you offer script and concept development?", a: "Yes. Creative direction is at the core of what we do. We provide full pre-production support including brief development, scripting, storyboarding, location scouting, and art direction." },
  { q: "Can you adapt videos for different platforms?", a: "Absolutely. We optimise every deliverable for the intended platform — whether that's a 16:9 brand film, vertical 9:16 for Instagram Reels and TikTok, or square format for LinkedIn and Facebook." },
  { q: "What is included in your video package?", a: "Our packages typically include concept development, full production (crew, equipment, direction), post-production (editing, colour grading, sound), and platform-ready deliverables. Final scope is agreed in the brief." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-5 md:px-10 max-w-[900px] mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[#c9a84c] text-[14px] tracking-[0.2em] font-medium">05</span>
        <span className="text-[#c9a84c] text-[14px] tracking-[0.2em] uppercase">Quick Answers</span>
      </div>

      <h2 className="text-[#f0ead6] font-bold mb-12" style={{ fontSize: 'clamp(50px, 7vw, 100px)' }}>
        Got Questions?
      </h2>

      <div className="border-t border-[#f0ead6]/15">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-[#f0ead6]/15">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
            >
              <h3 className={`text-xl md:text-2xl font-medium pr-8 transition-colors ${openIndex === i ? 'text-[#c9a84c]' : 'text-[#f0ead6]'}`}>
                {faq.q}
              </h3>
              <span className="text-[#c9a84c] text-2xl font-light flex-shrink-0">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-lg text-[#f0ead6]/70 leading-relaxed max-w-3xl">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center md:text-left">
        <a
          href="#contact"
          className="inline-block px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-medium hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all rounded-sm"
        >
          Ask a Question
        </a>
      </div>
    </section>
  );
}
