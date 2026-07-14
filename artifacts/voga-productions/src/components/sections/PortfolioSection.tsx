import React, { useEffect, useRef, useState, useCallback, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Static array — defined outside component to prevent re-creation on renders
const ALL_PROJECTS = [
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

// Initial: first 7 items (rows: 1 wide + 2 side + 1 wide + 3 side)
const INITIAL_COUNT = 7;

interface ProjectCardProps {
  video: string;
  index: number;
  tall?: boolean;
  isTouch: boolean;
}

const ProjectCard = memo(function ProjectCard({ video, index, tall, isTouch }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animatedRef = useRef(false);

  const safePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  const safePause = useCallback(() => {
    videoRef.current?.pause();
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || animatedRef.current) return;
    animatedRef.current = true;

    // Entrance animation
    gsap.fromTo(card,
      { opacity: 0, y: 48 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 90%' } }
    );

    // IntersectionObserver: on touch, auto-play when visible; on desktop, pause when offscreen
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (isTouch) safePlay();
          } else {
            safePause();
          }
        });
      },
      { threshold: isTouch ? 0.4 : 0.1 }
    );
    observerRef.current.observe(card);

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === card) t.kill();
      });
    };
  }, [isTouch, safePlay, safePause]);

  return (
    <div
      ref={cardRef}
      style={{
        width: '100%',
        height: tall ? 'clamp(280px, 50vw, 720px)' : 'clamp(200px, 30vw, 480px)',
        borderRadius: 'clamp(0.75rem, 2vw, 1.5rem)',
        overflow: 'hidden',
        position: 'relative',
        background: '#0e0e0e',
        cursor: isTouch ? 'default' : 'pointer',
      }}
      onMouseEnter={() => { if (!isTouch) safePlay(); }}
      onMouseLeave={() => { if (!isTouch) safePause(); }}
    >
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
        onMouseEnter={e => { if (!isTouch) e.currentTarget.style.transform = 'scale(1.04)'; }}
        onMouseLeave={e => { if (!isTouch) e.currentTarget.style.transform = 'scale(1)'; }}
      />
      {/* Index tag */}
      <div style={{
        position: 'absolute', top: '1.25rem', left: '1.5rem',
        fontSize: '0.75rem', letterSpacing: '0.15em',
        color: 'rgba(240,234,214,0.5)',
        fontFamily: "'Overused Grotesk', Arial, sans-serif",
        fontWeight: 500,
        userSelect: 'none',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.45) 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
});

// Grid row layouts. indices into ALL_PROJECTS.
// Full layout: 1+2+1+3+2+1+3+2+1+3 = 19
// Initial: first 7 (rows: 1+2+1+3)
function buildRows(projects: string[], isTouch: boolean) {
  const n = projects.length;
  const rows: React.ReactNode[] = [];
  let i = 0;

  const card = (idx: number, tall?: boolean) => (
    <ProjectCard key={idx} video={projects[idx]} index={idx} tall={tall} isTouch={isTouch} />
  );

  const rowStyle = (cols: string): React.CSSProperties => ({
    display: 'grid',
    gridTemplateColumns: cols,
    gap: '0.75rem',
  });

  // Pattern: 1 wide, 2, 1 wide, 3, 2, 1 wide, 3, 2, 1 wide, 3
  const pattern = [
    { count: 1, tall: true },
    { count: 2, tall: false },
    { count: 1, tall: true },
    { count: 3, tall: false },
    { count: 2, tall: false },
    { count: 1, tall: true },
    { count: 3, tall: false },
    { count: 2, tall: false },
    { count: 1, tall: true },
    { count: 3, tall: false },
  ];

  for (const p of pattern) {
    if (i >= n) break;
    const available = Math.min(p.count, n - i);
    const cols = available === 1 ? '1fr' : Array(available).fill('1fr').join(' ');
    rows.push(
      <div key={i} style={rowStyle(cols)} className={p.count === 3 ? 'portfolio-row-3' : ''}>
        {Array.from({ length: available }, (_, k) => card(i + k, p.tall))}
      </div>
    );
    i += available;
  }

  return rows;
}

export default function PortfolioSection() {
  const [expanded, setExpanded] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const visibleProjects = expanded ? ALL_PROJECTS : ALL_PROJECTS.slice(0, INITIAL_COUNT);

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none)').matches);
  }, []);

  useEffect(() => {
    [labelRef, headRef].forEach((ref, i) => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, delay: i * 0.1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      );
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const handleToggle = useCallback(() => {
    if (expanded) {
      // Collapse: scroll back to section top
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setExpanded(false), 400);
    } else {
      setExpanded(true);
    }
  }, [expanded]);

  return (
    <section id="portfolio" ref={sectionRef} style={{ padding: '120px 0', background: '#0a0a0a' }}>
      {/* Header */}
      <div style={{
        maxWidth: '80rem', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2.5rem) 4rem',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem',
      }}>
        <div>
          <span ref={labelRef} style={{
            display: 'block', fontSize: '1rem', letterSpacing: '0.025rem', textTransform: 'uppercase',
            color: '#c9a84c', marginBottom: '1rem', fontFamily: "'Overused Grotesk', Arial, sans-serif", fontWeight: 500,
          }}>
            Selected Projects
          </span>
          <h2 ref={headRef} style={{
            fontSize: 'clamp(2.5rem, 8vw, 10rem)', fontWeight: 600, lineHeight: 1, letterSpacing: '0.05rem',
            textTransform: 'uppercase', fontFamily: "'Overused Grotesk', Arial, sans-serif",
            background: 'linear-gradient(180deg, #ffffff 40%, #555 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Case Studies
          </h2>
        </div>

        <button
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-controls="portfolio-grid"
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1rem',
            color: '#c9a84c',
            letterSpacing: '0.025rem',
            textTransform: 'uppercase',
            paddingBottom: '6px',
            borderBottom: '1px solid rgba(201,168,76,0.4)',
            transition: 'color 0.2s ease',
            fontFamily: "'Overused Grotesk', Arial, sans-serif",
            fontWeight: 500,
            whiteSpace: 'nowrap',
            minHeight: '44px',
            minWidth: '44px',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = '#c9a84c')}
        >
          {expanded ? 'Show Less ↑' : 'Explore All →'}
        </button>
      </div>

      {/* Videos grid */}
      <div
        id="portfolio-grid"
        style={{
          maxWidth: '80rem', margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2.5rem)',
          display: 'flex', flexDirection: 'column', gap: '0.75rem',
        }}
      >
        {buildRows(visibleProjects, isTouch)}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .portfolio-row-3 { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .portfolio-row-3 { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
