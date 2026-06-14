"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("wag_preload_done")) return;
    setVisible(true);
    const t1 = setTimeout(() => setExiting(true), 2500);
    const t2 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("wag_preload_done", "1");
    }, 3100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes wag-ripple {
          0%   { transform: scale(0.5); opacity: 0.75; }
          100% { transform: scale(4.2); opacity: 0; }
        }
        @keyframes wag-logo-pop {
          0%   { transform: scale(0); opacity: 0; }
          55%  { transform: scale(1.12); opacity: 1; }
          75%  { transform: scale(0.94); }
          100% { transform: scale(1); }
        }
        @keyframes wag-glow-pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(196,26,26,0.25), 0 0 60px rgba(196,26,26,0.1); }
          50%       { box-shadow: 0 0 50px rgba(196,26,26,0.45), 0 0 90px rgba(196,26,26,0.2); }
        }
        @keyframes wag-text-rise {
          0%   { opacity: 0; transform: translateY(22px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes wag-tag-rise {
          0%   { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes wag-bar {
          0%   { width: 0%; }
          30%  { width: 20%; }
          70%  { width: 75%; }
          100% { width: 100%; }
        }
        @keyframes wag-dot {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.7); }
          40%            { opacity: 1;   transform: scale(1); }
        }
        @keyframes wag-curtain-up {
          0%   { transform: translateY(0); border-radius: 0; }
          100% { transform: translateY(-100%); border-radius: 0 0 48px 48px; }
        }
      `}</style>

      <div
        role="status"
        aria-label="Loading Wagtech Africa"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          background: "linear-gradient(160deg, #1A1A1A 0%, #242424 60%, #1C1C1C 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          animation: exiting
            ? "wag-curtain-up 0.62s cubic-bezier(0.76, 0, 0.24, 1) forwards"
            : undefined,
          overflow: "hidden",
        }}
      >
        {/* Subtle noise grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        {/* Water ripple rings — pulse outward from the logo */}
        {[0, 0.65, 1.3].map((delay) => (
          <div
            key={delay}
            style={{
              position: "absolute",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "1.5px solid #C41A1A",
              animation: `wag-ripple 2.6s ease-out ${delay}s infinite`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Thin inner ring (static accent) */}
        <div
          style={{
            position: "absolute",
            width: "148px",
            height: "148px",
            borderRadius: "50%",
            border: "1px solid rgba(196,26,26,0.14)",
            pointerEvents: "none",
          }}
        />

        {/* Logo */}
        <div
          style={{
            width: "112px",
            height: "112px",
            borderRadius: "50%",
            overflow: "hidden",
            background: "#ffffff",
            border: "3px solid rgba(196,26,26,0.5)",
            position: "relative",
            zIndex: 2,
            animation: "wag-logo-pop 0.75s cubic-bezier(0.34,1.56,0.64,1) 0.15s both, wag-glow-pulse 2.8s ease-in-out 1s infinite",
          }}
        >
          <Image
            src="/logo.png"
            alt="Wagtech Africa"
            width={112}
            height={112}
            priority
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>

        {/* Brand name */}
        <div
          style={{
            marginTop: "26px",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            animation: "wag-text-rise 0.55s ease 0.75s both",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              fontFamily: "var(--font-jakarta,'Plus Jakarta Sans',system-ui,sans-serif)",
              lineHeight: 1,
            }}
          >
            Wagtech Africa
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            position: "relative",
            zIndex: 2,
            animation: "wag-tag-rise 0.5s ease 1s both",
          }}
        >
          <div style={{ width: "24px", height: "1px", background: "rgba(196,26,26,0.5)" }} />
          <span
            style={{
              color: "#C41A1A",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Science for Africa · Since 1990
          </span>
          <div style={{ width: "24px", height: "1px", background: "rgba(196,26,26,0.5)" }} />
        </div>

        {/* Loading dots */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            marginTop: "40px",
            position: "relative",
            zIndex: 2,
            animation: "wag-tag-rise 0.4s ease 1.1s both",
          }}
        >
          {[0, 0.18, 0.36].map((d) => (
            <div
              key={d}
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#C41A1A",
                animation: `wag-dot 1.1s ease-in-out ${d}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Progress bar at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #7B1515 0%, #C41A1A 60%, #E05050 100%)",
              animation: "wag-bar 2.4s cubic-bezier(0.4,0,0.2,1) 0.1s forwards",
              width: "0%",
              boxShadow: "0 0 12px rgba(196,26,26,0.6)",
            }}
          />
        </div>
      </div>
    </>
  );
}
