import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { hydrometProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hydromet & Weather Solutions",
  description: "WMO-compliant automatic weather stations, hydrological monitoring, and flood early warning systems for Africa's meteorological and water agencies.",
};

export default function HydrometPage() {
  const categories = [...new Set(hydrometProducts.map((p) => p.category))];

  return (
    <>
      <PageBanner image="/images/gallery/10.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/solutions" style={{ color: "#C41A1A", fontSize: "13px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10H4M9 5l-5 5 5 5"/></svg>
            Solutions
          </Link>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(196,26,26,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
            <svg width="26" height="26" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="10" cy="10" r="3.5"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.41 1.41M14.37 14.37l1.41 1.41M4.22 15.78l1.41-1.41M14.37 5.63l1.41-1.41"/>
            </svg>
          </div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "720px", marginBottom: "20px" }}>
            Hydromet &amp; Weather Solutions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "560px" }}>
            WMO-compliant automatic weather stations, hydrological monitoring, and flood early warning systems. From community-scale to national meteorological networks.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          {categories.map((cat) => {
            const catProducts = hydrometProducts.filter((p) => p.category === cat);
            return (
              <div key={cat}>
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
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", marginBottom: "16px" }}>
                          {product.features.slice(0, 3).map((f) => (
                            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "#6B7280" }}>
                              <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "rgba(196,26,26,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                                <svg width="7" height="7" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l4.5 4.5L16 6"/></svg>
                              </div>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "14px", borderTop: "1px solid #E5E5E5", alignItems: "center" }}>
                          <Link href={`/products/${product.slug}`}
                            style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 600, padding: "6px 12px", borderRadius: "8px", textDecoration: "none", background: "rgba(196,26,26,0.06)", color: "#C41A1A", border: "1px solid rgba(196,26,26,0.2)" }}>
                            Read More
                            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                          </Link>
                          {product.resources.map((r) => (
                            <a key={r.type} href={r.url} style={{ fontSize: "11px", fontWeight: 600, padding: "6px 12px", borderRadius: "8px", textDecoration: "none", background: r.type === "Brochure" ? "#C41A1A" : "#F8F8F8", color: r.type === "Brochure" ? "#fff" : "#6B7280", border: r.type === "Brochure" ? "none" : "1px solid #E5E5E5" }}>
                              {r.label}
                            </a>
                          ))}
                          <Link href="/contact" style={{ marginLeft: "auto", fontSize: "11px", fontWeight: 600, padding: "6px 12px", borderRadius: "8px", textDecoration: "none", background: "#2C2C2C", color: "#fff" }}>
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
            Build Your Weather Monitoring Network
          </h2>
          <p style={{ color: "#6B7280", marginBottom: "28px", lineHeight: 1.7 }}>
            Our hydromet specialists will assess your requirements and recommend WMO-compliant solutions for your region.
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
