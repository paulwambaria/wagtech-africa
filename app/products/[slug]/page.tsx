import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { waterProducts, agronomyProducts, hydrometProducts, company } from "@/lib/data";

const allProducts = [
  ...waterProducts.map((p) => ({ ...p, _solution: "water-quality", _solutionLabel: "Water Quality",      _banner: "/images/gallery/22.jpg" })),
  ...agronomyProducts.map((p) => ({ ...p, _solution: "agronomy",      _solutionLabel: "Agronomy",          _banner: "/images/gallery/18.jpg" })),
  ...hydrometProducts.map((p) => ({ ...p, _solution: "hydromet",      _solutionLabel: "Hydromet & Weather", _banner: "/images/gallery/10.jpg" })),
];

export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Product | Wagtech Africa" };
  return {
    title: `${product.name} | Wagtech Africa`,
    description: product.shortDesc,
  };
}

export default async function ProductDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  const specs = (product as Record<string, unknown>).specs as Record<string, string> | undefined;

  const waText = encodeURIComponent(
    `Hi Wagtech Africa, I'm interested in the *${product.name}*. Could you please send me more details and a quotation? Thank you.`
  );
  const waUrl = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${waText}`;

  const related = allProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      {/* ── Banner ── */}
      <PageBanner image={product._banner}>
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px", flexWrap: "wrap" }}>
            <Link href="/products" style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 500, textDecoration: "none" }}>Products</Link>
            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 5l5 5-5 5"/></svg>
            <Link href={`/solutions/${product._solution}`} style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 500, textDecoration: "none" }}>{product._solutionLabel}</Link>
            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 5l5 5-5 5"/></svg>
            <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px" }}>{product.name}</span>
          </div>

          <span className="tag tag-red" style={{ marginBottom: "14px", display: "inline-flex" }}>{product.category}</span>
          <h1 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "700px" }}>
            {product.name}
          </h1>
        </div>
      </PageBanner>

      {/* ── Main content ── */}
      <section style={{ background: "#fff", padding: "72px 0" }}>
        <div className="wrap">
          <div className="product-detail-grid">

            {/* ── Left: Image + action panel ── */}
            <div>
              {/* Product image */}
              <div style={{ background: "#F8F8F8", border: "1px solid #EFEFEF", borderRadius: "16px", padding: "40px 32px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", minHeight: "340px" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={380}
                  height={280}
                  style={{ objectFit: "contain", maxHeight: "280px", maxWidth: "100%" }}
                  priority
                />
              </div>

              {/* CTA action panel */}
              <div style={{ border: "1px solid #E5E5E5", borderRadius: "16px", overflow: "hidden" }}>
                <div style={{ background: "#0D0D0D", padding: "18px 22px" }}>
                  <div style={{ color: "#fff", fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 700, fontSize: "0.95rem" }}>
                    Enquire About This Product
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", marginTop: "4px" }}>
                    Our team responds within 24 hours
                  </div>
                </div>
                <div style={{ padding: "18px 22px", display: "flex", flexDirection: "column", gap: "10px", background: "#fff" }}>
                  {/* WhatsApp, primary */}
                  <a href={waUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "#25D366", color: "#fff", fontWeight: 700, fontSize: "0.9rem", padding: "13px 20px", borderRadius: "10px", textDecoration: "none" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px", flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.524 5.845L.053 23.95l6.293-1.449A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.58-.507-5.066-1.39l-.36-.215-3.732.859.878-3.656-.235-.378A9.971 9.971 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>

                  {/* Get a Quote */}
                  <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="btn-red"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px 20px" }}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16v10H4zM4 4l8 6 8-6"/>
                    </svg>
                    Get a Quote
                  </Link>

                  {/* Brochure downloads */}
                  {product.resources.map((r) => (
                    <a key={r.type} href={r.url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#F8F8F8", color: "#0D0D0D", fontWeight: 600, fontSize: "0.875rem", padding: "12px 20px", borderRadius: "10px", textDecoration: "none", border: "1px solid #E5E5E5" }}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 3v10M6 9l4 4 4-4M3 17h14"/>
                      </svg>
                      {r.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Phone alternative */}
              <div style={{ marginTop: "16px", padding: "14px 18px", background: "#F8F8F8", borderRadius: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h4l2 4.5-2.5 1.5a11 11 0 005 5l1.5-2.5L16 13v4a1 1 0 01-1 1C5 18 2 9 2 4a1 1 0 011-1z"/>
                </svg>
                <div>
                  <div style={{ fontSize: "10px", color: "#9CA3AF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Call Us Direct</div>
                  <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} style={{ color: "#0D0D0D", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}>{company.phones[0]}</a>
                </div>
              </div>
            </div>

            {/* ── Right: Product details ── */}
            <div>
              {/* Description */}
              <div style={{ marginBottom: "36px" }}>
                <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.25rem", letterSpacing: "-0.02em", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ width: "4px", height: "20px", background: "#C41A1A", borderRadius: "2px", display: "inline-block", flexShrink: 0 }} />
                  Overview
                </h2>
                <p style={{ color: "#4B5563", lineHeight: 1.85, fontSize: "0.975rem" }}>{product.description}</p>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div style={{ marginBottom: "36px" }}>
                  <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.25rem", letterSpacing: "-0.02em", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "4px", height: "20px", background: "#C41A1A", borderRadius: "2px", display: "inline-block", flexShrink: 0 }} />
                    Key Features
                  </h2>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {product.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 16px", background: "#F9FAFB", borderRadius: "10px", border: "1px solid #F0F0F0" }}>
                        <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(196,26,26,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                          <svg width="9" height="9" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l4.5 4.5L16 6"/></svg>
                        </div>
                        <span style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.65 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specs table (hydromet products) */}
              {specs && Object.keys(specs).length > 0 && (
                <div style={{ marginBottom: "36px" }}>
                  <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.25rem", letterSpacing: "-0.02em", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "4px", height: "20px", background: "#C41A1A", borderRadius: "2px", display: "inline-block", flexShrink: 0 }} />
                    Technical Specifications
                  </h2>
                  <div style={{ border: "1px solid #E5E5E5", borderRadius: "12px", overflow: "hidden" }}>
                    {Object.entries(specs).map(([key, val], i) => (
                      <div key={key} style={{ display: "flex", borderBottom: i < Object.keys(specs).length - 1 ? "1px solid #F0F0F0" : "none" }}>
                        <div style={{ width: "180px", flexShrink: 0, background: "#F8F8F8", padding: "13px 18px", fontWeight: 700, fontSize: "12.5px", color: "#374151" }}>{key}</div>
                        <div style={{ flex: 1, padding: "13px 18px", fontSize: "13px", color: "#0D0D0D", fontWeight: 600 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div style={{ marginBottom: "36px" }}>
                  <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.25rem", letterSpacing: "-0.02em", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "4px", height: "20px", background: "#C41A1A", borderRadius: "2px", display: "inline-block", flexShrink: 0 }} />
                    Applications
                  </h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {product.applications.map((app) => (
                      <span key={app} style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "7px 14px", background: "rgba(196,26,26,0.06)", color: "#C41A1A", border: "1px solid rgba(196,26,26,0.15)", borderRadius: "999px", fontSize: "12.5px", fontWeight: 600 }}>
                        <svg width="8" height="8" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l4.5 4.5L16 6"/></svg>
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Solution link */}
              <div style={{ padding: "20px 24px", background: "#0D0D0D", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Part of our</div>
                  <div style={{ color: "#fff", fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 800, fontSize: "1rem" }}>{product._solutionLabel} Solutions</div>
                </div>
                <Link href={`/solutions/${product._solution}`} className="btn-ghost-white" style={{ fontSize: "13px", padding: "9px 18px" }}>
                  View All {product._solutionLabel}
                  <svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related products ── */}
      {related.length > 0 && (
        <section style={{ background: "#F8F8F8", padding: "64px 0" }}>
          <div className="wrap">
            <div style={{ marginBottom: "36px" }}>
              <div className="eyebrow">More in {product.category}</div>
              <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.6rem", letterSpacing: "-0.02em" }}>
                Related Products
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "16px" }}>
              {related.map((rp) => (
                <div key={rp.id} className="card-light" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ height: "3px", background: "linear-gradient(90deg, #C41A1A, #E02020)" }} />
                  <div style={{ background: "#F8F8F8", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 16px", height: "160px" }}>
                    <Image src={rp.image} alt={rp.name} width={200} height={120} style={{ objectFit: "contain", maxHeight: "120px" }} />
                  </div>
                  <div style={{ padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span className="tag tag-red" style={{ marginBottom: "8px", alignSelf: "flex-start", fontSize: "10px" }}>{rp.category}</span>
                    <h3 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.875rem", lineHeight: 1.35, marginBottom: "8px" }}>{rp.name}</h3>
                    <p style={{ color: "#6B7280", fontSize: "12px", lineHeight: 1.65, flex: 1 }}>{rp.shortDesc}</p>
                    <div style={{ paddingTop: "14px", borderTop: "1px solid #F0F0F0", marginTop: "12px" }}>
                      <Link href={`/products/${rp.slug}`} className="btn-red" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", padding: "8px 16px" }}>
                        Read More
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .product-detail-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .product-detail-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </>
  );
}
