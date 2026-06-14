import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { solutions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore Wagtech Africa's complete range of scientific solutions: water quality, agronomy, hydromet, environmental monitoring, mobile labs and more.",
};

const solutionIconPaths: Record<string, string> = {
  "water-quality": "M10 3C10 3 4 9.5 4 13.5a6 6 0 0012 0C16 9.5 10 3 10 3z",
  "agronomy": "M10 17V9M10 9C10 9 5 7 5 3c3 0 5 2 5 6zM10 12C10 12 15 10 15 6c-3 0-5 2-5 6z",
  "hydromet": "M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.41 1.41M14.37 14.37l1.41 1.41M4.22 15.78l1.41-1.41M14.37 5.63l1.41-1.41",
  "environmental": "M10 2.5C8 5.5 8 14.5 10 17.5M10 2.5C12 5.5 12 14.5 10 17.5M2.5 10h15",
  "mobile-laboratories": "M4 6h12v8H4zM7 6V4M13 6V4M7 10h2M7 13h5",
  "trace2o": "M10 3v10M6 9l4 4 4-4M3 15h14",
  "laboratory-equipment": "M8 3h4M7 3v6L3 16h14l-4-7V3",
  "water-purification": "M4 8h12l-2 8H6L4 8zM4 8l1.5-3h9L16 8",
};

export default function SolutionsPage() {
  return (
    <>
      <PageBanner image="/images/gallery/10.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Our Expertise</div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
            Complete Scientific Solutions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
            Eight specialized domains covering every aspect of water quality, environmental monitoring, agronomy, and laboratory science across Africa.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="sol-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {solutions.map((sol) => (
              <Link key={sol.id} href={`/solutions/${sol.slug}`} className="card-light" style={{ padding: "32px", display: "block", textDecoration: "none" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(196,26,26,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={solutionIconPaths[sol.slug] ?? "M10 10m-6 0a6 6 0 1012 0 6 6 0 01-12 0"} />
                    {sol.slug === "hydromet" && <circle cx="10" cy="10" r="3.5" />}
                    {sol.slug === "environmental" && <circle cx="10" cy="10" r="7.5" />}
                  </svg>
                </div>
                <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "1.1rem", marginBottom: "10px", letterSpacing: "-0.01em" }}>
                  {sol.title}
                </h2>
                <p style={{ color: "#6B7280", fontSize: "13.5px", lineHeight: 1.7, marginBottom: "20px" }}>{sol.description}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "11px", color: "#9CA3AF" }}>{sol.productCount}+ Products</span>
                  <span style={{ color: "#C41A1A", fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solution photo showcase strip */}
      <div style={{ display: "flex", height: "180px", overflow: "hidden", gap: "4px" }}>
        {["/images/gallery/22.jpg","/images/gallery/10.jpg","/images/gallery/21.jpg","/images/gallery/18.jpg","/images/gallery/04.jpg"].map((src, i) => (
          <div key={i} style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <Image src={src} alt="Solution showcase" fill sizes="20vw" style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
          </div>
        ))}
      </div>

      <section style={{ background: "#C41A1A", padding: "80px 0" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#fff", fontSize: "clamp(2rem, 4vw, 2.8rem)", letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Not Sure Which Solution You Need?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "36px" }}>
            Our technical team will assess your requirements and recommend the ideal solution.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#C41A1A", fontWeight: 700, padding: "14px 32px", borderRadius: "10px", textDecoration: "none", fontSize: "15px" }}>
            Talk to an Expert
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sol-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
