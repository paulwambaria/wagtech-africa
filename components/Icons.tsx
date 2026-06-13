/* Central SVG icon library, no emojis */

type IconProps = { size?: number; className?: string; stroke?: string };
const def = { size: 20, stroke: "currentColor" };

export function IconArrow({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function IconDownload({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 3v10M6 9l4 4 4-4" />
      <path d="M3 15h14" />
    </svg>
  );
}

export function IconWater({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 3C10 3 4 9.5 4 13.5a6 6 0 0012 0C16 9.5 10 3 10 3z" />
    </svg>
  );
}

export function IconLeaf({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 17V9" />
      <path d="M10 9C10 9 5 7 5 3c3 0 5 2 5 6z" fill="currentColor" fillOpacity="0.15" />
      <path d="M10 12C10 12 15 10 15 6c-3 0-5 2-5 6z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

export function IconSun({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="10" cy="10" r="3.5" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.41 1.41M14.37 14.37l1.41 1.41M4.22 15.78l1.41-1.41M14.37 5.63l1.41-1.41" />
    </svg>
  );
}

export function IconGlobe({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M10 2.5C8 5.5 8 14.5 10 17.5M10 2.5C12 5.5 12 14.5 10 17.5M2.5 10h15" />
    </svg>
  );
}

export function IconFlask({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 3h4M7 3v6L3 16h14l-4-7V3" />
    </svg>
  );
}

export function IconMicroscope({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="9" cy="6" r="3" />
      <path d="M9 9v7M5 16h8" />
      <path d="M13 3l2 2-1.5 1.5" />
    </svg>
  );
}

export function IconTruck({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="1" y="5" width="12" height="9" rx="1.5" />
      <path d="M13 8h4l2 4v2h-6V8z" />
      <circle cx="5" cy="16" r="1.5" />
      <circle cx="15" cy="16" r="1.5" />
    </svg>
  );
}

export function IconShield({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 2l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V5l7-3z" />
    </svg>
  );
}

export function IconPhone({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 3h3l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L12.5 11 16 12.5V16a1 1 0 01-1 1C6 17 3 8 3 4a1 1 0 011-1z" />
    </svg>
  );
}

export function IconMail({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="4" width="16" height="12" rx="1.5" />
      <path d="M2 4l8 8 8-8" />
    </svg>
  );
}

export function IconPin({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 2a5 5 0 00-5 5c0 4 5 10 5 10s5-6 5-10a5 5 0 00-5-5z" />
      <circle cx="10" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconWhatsApp({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.524 5.845L.053 23.95l6.293-1.449A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.58-.507-5.066-1.39l-.36-.215-3.732.859.878-3.656-.235-.378A9.971 9.971 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
    </svg>
  );
}

export function IconCalendar({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="3" width="16" height="15" rx="1.5" />
      <path d="M2 8h16M6 1v4M14 1v4" />
    </svg>
  );
}

export function IconCheck({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 10l4.5 4.5L16 6" />
    </svg>
  );
}

export function IconFile({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2H5a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 005 18h10a1.5 1.5 0 001.5-1.5V6L12 2z" />
      <path d="M12 2v4h4" />
      <path d="M7 10h6M7 13h4" />
    </svg>
  );
}

export function IconSettings({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="10" cy="10" r="3" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.41 1.41M14.37 14.37l1.41 1.41M4.22 15.78l1.41-1.41M14.37 5.63l1.41-1.41" />
    </svg>
  );
}

export function IconMap({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="1,3 7,1 13,3 19,1 19,17 13,19 7,17 1,19" />
      <path d="M7 1v16M13 3v16" />
    </svg>
  );
}

export function IconAward({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="10" cy="8" r="5" />
      <path d="M7 13.5l-2 5 5-2 5 2-2-5" />
    </svg>
  );
}

export function IconSearch({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="9" cy="9" r="5" />
      <path d="M13 13l4 4" />
    </svg>
  );
}

export function IconChevronDown({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 5l4 4 4-4" />
    </svg>
  );
}

export function IconMenu({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className}>
      <path d="M3 6h14M3 10h14M3 14h14" />
    </svg>
  );
}

export function IconClose({ size = def.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className}>
      <path d="M4 4l12 12M16 4L4 16" />
    </svg>
  );
}

export function IconExternalLink({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 2h4v4M12 2L7 7" /><path d="M6 4H3a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V9" />
    </svg>
  );
}
