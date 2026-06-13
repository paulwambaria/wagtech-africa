import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description: "Wagtech Africa's project portfolio: weather stations, water quality systems, and environmental monitoring deployments across Africa.",
};

/* Every project gets a real field photo */
const allProjects = [
  {
    id: "uganda-water",
    country: "Uganda",
    flag: "🇺🇬",
    title: "National Water Quality Monitoring Program",
    description: "Supply of mobile water safety laboratories and multi-parameter monitoring systems for Uganda's national water quality monitoring program. Two Toyota Hilux-mounted labs delivered to the Ministry of Water & Environment.",
    equipment: "AQUASAFE WSL25+, Mobile Lab Units, MAJI-STAT systems",
    client: "Ministry of Water & Environment, Uganda",
    outcome: "Enhanced national water quality surveillance capacity across all regions",
    industry: "Water & Sanitation",
    image: "/images/gallery/23.jpg",
  },
  {
    id: "malawi-weather",
    country: "Malawi",
    flag: "🇲🇼",
    title: "National Weather Station Network",
    description: "40+ automatic weather stations installed across Malawi in collaboration with the Department of Climate Change and Meteorological Services, supporting climate research and early warning systems.",
    equipment: "TM100, TM50 Meteorological Stations",
    client: "DCCMS, Dept. of Climate Change & Meteorological Services",
    outcome: "40+ weather stations installed, national climate network established",
    industry: "Climate & Meteorology",
    image: "/images/gallery/10.jpg",
  },
  {
    id: "malawi-sea-buoy",
    country: "Malawi",
    flag: "🇲🇼",
    title: "Lake Malawi Sea Buoy Deployment",
    description: "Sea buoy and river gauge deployment initiative with Malawi's Department of Climate Change and Meteorological Services for lake and river water monitoring, supporting hydrological research.",
    equipment: "Aquatic monitoring buoys, river gauges, water quality sensors",
    client: "DCCMS, Dept. of Climate Change & Meteorological Services",
    outcome: "Real-time lake and river monitoring data for climate research",
    industry: "Environmental Monitoring",
    image: "/images/gallery/17.jpg",
  },
  {
    id: "nigeria-nimet",
    country: "Nigeria",
    flag: "🇳🇬",
    title: "Strategic Rainfall Prediction Conference",
    description: "Wagtech Projects delivered a presentation and equipment demonstration at Nigeria's Strategic Rainfall Prediction conference organized by NIMET, showcasing advanced weather monitoring solutions.",
    equipment: "TM100 Meteorological Stations, Early Warning Systems",
    client: "NIMET (Nigerian Meteorological Agency)",
    outcome: "Enhanced national rainfall prediction capabilities",
    industry: "Meteorology",
    image: "/images/gallery/18.jpg",
  },
  {
    id: "east-africa-water",
    country: "East Africa",
    flag: "🌍",
    title: "Regional Water Quality Monitoring Program",
    description: "Supply and installation of portable water safety laboratories and heavy metals analysis systems across East African water utilities and humanitarian organisations.",
    equipment: "AQUASAFE WSL series, METALYSER® systems, MAJI multi-parameter probes",
    client: "Multiple water utilities and NGOs across East Africa",
    outcome: "Safe water access improved for millions across the region",
    industry: "Water & Sanitation",
    image: "/images/gallery/03.png",
  },
  {
    id: "ethiopia-met",
    country: "Ethiopia",
    flag: "🇪🇹",
    title: "Agrometeorological Station Network",
    description: "Installation of agrometeorological monitoring stations across Ethiopia's agricultural zones, supporting crop disease management and precision irrigation for food security programs.",
    equipment: "TM50 AGRO, TM100 AGRO Stations, soil monitoring sensors",
    client: "Ethiopian Institute of Agricultural Research",
    outcome: "Improved precision agriculture decision-making across major farming regions",
    industry: "Agriculture & Meteorology",
    image: "/images/gallery/18.jpg",
  },
  {
    id: "kenya-water",
    country: "Kenya",
    flag: "🇰🇪",
    title: "Urban Water Quality Monitoring",
    description: "Fixed site water quality monitoring systems for Nairobi and secondary cities' water supply networks, providing real-time water safety data for over 3 million consumers.",
    equipment: "MAJI-STAT, DEWMS Cloud Platform, multi-parameter probes",
    client: "Nairobi City Water & Sewerage Company",
    outcome: "Real-time water quality data for 3M+ consumers across the network",
    industry: "Water Utilities",
    image: "/images/gallery/14.jpg",
  },
  {
    id: "mobile-lab-deployment",
    country: "East Africa",
    flag: "🌍",
    title: "Mobile Laboratory Fleet Deployment",
    description: "Design, manufacture, and deployment of a fleet of Toyota Hilux-mounted mobile laboratories for field-based water quality and environmental monitoring across East Africa.",
    equipment: "Toyota Hilux Mobile Labs, AQUASAFE systems, METALYSER® units",
    client: "Multiple government ministries & humanitarian organisations",
    outcome: "Science deployable anywhere, remote water testing now possible in 20+ sites",
    industry: "Mobile Laboratories",
    image: "/images/gallery/21.jpg",
  },
  {
    id: "training-program",
    country: "East Africa",
    flag: "🌍",
    title: "Regional Technical Training Program",
    description: "Multi-day hands-on training workshops for government technicians, water utility operators, and NGO field staff on portable water testing equipment, calibration, and data interpretation.",
    equipment: "AQUASAFE WSL series, METALYSER® HM3000, MAJI probes",
    client: "Government agencies, water utilities, and NGO partners",
    outcome: "500+ technicians trained across Kenya, Uganda, Tanzania, and Rwanda",
    industry: "Training & Capacity Building",
    image: "/images/gallery/team-field.jpg",
  },
  {
    id: "land-rover-mobile-lab",
    country: "Africa",
    flag: "🌍",
    title: "Land Rover Mobile Laboratory Build",
    description: "Custom design and build of a Land Rover Defender-based mobile laboratory for remote field work, fitted with full water quality testing equipment and power systems.",
    equipment: "Land Rover Defender Lab, AQUASAFE, METALYSER® system",
    client: "Humanitarian field organisation",
    outcome: "Fully self-contained mobile lab reaching the most remote communities",
    industry: "Mobile Laboratories",
    image: "/images/gallery/16.jpg",
  },
  {
    id: "water-probe-field",
    country: "East Africa",
    flag: "🌍",
    title: "River & Borehole Water Quality Surveys",
    description: "Deployment of multi-parameter water quality probes for comprehensive river, lake, and borehole surveys, providing rapid field data for WASH program planning.",
    equipment: "MAJI multi-parameter probes, pH/ORP sensors, DEWMS loggers",
    client: "WASH programme implementers",
    outcome: "Data-driven WASH planning, 200+ water sources tested per survey cycle",
    industry: "Water & Sanitation",
    image: "/images/gallery/14.jpg",
  },
  {
    id: "mobile-lab-interior",
    country: "Africa",
    flag: "🌍",
    title: "Custom Mobile Lab Fit-Out Program",
    description: "Fit-out and equipping of self-contained mobile laboratories with full water quality, environmental, and microbiological testing capabilities for government clients.",
    equipment: "Full water quality lab suite, incubators, filtration, power systems",
    client: "Government ministries across East & West Africa",
    outcome: "Laboratories fully certified and operational within 3 months of commission",
    industry: "Mobile Laboratories",
    image: "/images/gallery/20.jpg",
  },
];

