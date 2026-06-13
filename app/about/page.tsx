import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { company, partners, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Wagtech Africa",
  description: "Africa's trusted partner since 1990 for water quality, environmental monitoring, and scientific instrumentation.",
};

const expertiseIcons = [
  { title: "Environmental Sciences", desc: "Environmental monitoring, impact assessment, and ecological research expertise.", path: "M10 2.5C8 5.5 8 14.5 10 17.5M10 2.5C12 5.5 12 14.5 10 17.5M2.5 10h15", circle: true },
  { title: "Analytical Chemistry", desc: "Water quality, heavy metals, and chemical analysis methodologies.", path: "M8 3h4M7 3v6L3 16h14l-4-7V3", circle: false },
  { title: "Seed Technology & Agronomy", desc: "Crop science, soil analysis, and agricultural productivity systems.", path: "M10 17V9M10 9C10 9 5 7 5 3c3 0 5 2 5 6zM10 12C10 12 15 10 15 6c-3 0-5 2-5 6z", circle: false },
  { title: "Civil Engineering", desc: "Water infrastructure, treatment systems, and engineering design.", path: "M3 9l7-7 7 7v9a1 1 0 01-1 1H4a1 1 0 01-1-1z", circle: false },
  { title: "Public Health Engineering", desc: "WASH programs, sanitation systems, and public health water safety.", path: "M10 2l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V5l7-3z", circle: false },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageBanner image="/images/gallery/04.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow">About Wagtech Africa</div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "720px", marginBottom: "20px" }}>
            Africa&apos;s Trusted Scientific Solutions Partner
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "560px" }}>
            From Nairobi to the Nile — delivering precision scientific equipment, monitoring systems, and technical expertise across Africa since 1990.
          </p>
        </div>
      </PageBanner>

      {/* Stats bar */}
      <div style={{ background: "#C41A1A" }}>
        <div className="wrap" style={{ paddingTop: "28px", paddingBottom: "28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "2rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px", marginTop: "6px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Background */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }}>
            <div>
              <div className="eyebrow">Our Story</div>
              <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#0D0D0D", letterSpacing: "-0.03em", marginBottom: "20px" }}>
                The Original Brand Since 1990
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ color: "#6B7280", lineHeight: 1.8 }}>
                  Wagtech Africa is the regional African hub for Wagtech Projects UK — the original brand in portable water quality and environmental monitoring equipment since 1990. We supply affordable, high-quality scientific equipment across water quality, environmental monitoring, agronomy, and laboratory supplies.
                </p>
                <p style={{ color: "#6B7280", lineHeight: 1.8 }}>
                  We have been the major supplier for testing equipment in the humanitarian aid sector and have built an extensive network of clients including government agencies, research institutions, water utilities, NGOs, and commercial operators across more than 20 African countries.
                </p>
                <p style={{ color: "#6B7280", lineHeight: 1.8 }}>
                  Our base in Karen, Nairobi positions us perfectly to serve East Africa and beyond — with regional presence in Kenya, Tanzania, South Sudan, Sudan, Somalia, and Eritrea.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Wagtech UK HQ photo */}
              <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", height: "210px" }}>
                <Image src="/images/gallery/01.png" alt="Wagtech Projects UK headquarters" fill sizes="600px" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "16px", left: "18px" }}>
                  <div style={{ color: "#fff", fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, fontSize: "0.875rem" }}>Wagtech Projects UK</div>
                  <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px" }}>Our parent company — the original brand since 1990</div>
                </div>
              </div>

              {/* 2-photo row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", height: "140px" }}>
                  <Image src="/images/gallery/02.png" alt="Training workshop" fill sizes="280px" style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
                  <div style={{ position: "absolute", bottom: "10px", left: "12px", color: "#fff", fontSize: "11px", fontWeight: 600 }}>Field Training</div>
                </div>
                <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", height: "140px" }}>
                  <Image src="/images/gallery/03.png" alt="AQUASAFE field kit" fill sizes="280px" style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
                  <div style={{ position: "absolute", bottom: "10px", left: "12px", color: "#fff", fontSize: "11px", fontWeight: 600 }}>Field Deployment</div>
                </div>
              </div>

              {/* HQ info card */}
              <div style={{ background: "#C41A1A", borderRadius: "14px", padding: "24px 28px" }}>
                <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#fff", fontSize: "1rem", marginBottom: "10px" }}>Regional Headquarters</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", lineHeight: 1.7, marginBottom: "6px" }}>{company.address}</p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>{company.phones.join(" | ")}</p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>{company.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section" style={{ background: "#F8F8F8" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Technical Expertise</div>
            <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#0D0D0D", letterSpacing: "-0.03em", marginBottom: "14px" }}>
              In-House Scientific Capabilities
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
              Our team provides expert technical support from initial enquiry through to final installation, commissioning, and training — with in-house expertise across five disciplines.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
            {expertiseIcons.map((exp) => (
              <div key={exp.title} className="card-light" style={{ padding: "28px", textAlign: "center" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(196,26,26,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={exp.path} />
                    {exp.circle && <circle cx="10" cy="10" r="7.5" />}
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.875rem", marginBottom: "8px" }}>{exp.title}</h3>
                <p style={{ color: "#6B7280", fontSize: "12px", lineHeight: 1.65 }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field photos strip */}
      <div style={{ display: "flex", height: "180px", overflow: "hidden", gap: "4px" }}>
        {["/images/gallery/21.jpg","/images/gallery/22.jpg","/images/gallery/10.jpg","/images/gallery/18.jpg","/images/gallery/20.jpg","/images/gallery/04.jpg"].map((src, i) => (
          <div key={i} style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <Image src={src} alt="Field work" fill sizes="17vw" style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
          </div>
        ))}
      </div>

      {/* Services */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>What We Offer</div>
            <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#0D0D0D", letterSpacing: "-0.03em" }}>
              Complete Service Package
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { title: "Freight & Logistics", desc: "Expert handling of international freight and customs clearance for scientific equipment across African borders.", iconPath: "M1 5h12v9H1zM13 8h4l2 4v2h-6V8z" },
              { title: "Installation & Commissioning", desc: "Professional on-site installation and commissioning by certified engineers across the region.", iconPath: "M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.41 1.41M14.37 14.37l1.41 1.41" },
              { title: "Training Programs", desc: "Hands-on training for operators, technicians, and managers on all equipment types.", iconPath: "M2 3h16v10H2zM2 13l8 5 8-5" },
              { title: "Technical Support", desc: "Ongoing technical assistance from our expert team — phone, email, and on-site visits.", iconPath: "M4 3h3l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L12.5 11 16 12.5V16a1 1 0 01-1 1C6 17 3 8 3 4a1 1 0 011-1z" },
              { title: "Calibration & Maintenance", desc: "Regular calibration, preventive maintenance, and reagent supply services.", iconPath: "M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.41 1.41M14.37 14.37l1.41 1.41" },
              { title: "Tender Implementation", desc: "Extensive experience implementing government and NGO tender contracts across Africa.", iconPath: "M12 2H5a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 005 18h10a1.5 1.5 0 001.5-1.5V6L12 2z" },
            ].map((svc) => (
              <div key={svc.title} style={{ display: "flex", gap: "16px", background: "#F8F8F8", borderRadius: "14px", padding: "24px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(196,26,26,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={svc.iconPath} />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.925rem", marginBottom: "8px" }}>{svc.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="section" style={{ background: "#111111" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Regional Presence</div>
            <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: "14px" }}>
              Serving Africa&apos;s Scientific Needs
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: "540px", margin: "0 auto", lineHeight: 1.7 }}>
              Operating from our Nairobi headquarters with a network of regional offices and representatives across East and Northeast Africa.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {company.regions.map((region) => (
              <div key={region} className="card-dark" style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: "rgba(196,26,26,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2a5 5 0 00-5 5c0 4 5 10 5 10s5-6 5-10a5 5 0 00-5-5z"/>
                    <circle cx="10" cy="7" r="1.5" fill="#C41A1A"/>
                  </svg>
                </div>
                <span style={{ color: "#fff", fontWeight: 500, fontSize: "14px" }}>{region}</span>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: "13px", marginTop: "28px" }}>
            With an extensive network of local Wagtech subsidiaries and representatives trained in our full product range.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Our Partners</div>
            <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#0D0D0D", letterSpacing: "-0.03em" }}>
              Built on Strong Partnerships
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {partners.map((p) => (
              <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer"
                className="card-light"
                style={{ padding: "0", textDecoration: "none", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                {/* Logo display area */}
                <div style={{ height: "120px", background: "#FAFAFA", borderBottom: "1px solid #F0F0F0", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 32px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt={`${p.name} logo`} style={{ maxHeight: "80px", maxWidth: "220px", objectFit: "contain" }} />
                </div>
                {/* Content */}
                <div style={{ padding: "24px 28px", flex: 1 }}>
                  <div className="eyebrow" style={{ marginBottom: "8px" }}>{p.relationship}</div>
                  <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 800, color: "#0D0D0D", fontSize: "1.05rem", marginBottom: "10px" }}>{p.name}</h3>
                  <p style={{ color: "#6B7280", fontSize: "13.5px", lineHeight: 1.7, marginBottom: "16px" }}>{p.description}</p>
                  <span style={{ color: "#C41A1A", fontSize: "13px", fontWeight: 600 }}>Visit Website →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#C41A1A", padding: "80px 0" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Work With Wagtech Africa
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "36px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
            Get expert guidance on the right scientific equipment and monitoring solutions for your project.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#C41A1A", fontWeight: 700, padding: "14px 28px", borderRadius: "10px", textDecoration: "none", fontSize: "14px" }}>
              Contact Us Today
            </Link>
            <Link href="/training-support" className="btn-ghost-white" style={{ padding: "14px 28px" }}>
              Training & Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
