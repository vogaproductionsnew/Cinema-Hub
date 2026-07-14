import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -24 },
      { opacity: 1, y: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' }
    );
  }, []);

  const links = ['Home', 'About', 'Portfolio', 'Services'];

  return (
    <>
      <div
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 9999,
          padding: '0',
          boxSizing: 'border-box',
        }}
      >
        <div style={{
          width: '100%',
          background: '#1a1a1a',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '80rem',
            margin: '0 auto',
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}>

            {/* Logo */}
            <a
              href="#home"
              style={{
                flexShrink: 0,
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                transition: 'opacity 0.35s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <img
                src="https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Logos/Voga_Logo_White.png"
                alt="Voga Productions"
                style={{ height: '32px', width: 'auto' }}
              />
            </a>

            {/* Center nav links — desktop */}
            <div
              className="hidden md:flex"
              style={{ alignItems: 'center', gap: '0' }}
            >
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontFamily: "'Overused Grotesk', Arial, sans-serif",
                    letterSpacing: '0.025rem',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    padding: '0.5rem 1rem',
                    lineHeight: 1.2,
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right: CTA — desktop */}
            <div className="hidden md:flex" style={{ flexShrink: 0 }}>
              <div style={{
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '1.25rem',
                padding: '0.5rem 0.5rem 0.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <a
                  href="#contact"
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    fontFamily: "'Overused Grotesk', Arial, sans-serif",
                    letterSpacing: '0.025rem',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
                >
                  Get In Touch
                </a>
                <div style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  background: '#ffffff',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden"
              style={{ color: '#ffffff', background: 'none', border: 'none', padding: '8px', zIndex: 50, cursor: 'pointer' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: '#0d0d0d',
        zIndex: 9000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: mobileMenuOpen ? 1 : 0,
        pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        transition: 'opacity 0.35s ease',
      }}>
        {/* Mobile logo */}
        <div style={{ position: 'absolute', top: '1.5rem', left: '2.5rem' }}>
          <img
            src="https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Logos/Voga_Logo_White.png"
            alt="Voga Productions"
            style={{ height: '28px', width: 'auto' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#f0ead6',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05rem',
                fontFamily: "'Overused Grotesk', Arial, sans-serif",
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              marginTop: '1rem',
              padding: '0.875rem 2rem',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '50px',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 500,
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontFamily: "'Overused Grotesk', Arial, sans-serif",
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
}
