import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Exactly 9 approved R2 partner logos — static array outside component
const PARTNERS = [
  { alt: 'Partner logo 1', img: 'https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Partners/IMG_4262.PNG' },
  { alt: 'Partner logo 2', img: 'https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Partners/IMG_6632.png' },
  { alt: 'Partner logo 3', img: 'https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Partners/TITAN%20logo%20png%20-%20Edited.png' },
  { alt: 'Partner logo 4', img: 'https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Partners/bright%20logo.png' },
  { alt: 'Partner logo 5', img: 'https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Partners/c%20x%20no%20bg.png' },
  { alt: 'Partner logo 6', img: 'https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Partners/luxe%20horizon%20logo.png' },
  { alt: 'Partner logo 7', img: 'https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Partners/nayat%20logo.png' },
  { alt: 'Partner logo 8', img: 'https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Partners/orientica%20logo%20png.png' },
  { alt: 'Partner logo 9', img: 'https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Partners/sv%20companies%20logo.png' },
];

// Repeated twice for seamless infinite loop — source data is exactly 9 logos
const TRACK = [...PARTNERS, ...PARTNERS];

export default function PartnersSection() {
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.fromTo(labelRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: labelRef.current, start: 'top 88%' } }
    );
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section style={{
      padding: '80px 0',
      background: '#0a0a0a',
      borderTop: '1px solid rgba(240,234,214,0.06)',
      borderBottom: '1px solid rgba(240,234,214,0.06)',
      overflow: 'hidden',
    }}>
      {/* Section label */}
      <div style={{ textAlign: 'center', marginBottom: '52px' }}>
        <span ref={labelRef} style={{
          fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#c9a84c', fontFamily: "'Overused Grotesk', Arial, sans-serif",
        }}>
          Our Valued Partners
        </span>
      </div>

      {/* Infinite ticker */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edge overlays */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #0a0a0a, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #0a0a0a, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div className="ticker-track" style={{ display: 'flex', alignItems: 'center', width: 'max-content' }}>
          {TRACK.map((p, i) => (
            <div
              key={i}
              data-partner-slot
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                background: 'transparent',
                borderRight: '1px solid rgba(240,234,214,0.08)',
                /* Larger containers: desktop 250×120, tablet 210×105, mobile 180×95 */
                width: 'clamp(160px, 20vw, 250px)',
                height: 'clamp(90px, 10vw, 120px)',
                padding: '0 clamp(20px, 3vw, 36px)',
                boxSizing: 'border-box',
              }}
            >
              <img
                src={p.img}
                alt={p.alt}
                style={{
                  /* Larger visible logo: desktop up to 100px, mobile min 62px */
                  maxHeight: 'clamp(62px, 9vw, 100px)',
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  /* Start invisible — only reveal after confirmed successful load */
                  opacity: 0,
                  display: 'block',
                  background: 'transparent',
                  transition: 'opacity 0.25s ease',
                }}
                onLoad={e => { e.currentTarget.style.opacity = '0.58'; }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.58')}
                onError={e => {
                  // Hide the entire slot so no blank box or border remains visible
                  const img = e.currentTarget;
                  const slot = img.closest('[data-partner-slot]') as HTMLElement | null;
                  if (slot) {
                    slot.style.display = 'none';
                  } else {
                    img.style.display = 'none';
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
