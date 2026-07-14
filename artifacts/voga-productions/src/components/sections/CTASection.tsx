import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const V1 = "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-01.mp4.mp4";
const V2 = "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-02.mp4.mp4";
const BG_VIDEOS = [V1, V2, V1, V2, V1, V2, V1, V2];

export default function CTASection() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    [labelRef, headRef, btnRef].forEach((ref, i) => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: i * 0.12, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      );
    });
  }, []);

  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '120px 40px', textAlign: 'center', background: '#0a0a0a' }}>

      {/* Background horizontal auto-scrolling video strip */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15, pointerEvents: 'none', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div className="ticker-track" style={{ display: 'flex', alignItems: 'center', height: '60vh', width: 'max-content', gap: '12px' }}>
          {BG_VIDEOS.map((src, i) => (
            <div key={i} style={{ width: '38vw', height: '100%', flexShrink: 0, borderRadius: '10px', overflow: 'hidden' }}>
              <video src={src} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Dark vignette overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 30%, #0a0a0a 75%)', zIndex: 1, pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
        <span ref={labelRef} style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '32px', fontFamily: "'Overused Grotesk', Arial, sans-serif" }}>
          Start Project
        </span>

        <h2 ref={headRef} style={{
          fontFamily: "'Overused Grotesk', Arial, sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(72px, 10vw, 160px)',
          lineHeight: 0.95,
          color: '#f0ead6',
          marginBottom: '72px',
          letterSpacing: '-0.03em',
        }}>
          Let's Produce.
        </h2>

        {/* Spinning badge + button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Spinning circular text badge */}
          <div className="spin-badge" style={{ width: '130px', height: '130px', flexShrink: 0 }}>
            <svg viewBox="0 0 120 120" style={{ width: '100%', height: '100%' }}>
              <defs>
                <path id="ctaCircle" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" fill="none" />
              </defs>
              <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(240,234,214,0.12)" strokeWidth="1" />
              <text fontFamily="'Overused Grotesk', Arial, sans-serif" fontSize="10.5" fill="rgba(240,234,214,0.85)" letterSpacing="2.5">
                <textPath href="#ctaCircle" startOffset="0%">
                  Book a call • Book a call • Book a call •
                </textPath>
              </text>
            </svg>
          </div>

          <a
            ref={btnRef}
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#c9a84c',
              color: '#0a0a0a',
              fontFamily: "'Overused Grotesk', Arial, sans-serif",
              fontWeight: 700,
              fontSize: '16px',
              padding: '18px 44px',
              borderRadius: '4px',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'background 0.25s ease, transform 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  );
}
