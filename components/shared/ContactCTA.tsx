import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { CONTACT } from "@/data/nav";

export function ContactCTA() {
  return (
    <Section bg="cream" tone="footer-pre">
      <Container size="pro">
        <div className="rounded-card bg-paper border border-border shadow-soft p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>Talk to Meraki</Eyebrow>
            <h2 className="mt-4 text-display-md text-ink-900 text-balance">
              Not sure where to start? We&apos;ll map your business to the right
              package.
            </h2>
            <p className="mt-4 text-body text-ink-500 max-w-xl">
              Tell us about your business — license type, transaction volume,
              and current setup. We&apos;ll recommend a starting package or build
              a custom plan.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="md">
                Speak to Our Team
              </Button>
              <Button
                href={CONTACT.whatsappHref}
                variant="ghost"
                size="md"
                iconLeft={<Icon name="whatsapp" className="h-4 w-4" />}
              >
                WhatsApp us
              </Button>
            </div>
          </div>
          <ul className="lg:col-span-5 space-y-3">
            <ContactRow
              icon="email"
              label="Email"
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
            />
            <ContactRow
              icon="phone"
              label="Phone / WhatsApp"
              value={CONTACT.phone}
              href={CONTACT.whatsappHref}
            />
            <ContactRow
              icon="instagram"
              label="Instagram"
              value={CONTACT.instagram}
              href={CONTACT.instagramHref}
            />
            <ContactRow
              icon="pin"
              label="Location"
              value="Dubai, UAE"
              href={CONTACT.mapsHref}
            />
          </ul>
        </div>
      </Container>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: "email" | "phone" | "instagram" | "pin";
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-center gap-4 rounded-2xl border border-hairline bg-cream hover:bg-paper hover:border-bronze-300 transition px-4 py-3.5"
      >
        <span className="h-10 w-10 rounded-xl bg-paper border border-hairline text-bronze-700 flex items-center justify-center shrink-0">
          <Icon name={icon} className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-ink-500 font-bold">
            {label}
          </p>
          <p className="text-sm font-semibold text-ink-900 truncate">{value}</p>
        </div>
      </a>
    </li>
  );
}
