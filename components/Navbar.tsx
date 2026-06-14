"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const solutionLinks = [
  { label: "Water Quality", href: "/solutions/water-quality" },
  { label: "Agronomy", href: "/solutions/agronomy" },
  { label: "Hydromet & Weather", href: "/solutions/hydromet" },
  { label: "Environmental Monitoring", href: "/solutions/environmental" },
  { label: "Mobile Laboratories", href: "/solutions/mobile-laboratories" },
  { label: "Trace2O", href: "/solutions/trace2o" },
  { label: "Laboratory Equipment", href: "/solutions/laboratory-equipment" },
  { label: "Water Purification", href: "/solutions/water-purification" },
];

const nav = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions", children: solutionLinks },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Downloads", href: "/downloads" },
  { label: "Blog", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled ? "rgba(44,44,44,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
      }}
    >
      {/* Top bar */}
      <div style={{ background: "#5C0000", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0" }}>
          <span className="topbar-tagline" style={{ color: "rgba(255,255,255,0.82)", fontSize: "10.5px", fontWeight: 500, letterSpacing: "0.02em" }}>
            THE ORIGINAL BRAND SINCE 1990 &middot; Africa&apos;s Trusted Scientific Solutions Partner
          </span>
          <div className="topbar-right" style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "10.5px", color: "rgba(255,255,255,0.82)" }}>
            <a href="tel:+254797178605" style={{ color: "inherit", textDecoration: "none" }}>+254 797 178 605</a>
            <span style={{ opacity: 0.35 }}>|</span>
            <a href="mailto:info@wagtechafrica.com" style={{ color: "inherit", textDecoration: "none" }}>info@wagtechafrica.com</a>
            <span style={{ opacity: 0.35 }}>|</span>
            <a href="https://wa.me/254720763839" target="_blank" rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "11px", height: "11px" }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.524 5.845L.053 23.95l6.293-1.449A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.58-.507-5.066-1.39l-.36-.215-3.732.859.878-3.656-.235-.378A9.971 9.971 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div style={{ width: "68px", height: "68px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, background: "#fff" }}>
              <Image src="/logo.png" alt="Wagtech Africa" width={68} height={68} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.1, fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", letterSpacing: "-0.01em" }}>
                Wagtech Africa
              </div>
              <div style={{ color: "#800000", fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "3px" }}>
                Trace2O · Since 1990
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "1px" }} className="desktop-nav">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} style={{ position: "relative" }}
                  onMouseEnter={() => setOpenDrop(item.label)}
                  onMouseLeave={() => setOpenDrop(null)}
                >
                  <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.78)", fontSize: "13px", fontWeight: 500, padding: "8px 11px", borderRadius: "8px", transition: "color 0.15s", fontFamily: "inherit" }}>
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <path d="M2 4l3 3 3-3" />
                    </svg>
                  </button>
                  <div style={{
                    position: "absolute", top: "calc(100% + 6px)", left: "-8px", width: "236px",
                    background: "#363636", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "14px",
                    padding: "8px", boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                    opacity: openDrop === item.label ? 1 : 0,
                    transform: openDrop === item.label ? "translateY(0)" : "translateY(-6px)",
                    pointerEvents: openDrop === item.label ? "auto" : "none",
                    transition: "opacity 0.14s ease, transform 0.14s ease",
                  }}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        style={{ display: "block", padding: "8px 13px", color: "rgba(255,255,255,0.7)", fontSize: "13px", textDecoration: "none", borderRadius: "8px", transition: "background 0.12s, color 0.12s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(128,0,0,0.1)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href}
                  style={{ color: "rgba(255,255,255,0.78)", fontSize: "13px", fontWeight: 500, padding: "8px 11px", borderRadius: "8px", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.78)"; }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link href="/contact" className="btn-red" style={{ fontSize: "13px", padding: "9px 20px" }}>
              Request Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="hamburger"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "8px", borderRadius: "8px", cursor: "pointer" }}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {mobileOpen ? <><path d="M4 4l12 12M16 4L4 16" /></> : <><path d="M3 6h14M3 10h14M3 14h14" /></>}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: "#2C2C2C", borderTop: "1px solid rgba(255,255,255,0.07)", maxHeight: "80vh", overflowY: "auto" }}>
          <div className="wrap" style={{ padding: "16px 0 24px" }}>
            {nav.map((item) => (
              <div key={item.label}>
                <Link href={item.href} onClick={() => setMobileOpen(false)}
                  style={{ display: "block", color: "rgba(255,255,255,0.85)", padding: "11px 0", fontSize: "15px", fontWeight: 500, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  {item.label}
                </Link>
                {item.children && (
                  <div style={{ paddingLeft: "16px", paddingTop: "4px", paddingBottom: "4px", background: "rgba(255,255,255,0.02)" }}>
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)}
                        style={{ display: "block", color: "rgba(255,255,255,0.5)", padding: "8px 0", fontSize: "13px", textDecoration: "none" }}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ paddingTop: "20px" }}>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-red" style={{ display: "block", textAlign: "center", width: "100%" }}>
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );
}
