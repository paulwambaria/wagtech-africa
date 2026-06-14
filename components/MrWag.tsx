"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  escalate?: boolean;
}

const WHATSAPP_URL = "https://wa.me/254720763839?text=Hi%20Wagtech%20Africa%2C%20I%20need%20some%20help%20with%20a%20product%20enquiry.";

const GREETING: Message = {
  role: "assistant",
  content: "Hello! I'm Mr. Wag, your Wagtech Africa assistant. I can help you with product information, solutions, projects, or anything about what we do across Africa. What can I help you with today?",
};

export default function MrWag() {
  const [open, setOpen] = useState(false);
  const [showPeek, setShowPeek] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show peek card for first-time visitors after 3 seconds
  useEffect(() => {
    const seen = localStorage.getItem("mrwag_seen");
    if (!seen) {
      const t = setTimeout(() => setShowPeek(true), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (open) {
      setUnread(false);
      setShowPeek(false);
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function handleToggle() {
    if (!open) localStorage.setItem("mrwag_seen", "true");
    setShowPeek(false);
    setOpen(!open);
  }

  function openFromPeek() {
    localStorage.setItem("mrwag_seen", "true");
    setShowPeek(false);
    setOpen(true);
  }

  function dismissPeek() {
    localStorage.setItem("mrwag_seen", "true");
    setShowPeek(false);
  }

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");

    const userMsg: Message = { role: "user", content: text };
    const history = [...messages, userMsg];
    setMessages(history);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history
            .filter((m) => m.role === "user" || m.role === "assistant")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      const reply: Message = {
        role: "assistant",
        content: data.text || data.error || "Sorry, I couldn't process that.",
        escalate: data.escalate,
      };
      setMessages([...history, reply]);
      if (!open) setUnread(true);
    } catch {
      setMessages([...history, { role: "assistant", content: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  }

  return (
    <>
      <style>{`
        .mrwag-btn {
          position: fixed; bottom: 28px; right: 28px; z-index: 999;
          width: 60px; height: 60px; border-radius: 50%;
          background: #C41A1A; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px rgba(196,26,26,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .mrwag-btn:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(196,26,26,0.55); }
        .mrwag-badge {
          position: absolute; top: -2px; right: -2px;
          width: 16px; height: 16px; border-radius: 50%;
          background: #22C55E; border: 2px solid #fff;
          animation: pulse-badge 1.8s infinite;
        }
        @keyframes pulse-badge {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        /* ── Peek card ── */
        .mrwag-peek {
          position: fixed; bottom: 100px; right: 24px; z-index: 998;
          width: 300px; background: #fff; border-radius: 18px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.06);
          padding: 18px 16px 14px;
          animation: peekIn 0.35s cubic-bezier(0.34,1.46,0.64,1) forwards;
        }
        @keyframes peekIn {
          from { opacity: 0; transform: translateY(24px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .mrwag-peek::after {
          content: "";
          position: absolute; bottom: -8px; right: 28px;
          width: 16px; height: 16px;
          background: #fff;
          border-right: 1px solid rgba(0,0,0,0.06);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transform: rotate(45deg);
          border-radius: 0 0 3px 0;
        }
        .mrwag-peek-close {
          position: absolute; top: 10px; right: 12px;
          background: #F4F4F5; border: none; cursor: pointer;
          width: 22px; height: 22px; border-radius: 50%;
          font-size: 12px; color: #6B7280;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s;
          line-height: 1;
        }
        .mrwag-peek-close:hover { background: #E5E5E5; }
        .mrwag-peek-start {
          display: inline-flex; align-items: center; gap: 6px;
          background: #C41A1A; color: #fff; border: none; cursor: pointer;
          padding: 9px 16px; border-radius: 10px; font-size: 13px; font-weight: 600;
          margin-top: 12px; transition: background 0.2s; font-family: inherit;
        }
        .mrwag-peek-start:hover { background: #A51515; }

        /* ── Chat panel ── */
        .mrwag-panel {
          position: fixed; bottom: 100px; right: 24px; z-index: 998;
          width: 370px; max-height: 560px;
          background: #fff; border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
          display: flex; flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.22s ease;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .mrwag-header {
          background: linear-gradient(135deg, #7B1515 0%, #C41A1A 100%);
          padding: 16px 18px; display: flex; align-items: center; gap: 12px;
        }
        .mrwag-avatar {
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.3);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .mrwag-messages {
          flex: 1; overflow-y: auto; padding: 16px;
          display: flex; flex-direction: column; gap: 12px;
          scroll-behavior: smooth;
        }
        .mrwag-messages::-webkit-scrollbar { width: 3px; }
        .mrwag-messages::-webkit-scrollbar-thumb { background: #E5E5E5; border-radius: 2px; }
        .msg-wag {
          display: flex; gap: 8px; align-items: flex-start; max-width: 88%;
        }
        .msg-wag-bubble {
          background: #F4F4F5; color: #0D0D0D;
          padding: 10px 13px; border-radius: 4px 14px 14px 14px;
          font-size: 13.5px; line-height: 1.55;
        }
        .msg-user {
          align-self: flex-end; max-width: 82%;
          background: #C41A1A; color: #fff;
          padding: 10px 13px; border-radius: 14px 4px 14px 14px;
          font-size: 13.5px; line-height: 1.55;
        }
        .typing-dot {
          width: 7px; height: 7px; background: #9CA3AF; border-radius: 50%;
          animation: typing 1.2s infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing {
          0%,80%,100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        .whatsapp-btn {
          display: flex; align-items: center; gap: 8px;
          background: #25D366; color: #fff; border: none;
          padding: 10px 14px; border-radius: 10px; cursor: pointer;
          font-size: 13px; font-weight: 600; margin-top: 8px;
          text-decoration: none; width: fit-content;
          transition: background 0.2s;
        }
        .whatsapp-btn:hover { background: #1FAD56; }
        .mrwag-input-row {
          border-top: 1px solid #F0F0F0; padding: 12px 14px;
          display: flex; gap: 8px; align-items: center; background: #fff;
        }
        .mrwag-input {
          flex: 1; border: 1.5px solid #E5E5E5; border-radius: 10px;
          padding: 10px 13px; font-size: 13.5px; outline: none;
          color: #0D0D0D; background: #F8F8F8;
          transition: border-color 0.18s;
          font-family: inherit;
        }
        .mrwag-input:focus { border-color: #C41A1A; background: #fff; }
        .mrwag-send {
          width: 38px; height: 38px; border-radius: 10px;
          background: #C41A1A; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background 0.2s;
        }
        .mrwag-send:hover { background: #A51515; }
        .mrwag-send:disabled { background: #E5E5E5; cursor: default; }
        @media (max-width: 480px) {
          .mrwag-panel { width: calc(100vw - 20px); right: 10px; bottom: 90px; max-height: 70vh; }
          .mrwag-peek  { width: calc(100vw - 80px); right: 10px; }
          .mrwag-btn { bottom: 18px; right: 18px; width: 54px; height: 54px; }
        }
      `}</style>

      {/* First-visit peek card */}
      {showPeek && !open && (
        <div className="mrwag-peek">
          <button className="mrwag-peek-close" onClick={dismissPeek} aria-label="Dismiss">✕</button>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg,#7B1515,#C41A1A)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
            <div style={{ paddingTop: "2px" }}>
              <div style={{ fontWeight: 800, fontSize: "14.5px", color: "#0D0D0D", fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)" }}>
                Mr. Wag
                <span style={{ marginLeft: "7px", background: "rgba(196,26,26,0.08)", color: "#C41A1A", fontSize: "10px", fontWeight: 700, padding: "2px 7px", borderRadius: "999px", letterSpacing: "0.06em", verticalAlign: "middle" }}>AI</span>
              </div>
              <div style={{ fontSize: "13px", color: "#444", marginTop: "6px", lineHeight: 1.5 }}>
                Hi there! 👋 I&apos;m Mr. Wag — I can answer questions about our water quality labs, weather stations, and all Wagtech solutions. Happy to help!
              </div>
              <button className="mrwag-peek-start" onClick={openFromPeek}>
                Start chatting
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10h12M10 4l6 6-6 6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button className="mrwag-btn" onClick={handleToggle} aria-label="Chat with Mr. Wag">
        {open ? (
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
            <path d="M4 4l12 12M16 4L4 16"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.17-1.35A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        )}
        {!open && unread && <span className="mrwag-badge" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="mrwag-panel">
          {/* Header */}
          <div className="mrwag-header">
            <div className="mrwag-avatar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "15px", fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)" }}>
                Mr. Wag
              </div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "11px", display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
                Wagtech Africa AI Assistant
              </div>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "11px", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}
              title="Chat on WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.524 5.845L.053 23.95l6.293-1.449A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.58-.507-5.066-1.39l-.36-.215-3.732.859.878-3.656-.235-.378A9.971 9.971 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              Live chat
            </a>
          </div>

          {/* Messages */}
          <div className="mrwag-messages">
            {messages.map((msg, i) => (
              <div key={i}>
                {msg.role === "assistant" ? (
                  <div className="msg-wag">
                    <div className="mrwag-avatar" style={{ width: "28px", height: "28px", flexShrink: 0, background: "#F4F4F5", border: "1.5px solid #E5E5E5" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#C41A1A">
                        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                      </svg>
                    </div>
                    <div>
                      <div className="msg-wag-bubble">{msg.content}</div>
                      {msg.escalate && (
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px", flexShrink: 0 }}>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.524 5.845L.053 23.95l6.293-1.449A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.58-.507-5.066-1.39l-.36-.215-3.732.859.878-3.656-.235-.378A9.971 9.971 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                          </svg>
                          Chat with our team on WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="msg-user">{msg.content}</div>
                )}
              </div>
            ))}

            {loading && (
              <div className="msg-wag">
                <div className="mrwag-avatar" style={{ width: "28px", height: "28px", flexShrink: 0, background: "#F4F4F5", border: "1.5px solid #E5E5E5" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#C41A1A">
                    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                </div>
                <div className="msg-wag-bubble" style={{ display: "flex", gap: "5px", alignItems: "center", padding: "14px 16px" }}>
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Quick prompts (only shown at start) */}
          {messages.length === 1 && (
            <div style={{ padding: "0 14px 10px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {["Water quality labs", "Weather stations", "Get a quote", "Training & support"].map((q) => (
                <button key={q} onClick={() => { setInput(q); setTimeout(() => inputRef.current?.focus(), 50); }}
                  style={{ background: "#F4F4F5", border: "1px solid #E5E5E5", borderRadius: "20px", padding: "5px 11px", fontSize: "11.5px", color: "#0D0D0D", cursor: "pointer", transition: "background 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E5E5E5")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#F4F4F5")}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="mrwag-input-row">
            <input
              ref={inputRef}
              className="mrwag-input"
              type="text"
              placeholder="Ask Mr. Wag anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              disabled={loading}
            />
            <button className="mrwag-send" onClick={send} disabled={loading || !input.trim()} aria-label="Send">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 10L3 4l3 6-3 6 14-6z"/>
              </svg>
            </button>
          </div>

          <div style={{ textAlign: "center", padding: "6px 0 8px", color: "#9CA3AF", fontSize: "10px" }}>
            Powered by AI · Wagtech Africa &copy; {new Date().getFullYear()}
          </div>
        </div>
      )}
    </>
  );
}
