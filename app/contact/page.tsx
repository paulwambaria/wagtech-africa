"use client";
import PageBanner from "@/components/PageBanner";
import { useState } from "react";
import Link from "next/link";
import { company } from "@/lib/data";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1.5px solid #E5E5E5",
  background: "#fff",
  borderRadius: "10px",
  padding: "12px 16px",
  fontSize: "14px",
  color: "#0D0D0D",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", organisation: "", country: "", enquiryType: "Product Enquiry / Quotation", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", organisation: "", country: "", enquiryType: "Product Enquiry / Quotation", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageBanner image="/images/gallery/04.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Get in Touch</div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
            Contact Wagtech Africa
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
            Reach our team for product enquiries, quotations, technical support, training bookings, or general information.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px" }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.4rem", marginBottom: "24px" }}>
                Our Contact Details
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                {[
                  { icon: "M10 2a5 5 0 00-5 5c0 4 5 10 5 10s5-6 5-10a5 5 0 00-5-5z", label: "Office Address", value: company.address, href: null },
                  { icon: "M4 3h3l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L12.5 11 16 12.5V16a1 1 0 01-1 1C6 17 3 8 3 4a1 1 0 011-1z", label: "Phone Numbers", value: company.phones.join("\n"), href: `tel:${company.phones[0]}` },
                  { icon: "M2 4l8 8 8-8M2 4h16v12H2z", label: "Email", value: company.email, href: `mailto:${company.email}` },
                ].map((item) => (
                  <div key={item.label} className="card-light" style={{ padding: "20px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(128,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#800000" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: "#0D0D0D", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} style={{ color: "#800000", fontSize: "13px", textDecoration: "none", lineHeight: 1.6 }}>{item.value}</a>
                      ) : (
                        <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.6 }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a href={`https://wa.me/${company.whatsapp.replace(/\+/g, "")}`} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "14px", background: "#25D366", color: "#fff", padding: "18px 20px", borderRadius: "12px", textDecoration: "none", marginBottom: "20px" }}>
                <svg style={{ width: "24px", height: "24px", fill: "currentColor", flexShrink: 0 }} viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.524 5.845L.053 23.95l6.293-1.449A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.58-.507-5.066-1.39l-.36-.215-3.732.859.878-3.656-.235-.378A9.971 9.971 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px" }}>WhatsApp Chat</div>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>Fastest response, usually within hours</div>
                </div>
              </a>

              <div style={{ background: "#F8F8F8", borderRadius: "12px", padding: "20px" }}>
                <p style={{ fontWeight: 700, color: "#0D0D0D", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>Regions Served</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {company.regions.map((r) => <span key={r} className="tag tag-red">{r}</span>)}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div style={{ background: "#F8F8F8", borderRadius: "20px", padding: "40px" }}>
                <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.4rem", marginBottom: "8px" }}>
                  Send Us a Message
                </h2>
                <p style={{ color: "#6B7280", fontSize: "14px", marginBottom: "32px" }}>
                  Fill in the form below and our team will get back to you within 1 business day.
                </p>

                {status === "sent" ? (
                  <div style={{ background: "#F0FDF4", border: "1.5px solid #86EFAC", borderRadius: "14px", padding: "36px", textAlign: "center" }}>
                    <div style={{ width: "56px", height: "56px", background: "#22C55E", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                      <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 10l4 4 8-8"/>
                      </svg>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 800, color: "#15803D", fontSize: "1.2rem", marginBottom: "8px" }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: "#166534", fontSize: "14px", marginBottom: "20px" }}>
                      Thank you for reaching out. Our team will get back to you within 1 business day.
                    </p>
                    <button onClick={() => setStatus("idle")} className="btn-red" style={{ margin: "0 auto" }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#0D0D0D", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Full Name *</label>
                        <input name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#0D0D0D", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Email Address *</label>
                        <input name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} style={inputStyle} />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#0D0D0D", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Phone / WhatsApp</label>
                        <input name="phone" type="tel" placeholder="+254 xxx xxx xxx" value={form.phone} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#0D0D0D", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Organisation</label>
                        <input name="organisation" type="text" placeholder="Company / Institution" value={form.organisation} onChange={handleChange} style={inputStyle} />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#0D0D0D", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Country</label>
                        <input name="country" type="text" placeholder="Your country" value={form.country} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#0D0D0D", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Enquiry Type</label>
                        <select name="enquiryType" value={form.enquiryType} onChange={handleChange} style={inputStyle}>
                          <option>Product Enquiry / Quotation</option>
                          <option>Technical Support</option>
                          <option>Training Booking</option>
                          <option>Spare Parts / Reagents</option>
                          <option>Partnership / Distribution</option>
                          <option>General Information</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#0D0D0D", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Message *</label>
                      <textarea name="message" required rows={5} placeholder="Describe your requirements, the products you're interested in, or the support you need..." value={form.message} onChange={handleChange}
                        style={{ ...inputStyle, resize: "none" }} />
                    </div>

                    {status === "error" && (
                      <p style={{ color: "#DC2626", fontSize: "13px", background: "#FEF2F2", border: "1px solid #FECACA", padding: "12px 16px", borderRadius: "8px" }}>
                        Something went wrong. Please try again or contact us via WhatsApp.
                      </p>
                    )}

                    <button type="submit" disabled={status === "sending"} className="btn-red" style={{ width: "100%", justifyContent: "center", padding: "15px", fontSize: "15px", opacity: status === "sending" ? 0.7 : 1 }}>
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                    <p style={{ color: "#9CA3AF", fontSize: "12px", textAlign: "center" }}>
                      We respond within 1 business day. For urgent enquiries, use WhatsApp.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div style={{ background: "#F8F8F8", height: "280px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "1px solid #E5E5E5" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#800000", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 2a5 5 0 00-5 5c0 4 5 10 5 10s5-6 5-10a5 5 0 00-5-5z"/>
              <circle cx="10" cy="7" r="1.5" fill="#fff"/>
            </svg>
          </div>
          <p style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 800, color: "#0D0D0D", fontSize: "1.1rem", marginBottom: "6px" }}>
            Wagtech Africa, Karen, Nairobi
          </p>
          <p style={{ color: "#6B7280", fontSize: "13px", marginBottom: "16px" }}>{company.address}</p>
          <a href="https://maps.google.com/?q=Karen,Nairobi,Kenya" target="_blank" rel="noopener noreferrer" className="btn-red" style={{ padding: "10px 20px", fontSize: "13px" }}>
            Open in Google Maps
          </a>
        </div>
      </div>

      <section style={{ background: "#2C2C2C", padding: "48px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
            {[
              { label: "Sales Team", value: company.phones[0], href: `tel:${company.phones[0]}`, bg: "#800000", iconPath: "M4 3h3l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L12.5 11 16 12.5V16a1 1 0 01-1 1C6 17 3 8 3 4a1 1 0 011-1z" },
              { label: "Email", value: company.email, href: `mailto:${company.email}`, bg: "#5C0000", iconPath: "M2 4l8 8 8-8M2 4h16v12H2z" },
              { label: "WhatsApp", value: "Start Chat", href: `https://wa.me/${company.whatsapp.replace(/\+/g, "")}`, bg: "#25D366", iconPath: "M12 3a9 9 0 100 18A9 9 0 0012 3z" },
              { label: "Get a Quote", value: "Fill the form above", href: "#", bg: "#6B7280", iconPath: "M12 2H5a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 005 18h10a1.5 1.5 0 001.5-1.5V6L12 2z" },
            ].map((opt) => (
              <a key={opt.label} href={opt.href} target={opt.href.startsWith("http") ? "_blank" : undefined} rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-dark" style={{ display: "block", padding: "24px", textDecoration: "none" }}>
                <div style={{ width: "44px", height: "44px", background: opt.bg, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={opt.iconPath} />
                  </svg>
                </div>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>{opt.label}</p>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: "13px" }}>{opt.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
