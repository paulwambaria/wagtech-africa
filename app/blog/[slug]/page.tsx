import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  return {
    title: article?.title ?? "Article",
    description: article?.excerpt,
  };
}

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);

  if (!article) {
    return (
      <div style={{ minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "100px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "2rem", marginBottom: "16px" }}>Article Not Found</h1>
          <Link href="/blog" style={{ color: "#C41A1A", fontWeight: 600, textDecoration: "none" }}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageBanner image="/images/gallery/10.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/blog" style={{ color: "#C41A1A", fontSize: "13px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10H4M9 5l-5 5 5 5"/></svg>
            Blog & News
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span className="tag tag-red">{article.category}</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>{article.date}</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.15, maxWidth: "760px" }}>
            {article.title}
          </h1>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap" style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
          {/* Article image placeholder */}
          <div style={{ height: "280px", background: "linear-gradient(135deg, #181818 0%, #0D0D0D 100%)", borderRadius: "16px", marginBottom: "44px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(196,26,26,0.3) 0%, transparent 65%)" }} />
            <svg width="64" height="64" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative" }}>
              <path d="M12 2H5a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 005 18h10a1.5 1.5 0 001.5-1.5V6L12 2z"/><path d="M12 2v4h4"/><path d="M7 10h6M7 13h4"/>
            </svg>
          </div>

          <article>
            <p style={{ fontSize: "1.15rem", color: "#0D0D0D", lineHeight: 1.8, fontWeight: 500, marginBottom: "24px" }}>{article.excerpt}</p>
            <p style={{ color: "#6B7280", lineHeight: 1.85, fontSize: "1rem" }}>
              This article provides further details on {article.title.toLowerCase()}. For the full story and more information about Wagtech Africa&apos;s projects and technical solutions across Africa, please contact our team directly.
            </p>
          </article>

          <div style={{ marginTop: "44px", background: "#F8F8F8", borderRadius: "16px", padding: "28px", borderLeft: "3px solid #C41A1A" }}>
            <p style={{ color: "#6B7280", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
              Interested in similar solutions for your organization or country? Get in touch with our technical team.
            </p>
            <Link href="/contact" className="btn-red">
              Contact Wagtech Africa
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
            </Link>
          </div>

          <div style={{ marginTop: "56px", paddingTop: "40px", borderTop: "1px solid #E5E5E5" }}>
            <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "1.1rem", marginBottom: "24px" }}>
              More Articles
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              {news.filter((n) => n.slug !== slug).slice(0, 3).map((n) => (
                <Link key={n.id} href={`/blog/${n.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ height: "120px", background: "#2C2C2C", borderRadius: "12px", marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "#C41A1A" }} />
                    <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2H5a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 005 18h10a1.5 1.5 0 001.5-1.5V6L12 2z"/>
                    </svg>
                  </div>
                  <span className="tag tag-red" style={{ marginBottom: "6px", display: "inline-block" }}>{n.category}</span>
                  <h4 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.85rem", lineHeight: 1.4, marginTop: "4px" }}>
                    {n.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
