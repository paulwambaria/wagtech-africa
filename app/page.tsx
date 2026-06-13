import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import { solutions, stats, news, events, partners } from "@/lib/data";

/* Gallery image assigned to each solution tile */
const solutionImages: Record<string, string> = {
  "water-quality":        "/images/gallery/22.jpg",
  "agronomy":             "/images/gallery/18.jpg",
  "hydromet":             "/images/gallery/10.jpg",
  "environmental":        "/images/gallery/04.jpg",
  "mobile-laboratories":  "/images/gallery/21.jpg",
  "trace2o":              "/images/gallery/07.jpg",
  "laboratory-equipment": "/images/gallery/20.jpg",
  "water-purification":   "/images/gallery/16.jpg",
};

/* Flagship products with real images */
const featured = [
  {
    slug: "aquasafe-wsl25-plus",
    name: "AQUASAFE WSL25+",
    category: "Water Safety Laboratory",
    img: "/images/products/wsl25plus.png",
    specs: ["IP68 Waterproof", "170W Battery", "PetriLok® Tech"],
    desc: "Next-generation portable water safety laboratory. Tests microbiological & physicochemical parameters in one field-ready kit.",
  },
  {
    slug: "metalyser-hm3000",
    name: "METALYSER® HM3000",
    category: "Heavy Metals Analysis",
    img: "/images/products/hm3000.png",
    specs: ["16 Parameters", "1ppb Detection", "Waterproof Tablet"],
    desc: "Professional heavy metals analyser with 10-inch waterproof tablet PC. Detects lead, arsenic, mercury and 13 more at field level.",
  },
  {
    slug: "tm100",
    name: "METEOROLOGICAL STATION TM100",
    category: "Hydromet & Weather",
    img: "/images/products/tm100.jpg",
    specs: ["WMO Compliant", "10m Mast", "7 Parameters"],
    desc: "Premium WMO-compliant automatic weather station with no moving parts — ideal for national meteorological networks.",
  },
  {
    slug: "maji-stat",
    name: "MAJI-STAT",
    category: "Fixed Site Monitoring",
    img: "/images/products/maji-stat.jpg",
    specs: ["16 Parameters", "Solar Powered", "Cloud Data Hub"],
    desc: "Solar-powered fixed water quality monitoring station for up to 16 simultaneous parameters with real-time telemetry.",
  },
  {
    slug: "dewms",
    name: "DEWMS",
    category: "Early Warning System",
    img: "/images/products/dewms.jpg",
    specs: ["Cloud Platform", "Real-time Alerts", "Data Visualisation"],
    desc: "Cloud-based Data Early Warning Management System for flood monitoring and water quality surveillance.",
  },
  {
    slug: "arsenometer-hmas100",
    name: "ARSENOMETER HMAS100",
    category: "Arsenic Testing",
    img: "/images/products/arsenometer.png",
    specs: ["0–500 μg/L Range", "1ppb Sensitivity", "Battery Powered"],
    desc: "Portable arsenic field analyser using electrochemical stripping technique. Fast, accurate, no mercury required.",
  },
];

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "18px", height: "18px" }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.524 5.845L.053 23.95l6.293-1.449A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.58-.507-5.066-1.39l-.36-.215-3.732.859.878-3.656-.235-.378A9.971 9.971 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO SLIDER ── */}
      <HeroSlider />

      {/* ── 2. STATS RIBBON ── */}
      <div style={{ background: "#C41A1A" }}>
        <div className="wrap" style={{ paddingTop: "0", paddingBottom: "0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                textAlign: "center", padding: "28px 20px",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.18)" : "none",
              }}>
                <div style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "11px", marginTop: "6px", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. SOLUTIONS — photo tile grid ── */}
      <section style={{ background: "#F8F8F8", padding: "88px 0" }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div className="eyebrow">Our Expertise</div>
              <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#0D0D0D", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Complete Scientific<br />Solutions for Africa
              </h2>
            </div>
            <p style={{ color: "#6B7280", maxWidth: "340px", lineHeight: 1.7, fontSize: "0.9rem" }}>
              Eight specialised domains — from portable field labs to cloud-based early warning networks.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "10px" }}>
            {solutions.map((sol) => (
              <Link key={sol.id} href={`/solutions/${sol.slug}`}
                style={{ display: "block", position: "relative", borderRadius: "14px", overflow: "hidden", height: "290px", textDecoration: "none" }}
                className="sol-tile">
                <Image
                  src={solutionImages[sol.slug] ?? "/images/gallery/10.jpg"}
                  alt={sol.title}
                  fill
                  sizes="(max-width:600px) 100vw, 280px"
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="sol-tile-img"
                />
                {/* Overlay gradient */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)" }} />
                {/* Red line top */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,#C41A1A,transparent)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "22px 20px" }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", color: "#E02020", textTransform: "uppercase", marginBottom: "7px" }}>
                    {sol.productCount}+ products
                  </div>
                  <div style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 800, color: "#fff", fontSize: "1.05rem", lineHeight: 1.2, marginBottom: "8px" }}>
                    {sol.title}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px", lineHeight: 1.55, marginBottom: "14px" }}>{sol.shortDesc}</div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 700, color: "#C41A1A" }}>
                    Explore
                    <svg width="11" height="11" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT — split with photo collage ── */}
      <section style={{ background: "#fff", padding: "96px 0", overflow: "hidden" }}>
        <div className="wrap">
          <div className="about-grid">
            {/* Left: content */}
            <div>
              <div className="eyebrow">About Wagtech Africa</div>
              <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 900, color: "#0D0D0D", letterSpacing: "-0.03em", lineHeight: 1.12, marginBottom: "24px" }}>
                Africa&apos;s Scientific<br />Solutions Partner<br />
                <span className="text-gradient">Since 1990</span>
              </h2>
              <p style={{ color: "#6B7280", lineHeight: 1.85, marginBottom: "16px", fontSize: "0.975rem" }}>
                Wagtech Africa is the regional hub for Wagtech Projects UK — supplying affordable, high-quality scientific equipment and systems across water quality, environmental monitoring, agronomy, and laboratory science.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.85, marginBottom: "40px", fontSize: "0.975rem" }}>
                Our expertise spans Environmental Sciences, Analytical Chemistry, Agronomy, and Civil &amp; Public Health Engineering — supporting clients from initial enquiry through installation, training, and long-term support.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
                {[
                  { n: "20+", label: "African countries served" },
                  { n: "500+", label: "Projects completed across Africa" },
                  { n: "30+", label: "Years of field experience" },
                  { n: "1000+", label: "Products available in our catalogue" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 18px", background: "#F8F8F8", borderRadius: "10px", borderLeft: "3px solid #C41A1A" }}>
                    <span style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 900, fontSize: "1.3rem", color: "#C41A1A", minWidth: "52px" }}>{item.n}</span>
                    <span style={{ color: "#374151", fontSize: "0.875rem", fontWeight: 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/about" className="btn-red">
                  Our Story
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                </Link>
                <Link href="/contact" className="btn-outline-dark">Get in Touch</Link>
              </div>
            </div>

            {/* Right: photo collage */}
            <div style={{ display: "grid", gridTemplateRows: "230px 180px", gap: "10px" }}>
              <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
                <Image src="/images/gallery/21.jpg" alt="Wagtech mobile lab deployment" fill sizes="600px" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: "14px", left: "14px", background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)", borderRadius: "8px", padding: "8px 14px" }}>
                  <div style={{ color: "#fff", fontSize: "12px", fontWeight: 700 }}>Mobile Lab Deployment</div>
                  <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "10px" }}>Field teams across East Africa</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden" }}>
                  <Image src="/images/gallery/20.jpg" alt="Mobile laboratory interior" fill sizes="280px" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden" }}>
                  <Image src="/images/gallery/22.jpg" alt="Field water quality testing" fill sizes="280px" style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(196,26,26,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ color: "#fff", fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 900, fontSize: "1.5rem" }}>30+</div>
                      <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "11px", fontWeight: 600 }}>Years in Africa</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. GALLERY STRIP ── */}
      <div style={{ background: "#0D0D0D", padding: "10px 0" }}>
        <div style={{ display: "flex", gap: "6px", height: "200px", overflow: "hidden" }}>
          {["/images/gallery/10.jpg","/images/gallery/18.jpg","/images/gallery/21.jpg","/images/gallery/04.jpg","/images/gallery/07.jpg"].map((src, i) => (
            <div key={i} style={{ flex: 1, position: "relative", overflow: "hidden" }} className="strip-photo">
              <Image src={src} alt="Field deployment" fill sizes="20vw" style={{ objectFit: "cover", transition: "transform 0.6s ease" }} className="strip-img" />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)" }} />
            </div>
          ))}
        </div>
        <div className="wrap" style={{ paddingTop: "18px", paddingBottom: "18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Trusted deployments across 20+ African countries</span>
          <Link href="/projects" style={{ color: "#C41A1A", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>View Projects →</Link>
        </div>
      </div>

      {/* ── 6. FEATURED PRODUCTS ── */}
      <section style={{ background: "#F8F8F8", padding: "88px 0" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Featured Products</div>
            <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 900, color: "#0D0D0D", letterSpacing: "-0.03em", marginBottom: "14px" }}>
              World-Class Scientific Instruments
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Trusted by governments, NGOs, utilities and researchers across Africa — from portable emergency kits to research-grade systems.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "18px" }}>
            {featured.map((p) => (
              <div key={p.slug} className="card-light" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "3px", background: "linear-gradient(90deg,#C41A1A,#E02020)" }} />
                {/* Product image */}
                <div style={{ background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 20px", height: "190px", borderBottom: "1px solid #F0F0F0" }}>
                  <Image src={p.img} alt={p.name} width={220} height={150} style={{ objectFit: "contain", maxHeight: "150px" }} />
                </div>
                <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span className="tag tag-red" style={{ marginBottom: "10px", alignSelf: "flex-start" }}>{p.category}</span>
                  <h3 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 800, fontSize: "0.95rem", color: "#0D0D0D", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                    {p.name}
                  </h3>
                  <p style={{ color: "#6B7280", fontSize: "0.825rem", lineHeight: 1.7, marginBottom: "14px", flex: 1 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "16px" }}>
                    {p.specs.map((s) => (
                      <span key={s} style={{ fontSize: "10px", fontWeight: 700, padding: "3px 9px", borderRadius: "999px", background: "rgba(196,26,26,0.07)", color: "#C41A1A", border: "1px solid rgba(196,26,26,0.15)" }}>{s}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "8px", paddingTop: "14px", borderTop: "1px solid #F0F0F0" }}>
                    <Link href={`/products/${p.slug}`} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", fontSize: "12px", fontWeight: 600, color: "#C41A1A", textDecoration: "none", padding: "8px", borderRadius: "8px", border: "1px solid rgba(196,26,26,0.2)", background: "rgba(196,26,26,0.04)" }}>
                      Read More
                    </Link>
                    <Link href="/contact" className="btn-red" style={{ fontSize: "12px", padding: "8px 16px" }}>
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "44px" }}>
            <Link href="/products" className="btn-red" style={{ padding: "14px 28px" }}>
              Browse Full Catalogue
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. INDUSTRIES — dark with background photo ── */}
      <section style={{ background: "#0D0D0D", padding: "88px 0", position: "relative", overflow: "hidden" }}>
        {/* Faint background photo */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <Image src="/images/gallery/07.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.08 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(123,21,21,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Industries We Serve</div>
            <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em" }}>
              Solutions for Every Sector
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: "10px" }}>
            {[
              { img: "/images/gallery/22.jpg", title: "Water Utilities",       desc: "Quality monitoring for municipal supply authorities" },
              { img: "/images/gallery/21.jpg", title: "Humanitarian Aid",      desc: "Emergency labs and rapid-deployment systems for NGOs" },
              { img: "/images/gallery/18.jpg", title: "Agriculture",           desc: "Soil, weather, and water monitoring for farming programs" },
              { img: "/images/gallery/04.jpg", title: "Government",            desc: "National monitoring networks and compliance equipment" },
              { img: "/images/gallery/10.jpg", title: "Research & Academia",   desc: "Research-grade instruments for universities and institutes" },
              { img: "/images/gallery/20.jpg", title: "Mining & Industry",     desc: "Heavy metals analysis and environmental compliance" },
              { img: "/images/gallery/07.jpg", title: "Public Health",         desc: "Water safety testing for health agencies and ministries" },
              { img: "/images/gallery/22.jpg", title: "Meteorology",           desc: "WMO-compliant weather stations for met agencies" },
            ].map((ind) => (
              <div key={ind.title} style={{ position: "relative", borderRadius: "12px", overflow: "hidden", height: "170px" }} className="ind-card">
                <Image src={ind.img} alt={ind.title} fill sizes="250px" style={{ objectFit: "cover", transition: "transform 0.5s ease" }} className="ind-img" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: 0, padding: "14px 16px" }}>
                  <div style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 700, color: "#fff", fontSize: "0.875rem", marginBottom: "4px" }}>{ind.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "11px", lineHeight: 1.5 }}>{ind.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/industries" className="btn-ghost-white" style={{ padding: "13px 26px" }}>
              Explore All Industries
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. PARTNERS ── */}
      <section style={{ background: "#fff", padding: "72px 0", borderTop: "1px solid #E5E5E5" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Our Partners</div>
            <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 900, color: "#0D0D0D", letterSpacing: "-0.03em" }}>
              Built on Trusted Partnerships
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "20px" }}>
            {partners.map((p) => (
              <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer"
                className="card-light"
                style={{ padding: "0", textDecoration: "none", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                {/* Logo display area */}
                <div style={{ height: "110px", background: "#FAFAFA", borderBottom: "1px solid #F0F0F0", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 28px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt={`${p.name} logo`} style={{ maxHeight: "72px", maxWidth: "200px", objectFit: "contain" }} />
                </div>
                {/* Content */}
                <div style={{ padding: "20px 24px", flex: 1 }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#C41A1A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{p.relationship}</div>
                  <h3 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 800, color: "#0D0D0D", fontSize: "1rem", marginBottom: "8px" }}>{p.name}</h3>
                  <p style={{ color: "#6B7280", fontSize: "0.8rem", lineHeight: 1.65, marginBottom: "14px" }}>{p.description}</p>
                  <span style={{ color: "#C41A1A", fontSize: "12px", fontWeight: 700 }}>Visit Website →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. NEWS — featured article layout ── */}
      <section style={{ background: "#F8F8F8", padding: "88px 0" }}>
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <div className="eyebrow">Latest Updates</div>
              <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, color: "#0D0D0D", letterSpacing: "-0.03em" }}>
                News &amp; Projects
              </h2>
            </div>
            <Link href="/blog" style={{ color: "#C41A1A", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>View All Articles →</Link>
          </div>

          <div className="news-grid">
            {/* Featured article */}
            {news[0] && (
              <Link href={`/blog/${news[0].slug}`} style={{ display: "block", textDecoration: "none", position: "relative", borderRadius: "16px", overflow: "hidden", height: "100%" }} className="featured-article">
                <Image src="/images/gallery/10.jpg" alt={news[0].title} fill sizes="700px" style={{ objectFit: "cover", transition: "transform 0.6s ease" }} className="featured-img" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.05) 100%)" }} />
                <div style={{ position: "absolute", top: "20px", left: "20px" }}>
                  <span className="tag tag-red">{news[0].category}</span>
                </div>
                <div style={{ position: "absolute", bottom: 0, padding: "28px" }}>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", marginBottom: "10px" }}>{news[0].date}</div>
                  <h3 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 800, color: "#fff", fontSize: "clamp(1.1rem,2vw,1.5rem)", lineHeight: 1.25, marginBottom: "12px" }}>
                    {news[0].title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {news[0].excerpt}
                  </p>
                  <div style={{ marginTop: "18px", display: "inline-flex", alignItems: "center", gap: "6px", color: "#E02020", fontSize: "12px", fontWeight: 700 }}>
                    Read Article
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                  </div>
                </div>
              </Link>
            )}

            {/* Side articles */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {news.slice(1, 4).map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`} className="card-light" style={{ display: "flex", gap: "16px", padding: "18px 20px", textDecoration: "none", alignItems: "flex-start" }}>
                  <div style={{ width: "70px", height: "70px", borderRadius: "10px", background: "#E5E5E5", flexShrink: 0, position: "relative", overflow: "hidden" }}>
                    <Image src={article.image ?? "/images/gallery/18.jpg"} alt="" fill sizes="70px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span className="tag tag-red" style={{ fontSize: "9px" }}>{article.category}</span>
                      <span style={{ color: "#9CA3AF", fontSize: "10px" }}>{article.date}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.875rem", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}

              {/* Events card */}
              {events[0] && (
                <div style={{ padding: "18px 20px", borderRadius: "14px", background: "#0D0D0D", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#C41A1A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>Upcoming Event</div>
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "44px", height: "44px", background: "#C41A1A", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="16" height="15" rx="1.5"/><path d="M2 8h16M6 1v4M14 1v4"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ color: "#fff", fontSize: "11px", fontWeight: 700, marginBottom: "3px" }}>{events[0].date}</p>
                      <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.35, marginBottom: "3px" }}>{events[0].title}</p>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{events[0].location}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. CTA — photo background ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 0" }}>
        <Image src="/images/gallery/10.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.78)" }} />
        <div className="grid-texture" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(123,21,21,0.45) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div className="wrap" style={{ position: "relative", textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "20px" }}>Get in Touch</div>
          <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "18px", maxWidth: "680px", marginLeft: "auto", marginRight: "auto" }}>
            Ready to Transform Your{" "}
            <span className="text-gradient">Scientific Capabilities?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "1.05rem", lineHeight: 1.78, marginBottom: "44px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            Talk to our experts in environmental sciences, analytical chemistry, and agronomy. We&apos;ll recommend the right solution for your needs and budget.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <Link href="/contact" className="btn-red" style={{ padding: "14px 28px" }}>
              Contact Our Team
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
            </Link>
            <Link href="/downloads" className="btn-ghost-white" style={{ padding: "14px 28px" }}>
              Download Catalogue
            </Link>
            <a href="https://wa.me/254720763839" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "#25D366", color: "#fff", fontWeight: 600, fontSize: "0.9rem", padding: "14px 28px", borderRadius: "10px", textDecoration: "none" }}>
              {WA_ICON}
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Hover effects for image tiles */}
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; }
        }
        .news-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 20px;
          min-height: 420px;
        }
        @media (max-width: 820px) {
          .news-grid { grid-template-columns: 1fr; }
          .featured-article { min-height: 320px; }
        }
        .sol-tile:hover .sol-tile-img { transform: scale(1.06); }
        .ind-card:hover .ind-img { transform: scale(1.06); }
        .strip-photo:hover .strip-img { transform: scale(1.08); }
        .featured-article:hover .featured-img { transform: scale(1.04); }
      `}</style>
    </>
  );
}
