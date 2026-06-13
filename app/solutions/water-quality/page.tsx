import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { waterProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Water Quality Solutions",
  description: "Portable and fixed water quality testing systems, AQUASAFE labs, METALYSER® heavy metals, MAJI multi-parameter probes and DEWMS monitoring platform.",
};

export default function WaterQualityPage() {
  const categories = [...new Set(waterProducts.map((p) => p.category))];

  return (
    <>
      <PageBanner image="/images/gallery/22.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/solutions" style={{ color: "#C41A1A", fontSize: "13px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10H4M9 5l-5 5 5 5"/></svg>
            Solutions
          </Link>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(196,26,26,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
            <svg width="26" height="26" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 3C10 3 4 9.5 4 13.5a6 6 0 0012 0C16 9.5 10 3 10 3z"/>
            </svg>
          </div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "720px", marginBottom: "20px" }}>
            Water Quality Solutions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "560px" }}>
            Comprehensive water quality testing from portable emergency labs to fixed monitoring stations. Covering microbiological safety, physicochemical analysis, heavy metals detection, and real-time monitoring.
          </p>
        </div>
      </PageBanner>

      {/* Category nav */}
      <div style={{ background: "#0D0D0D", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="wrap" style={{ paddingTop: "14px", paddingBottom: "14px", overflowX: "auto" }}>
          <div style={{ display: "flex", gap: "8px", whiteSpace: "nowrap" }}>
            {categories.map((cat) => (
              <a key={cat} href={`#${cat.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", fontWeight: 500, padding: "7px 14px", background: "rgba(255,255,255,0.06)", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)" }}>
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          {categories.map((cat) => {
            const catProducts = waterProducts.filter((p) => p.category === cat);
            const anchorId = cat.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
            return (
              <div key={cat} id={anchorId}>
                <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.4rem", letterSpacing: "-0.02em", paddingBottom: "16px", borderBottom: "1px solid #E5E5E5", marginBottom: "28px" }}>
                  {cat}
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
                  {catProducts.map((product) => (
                    <div key={product.id} className="card-light" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                      <div style={{ height: "3px", background: "linear-gradient(90deg, #C41A1A, #E02020)" }} />
                      {product.image && (
                        <div style={{ height: "180px", background: "#F8F8F8", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", borderBottom: "1px solid #F0F0F0" }}>
                          <Image src={product.image} alt={product.name} width={280} height={160} style={{ objectFit: "contain", maxHeight: "156px" }} />
                        </div>
                      )}
                      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "1rem", lineHeight: 1.35, marginBottom: "10px" }}>
                          {product.name}
                        </h3>
                        <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.75, marginBottom: "14px", flex: 1 }}>{product.description}</p>

                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", marginBottom: "14px" }}>
                          {product.features.slice(0, 3).map((f) => (
                            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "#6B7280" }}>
                              <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "rgba(196,26,26,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                                <svg width="7" height="7" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l4.5 4.5L16 6"/></svg>
                              </div>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                          {product.applications.slice(0, 2).map((app) => (
                            <span key={app} className="tag tag-red" style={{ fontSize: "10px" }}>{app}</span>
                          ))}
                        </div>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "14px", borderTop: "1px solid #E5E5E5", alignItems: "center" }}>
                          <Link href={`/products/${product.slug}`}
                            style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 600, padding: "6px 12px", borderRadius: "8px", textDecoration: "none", background: "rgba(196,26,26,0.06)", color: "#C41A1A", border: "1px solid rgba(196,26,26,0.2)" }}>
                            Read More
                            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                          </Link>
                          {product.resources.map((r) => (
                            <a key={r.type} href={r.url}
                              style={{ fontSize: "11px", fontWeight: 600, padding: "6px 12px", borderRadius: "8px", textDecoration: "none", background: r.type === "Brochure" ? "#C41A1A" : "#F8F8F8", color: r.type === "Brochure" ? "#fff" : "#6B7280", border: r.type === "Brochure" ? "none" : "1px solid #E5E5E5" }}>
                              {r.label}
                            </a>
                          ))}
                          <Link href="/contact"
                            style={{ marginLeft: "auto", fontSize: "11px", fontWeight: 600, padding: "6px 12px", borderRadius: "8px", textDecoration: "none", background: "#0D0D0D", color: "#fff" }}>
                            Request Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ background: "#F8F8F8", padding: "64px 0" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.8rem", letterSpacing: "-0.02em", marginBottom: "12px" }}>
            Need Help Choosing the Right Water Testing System?
          </h2>
          <p style={{ color: "#6B7280", marginBottom: "28px", lineHeight: 1.7 }}>
            Our water quality specialists will assess your application and recommend the most suitable solution.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <Link href="/contact" className="btn-red">Contact Our Team</Link>
            <Link href="/downloads" className="btn-outline-dark">Download Brochures</Link>
          </div>
        </div>
      </section>
    </>
  );
}
