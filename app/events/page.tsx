import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description: "Wagtech Africa's upcoming events, trade shows, conferences, and training sessions across Africa.",
};

const pastEvents = [
  {
    id: "nimet-2022",
    title: "Strategic Rainfall Prediction Conference, NIMET",
    date: "2022",
    location: "Lagos, Nigeria",
    description: "Zak Karim from Wagtech Projects delivered a presentation on advanced weather monitoring at Nigeria's Strategic Rainfall Prediction conference organized by NIMET.",
    type: "Conference",
  },
  {
    id: "malawi-install-2022",
    title: "40+ AWS Installation, Malawi DCCMS",
    date: "2022",
    location: "Malawi",
    description: "Wagtech Africa completed a major installation of 40+ automatic weather stations across Malawi in collaboration with the Department of Climate Change and Meteorological Services.",
    type: "Project Milestone",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageBanner image="/images/gallery/22.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Calendar</div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
            Events
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "540px", marginLeft: "auto", marginRight: "auto" }}>
            Join Wagtech Africa at trade shows, conferences, and technical seminars across Africa and globally.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          {/* Upcoming */}
          <div style={{ marginBottom: "72px" }}>
            <div className="eyebrow" style={{ marginBottom: "8px" }}>Upcoming Events</div>
            <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.6rem", letterSpacing: "-0.02em", marginBottom: "32px" }}>
              Scheduled Events
            </h2>
            <div className="events-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "20px" }}>
              {events.map((ev) => (
                <div key={ev.id} className="card-light" style={{ padding: "32px" }}>
                  <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                    <div style={{ width: "56px", height: "56px", background: "#800000", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="16" height="15" rx="1.5"/><path d="M2 8h16M6 1v4M14 1v4"/>
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span className="tag tag-red" style={{ marginBottom: "8px", display: "inline-block" }}>Upcoming</span>
                      <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "1rem", lineHeight: 1.35, marginBottom: "6px" }}>
                        {ev.title}
                      </h3>
                      <p style={{ color: "#800000", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>{ev.date}</p>
                      <p style={{ color: "#6B7280", fontSize: "13px", marginBottom: "12px" }}>{ev.location}</p>
                      <p style={{ color: "#6B7280", fontSize: "13.5px", lineHeight: 1.7, marginBottom: "16px" }}>{ev.description}</p>
                      <a href={ev.registrationUrl} className="btn-red" style={{ fontSize: "13px", padding: "10px 20px" }}>
                        Register Interest →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div style={{ marginBottom: "64px" }}>
            <div className="eyebrow" style={{ marginBottom: "8px" }}>Recent Activity</div>
            <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.6rem", letterSpacing: "-0.02em", marginBottom: "32px" }}>
              Past Events & Milestones
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {pastEvents.map((ev) => (
                <div key={ev.id} className="card-light" style={{ padding: "28px", display: "flex", gap: "18px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", background: "#F8F8F8", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid #E5E5E5" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#6B7280" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="10" cy="8" r="5"/><path d="M7 13.5l-2 5 5-2 5 2-2-5"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                      <span className="tag tag-gray">{ev.type}</span>
                      <span style={{ color: "#9CA3AF", fontSize: "12px" }}>{ev.date}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.95rem", marginBottom: "4px" }}>
                      {ev.title}
                    </h3>
                    <p style={{ color: "#9CA3AF", fontSize: "12px", marginBottom: "8px" }}>{ev.location}</p>
                    <p style={{ color: "#6B7280", fontSize: "13.5px", lineHeight: 1.7 }}>{ev.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo strip */}
          <div style={{ display: "flex", height: "140px", overflow: "hidden", gap: "4px", borderRadius: "16px", marginBottom: "24px" }}>
            {["/images/gallery/22.jpg","/images/gallery/10.jpg","/images/gallery/18.jpg","/images/gallery/21.jpg"].map((src, i) => (
              <div key={i} style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                <Image src={src} alt="Wagtech Africa events" fill sizes="25vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)" }} />
              </div>
            ))}
          </div>

          {/* Meet us banner */}
          <div style={{ background: "#111111", borderRadius: "20px", padding: "56px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#fff", fontSize: "1.6rem", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Meet Us at Your Next Event
            </h3>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 28px" }}>
              Interested in meeting the Wagtech Africa team? Contact us to arrange a meeting at an upcoming conference or to invite us to your event.
            </p>
            <Link href="/contact" className="btn-red">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .events-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
