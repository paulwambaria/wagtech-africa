"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/images/gallery/10.jpg",
    eyebrow: "The Original Brand Since 1990",
    headline: "Africa's Trusted Partner for Water Quality & Environmental Solutions",
    sub: "Delivering advanced scientific equipment, monitoring systems, and mobile laboratories across East Africa and beyond.",
    cta: { label: "Explore Solutions", href: "/solutions" },
    cta2: { label: "Request a Quote", href: "/contact" },
  },
  {
    image: "/images/gallery/18.jpg",
    eyebrow: "Hydromet & Agronomy",
    headline: "WMO-Compliant Weather Stations for National Monitoring Networks",
    sub: "From community flood early warning to premium TM100 networks, built for Africa's climate challenges.",
    cta: { label: "View Hydromet Solutions", href: "/solutions/hydromet" },
    cta2: { label: "Download Catalogue", href: "/downloads" },
  },
  {
    image: "/images/gallery/22.jpg",
    eyebrow: "Mobile Laboratories",
    headline: "Science Deployable to Any Location in Africa",
    sub: "Self-contained mobile laboratories for water quality, environmental testing, and field analysis, anywhere on the continent.",
    cta: { label: "View Mobile Labs", href: "/solutions/mobile-laboratories" },
    cta2: { label: "Contact Our Team", href: "/contact" },
  },
  {
    image: "/images/gallery/04.jpg",
    eyebrow: "Wagtech Projects · Africa",
    headline: "Comprehensive After-Sales Support & Technical Training",
    sub: "Installation, operator training, calibration, and ongoing technical consultancy from our certified team of engineers across Africa.",
    cta: { label: "Training & Support", href: "/training-support" },
    cta2: { label: "Contact Us", href: "/contact" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (transitioning || idx === current) return;
    setPrev(current);
    setCurrent(idx);
    setTransitioning(true);
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 800);
  }, [current, transitioning]);

  useEffect(() => {
    const t = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, [current, goTo]);

  return (
    <section style={{ position: "relative", minHeight: "680px", overflow: "hidden", background: "#0D0D0D" }}>

      {/* ── Slide Images ── */}
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          opacity: i === current ? 1 : i === prev ? 0 : 0,
          transition: "opacity 0.85s cubic-bezier(0.4,0,0.2,1)",
          zIndex: i === current ? 2 : i === prev ? 1 : 0,
        }}>
          <Image
            src={slide.image}
            alt={slide.eyebrow}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          {/* Dark overlay, heavier at left for text readability */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.15) 100%)",
          }} />
          {/* Red cinematic glow */}
          <div style={{
            position: "absolute", top: "20%", left: "-10%",
            width: "560px", height: "560px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(123,21,21,0.3) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
        </div>
      ))}

      {/* ── Grid texture overlay ── */}
      <div className="grid-texture" style={{ position: "absolute", inset: 0, zIndex: 3, opacity: 0.35, pointerEvents: "none" }} />

      {/* ── Content ── */}
      <div className="wrap" style={{
        position: "relative", zIndex: 4,
        minHeight: "680px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        paddingTop: "120px", paddingBottom: "80px",
      }}>
        {slides.map((slide, i) => (
          <div key={i} style={{
            position: i === 0 ? "relative" : "absolute",
            top: i === 0 ? "auto" : 0, left: 0, right: 0,
            paddingTop: i === 0 ? 0 : "140px",
            opacity: i === current ? 1 : 0,
            transform: i === current ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s",
            pointerEvents: i === current ? "auto" : "none",
            maxWidth: "760px",
          }}>
            <div className="eyebrow" style={{ marginBottom: "20px" }}>
              {slide.eyebrow}
            </div>

            <h1 style={{
              fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#fff",
              letterSpacing: "-0.03em",
              marginBottom: "22px",
            }}>
              {/* Bold-highlight first word group */}
              <span style={{ color: "#fff" }}>{slide.headline.split(" ").slice(0, 4).join(" ")}</span>{" "}
              <span className="text-gradient">{slide.headline.split(" ").slice(4, 8).join(" ")}</span>{" "}
              <span style={{ color: "#fff" }}>{slide.headline.split(" ").slice(8).join(" ")}</span>
            </h1>

            <p style={{ color: "rgba(255,255,255,0.62)", fontSize: "1.05rem", lineHeight: 1.78, maxWidth: "500px", marginBottom: "38px" }}>
              {slide.sub}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <Link href={slide.cta.href} className="btn-red" style={{ padding: "13px 26px" }}>
                {slide.cta.label}
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
              </Link>
              <Link href={slide.cta2.href} className="btn-ghost-white" style={{ padding: "13px 26px" }}>
                {slide.cta2.label}
              </Link>
            </div>
          </div>
        ))}

        {/* ── Slide counter (top right) ── */}
        <div style={{
          position: "absolute", top: "50%", right: "clamp(1.25rem, 4vw, 2.5rem)",
          transform: "translateY(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? "3px" : "3px",
                height: i === current ? "32px" : "16px",
                borderRadius: "2px",
                background: i === current ? "#C41A1A" : "rgba(255,255,255,0.22)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom navigation ── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 5,
        background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
        padding: "20px 0 28px",
        display: "flex", alignItems: "center", justifyContent: "center", gap: "20px",
      }}>
        {/* Prev */}
        <button onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          style={{
            width: "38px", height: "38px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.07)", color: "#fff", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#C41A1A")}
          onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 5l-5 5 5 5"/></svg>
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? "28px" : "8px", height: "8px",
                borderRadius: "4px",
                background: i === current ? "#C41A1A" : "rgba(255,255,255,0.28)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button onClick={() => goTo((current + 1) % slides.length)}
          aria-label="Next slide"
          style={{
            width: "38px", height: "38px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.07)", color: "#fff", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#C41A1A")}
          onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 5l5 5-5 5"/></svg>
        </button>

        {/* Slide number */}
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", marginLeft: "8px" }}>
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Progress bar ── */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "rgba(255,255,255,0.07)", zIndex: 6 }}>
        <div key={current} style={{
          height: "100%", background: "#C41A1A",
          animation: "slideProgress 6s linear forwards",
        }} />
      </div>

      <style>{`
        @keyframes slideProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}
