"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  span?: boolean;
};

const ALL_IMAGES: GalleryImage[] = [
  { src: "/images/gallery/01.png",        alt: "Water Safety Lab Equipment",           category: "Equipment",      span: false },
  { src: "/images/gallery/02.png",        alt: "Field Team Preparing Equipment",        category: "Team",           span: true  },
  { src: "/images/gallery/03.png",        alt: "Water Quality Testing on Site",         category: "Projects",       span: false },
  { src: "/images/gallery/04.jpg",        alt: "Environmental Sampling Activity",       category: "Projects",       span: false },
  { src: "/images/gallery/05.png",        alt: "Wagtech Africa Team Members",           category: "Team",           span: false },
  { src: "/images/gallery/06.png",        alt: "Lab Equipment Calibration",             category: "Equipment",      span: false },
  { src: "/images/gallery/07.jpg",        alt: "Training Workshop Session",             category: "Training",       span: true  },
  { src: "/images/gallery/08.png",        alt: "Metalyser Heavy Metals Analyser",       category: "Equipment",      span: false },
  { src: "/images/gallery/09.jpg",        alt: "Weather Station Installation",          category: "Installations",  span: false },
  { src: "/images/gallery/10.jpg",        alt: "Hydrometeorological Station Setup",     category: "Installations",  span: false },
  { src: "/images/gallery/11.png",        alt: "Mobile Laboratory Interior",            category: "Equipment",      span: true  },
  { src: "/images/gallery/12.jpg",        alt: "Field Data Collection Activity",        category: "Projects",       span: false },
  { src: "/images/gallery/13.png",        alt: "Water Quality Probe Deployment",        category: "Installations",  span: false },
  { src: "/images/gallery/14.jpg",        alt: "Government Training Program",           category: "Training",       span: false },
  { src: "/images/gallery/15.jpg",        alt: "Automatic Weather Station Mast",        category: "Installations",  span: false },
  { src: "/images/gallery/16.jpg",        alt: "Laboratory Setup — Mobile Van",         category: "Equipment",      span: false },
  { src: "/images/gallery/17.jpg",        alt: "Field Technician at Work",              category: "Projects",       span: true  },
  { src: "/images/gallery/18.jpg",        alt: "Water Testing in Remote Region",        category: "Projects",       span: false },
  { src: "/images/gallery/19.png",        alt: "Scientific Instrument Panel",           category: "Equipment",      span: false },
  { src: "/images/gallery/20.jpg",        alt: "AWS Sensor Array Installation",         category: "Installations",  span: false },
  { src: "/images/gallery/21.jpg",        alt: "Team Briefing Before Deployment",       category: "Team",           span: false },
  { src: "/images/gallery/22.jpg",        alt: "Community Water Safety Program",        category: "Projects",       span: false },
  { src: "/images/gallery/23.jpg",        alt: "Wagtech Field Engineers — East Africa", category: "Team",           span: true  },
  { src: "/images/gallery/team-field.jpg", alt: "Wagtech Field Team Group Photo",       category: "Team",           span: false },
];

const CATEGORIES = ["All", "Projects", "Installations", "Equipment", "Team", "Training"];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(-1);

  const filtered =
    activeCategory === "All"
      ? ALL_IMAGES
      : ALL_IMAGES.filter((img) => img.category === activeCategory);

  const close = useCallback(() => setSelected(-1), []);
  const prev = useCallback(
    () => setSelected((i) => Math.max(i - 1, 0)),
    []
  );
  const next = useCallback(
    () => setSelected((i) => Math.min(i + 1, filtered.length - 1)),
    [filtered.length]
  );

  useEffect(() => {
    if (selected < 0) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [selected, close, prev, next]);

  /* ── close lightbox if filtered set changes and index is now out of range ── */
  useEffect(() => {
    if (selected >= filtered.length) setSelected(-1);
  }, [filtered.length, selected]);

  const current = selected >= 0 ? filtered[selected] : null;

  return (
    <>
      {/* ── Category Filter ── */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "40px" }}>
        {CATEGORIES.map((cat) => {
          const active = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setSelected(-1); }}
              style={{
                padding: "8px 22px",
                borderRadius: "100px",
                border: active ? "none" : "1px solid #E0E0E0",
                background: active ? "#C41A1A" : "#fff",
                color: active ? "#fff" : "#555",
                fontWeight: active ? 700 : 500,
                fontSize: "13px",
                cursor: "pointer",
                transition: "all 0.18s",
                letterSpacing: "0.02em",
              }}
            >
              {cat}
              {cat === "All" && (
                <span style={{ marginLeft: "6px", fontSize: "11px", opacity: 0.75 }}>
                  {ALL_IMAGES.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Image Grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "14px",
        }}
      >
        {filtered.map((img, idx) => (
          <div
            key={img.src}
            onClick={() => setSelected(idx)}
            style={{
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "zoom-in",
              background: "#E8E8E8",
              aspectRatio: img.span ? "16/9" : "4/3",
              gridColumn: img.span ? "span 2" : undefined,
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              transition: "transform 0.22s, box-shadow 0.22s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.025)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.18)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            {/* Hover overlay */}
            <div
              className="gallery-hover-overlay"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)",
                opacity: 0,
                transition: "opacity 0.22s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "16px",
              }}
            >
              <span
                style={{
                  background: "#C41A1A",
                  color: "#fff",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  display: "inline-block",
                  width: "fit-content",
                  marginBottom: "6px",
                }}
              >
                {img.category}
              </span>
              <p style={{ color: "#fff", fontSize: "13px", fontWeight: 600, lineHeight: 1.3, margin: 0 }}>
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {current && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={close}
        >
          {/* Image wrapper — stop propagation so clicks on the image don't close */}
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "88vh",
              width: "900px",
              height: "600px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="90vw"
              style={{ objectFit: "contain", borderRadius: "6px" }}
              priority
            />

            {/* Caption */}
            <div
              style={{
                position: "absolute",
                bottom: "-44px",
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>
                {current.alt}
              </span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>
                {selected + 1} / {filtered.length}
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={close}
            style={{
              position: "fixed",
              top: "20px",
              right: "24px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "50%",
              width: "42px",
              height: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              fontSize: "20px",
              lineHeight: 1,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#C41A1A")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev arrow */}
          {selected > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              style={{
                position: "fixed",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                fontSize: "22px",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#C41A1A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")}
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          {/* Next arrow */}
          {selected < filtered.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              style={{
                position: "fixed",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                fontSize: "22px",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#C41A1A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")}
              aria-label="Next"
            >
              ›
            </button>
          )}
        </div>
      )}

      <style>{`
        div:hover .gallery-hover-overlay { opacity: 1 !important; }
        @media (max-width: 640px) {
          div[style*="span 2"] { grid-column: span 1 !important; }
        }
      `}</style>
    </>
  );
}
