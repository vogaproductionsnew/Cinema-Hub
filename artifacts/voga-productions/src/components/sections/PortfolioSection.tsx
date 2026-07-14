import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-01.mp4.mp4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-02.mp4.mp4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-03.mp4.mp4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-04.mp4.mp4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-05.mp4.MP4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-07.mp4.mp4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-10.mp4.mp4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-11.mp4.mp4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-13.mp4.mp4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-14.mp4.MP4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-15.mp4.MP4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-16.mp4.mp4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-17.mp4.MOV",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-18.mp4.MP4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-19.mp4.mp4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-20.mp4.MP4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-21.mp4.MP4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-22.mp4.mp4",
  "https://pub-8de2b9e61a4b4edb850716f874d1f565.r2.dev/Videos/portfolio/portfolio-23.mp4.mp4",
];

function ProjectCard({ video, index, tall }: { video: string; index: number; tall?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.fromTo(card,
      { opacity: 0, y: 48 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 88%' } }
    );
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) videoRef.current?.pause(); });
    }, { threshold: 0.2 });
    io.observe(card);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        width: '100%',
        height: tall ? 'clamp(420px, 60vw, 720px)' : 'clamp(260px, 35vw, 480px)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        position: 'relative',
        background: '#0e0e0e',
        cursor: 'pointer',
      }}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => { videoRef.current?.pause(); }}
    >
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        preload={index < 3 ? 'metadata' : 'none'}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)' }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      />
      {/* Index tag */}
      <div style={{
        position: 'absolute', top: '1.5rem', left: '1.75rem',
        fontSize: '0.75rem', letterSpacing: '0.15em',
        color: 'rgba(240,234,214,0.5)',
        fontFamily: "'Overused Grotesk', Arial, sans-serif",
        fontWeight: 500,
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      {/* Dark vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.45) 100%)',
        pointerEvents: 'none',
        transition: 'opacity 0.4s ease',
      }} />
    </div>
  );
}

export default function PortfolioSection() {
  const labelRef = useRef<HTMLSpanElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    [labelRef, headRef].forEach((ref, i) => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, delay: i * 0.1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      );
    });
  }, []);

  return (
    <section id="portfolio" style={{ padding: '120px 0', background: '#0a0a0a' }}>
      {/* Header */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2.5rem 4rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <span ref={labelRef} style={{
            display: 'block',
            fontSize: '1rem',
            letterSpacing: '0.025rem',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '1rem',
            fontFamily: "'Overused Grotesk', Arial, sans-serif",
            fontWeight: 500,
          }}>
            Selected Projects
          </span>
          <h2 ref={headRef} style={{
            fontSize: 'clamp(3rem, 8vw, 10rem)',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: '0.1rem',
            textTransform: 'uppercase',
            fontFamily: "'Overused Grotesk', Arial, sans-serif",
            background: 'linear-gradient(180deg, #ffffff 40%, #555 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Case Studies
          </h2>
        </div>
        <a
          href="#contact"
          style={{
            fontSize: '1rem',
            color: '#c9a84c',
            textDecoration: 'none',
            letterSpacing: '0.025rem',
            textTransform: 'uppercase',
            paddingBottom: '6px',
            borderBottom: '1px solid rgba(201,168,76,0.4)',
            transition: 'color 0.2s ease',
            fontFamily: "'Overused Grotesk', Arial, sans-serif",
            fontWeight: 500,
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = '#c9a84c')}
        >
          Explore All →
        </a>
      </div>

      {/* Videos grid: all 19 videos in a varied layout */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

        {/* Row 1: 1 wide */}
        <ProjectCard video={projects[0]} index={0} tall />

        {/* Row 2: 2 side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <ProjectCard video={projects[1]} index={1} />
          <ProjectCard video={projects[2]} index={2} />
        </div>

        {/* Row 3: 1 wide */}
        <ProjectCard video={projects[3]} index={3} tall />

        {/* Row 4: 3 side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }} className="portfolio-row-3">
          <ProjectCard video={projects[4]} index={4} />
          <ProjectCard video={projects[5]} index={5} />
          <ProjectCard video={projects[6]} index={6} />
        </div>

        {/* Row 5: 2 side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <ProjectCard video={projects[7]} index={7} />
          <ProjectCard video={projects[8]} index={8} />
        </div>

        {/* Row 6: 1 wide */}
        <ProjectCard video={projects[9]} index={9} tall />

        {/* Row 7: 3 side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }} className="portfolio-row-3">
          <ProjectCard video={projects[10]} index={10} />
          <ProjectCard video={projects[11]} index={11} />
          <ProjectCard video={projects[12]} index={12} />
        </div>

        {/* Row 8: 2 side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <ProjectCard video={projects[13]} index={13} />
          <ProjectCard video={projects[14]} index={14} />
        </div>

        {/* Row 9: 1 wide */}
        <ProjectCard video={projects[15]} index={15} tall />

        {/* Row 10: 3 side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }} className="portfolio-row-3">
          <ProjectCard video={projects[16]} index={16} />
          <ProjectCard video={projects[17]} index={17} />
          <ProjectCard video={projects[18]} index={18} />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .portfolio-row-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
