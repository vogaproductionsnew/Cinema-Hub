import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    title: "Cinematic Storytelling",
    desc: "We craft emotionally driven films that transform ideas into compelling visual narratives. Every frame is designed to connect with audiences, strengthen brand identity, and leave a lasting impression."
  },
  {
    num: '02',
    title: "Brand Adfilms",
    desc: "Premium commercial films that showcase your brand with cinematic quality and strategic storytelling. From concept development to final delivery, we create advertisements that elevate perception and drive engagement."
  },
  {
    num: '03',
    title: "Automotive Cinematics",
    desc: "High-performance automotive films that capture power, precision, and design through dynamic camera movement, cinematic lighting, and advanced production techniques. Ideal for dealerships, manufacturers, and luxury automotive brands."
  },
  {
    num: '04',
    title: "Event Coverage & Live Streaming",
    desc: "Professional multi-camera coverage for corporate events, product launches, exhibitions, conferences, and private functions. We document every key moment while delivering seamless live streaming for audiences anywhere in the world."
  },
  {
    num: '05',
    title: "Luxury Property Videos",
    desc: "Architectural films that present residential, commercial, and luxury developments with sophistication. Using cinematic camera work, aerial perspectives, and refined editing, we highlight every detail that defines the property."
  },
  {
    num: '06',
    title: "Hospitality & F&B Content",
    desc: "Visually rich content for hotels, restaurants, cafés, and luxury hospitality brands. We capture experiences, ambience, cuisine, and service in a way that inspires guests and strengthens your brand presence."
  },
  {
    num: '07',
    title: "Motion Graphics & Animation",
    desc: "Creative motion design and animated visuals that simplify complex ideas and enhance storytelling. From logo animations and explainer videos to digital campaigns and corporate presentations, we create content that moves with purpose."
  },
  {
    num: '08',
    title: "Drone Cinematography",
    desc: "Professional drone cinematography delivering breathtaking aerial perspectives for real estate, tourism, events, construction, and commercial productions while maintaining the highest safety and operational standards."
  },
  {
    num: '09',
    title: "Commercials & Branded Content",
    desc: "Strategic commercial productions designed for television, digital platforms, and social media. We combine creative direction, cinematic production, and brand-focused messaging to create content that delivers measurable impact."
  },
  {
    num: '10',
    title: "Lifestyle, Product Photography & Videography",
    desc: "Premium photography and video production that showcase products, people, and brands with elegance and authenticity. Whether for advertising, e-commerce, campaigns, or social media, we create visuals that elevate your brand and drive engagement."
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(labelRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
    );
    gsap.fromTo(headRef.current,
      { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power3.out', delay: 0.1, scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
    );
    if (listRef.current) {
      const rows = listRef.current.querySelectorAll('.svc-row');
      gsap.fromTo(rows,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: listRef.current, start: 'top 85%' } }
      );
    }
  }, []);

  return (
    <section id="services" style={{ padding: '100px 0', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ marginBottom: '64px' }}>
          <span ref={labelRef} style={{ display: 'block', fontSize: '1rem', letterSpacing: '0.025rem', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem', fontFamily: "'Overused Grotesk', Arial, sans-serif", fontWeight: 500 }}>
            Our Solutions
          </span>
          <h2
            ref={headRef}
            style={{
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
            }}
          >
            Video<br />Services
          </h2>
        </div>

        <div ref={listRef} style={{ borderTop: '1px solid rgba(240,234,214,0.1)' }}>
          {services.map((svc, i) => (
            <div key={i} className="svc-row" style={{ borderBottom: '1px solid rgba(240,234,214,0.1)' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '28px 0',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  gap: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flex: 1 }}>
                  <span style={{ fontSize: '12px', color: 'rgba(201,168,76,0.6)', fontFamily: "'Overused Grotesk', Arial, sans-serif", letterSpacing: '0.1em', flexShrink: 0, minWidth: '28px' }}>
                    {svc.num}
                  </span>
                  <h3 style={{
                    fontSize: 'clamp(22px, 2.5vw, 36px)',
                    fontWeight: 500,
                    fontFamily: "'Overused Grotesk', Arial, sans-serif",
                    color: open === i ? '#c9a84c' : '#f0ead6',
                    transition: 'color 0.3s ease',
                    lineHeight: 1.2,
                  }}>
                    {svc.title}
                  </h3>
                </div>
                <span style={{
                  fontSize: '28px',
                  fontWeight: 300,
                  color: '#c9a84c',
                  flexShrink: 0,
                  transition: 'transform 0.3s ease',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  lineHeight: 1,
                }}>
                  +
                </span>
              </button>

              <div
                style={{
                  maxHeight: open === i ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.5s cubic-bezier(0.04, 0.62, 0.23, 0.98)',
                }}
              >
                <p style={{
                  paddingBottom: '32px',
                  paddingLeft: '56px',
                  fontSize: 'clamp(16px, 1.4vw, 20px)',
                  lineHeight: 1.75,
                  color: 'rgba(240,234,214,0.65)',
                  fontFamily: "'Overused Grotesk', Arial, sans-serif",
                  fontWeight: 400,
                  maxWidth: '680px',
                }}>
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
