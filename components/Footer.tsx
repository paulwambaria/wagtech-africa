"use client";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/data";

export default function Footer() {
  const socials = [
    {
      label: "WhatsApp", href: company.social.whatsapp,
      d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.524 5.845L.053 23.95l6.293-1.449A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.58-.507-5.066-1.39l-.36-.215-3.732.859.878-3.656-.235-.378A9.971 9.971 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z",
    },
    {
      label: "LinkedIn", href: company.social.linkedin,
      d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      label: "Facebook", href: company.social.facebook,
      d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      label: "Twitter", href: company.social.twitter,
      d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    },
  ];

  return (
    <footer style={{ background: "#2C2C2C", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      {/* Main footer */}
      <div className="wrap" style={{ paddingTop: "72px", paddingBottom: "64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px 32px" }}>
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "20px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", border: "3px solid rgba(255,255,255,0.15)", flexShrink: 0, background: "#fff" }}>
                <Image src="/logo.png" alt="Wagtech Africa" width={80} height={80} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: "1rem", fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", lineHeight: 1.1 }}>
                  Wagtech Africa
                </div>
                <div style={{ color: "#800000", fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "3px" }}>
                  Trace2O · Since 1990
                </div>
              </div>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13.5px", lineHeight: 1.7, maxWidth: "300px" }}>
              Africa&apos;s trusted partner for water quality, environmental monitoring, hydromet systems, and laboratory solutions. Regional hub for Wagtech Projects UK.
            </p>
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", lineHeight: 1.5 }}>{company.address}</p>
              {company.phones.map((p) => (
                <a key={p} href={`tel:${p}`} style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", textDecoration: "none" }}>{p}</a>
              ))}
              <a href={`mailto:${company.email}`} style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", textDecoration: "none" }}>{company.email}</a>
            </div>
            <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s, border-color 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#800000"; (e.currentTarget as HTMLElement).style.borderColor = "#800000"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  <svg style={{ width: "14px", height: "14px", fill: "rgba(255,255,255,0.7)" }} viewBox="0 0 24 24">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "11px", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.12em" }}>Solutions</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Water Quality", href: "/solutions/water-quality" },
                { label: "Agronomy", href: "/solutions/agronomy" },
                { label: "Hydromet & Weather", href: "/solutions/hydromet" },
                { label: "Environmental", href: "/solutions/environmental" },
                { label: "Mobile Laboratories", href: "/solutions/mobile-laboratories" },
                { label: "Trace2O", href: "/solutions/trace2o" },
                { label: "Laboratory Equipment", href: "/solutions/laboratory-equipment" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#800000")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "11px", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.12em" }}>Company</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Projects", href: "/projects" },
                { label: "Industries", href: "/industries" },
                { label: "Our Partners", href: "/about#partners" },
                { label: "Training & Support", href: "/training-support" },
                { label: "Blog & News", href: "/blog" },
                { label: "Events", href: "/events" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#800000")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "11px", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.12em" }}>Resources</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Download Center", href: "/downloads" },
                { label: "Product Brochures", href: "/downloads?type=Brochure" },
                { label: "Product Catalogues", href: "/downloads?type=Catalogue" },
                { label: "Technical Documents", href: "/downloads?type=Technical" },
                { label: "French Downloads", href: "/downloads?language=French" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#800000")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "28px" }}>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "11px", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.12em" }}>Regions Served</h4>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", lineHeight: 1.8 }}>{company.regions.join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="wrap" style={{ paddingTop: "20px", paddingBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
            © 2024 Wagtech Africa Ltd. All rights reserved. Regional hub for Wagtech Projects UK.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/sitemap" style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textDecoration: "none" }}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
