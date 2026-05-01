import type { NavItem } from "@/lib/types";

export const PRIMARY_NAV: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Meraki AI", href: "/meraki-ai" },
  { label: "E-Invoicing", href: "/e-invoicing" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const MOBILE_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Meraki AI", href: "/meraki-ai" },
  { label: "E-Invoicing", href: "/e-invoicing" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  services: [
    { label: "Accounting", href: "/services#manage" },
    { label: "VAT & Corporate Tax", href: "/services#comply" },
    { label: "Business Setup", href: "/services#start" },
    { label: "Cash Flow", href: "/services#control" },
    { label: "Meraki AI", href: "/meraki-ai" },
    { label: "E-Invoicing Readiness", href: "/e-invoicing" },
  ] satisfies NavItem[],
  company: [
    { label: "About Meraki", href: "/about" },
    { label: "Packages", href: "/packages" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  portal: [
    { label: "Marketplace Login", href: "/login" },
    { label: "Portal Preview", href: "/portal" },
    { label: "Subscriptions", href: "/portal/subscriptions" },
    { label: "Reports", href: "/portal/reports" },
  ] satisfies NavItem[],
};

export const CONTACT = {
  email: "support@meraki-consultants.com",
  phone: "+971 56 181 2928",
  phoneHref: "tel:+971561812928",
  whatsappHref: "https://wa.me/971561812928",
  instagram: "@meraki_consultants",
  instagramHref: "https://instagram.com/meraki_consultants",
  mapsHref: "https://maps.app.goo.gl/jfeCsorV7V5C22t57",
  region: "Serving businesses across the UAE — focused on Dubai.",
};
