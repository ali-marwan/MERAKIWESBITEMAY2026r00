import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { Icon } from "@/components/ui/Icon";
import { CONTACT, FOOTER_NAV } from "@/data/nav";

export function SiteFooter() {
  return (
    <footer className="bg-ink-900 text-ink-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-ink-radial pointer-events-none" />
      <Container size="pro" className="relative">
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-6">
              <Logo variant="light" />
              <p className="text-ink-300 max-w-md text-body-sm leading-relaxed">
                Enterprise-level business support, made accessible to UAE
                companies. Accounting, tax, compliance, business setup,
                cash-flow management, and AI-assisted finance workflows in one
                connected system.
              </p>
              <p className="text-bronze-300 text-sm font-semibold tracking-wide">
                One system. One team. One standard.
              </p>
              <ul className="space-y-2.5 pt-2">
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-2.5 text-ink-100 hover:text-bronze-300 text-sm"
                  >
                    <Icon name="email" className="h-4 w-4 text-bronze-300" />
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-ink-100 hover:text-bronze-300 text-sm"
                  >
                    <Icon name="whatsapp" className="h-4 w-4 text-bronze-300" />
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-ink-100 hover:text-bronze-300 text-sm"
                  >
                    <Icon
                      name="instagram"
                      className="h-4 w-4 text-bronze-300"
                    />
                    {CONTACT.instagram}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-ink-100 hover:text-bronze-300 text-sm"
                  >
                    <Icon name="pin" className="h-4 w-4 text-bronze-300" />
                    Dubai, United Arab Emirates
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              <FooterColumn title="Services" items={FOOTER_NAV.services} />
              <FooterColumn title="Company" items={FOOTER_NAV.company} />
              <FooterColumn title="Portal" items={FOOTER_NAV.portal} />
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-paper/10 flex flex-col gap-5 md:gap-6">
            <p className="text-xs text-ink-300 max-w-3xl leading-relaxed">
              Articles and pages on this site provide general guidance only.
              Final tax treatment, filing position, and compliance decisions may
              require professional review based on your documents and business
              circumstances. Services are subject to required documents,
              authority portal requirements, and applicable UAE regulations.
              Meraki AI is a workflow and review-assist layer connected to
              Meraki professional services and is not a replacement for
              accounting software or qualified accountants.
            </p>
            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-xs text-ink-300">
                © {new Date().getFullYear()} Meraki Business Consultants.
                {" "}
                {CONTACT.region}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-300">
                <Link href="/about" className="hover:text-paper">
                  About
                </Link>
                <Link href="/contact" className="hover:text-paper">
                  Contact
                </Link>
                <Link href="/insights" className="hover:text-paper">
                  Insights
                </Link>
                <a
                  href="/sitemap.xml"
                  className="hover:text-paper"
                  aria-label="Sitemap"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-eyebrow uppercase text-bronze-300 mb-5">{title}</h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-ink-100 hover:text-bronze-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
