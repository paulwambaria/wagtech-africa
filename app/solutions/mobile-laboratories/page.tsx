import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mobile Laboratories",
  description: "Self-contained mobile laboratory systems for water quality, environmental testing, and scientific analysis — deployable to any location in Africa.",
};

export default function MobileLaboratoriesPage() {
  return (
    <>
      <PageBanner image="/images/gallery/21.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/solutions" style={{ color: "#C41A1A", fontSize: "13px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10H4M9 5l-5 5 5 5"/></svg>
            Solutions
          </Link>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(196,26,26,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
            <svg width="26" height="26" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="5" width="12" height="9" rx="1.5"/><path d="M13 8h4l2 4v2h-6V8z"/><circle cx="5" cy="16" r="1.5"/><circle cx="15" cy="16" r="1.5"/>
            </svg>
          </div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "720px", marginBottom: "20px" }}>
            Mobile Laboratories
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "560px" }}>
            Self-contained mobile laboratory systems for water quality, environmental testing, and scientific analysis — deployable to any location in Africa.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start", marginBottom: "64px" }}>
            <div>
              <div className="eyebrow">Our Mobile Lab Solutions</div>
              <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "2rem", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Science Anywhere in Africa
              </h2>
              <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "16px" }}>
                Wagtech Africa supplies self-contained mobile laboratories that bring professional analytical capabilities to any location — from remote humanitarian emergencies to rural water programs.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "32px" }}>
                Our mobile labs are equipped with the latest water quality, environmental, and agricultural monitoring instruments and can be customized to your specific testing requirements and budget.
              </p>
              <Link href="/contact" className="btn-red">Request a Quote</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { title: "Mobile Box Laboratory", desc: "Complete mobile water testing unit with microbiological and physicochemical analysis capability.", image: "/images/products/mobile-box-lab.jpg" },
                { title: "Inbuilt Mobile Laboratory", desc: "Multi-parameter environmental analysis lab for soil, air, and water testing in remote locations.", image: "/images/products/mobile-inbuilt-lab.jpg" },
                { title: "Mobile Van Laboratory", desc: "Rapid deployment water safety lab for humanitarian emergency response programs.", image: "/images/products/mobile-van-lab.jpg" },
                { title: "Trailer Laboratory", desc: "Soil, water, and crop analysis mobile unit for agricultural development programs.", image: "/images/products/mobile-trailer-lab.jpg" },
              ].map((item) => (
                <div key={item.title} className="card-light" style={{ overflow: "hidden" }}>
                  <div style={{ height: "160px", background: "#F8F8F8", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px" }}>
                    <Image src={item.image} alt={item.title} width={300} height={140} style={{ objectFit: "cover", width: "100%", height: "140px", borderRadius: "6px" }} />
                  </div>
                  <div style={{ padding: "18px" }}>
                    <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.9rem", marginBottom: "6px" }}>{item.title}</h3>
                    <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#F8F8F8", padding: "64px 0" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.8rem", letterSpacing: "-0.02em", marginBottom: "12px" }}>
            Design Your Mobile Laboratory
          </h2>
          <p style={{ color: "#6B7280", marginBottom: "28px", lineHeight: 1.7 }}>
            We custom-design mobile labs to your exact specifications — equipment selection, vehicle type, power systems, and data management.
          </p>
          <Link href="/contact" className="btn-red">Start the Conversation</Link>
        </div>
      </section>
    </>
  );
}
