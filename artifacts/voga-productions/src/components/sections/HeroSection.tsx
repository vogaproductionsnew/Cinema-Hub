import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const CHROME_LOGO = "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Logos/voga%20chrome%20web%20logo.png";

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

const ANGLE_STEP = 360 / 9;
const isMobile = () => window.innerWidth <= 768;

export default function HeroSection() {
  const cylinderRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const observersRef = useRef<IntersectionObserver[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const safePlay = useCallback((v: HTMLVideoElement | null) => {
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (!cylinderRef.current) return;
    gsap.set(cylinderRef.current, { rotateX: -1, rotateY: 0, rotateZ: 12 });
    tweenRef.current = gsap.to(cylinderRef.current, {
      rotateY: '+=360',
      duration: 28,
      ease: 'none',
      repeat: -1,
    });

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced && tweenRef.current) tweenRef.current.pause();

    const mobile = isMobile();

    if (!mobile) {
      videoRefs.current.forEach((v) => safePlay(v));
    } else {
      videoRefs.current.forEach((video) => {
        if (!video) return;
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) safePlay(video);
              else video.pause();
            });
          },
          { threshold: 0.1 }
        );
        obs.observe(video);
        observersRef.current.push(obs);
      });
    }

    return () => {
      tweenRef.current?.kill();
      observersRef.current.forEach((o) => o.disconnect());
      observersRef.current = [];
    };
  }, [safePlay]);

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '100px 0 40px',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      {/* Gradient fades top/bottom */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '10rem', background: 'linear-gradient(180deg, #0a0a0a 0%, transparent 100%)', zIndex: 30, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '10rem', background: 'linear-gradient(0deg, #0a0a0a 0%, transparent 100%)', zIndex: 30, pointerEvents: 'none' }} />

      {/* Main hero content — open, no box, no border */}
      <div style={{
        width: 'min(94vw, 1600px)',
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0',
      }}>

        {/* Star + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#c9a84c">
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

        {/* Chrome Voga Productions logo — replaces text VOGA + PRODUCTIONS */}
        <div data-hero-logo-wrap style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '-12rem' }}>
          <img
            src={CHROME_LOGO}
            alt="Voga Productions"
            style={{
              width: 'clamp(240px, 52vw, 680px)',
              maxWidth: '84vw',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* 3D Carousel — wider, more immersive */}
        <div style={{
          perspective: '2200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 'clamp(18rem, 36vw, 32rem)',
          marginBottom: '2.5rem',
        }}>
          {/* Pivot hub — its size doesn't affect visuals but must stay consistent */}
          <div style={{ width: 'clamp(10rem, 20vw, 16rem)', height: 'clamp(10rem, 20vw, 16rem)', position: 'relative' }}>
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
                    /* Desktop: larger cards; mobile handled via media query override below */
                    width: 'clamp(13rem, 24vw, 28rem)',
                    height: 'clamp(13rem, 22vw, 26rem)',
                    borderRadius: '1.75rem',
                    overflow: 'hidden',
                    transformStyle: 'preserve-3d',
                    /* Radius increased for wider spread: clamp(20rem, 40vw, 52rem) */
                    transform: `rotateY(${i * ANGLE_STEP}deg) translate3d(0, 0, clamp(20rem, 40vw, 52rem))`,
                    border: '1px solid rgba(240,234,214,0.12)',
                    backgroundColor: '#111',
                  }}
                >
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload={i === 0 ? 'auto' : 'metadata'}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '13px 28px',
              background: '#c9a84c',
              color: '#0a0a0a',
              borderRadius: '50px',
              fontSize: 'clamp(12px, 1.5vw, 13px)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontFamily: "'Overused Grotesk', Arial, sans-serif",
              transition: 'background 0.2s ease, transform 0.2s ease',
              whiteSpace: 'nowrap',
              minHeight: '44px',
              lineHeight: '18px',
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
              padding: '13px 28px',
              background: 'transparent',
              color: 'rgba(240,234,214,0.7)',
              border: '1px solid rgba(240,234,214,0.2)',
              borderRadius: '50px',
              fontSize: 'clamp(12px, 1.5vw, 13px)',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontFamily: "'Overused Grotesk', Arial, sans-serif",
              transition: 'border-color 0.2s ease, color 0.2s ease',
              whiteSpace: 'nowrap',
              minHeight: '44px',
              lineHeight: '18px',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#c9a84c'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,234,214,0.2)'; e.currentTarget.style.color = 'rgba(240,234,214,0.7)'; }}
          >
            View Work ↓
          </a>
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

      {/* Mobile overrides — keep cylinder within viewport */}
      <style>{`
        @media (max-width: 1024px) {
          /* Reduce negative margin at 1024px — PNG transparent area is proportionally smaller */
          #home [data-hero-logo-wrap] {
            margin-bottom: -7rem !important;
          }
        }
        @media (max-width: 768px) {
          /* Constrain cylinder card size on mobile so they don't overflow */
          #home [style*="translate3d"] {
            width: clamp(11rem, 56vw, 16rem) !important;
            height: clamp(11rem, 52vw, 15rem) !important;
          }
          /* At tablet the PNG scales down — less transparent padding, smaller negative compensation */
          #home [data-hero-logo-wrap] {
            margin-bottom: -2rem !important;
          }
        }
        @media (max-width: 480px) {
          #home [style*="translate3d"] {
            width: clamp(9rem, 52vw, 13rem) !important;
            height: clamp(9rem, 48vw, 12rem) !important;
          }
          /* At small mobile the PNG is very small — minimal negative offset */
          #home [data-hero-logo-wrap] {
            margin-bottom: -1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
