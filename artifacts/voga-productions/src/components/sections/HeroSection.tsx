import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const VIDEOS = [
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/hero/hero-01.mp4.MOV",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/hero/hero-02.mp4.MOV",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/hero/hero-03.mp4.MOV",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/hero/hero-04.mp4.mov",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/hero/hero-05.mp4.MOV",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/hero/hero-06.mp4.mov",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/hero/hero-07.mp4.mov",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/hero/hero-08.mp4.mov",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/hero/hero-09.mp4.MOV",
];

const ANGLE_STEP = 360 / 9; // 40° apart

export default function HeroSection() {
  const cylinderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cylinderRef.current) return;
    gsap.set(cylinderRef.current, { rotateX: -1, rotateY: 0, rotateZ: 12 });
    gsap.to(cylinderRef.current, {
      rotateY: '+=360',
      duration: 28,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '115vh',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '120px 24px 100px',
      }}
    >
      {/* Section-level gradient fades (top + bottom) */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '12rem', background: 'linear-gradient(180deg, #0a0a0a 0%, transparent 100%)', zIndex: 30, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '12rem', background: 'linear-gradient(0deg, #0a0a0a 0%, transparent 100%)', zIndex: 30, pointerEvents: 'none' }} />

      {/* Outer border wrapper */}
      <div style={{
        width: '100%',
        maxWidth: '57rem',
        border: '1px solid rgba(240,234,214,0.12)',
        borderRadius: '4.2rem',
        padding: '5px',
        background: 'rgba(240,234,214,0.06)',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Inner pill */}
        <div style={{
          width: '100%',
          backgroundColor: '#0d0d0d',
          borderRadius: '3.75rem',
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 3vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.75rem',
          overflow: 'clip',
          position: 'relative',
        }}>

          {/* Star + label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#c9a84c">
              <path d="M12 2l2.09 6.26L20 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l5.91-1.01z" />
            </svg>
            <span style={{
              fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(240,234,214,0.55)',
              fontFamily: "'Overused Grotesk', Arial, sans-serif",
              fontWeight: 500,
            }}>
              UAE Film Production Studio
            </span>
          </div>

          {/* Brand heading */}
          <div style={{ textAlign: 'center', lineHeight: 0.88 }}>
            <h1 style={{
              fontFamily: "'Overused Grotesk', Arial, sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(72px, 14vw, 190px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.88,
              margin: 0,
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(210,210,210,0.55) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              VOGA
            </h1>
            <p style={{
              fontSize: 'clamp(11px, 1.2vw, 14px)',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(240,234,214,0.4)',
              fontFamily: "'Overused Grotesk', Arial, sans-serif",
              fontWeight: 400,
              margin: '8px 0 0',
            }}>
              PRODUCTIONS
            </p>
          </div>

          {/* 3D Carousel */}
          <div style={{
            perspective: '2000px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '26rem',
          }}>
            <div style={{ width: '18rem', height: '18rem', position: 'relative' }}>
              <div
                ref={cylinderRef}
                style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                }}
              >
                {VIDEOS.map((src, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '21rem',
                      height: '20rem',
                      borderRadius: '2rem',
                      overflow: 'hidden',
                      transformStyle: 'preserve-3d',
                      transform: `rotateY(${i * ANGLE_STEP}deg) translate3d(0, 0, 30rem)`,
                      border: '1px solid rgba(240,234,214,0.15)',
                      backgroundColor: '#111',
                    }}
                  >
                    <video
                      src={src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload={i < 2 ? 'auto' : 'none'}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                padding: '13px 32px',
                background: '#c9a84c',
                color: '#0a0a0a',
                borderRadius: '50px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontFamily: "'Overused Grotesk', Arial, sans-serif",
                transition: 'background 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Start a Project
            </a>
            <a
              href="#portfolio"
              style={{
                display: 'inline-block',
                padding: '13px 32px',
                background: 'transparent',
                color: 'rgba(240,234,214,0.7)',
                border: '1px solid rgba(240,234,214,0.2)',
                borderRadius: '50px',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontFamily: "'Overused Grotesk', Arial, sans-serif",
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#c9a84c'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,234,214,0.2)'; e.currentTarget.style.color = 'rgba(240,234,214,0.7)'; }}
            >
              View Work ↓
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 28,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 30,
        animation: 'bounce 2s ease-in-out infinite',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(240,234,214,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
