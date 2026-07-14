import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
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

const TRACK = [...partners, ...partners, ...partners];

export default function PartnersSection() {
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.fromTo(labelRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: labelRef.current, start: 'top 88%' } }
    );
  }, []);

  return (
    <section style={{ padding: '80px 0', background: '#0a0a0a', borderTop: '1px solid rgba(240,234,214,0.06)', borderBottom: '1px solid rgba(240,234,214,0.06)', overflow: 'hidden' }}>
      {/* Label */}
      <div style={{ textAlign: 'center', marginBottom: '52px' }}>
        <span ref={labelRef} style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a84c', fontFamily: "'Overused Grotesk', Arial, sans-serif" }}>
          Our Valued Partners
        </span>
      </div>

      {/* Infinite ticker */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, #0a0a0a, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, #0a0a0a, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div className="ticker-track" style={{ display: 'flex', alignItems: 'center', width: 'max-content' }}>
          {TRACK.map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '0 48px', flexShrink: 0, borderRight: '1px solid rgba(240,234,214,0.08)' }}>
              <img
                src={p.img}
                alt={p.alt}
                style={{ height: '36px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.5 }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
