import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  className?: string;
}

const baseProps = {
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Icon({
  name,
  className,
  ...rest
}: IconProps & { name: IconName }) {
  const Component = ICONS[name];
  return (
    <svg className={cn("h-6 w-6", className)} {...baseProps} {...rest}>
      <Component />
    </svg>
  );
}

const ICONS = {
  start: () => (
    <>
      <path d="M3 12h4l3-9 4 18 3-9h4" />
    </>
  ),
  manage: () => (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 13h4M8 17h8" />
    </>
  ),
  comply: () => (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  control: () => (
    <>
      <path d="M3 21V8m6 13V3m6 18v-9m6 9V11" />
    </>
  ),
  automate: () => (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </>
  ),
  arrow: () => (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  check: () => (
    <>
      <path d="m5 12 5 5L20 7" />
    </>
  ),
  dash: () => (
    <>
      <path d="M5 12h14" />
    </>
  ),
  whatsapp: () => (
    <>
      <path d="M3 21l1.65-4.5A8.5 8.5 0 1 1 8 19.5L3 21Z" />
      <path d="M9 9c0 4 3 7 7 7" />
    </>
  ),
  email: () => (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: () => (
    <>
      <path d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </>
  ),
  pin: () => (
    <>
      <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  instagram: () => (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </>
  ),
  spark: () => (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </>
  ),
  upload: () => (
    <>
      <path d="M12 16V4M7 9l5-5 5 5" />
      <path d="M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
    </>
  ),
  doc: () => (
    <>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
      <path d="M14 3v6h6M8 13h8M8 17h6" />
    </>
  ),
  receipt: () => (
    <>
      <path d="M5 3v18l3-2 3 2 3-2 3 2V3" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  shield: () => (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" />
    </>
  ),
  bolt: () => (
    <>
      <path d="m13 3-9 12h7l-1 6 9-12h-7l1-6Z" />
    </>
  ),
  user: () => (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  layers: () => (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 18l9 5 9-5" />
    </>
  ),
  chart: () => (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 5-7" />
    </>
  ),
  globe: () => (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  briefcase: () => (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  calendar: () => (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  search: () => (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  plus: () => (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  menu: () => (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: () => (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  ai: () => (
    <>
      <path d="M12 3a9 9 0 1 0 9 9" />
      <path d="M12 7v5l3 3M21 3l-3 3M16 8l5-5" />
    </>
  ),
  eye: () => (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  cart: () => (
    <>
      <path d="M3 4h2l2.4 12.5a2 2 0 0 0 2 1.5h8.2a2 2 0 0 0 2-1.5L21 8H6" />
      <circle cx="9" cy="21" r="1" />
      <circle cx="18" cy="21" r="1" />
    </>
  ),
} as const;

export type IconName = keyof typeof ICONS;
