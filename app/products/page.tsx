import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { waterProducts, agronomyProducts, hydrometProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products | Wagtech Africa",
  description: "Browse Wagtech Africa's complete product catalogue: water quality systems, heavy metals analyzers, weather stations, agronomy monitoring, and more.",
};

const allSections = [
  {
    id: "water-quality",
    label: "Water Quality",
    slug: "water-quality",
    products: waterProducts,
    image: "/images/gallery/22.jpg",
    desc: "Portable labs, heavy metals analyzers, multi-parameter probes, and fixed monitoring systems.",
  },
  {
    id: "agronomy",
    label: "Agronomy",
    slug: "agronomy",
    products: agronomyProducts,
    image: "/images/gallery/18.jpg",
    desc: "Agrometeorological stations, soil monitoring, and crop analysis systems.",
  },
  {
    id: "hydromet",
    label: "Hydromet & Weather",
    slug: "hydromet",
    products: hydrometProducts,
    image: "/images/gallery/10.jpg",
    desc: "WMO-compliant automatic weather stations, hydrometeorological monitoring, and flood warning.",
  },
];

// Categories not in data arrays, shown as tile links only
const moreSolutions = [
  { label: "Environmental Monitoring", slug: "environmental",     image: "/images/gallery/04.jpg", desc: "Air, water, and soil environmental analysis." },
  { label: "Mobile Laboratories",      slug: "mobile-laboratories", image: "/images/gallery/21.jpg", desc: "Self-contained labs deployable anywhere." },
  { label: "Trace2O",                  slug: "trace2o",             image: "/images/gallery/18.jpg", desc: "Global analytical and monitoring solutions." },
  { label: "Laboratory Equipment",     slug: "laboratory-equipment", image: "/images/gallery/07.jpg", desc: "40,000+ products for every lab need." },
  { label: "Water Purification",       slug: "water-purification",  image: "/images/gallery/22.jpg", desc: "Sanitisation and purification systems." },
];

