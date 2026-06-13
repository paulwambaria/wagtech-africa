import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Environmental Monitoring Solutions",
  description: "Comprehensive environmental monitoring solutions — air quality, water quality, soil analysis and multi-parameter environmental data systems across Africa.",
};

export default function EnvironmentalPage() {
  return (
    <>
      <PageBanner image="/images/gallery/04.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/solutions" style={{ color: "#C41A1A", fontSize: "13px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10H4M9 5l-5 5 5 5"/></svg>
            Solutions
          </Link>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(196,26,26,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
            <svg width="26" height="26" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="10" cy="10" r="7.5"/><path d="M10 2.5C8 5.5 8 14.5 10 17.5M10 2.5C12 5.5 12 14.5 10 17.5M2.5 10h15"/>
            </svg>
          </div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "720px", marginBottom: "20px" }}>
            Environmental Monitoring
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "560px" }}>
            Comprehensive environmental monitoring solutions — air quality, water quality, soil analysis and multi-parameter environmental data systems.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginBottom: "64px" }}>
            {[
              { title: "Water Quality Monitoring", desc: "Fixed-site and portable water quality monitoring systems for rivers, lakes, groundwater, and drinking water supplies.", features: ["Multi-parameter probes", "Real-time telemetry", "Cloud data management", "Automated alerts"] },
              { title: "Air Quality Monitoring", desc: "Ambient air quality monitoring systems for regulatory compliance and environmental impact assessment programs.", features: ["Particulate matter", "Gas detection", "Real-time reporting", "Data logging"] },
              { title: "Soil & Sediment Analysis", desc: "Heavy metals, contaminant screening, and soil chemistry analysis for environmental compliance and agricultural programs.", features: ["Heavy metals screening", "METALYSER® instruments", "Field portable systems", "Laboratory analysis"] },
              { title: "Ecological Monitoring", desc: "Biodiversity and ecological monitoring tools for environmental impact assessment, conservation, and restoration programs.", features: ["Species inventory", "Habitat assessment", "Biodiversity indices", "GIS integration"] },
              { title: "Mining Impact Assessment", desc: "Comprehensive environmental monitoring packages for mining and industrial operations to meet regulatory compliance.", features: ["Effluent quality", "Groundwater monitoring", "Air emissions", "Compliance reporting"] },
              { title: "Climate & Hydrological Data", desc: "Long-term climate and hydrological data collection for environmental research, water resource planning, and climate change studies.", features: ["WMO-compliant stations", "Hydrology monitoring", "Long-term data storage", "Climate analysis"] },
            ].map((item) => (
              <div key={item.title} className="card-light" style={{ padding: "28px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(196,26,26,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="10" cy="10" r="7.5"/><path d="M2.5 10h15"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.95rem", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.75, marginBottom: "14px" }}>{item.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {item.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#6B7280" }}>
                      <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "rgba(196,26,26,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="7" height="7" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l4.5 4.5L16 6"/></svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/contact" className="btn-red">Discuss Your Monitoring Needs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
