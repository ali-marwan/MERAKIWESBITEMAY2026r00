import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { Icon, type IconName } from "@/components/ui/Icon";

const FLOW = [
  { key: "start", title: "Start", icon: "start" },
  { key: "manage", title: "Manage", icon: "manage" },
  { key: "comply", title: "Comply", icon: "comply" },
  { key: "control", title: "Control", icon: "control" },
  { key: "automate", title: "Automate", icon: "automate" },
  { key: "review", title: "Review", icon: "eye" },
] satisfies Array<{ key: string; title: string; icon: IconName }>;

export function Solution() {
  return (
    <Section bg="paper">
      <Container size="pro">
        <div className="max-w-3xl">
          <Eyebrow>The Meraki way</Eyebrow>
          <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
            One connected system for business finance, tax, and compliance.
          </h2>
          <p className="mt-6 text-lead text-ink-500">
            Not separate services. One connected business support system. From
            setup to records, compliance, reports, and AI-assisted workflows —
            Meraki keeps your business organized under one standard.
          </p>
        </div>

        <div className="mt-14 lg:mt-16">
          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-[8%] right-[8%] top-[28px] h-px bg-hairline"
            />
            {FLOW.map((step, i) => (
              <div key={step.key} className="relative">
                <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl bg-paper border border-border shadow-soft flex items-center justify-center text-bronze-700">
                      <Icon name={step.icon} className="h-6 w-6" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center h-5 w-5 rounded-full bg-ink-900 text-paper text-[10px] font-bold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 text-base font-semibold text-ink-900">
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