export default function ProductsPage() {
  return (
    <>
      <PageBanner image="/images/gallery/07.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Product Catalogue</div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "16px" }}>
            World-Class Scientific Instruments
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "580px", marginLeft: "auto", marginRight: "auto" }}>
            Over 1,000 products across water quality, environmental monitoring, agronomy, hydromet, and laboratory science, trusted by governments, NGOs, and researchers across Africa.
          </p>
        </div>
      </PageBanner>

      {/* ── Category tiles grid (original-site style) ── */}
      <section style={{ background: "#F8F8F8", padding: "64px 0 56px" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Browse by Category</div>
            <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", letterSpacing: "-0.03em" }}>
              Our Product Categories
            </h2>
          </div>

          <div className="prod-cat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
            {[...allSections, ...moreSolutions].map((cat) => (
              <Link key={cat.slug} href={`/solutions/${cat.slug}`}
                style={{ display: "block", position: "relative", borderRadius: "14px", overflow: "hidden", textDecoration: "none", height: "220px" }}>
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width: 600px) 100vw, 280px"
                  style={{ objectFit: "cover" }}
                />
                {/* Gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)" }} />
                {/* Red top accent line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #800000, #950000)" }} />
                {/* Content */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 20px 18px" }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", color: "#950000", textTransform: "uppercase", marginBottom: "6px" }}>Solutions</div>
                  <div style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 800, color: "#fff", fontSize: "1rem", lineHeight: 1.2, marginBottom: "6px" }}>{cat.label}</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", lineHeight: 1.5 }}>{cat.desc}</div>
                </div>
                {/* Hover arrow */}
                <div style={{ position: "absolute", top: "16px", right: "16px", width: "30px", height: "30px", borderRadius: "50%", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detailed product listings with images ── */}
      {allSections.map((section) => {
        const categories = [...new Set(section.products.map((p) => p.category))];
        return (
          <section key={section.id} id={section.id} style={{ background: section.id === "agronomy" ? "#F8F8F8" : "#fff", padding: "72px 0" }}>
            <div className="wrap">
              {/* Section header with photo strip */}
              <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden", marginBottom: "48px", height: "160px" }}>
                <Image src={section.image} alt={section.label} fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 100%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", color: "#950000", textTransform: "uppercase", marginBottom: "6px" }}>
                      {section.products.length} Products
                    </div>
                    <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#fff", fontSize: "1.6rem", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                      {section.label}
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginTop: "4px" }}>{section.desc}</p>
                  </div>
                  <Link href={`/solutions/${section.slug}`} className="btn-red" style={{ fontSize: "12px", padding: "9px 18px", flexShrink: 0 }}>
                    Full Details
                    <svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                  </Link>
                </div>
              </div>

              {/* Sub-categories */}
              {categories.map((cat) => {
                const catProducts = section.products.filter((p) => p.category === cat);
                return (
                  <div key={cat} style={{ marginBottom: "48px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid #E5E5E5" }}>
                      <div style={{ width: "4px", height: "20px", background: "#800000", borderRadius: "2px", flexShrink: 0 }} />
                      <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 800, color: "#0D0D0D", fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                        {cat}
                      </h3>
                      <span style={{ color: "#9CA3AF", fontSize: "12px", marginLeft: "auto" }}>{catProducts.length} products</span>
                    </div>

                    <div className="prod-items-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "16px" }}>
                      {catProducts.map((product) => (
                        <div key={product.id} className="card-light" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                          {/* Red accent top */}
                          <div style={{ height: "3px", background: "linear-gradient(90deg, #800000, #950000)", flexShrink: 0 }} />

                          {/* Product image zone */}
                          {product.image && (
                            <div style={{ background: "#F8F8F8", borderBottom: "1px solid #F0F0F0", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 16px", height: "190px", flexShrink: 0 }}>
                              <Image
                                src={product.image}
                                alt={product.name}
                                width={240}
                                height={150}
                                style={{ objectFit: "contain", maxHeight: "150px", maxWidth: "100%" }}
                              />
                            </div>
                          )}

                          {/* Content */}
                          <div style={{ padding: "20px 20px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
                            <span className="tag tag-red" style={{ marginBottom: "10px", alignSelf: "flex-start", fontSize: "10px" }}>
                              {product.category}
                            </span>
                            <h4 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.9rem", lineHeight: 1.35, marginBottom: "8px" }}>
                              {product.name}
                            </h4>
                            <p style={{ color: "#6B7280", fontSize: "12.5px", lineHeight: 1.7, marginBottom: "14px", flex: 1 }}>
                              {product.shortDesc}
                            </p>

                            {/* Key features preview */}
                            {product.features && product.features.length > 0 && (
                              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "5px", marginBottom: "14px" }}>
                                {product.features.slice(0, 2).map((f) => (
                                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "7px", fontSize: "11.5px", color: "#6B7280" }}>
                                    <div style={{ width: "13px", height: "13px", borderRadius: "50%", background: "rgba(128,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                                      <svg width="6" height="6" viewBox="0 0 20 20" fill="none" stroke="#800000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l4.5 4.5L16 6"/></svg>
                                    </div>
                                    <span>{f}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* CTAs */}
                            <div style={{ display: "flex", gap: "8px", alignItems: "center", paddingTop: "12px", borderTop: "1px solid #F0F0F0", flexWrap: "wrap" }}>
                              <Link href={`/products/${product.slug}`}
                                style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 600, color: "#800000", textDecoration: "none", padding: "6px 10px", borderRadius: "7px", border: "1px solid rgba(128,0,0,0.25)", background: "rgba(128,0,0,0.05)" }}>
                                Read More
                                <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                              </Link>
                              <Link href="/contact" className="btn-red" style={{ marginLeft: "auto", fontSize: "11px", padding: "6px 14px" }}>
                                Get Quote
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
        );
      })}

      <style>{`
        @media (max-width: 768px) {
          .prod-cat-grid { grid-template-columns: 1fr 1fr !important; }
          .prod-items-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .prod-cat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Bottom CTA ── */}
      <section style={{ background: "#2C2C2C", padding: "72px 0" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Need Assistance?</div>
          <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#fff", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", letterSpacing: "-0.03em", marginBottom: "14px" }}>
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "32px", lineHeight: 1.75, maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            Our team can source virtually any scientific instrument or laboratory equipment. Send us your specifications.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <Link href="/contact" className="btn-red" style={{ padding: "13px 26px" }}>
              Send Enquiry
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
            </Link>
            <Link href="/downloads" className="btn-ghost-white" style={{ padding: "13px 26px" }}>
              Download Full Catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
