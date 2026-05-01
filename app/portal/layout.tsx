import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PortalSidebar } from "@/components/portal/PortalSidebar";
import { Icon } from "@/components/ui/Icon";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cream min-h-[calc(100vh-80px)]">
      <div className="bg-ink-900 text-paper">
        <Container size="pro">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3 text-sm">
            <div className="flex items-center gap-3 min-w-0">
              <span className="inline-flex items-center gap-2 rounded-pill bg-bronze-500/15 border border-bronze-300/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-bronze-300 shrink-0">
                <Icon name="spark" className="h-3 w-3" />
                Portal preview
              </span>
              <p className="text-paper/80 text-xs sm:text-sm">
                Sample data. Authentication, real uploads, and reports activate
                when the portal is released.
              </p>
            </div>
            <Link
              href="/contact?intent=portal-access"
              className="inline-flex items-center gap-1.5 text-bronze-300 hover:text-paper text-xs sm:text-sm font-semibold whitespace-nowrap"
            >
              Speak to our team
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </div>
      <Container size="pro" className="py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          <PortalSidebar />
          <div className="min-w-0">{children}</div>
        </div>
      </Container>
    </div>
  );
}
