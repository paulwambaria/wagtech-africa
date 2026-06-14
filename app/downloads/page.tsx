"use client";
import PageBanner from "@/components/PageBanner";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { downloads } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(downloads.map((d) => d.category)))];
const types = ["All", ...Array.from(new Set(downloads.map((d) => d.type)))];
const languages = ["All", "English", "French"];

export default function DownloadsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = downloads.filter((d) => {
    const matchesCat = selectedCategory === "All" || d.category === selectedCategory;
    const matchesType = selectedType === "All" || d.type === selectedType;
    const matchesLang = selectedLanguage === "All" || d.language === selectedLanguage;
    const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesType && matchesLang && matchesSearch;
  });

  const selectStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "13px",
    color: "#fff",
    outline: "none",
  };

  return (
    <>
      <PageBanner image="/images/gallery/10.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Resource Library</div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
            Download Center
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "540px", marginLeft: "auto", marginRight: "auto" }}>
            Access brochures, catalogues, technical documents, user manuals, and application notes, available in English and French.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#F8F8F8" }}>
        <div className="wrap">
          {/* Filters */}
          <div style={{ background: "#111111", borderRadius: "16px", padding: "28px", marginBottom: "40px" }}>
            <div className="dl-filter-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "8px" }}>Search</label>
                <div style={{ position: "relative" }}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)" }}>
                    <circle cx="9" cy="9" r="5"/><path d="M13 13l4 4"/>
                  </svg>
                  <input type="text" placeholder="Search documents..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ ...selectStyle, paddingLeft: "36px" }} />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "8px" }}>Category</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={selectStyle}>
                  {categories.map((c) => <option key={c} style={{ background: "#111" }}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "8px" }}>Document Type</label>
                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} style={selectStyle}>
                  {types.map((t) => <option key={t} style={{ background: "#111" }}>{t}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "8px" }}>Language</label>
                <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} style={selectStyle}>
                  {languages.map((l) => <option key={l} style={{ background: "#111" }}>{l}</option>)}
                </select>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px" }}>
              Showing {filtered.length} of {downloads.length} documents
            </p>
          </div>

          {/* Document grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "14px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2H5a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 005 18h10a1.5 1.5 0 001.5-1.5V6L12 2z"/><path d="M12 2v4h4"/>
                </svg>
              </div>
              <p style={{ color: "#6B7280", fontSize: "15px" }}>No documents match your filters. Try adjusting your search criteria.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
              {filtered.map((doc) => (
                <div key={doc.id} className="card-light" style={{ overflow: "hidden", display: "flex", flexDirection: "column", background: "#fff" }}>
                  {/* PDF Thumbnail */}
                  <a href={doc.url} target="_blank" rel="noopener noreferrer"
                    style={{ display: "block", position: "relative", height: "190px", background: "#E5E5E5", flexShrink: 0, overflow: "hidden", textDecoration: "none" }}>
                    <Image
                      src={doc.thumbnail}
                      alt={`${doc.title} cover`}
                      fill
                      sizes="300px"
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                    />
                    {/* Hover overlay */}
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.35)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0)"; }}>
                      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "44px", height: "44px", borderRadius: "50%", background: "#800000", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.2s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0"; }}>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 3v10M6 9l4 4 4-4"/><path d="M3 15h14"/>
                        </svg>
                      </div>
                    </div>
                    {/* Language badge */}
                    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                      <span style={{ fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "999px", background: doc.language === "French" ? "rgba(59,130,246,0.9)" : "rgba(22,163,74,0.9)", color: "#fff", backdropFilter: "blur(4px)" }}>
                        {doc.language === "French" ? "FR" : "EN"}
                      </span>
                    </div>
                  </a>

                  {/* Content */}
                  <div style={{ padding: "16px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ fontSize: "10px", color: "#800000", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        {doc.category}
                      </span>
                      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                        <span className="tag tag-gray" style={{ fontSize: "9px" }}>{doc.type}</span>
                        <span style={{ color: "#9CA3AF", fontSize: "10px" }}>{doc.size}</span>
                      </div>
                    </div>

                    <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.875rem", lineHeight: 1.4, marginBottom: "6px", flex: 1 }}>
                      {doc.title}
                    </h3>
                    <p style={{ color: "#9CA3AF", fontSize: "11px", lineHeight: 1.5, marginBottom: "14px" }}>{doc.description}</p>

                    <a href={doc.url} target="_blank" rel="noopener noreferrer"
                      className="btn-red"
                      style={{ justifyContent: "center", fontSize: "12px", padding: "10px 14px" }}>
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 3v10M6 9l4 4 4-4"/><path d="M3 15h14"/>
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: "52px", textAlign: "center", background: "#fff", borderRadius: "16px", padding: "44px", border: "1px solid #E5E5E5" }}>
            <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "1.2rem", marginBottom: "10px" }}>
              Need a Specific Document?
            </h3>
            <p style={{ color: "#6B7280", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
              Can&apos;t find what you need? Contact our team and we&apos;ll provide the technical documentation you require.
            </p>
            <Link href="/contact" className="btn-red">
              Request Document
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .dl-filter-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .dl-filter-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
