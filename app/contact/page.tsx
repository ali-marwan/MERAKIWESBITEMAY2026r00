import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Input, Textarea, Select, Label } from "@/components/ui/Input";
import { FAQSection } from "@/components/shared/FAQSection";
import { CONTACT_FAQS } from "@/data/faqs";
import { CONTACT } from "@/data/nav";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Speak to the Meraki team about packages, marketplace services, Meraki AI, and custom solutions. Email, WhatsApp, or send a message — we serve UAE businesses with a focus on Dubai.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section bg="paper" tone="default" className="pt-20 md:pt-28">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Pill tone="bronze">Speak to Meraki</Pill>
              <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
                Tell us about your business.
              </h1>
              <p className="mt-6 text-lead text-ink-500">
                Share a few details and we&apos;ll recommend a package, build a
                custom plan, or answer specific questions about UAE accounting,
                tax, compliance, business setup, or Meraki AI.
              </p>

              <ul className="mt-10 space-y-3">
                <ContactRow
                  icon="email"
                  label="Email"
                  value={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                />
                <ContactRow
                  icon="whatsapp"
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
                  value="Dubai · serving the UAE"
                  href={CONTACT.mapsHref}
                />
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  href={CONTACT.whatsappHref}
                  variant="primary"
                  size="md"
                  iconLeft={<Icon name="whatsapp" className="h-4 w-4" />}
                >
                  WhatsApp us
                </Button>
                <Button
                  href={`mailto:${CONTACT.email}`}
                  variant="ghost"
                  size="md"
                  iconLeft={<Icon name="email" className="h-4 w-4" />}
                >
                  Email
                </Button>
                <Button
                  href="/marketplace"
                  variant="ghost"
                  size="md"
                  iconLeft={<Icon name="cart" className="h-4 w-4" />}
                >
                  View Marketplace
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection
        faqs={CONTACT_FAQS}
        bg="cream"
        title="A few quick answers."
      />
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: "email" | "whatsapp" | "instagram" | "pin";
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

function ContactForm() {
  return (
    <form
      action={`mailto:${CONTACT.email}`}
      method="post"
      encType="text/plain"
      className="rounded-card bg-cream border border-hairline p-7 lg:p-9 shadow-soft"
    >
      <Eyebrow>New inquiry</Eyebrow>
      <h2 className="mt-3 text-display-md text-ink-900">
        Send a message
      </h2>
      <p className="mt-2 text-body-sm text-ink-500">
        Fields marked with * are required. We aim to respond within one
        business day.
      </p>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your name" htmlFor="name" required>
          <Input id="name" name="name" required placeholder="Sara Al Mazrouei" />
        </Field>
        <Field label="Company name" htmlFor="company">
          <Input id="company" name="company" placeholder="Sample Trading LLC" />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="phone">
          <Input id="phone" name="phone" placeholder="+971 ..." />
        </Field>
        <Field label="Emirate" htmlFor="emirate">
          <Select id="emirate" name="emirate" defaultValue="">
            <option value="" disabled>
              Choose...
            </option>
            <option>Dubai</option>
            <option>Abu Dhabi</option>
            <option>Sharjah</option>
            <option>Ajman</option>
            <option>Ras Al Khaimah</option>
            <option>Fujairah</option>
            <option>Umm Al Quwain</option>
          </Select>
        </Field>
        <Field label="Business type" htmlFor="businessType">
          <Select id="businessType" name="businessType" defaultValue="">
            <option value="" disabled>
              Choose...
            </option>
            <option>Mainland LLC</option>
            <option>Free Zone</option>
            <option>Sole Establishment</option>
            <option>Branch Office</option>
            <option>Setting up — not yet licensed</option>
            <option>Other</option>
          </Select>
        </Field>
        <Field label="Service needed" htmlFor="service">
          <Select id="service" name="service" defaultValue="">
            <option value="" disabled>
              Choose...
            </option>
            <option>Monthly accounting package</option>
            <option>VAT support</option>
            <option>Corporate Tax support</option>
            <option>Business setup</option>
            <option>E-invoicing readiness</option>
            <option>Meraki AI</option>
            <option>Custom solution</option>
            <option>Not sure — please advise</option>
          </Select>
        </Field>
        <Field label="VAT registered?" htmlFor="vat">
          <Select id="vat" name="vat" defaultValue="">
            <option value="" disabled>
              Choose...
            </option>
            <option>Yes</option>
            <option>No</option>
            <option>Not sure</option>
          </Select>
        </Field>
        <Field label="Interested in a package?" htmlFor="interestedPackage">
          <Select
            id="interestedPackage"
            name="interestedPackage"
            defaultValue=""
          >
            <option value="" disabled>
              Choose...
            </option>
            <option>Starter Accounting</option>
            <option>Compliance Package</option>
            <option>Growth Finance</option>
            <option>Managed Finance</option>
            <option>Not sure yet</option>
          </Select>
        </Field>
        <Field label="Interested in Meraki AI?" htmlFor="interestedAI">
          <Select id="interestedAI" name="interestedAI" defaultValue="">
            <option value="" disabled>
              Choose...
            </option>
            <option>Yes — explore plans</option>
            <option>Yes — bundled with accounting</option>
            <option>Not yet</option>
            <option>Tell me more</option>
          </Select>
        </Field>
        <Field
          label="Approximate monthly transactions"
          htmlFor="volume"
          className="sm:col-span-2"
        >
          <Select id="volume" name="volume" defaultValue="">
            <option value="" disabled>
              Choose a range...
            </option>
            <option>0–25</option>
            <option>26–75</option>
            <option>76–200</option>
            <option>200+</option>
            <option>Not sure</option>
          </Select>
        </Field>
        <Field
          label="How can we help?"
          htmlFor="message"
          required
          className="sm:col-span-2"
        >
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your business and what you're looking for..."
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-ink-500 max-w-md">
          By submitting this form you consent to Meraki contacting you about
          your inquiry. We do not share your details with third parties.
        </p>
        <Button type="submit" variant="primary" size="md">
          Send inquiry
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>
      {children}
    </div>
  );
}
