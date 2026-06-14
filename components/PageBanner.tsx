import Image from "next/image";

interface PageBannerProps {
  image: string;
  children: React.ReactNode;
}

export default function PageBanner({ image, children }: PageBannerProps) {
  return (
    <section style={{
      position: "relative",
      overflow: "hidden",
      background: "#2C2C2C",
      minHeight: "360px",
      paddingTop: "130px",
      paddingBottom: "52px",
      display: "flex",
      alignItems: "flex-end",
    }}>
      {/* Background photo */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      {/* Gradient overlay, heavy on the left for legibility, lighter on the right */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(105deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.68) 50%, rgba(0,0,0,0.38) 100%)",
      }} />
      {/* Subtle grid texture */}
      <div className="grid-texture" style={{
        position: "absolute", inset: 0,
        opacity: 0.28,
        pointerEvents: "none",
      }} />
      {/* Red glow accent */}
      <div style={{
        position: "absolute", top: "-20%", left: "-8%",
        width: "520px", height: "520px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(92,0,0,0.32) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Bottom fade to page background */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "80px",
        background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))",
        pointerEvents: "none",
      }} />
      {children}
    </section>
  );
}