const countries = [
  "🇰🇪 Kenya","🇹🇿 Tanzania","🇺🇬 Uganda","🇪🇹 Ethiopia","🇷🇼 Rwanda","🇸🇸 South Sudan",
  "🇸🇴 Somalia","🇸🇩 Sudan","🇪🇷 Eritrea","🇲🇼 Malawi","🇳🇬 Nigeria","🇿🇲 Zambia",
  "🇿🇼 Zimbabwe","🇲🇿 Mozambique","🇬🇭 Ghana","🇸🇳 Senegal","🇪🇬 Egypt","🇧🇫 Burkina Faso",
  "🇨🇩 DRC","🇲🇬 Madagascar",
];

/* Photo collage shown at the top of the page */
const collagePhotos = [
  { src: "/images/gallery/21.jpg",    caption: "Mobile lab fleet, East Africa" },
  { src: "/images/gallery/22.jpg",    caption: "Uganda Ministry of Water deployment" },
  { src: "/images/gallery/10.jpg",    caption: "Weather station installation, Malawi" },
  { src: "/images/gallery/team-field.jpg", caption: "Technical training workshop" },
  { src: "/images/gallery/17.jpg",    caption: "River gauge installation, Sudan" },
  { src: "/images/gallery/04.jpg",    caption: "Wagtech field team on deployment" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageBanner image="/images/gallery/21.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Our Track Record</div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
            Projects Across Africa
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
            From emergency water safety labs to national weather station networks, Wagtech Africa has delivered 500+ projects across more than 20 African countries.
          </p>
        </div>
      </PageBanner>

      {/* ── Stats ribbon ── */}
      <div style={{ background: "#C41A1A" }}>
        <div className="wrap" style={{ paddingTop: "0", paddingBottom: "0" }}>
          <div className="proj-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[
              { v: "500+",  l: "Projects Completed" },
              { v: "20+",   l: "African Countries" },
              { v: "30+",   l: "Years of Experience" },
              { v: "1000+", l: "Systems Installed" },
            ].map((s, i) => (
              <div key={s.l} style={{ textAlign: "center", padding: "26px 16px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.18)" : "none" }}>
                <div style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{s.v}</div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "11px", marginTop: "5px", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Photo collage ── */}
      <section style={{ background: "#F8F8F8", padding: "56px 0" }}>
        <div className="wrap">
          <div style={{ marginBottom: "32px" }}>
            <div className="eyebrow">In the Field</div>
            <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "clamp(1.7rem,3vw,2.3rem)", letterSpacing: "-0.03em" }}>
              Real Deployments, Real Impact
            </h2>
          </div>

          {/* Top row: 1 large + 2 stacked */}
          <div className="proj-collage-top" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "8px", marginBottom: "8px" }}>
            <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden", height: "320px" }}>
              <Image src={collagePhotos[0].src} alt={collagePhotos[0].caption} fill sizes="66vw" style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "16px", left: "18px" }}>
                <div style={{ color: "#fff", fontSize: "12px", fontWeight: 600 }}>{collagePhotos[0].caption}</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {collagePhotos.slice(1, 3).map((p) => (
                <div key={p.src} style={{ position: "relative", borderRadius: "14px", overflow: "hidden", flex: 1 }}>
                  <Image src={p.src} alt={p.caption} fill sizes="33vw" style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)" }} />
                  <div style={{ position: "absolute", bottom: "12px", left: "14px", color: "#fff", fontSize: "11px", fontWeight: 600 }}>{p.caption}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row: 3 equal */}
          <div className="proj-collage-bottom" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
            {collagePhotos.slice(3).map((p) => (
              <div key={p.src} style={{ position: "relative", borderRadius: "14px", overflow: "hidden", height: "190px" }}>
                <Image src={p.src} alt={p.caption} fill sizes="33vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "12px", left: "14px", color: "#fff", fontSize: "11px", fontWeight: 600 }}>{p.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project cards with images ── */}
      <section className="section" style={{ background: "#F8F8F8" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Project Portfolio</div>
            <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "clamp(1.9rem,3.5vw,2.6rem)", letterSpacing: "-0.03em" }}>
              Selected Project Case Studies
            </h2>
          </div>

          <div className="proj-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
            {allProjects.map((project) => (
              <div key={project.id} className="card-light" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                {/* Cover photo */}
                <div style={{ position: "relative", height: "200px", flexShrink: 0 }}>
                  <Image src={project.image} alt={project.title} fill sizes="400px" style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />
                  {/* Red top accent */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,#C41A1A,#E02020)" }} />
                  {/* Flag + industry */}
                  <div style={{ position: "absolute", top: "14px", left: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "1.4rem" }}>{project.flag}</span>
                    <span className="tag tag-red" style={{ fontSize: "10px" }}>{project.industry}</span>
                  </div>
                  {/* Country label bottom-left */}
                  <div style={{ position: "absolute", bottom: "12px", left: "14px", color: "rgba(255,255,255,0.75)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {project.country}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 800, color: "#0D0D0D", fontSize: "1rem", lineHeight: 1.35, marginBottom: "10px" }}>
                    {project.title}
                  </h3>
                  <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.75, marginBottom: "18px", flex: 1 }}>
                    {project.description}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "14px", borderTop: "1px solid #E5E5E5" }}>
                    {[
                      { label: "Equipment", value: project.equipment },
                      { label: "Client",    value: project.client },
                      { label: "Outcome",   value: project.outcome, highlight: true },
                    ].map((row) => (
                      <div key={row.label} style={{ display: "flex", gap: "10px", fontSize: "12.5px" }}>
                        <span style={{ color: "#9CA3AF", width: "72px", flexShrink: 0, fontWeight: 500 }}>{row.label}</span>
                        <span style={{ color: row.highlight ? "#C41A1A" : "#374151", fontWeight: row.highlight ? 600 : 400, lineHeight: 1.5 }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pan-African reach with africa map bg ── */}
      <section style={{ background: "#0D0D0D", padding: "72px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.06, pointerEvents: "none" }}>
          <Image src="/images/gallery/africa-map.png" alt="" width={700} height={700} style={{ objectFit: "contain" }} />
        </div>
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Pan-African Reach</div>
            <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 900, color: "#fff", fontSize: "clamp(1.8rem,3vw,2.4rem)", letterSpacing: "-0.02em", marginBottom: "10px" }}>
              Active Presence Across Africa
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px" }}>East, Central, West and North Africa</p>
          </div>
          <div className="proj-countries-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "8px" }}>
            {countries.map((c) => (
              <div key={c} className="card-dark" style={{ padding: "11px 16px", fontSize: "13px", color: "rgba(255,255,255,0.75)", textAlign: "center" }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Field photos strip ── */}
      <div style={{ display: "flex", height: "160px", overflow: "hidden", gap: "4px" }}>
        {["/images/gallery/22.jpg","/images/gallery/10.jpg","/images/gallery/07.jpg","/images/gallery/20.jpg","/images/gallery/04.jpg"].map((src, i) => (
          <div key={i} style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <Image src={src} alt="" fill sizes="20vw" style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "88px 0" }}>
        <Image src="/images/gallery/21.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.78)" }} />
        <div className="wrap" style={{ position: "relative", textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Start Your Project</div>
          <h2 style={{ fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)", fontWeight: 900, color: "#fff", fontSize: "clamp(2rem,4vw,2.8rem)", letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Ready to Work With Us?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "36px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
            Wagtech Africa has extensive experience implementing government, NGO, and commercial scientific projects, from a single instrument to a national network.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <Link href="/contact" className="btn-red" style={{ padding: "14px 28px" }}>
              Discuss Your Project
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
            </Link>
            <Link href="/training-support" className="btn-ghost-white" style={{ padding: "14px 28px" }}>Our Services</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .proj-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .proj-stats-grid > div { border-right: none !important; }
          .proj-collage-top { grid-template-columns: 1fr !important; }
          .proj-collage-bottom { grid-template-columns: 1fr 1fr !important; }
          .proj-cards-grid { grid-template-columns: 1fr !important; }
          .proj-countries-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
