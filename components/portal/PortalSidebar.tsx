import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "@/components/layout/Logo";

interface PortalNavItem {
  label: string;
  href: string;
  icon: IconName;
}

const NAV: PortalNavItem[] = [
  { label: "Dashboard", href: "/portal/dashboard", icon: "chart" },
  { label: "Upload", href: "/portal/upload", icon: "upload" },
  { label: "Subscriptions", href: "/portal/subscriptions", icon: "briefcase" },
  { label: "Reports", href: "/portal/reports", icon: "doc" },
];

export function PortalSidebar() {
  return (
    <aside className="lg:sticky lg:top-24 rounded-card border border-border bg-paper p-5 h-max">
      <div className="hidden lg:block mb-5 pb-5 border-b border-hairline">
        <Logo />
      </div>
      <span className="inline-flex items-center gap-2 mb-4 rounded-pill bg-bronze-50 border border-bronze-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-bronze-700">
        <Icon name="spark" className="h-3 w-3" />
        Portal preview
      </span>
      <ul className="space-y-1.5">
        {NAV.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-700 hover:bg-cream hover:text-ink-900"
            >
              <Icon name={item.icon} className="h-4 w-4 text-bronze-700" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-5 border-t border-hairline space-y-2 text-xs text-ink-500">
        <p>
          This portal is a frontend preview. Authentication, real uploads, and
          subscription management arrive in v1.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-bronze-700 font-semibold hover:underline"
        >
          Speak to our team
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </Link>
      </div>
    </aside>
  );
}
