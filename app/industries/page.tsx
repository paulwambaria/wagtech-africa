import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries",
  description: "Wagtech Africa serves water utilities, humanitarian aid, agriculture, government, research, mining, public health, and meteorology sectors.",
};

const industryDetails = [
  {
    id: "water-utilities",
    title: "Water Utilities",
    desc: "Complete water quality monitoring solutions for municipal and rural water supply authorities.",
    solutions: ["AQUASAFE water safety labs", "MAJI-STAT fixed monitoring", "DEWMS cloud platform", "METALYSER® heavy metals", "Microbiological testing"],
    challenge: "Ensuring safe drinking water for millions while meeting regulatory compliance requirements.",
    products: ["Water Quality Solutions", "Fixed Site Monitoring", "Early Warning Systems"],
    iconPath: "M4 8h12l3 7H1l3-7zM10 3v4",
  },
  {
    id: "humanitarian-aid",
    title: "Humanitarian Aid & NGOs",
    desc: "Emergency response water safety labs and portable field testing systems for aid operations.",
    solutions: ["Portable water safety labs", "Emergency response kits", "Rapid deployment systems", "Training programs", "Microbiological testing"],
    challenge: "Rapidly deploying reliable water testing in emergency situations and remote locations.",
    products: ["AQUASAFE WSL20", "AQUASAFE WSL25+", "Portable Field Kits"],
    iconPath: "M10 2l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V5l7-3z",
  },
  {
    id: "agriculture",
    title: "Agriculture & Food Security",
    desc: "Precision agriculture monitoring for smallholder and commercial farming programs.",
    solutions: ["Agrometeorological stations", "Soil monitoring systems", "Irrigation management", "Crop disease prediction", "Heavy metals soil screening"],
    challenge: "Supporting African farmers with data-driven decisions for higher yields and food security.",
    products: ["Agronomy Solutions", "TM50 AGRO Station", "Soil Monitoring"],
    iconPath: "M10 17V9M10 9C10 9 5 7 5 3c3 0 5 2 5 6zM10 12C10 12 15 10 15 6c-3 0-5 2-5 6z",
  },
  {
    id: "government",
    title: "Government & Regulatory Bodies",
    desc: "National-scale monitoring networks and compliance testing for regulatory agencies.",
    solutions: ["WMO-compliant weather networks", "National water quality programs", "Environmental compliance", "Tender implementation", "Data telemetry systems"],
    challenge: "Building national scientific monitoring capacity to meet international standards and regulatory requirements.",
    products: ["TM100 AWS", "National Networks", "DEWMS Platform"],
    iconPath: "M3 9l7-7 7 7v9a1 1 0 01-1 1H4a1 1 0 01-1-1z",
  },
  {
    id: "research",
    title: "Research & Academia",
    desc: "Research-grade instrumentation for universities and scientific research institutions.",
    solutions: ["Laboratory HM5000", "Research weather stations", "Environmental monitoring", "Mobile research labs", "Data management"],
    challenge: "Providing research-grade accuracy at accessible price points for African scientific institutions.",
    products: ["Laboratory Equipment", "Research Instruments", "Mobile Labs"],
    iconPath: "M8 3h4M7 3v6L3 16h14l-4-7V3",
  },
  {
    id: "mining",
    title: "Mining & Industrial",
    desc: "Heavy metals analysis and environmental monitoring for mining and industrial operations.",
    solutions: ["METALYSER® systems", "Effluent monitoring", "Air quality monitoring", "Soil contamination assessment", "Compliance testing"],
    challenge: "Meeting environmental compliance requirements while managing operational costs in mining and industrial operations.",
    products: ["METALYSER® Range", "Environmental Monitoring", "Compliance Systems"],
    iconPath: "M9 3H5a2 2 0 00-2 2v4m6-6h6a2 2 0 012 2v4M9 3v10m0 0H5m4 0h6m0 0V9m0 6h4",
  },
  {
    id: "health",
    title: "Public Health",
    desc: "Water safety and microbiological testing for public health agencies and health facilities.",
    solutions: ["Water safety labs", "Microbiological testing", "Disease outbreak response", "Health facility water quality", "Training programs"],
    challenge: "Preventing waterborne disease outbreaks through rapid, reliable water safety testing.",
    products: ["AQUASAFE MSL Series", "Microbiological Systems", "Field Testing Kits"],
    iconPath: "M10 2a4 4 0 000 8 4 4 0 000-8zM4 18a6 6 0 0112 0",
  },
  {
    id: "climate",
    title: "Climate & Meteorology",
    desc: "WMO-compliant weather monitoring for national meteorological and hydrological agencies.",
    solutions: ["WMO-compliant AWS", "Flood early warning", "Climate data networks", "Hydrometeorological systems", "Data telemetry"],
    challenge: "Building robust climate monitoring infrastructure for weather forecasting and climate change adaptation.",
    products: ["TM100 Meteorological", "TM100 HYDRO", "DEWMS"],
    iconPath: "M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.41 1.41M14.37 14.37l1.41 1.41",
    circle: true,
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageBanner image="/images/gallery/18.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Sectors Served</div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
            Industries We Serve
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
            Wagtech Africa delivers scientific solutions across eight key sectors — from humanitarian aid to government agencies, mining operations to academic research.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {industryDetails.map((ind, i) => (
            <div key={ind.id} className="card-light" style={{ padding: "40px", background: i % 2 === 0 ? "#F8F8F8" : "#fff" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>
                <div>
                  <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(196,26,26,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d={ind.iconPath} />
                      {ind.circle && <circle cx="10" cy="10" r="3.5" />}
                    </svg>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.3rem", letterSpacing: "-0.02em", marginBottom: "10px" }}>
                    {ind.title}
                  </h2>
                  <p style={{ color: "#6B7280", fontSize: "14px", lineHeight: 1.75, marginBottom: "16px" }}>{ind.desc}</p>
                  <div style={{ background: "rgba(196,26,26,0.06)", borderRadius: "10px", padding: "16px", borderLeft: "3px solid #C41A1A" }}>
                    <p style={{ fontSize: "11px", fontWeight: 700, color: "#0D0D0D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>Key Challenge</p>
                    <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.7, fontStyle: "italic" }}>&ldquo;{ind.challenge}&rdquo;</p>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, color: "#0D0D0D", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>Solutions We Provide</h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {ind.solutions.map((s) => (
                      <li key={s} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#6B7280" }}>
                        <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(196,26,26,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="9" height="9" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l4.5 4.5L16 6"/></svg>
                        </div>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, color: "#0D0D0D", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>Relevant Products</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                    {ind.products.map((p) => (
                      <span key={p} className="tag tag-red" style={{ alignSelf: "flex-start", fontSize: "12px", padding: "6px 14px" }}>{p}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-red" style={{ fontSize: "13px", padding: "10px 20px" }}>
                    Discuss Your Needs
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
