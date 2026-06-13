import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog & News",
  description: "Latest news, project updates, and technical articles from Wagtech Africa — Africa's scientific solutions partner.",
};

export default function BlogPage() {
  const featured = news[0];
  const rest = news.slice(1);

  return (
    <>
      <PageBanner image="/images/gallery/07.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Knowledge Center</div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
            Blog &amp; News
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "540px", marginLeft: "auto", marginRight: "auto" }}>
            Project updates, technical insights, industry news and case studies from Wagtech Africa&apos;s work across the continent.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          {/* Featured */}
          <div style={{ marginBottom: "56px" }}>
            <div className="eyebrow" style={{ marginBottom: "20px" }}>Featured</div>
            <div className="card-light" style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div style={{ height: "100%", minHeight: "280px", background: "linear-gradient(135deg, #7B1515 0%, #111111 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(196,26,26,0.4) 0%, transparent 65%)" }} />
                <svg width="64" height="64" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative" }}>
                  <path d="M12 2H5a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 005 18h10a1.5 1.5 0 001.5-1.5V6L12 2z"/><path d="M12 2v4h4"/><path d="M7 10h6M7 13h4"/>
                </svg>
              </div>
              <div style={{ padding: "44px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <span className="tag tag-red">{featured.category}</span>
                  <span style={{ color: "#9CA3AF", fontSize: "12px" }}>{featured.date}</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.7rem", letterSpacing: "-0.02em", lineHeight: 1.25, marginBottom: "16px" }}>
                  {featured.title}
                </h2>
                <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "28px" }}>{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="btn-red">
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* All articles */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", marginBottom: "64px" }}>
            {rest.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="card-light" style={{ display: "block", textDecoration: "none", overflow: "hidden" }}>
                <div style={{ height: "180px", background: "linear-gradient(135deg, #181818 0%, #0D0D0D 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #C41A1A, #E02020)" }} />
                  <svg width="40" height="40" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2H5a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 005 18h10a1.5 1.5 0 001.5-1.5V6L12 2z"/><path d="M12 2v4h4"/><path d="M7 10h6M7 13h4"/>
                  </svg>
                </div>
                <div style={{ padding: "22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <span className="tag tag-red">{article.category}</span>
                    <span style={{ color: "#9CA3AF", fontSize: "11px" }}>{article.date}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.95rem", lineHeight: 1.4, marginBottom: "10px" }}>
                    {article.title}
                  </h3>
                  <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", marginBottom: "14px" }}>
                    {article.excerpt}
                  </p>
                  <span style={{ color: "#C41A1A", fontSize: "12px", fontWeight: 700 }}>Read More →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{ background: "#111111", borderRadius: "20px", padding: "56px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#fff", fontSize: "1.8rem", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Stay Updated
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7, marginBottom: "28px" }}>
              Join our mailing list for the latest news, product updates, and technical resources.
            </p>
            <form style={{ display: "flex", gap: "10px", maxWidth: "400px", margin: "0 auto" }}>
              <input type="email" placeholder="Your email address"
                style={{ flex: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "12px 16px", color: "#fff", fontSize: "14px", outline: "none" }} />
              <button type="submit" className="btn-red" style={{ flexShrink: 0, padding: "12px 20px" }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
