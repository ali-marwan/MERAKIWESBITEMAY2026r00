import { Container } from "@/components/ui/Container";
import { PortalSidebar } from "@/components/portal/PortalSidebar";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cream min-h-[calc(100vh-80px)]">
      <Container size="pro" className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          <PortalSidebar />
          <div className="min-w-0">{children}</div>
        </div>
      </Container>
    </div>
  );
}
