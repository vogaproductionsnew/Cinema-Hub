import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [labelRef, headRef, p1Ref, p2Ref, btnRef];
    items.forEach((ref, i) => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, delay: i * 0.12, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      );
    });
    gsap.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: '120px 0', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        {/* Top rule */}
        <div ref={lineRef} style={{ height: '1px', background: 'rgba(240,234,214,0.1)', marginBottom: '60px' }} />

        {/* Label row */}
        <div ref={labelRef} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <span style={{ fontSize: '1rem', color: '#c9a84c' }}>◈</span>
          <span style={{ fontSize: '1rem', letterSpacing: '0.025rem', textTransform: 'uppercase', color: '#c9a84c', fontFamily: "'Overused Grotesk', Arial, sans-serif", fontWeight: 500 }}>
            About Voga Productions
          </span>
        </div>

        {/* Section heading */}
        <h2
          ref={headRef}
          style={{
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#f0ead6',
            fontFamily: "'Overused Grotesk', Arial, sans-serif",
            marginBottom: '60px',
            maxWidth: '900px',
          }}
        >
          We shape stories that shape culture
        </h2>

        {/* Two column text */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '60px' }} className="about-grid">
          <p ref={p1Ref} style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: 1.75, color: 'rgba(240,234,214,0.85)', fontFamily: "'Overused Grotesk', Arial, sans-serif", fontWeight: 400 }}>
            Voga Productions is a creative media production company specializing in cinematic storytelling, commercial filmmaking, photography, and high-impact visual communication. Based in the UAE, we partner with brands, businesses, and organizations to create compelling visual content that inspires audiences and strengthens brand identity.
          </p>
          <div>
            <div ref={p2Ref} style={{ marginBottom: '40px' }}>
              <p style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: 1.75, color: 'rgba(240,234,214,0.85)', fontFamily: "'Overused Grotesk', Arial, sans-serif", fontWeight: 400, marginBottom: '24px' }}>
                From concept development and creative direction to production and post-production, we deliver end-to-end media solutions with a commitment to creativity, precision, and exceptional quality. Every project is crafted with a strategic approach, combining artistic vision with technical excellence to produce content that is visually compelling, purpose-driven, and results-oriented.
              </p>
              <p style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: 1.75, color: 'rgba(240,234,214,0.85)', fontFamily: "'Overused Grotesk', Arial, sans-serif", fontWeight: 400 }}>
                At Voga Productions, we believe every brand has a story worth telling, and we're dedicated to bringing those stories to life through powerful visual experiences.
              </p>
            </div>
            <a
              ref={btnRef}
              href="#services"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                border: '1px solid rgba(201,168,76,0.6)',
                color: '#c9a84c',
                fontSize: '13px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontFamily: "'Overused Grotesk', Arial, sans-serif",
                fontWeight: 500,
                transition: 'background 0.25s ease, color 0.25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.color = '#0a0a0a'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a84c'; }}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', borderTop: '1px solid rgba(240,234,214,0.08)', paddingTop: '48px' }}>
          {[
            { num: '50+', label: 'Projects Delivered' },
            { num: '9+', label: 'Partner Brands' },
            { num: '100%', label: 'End-to-End Production' },
          ].map((stat) => (
            <div key={stat.num}>
              <div style={{ fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 700, color: '#f0ead6', fontFamily: "'Overused Grotesk', Arial, sans-serif", lineHeight: 1, marginBottom: '8px' }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(240,234,214,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Overused Grotesk', Arial, sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
