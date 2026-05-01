import { Container } from "@/components/ui/Container";
import { TRUST_STRIP_LABELS } from "@/data/services";

export function TrustStrip() {
  return (
    <div className="border-y border-hairline bg-paper">
      <Container size="pro">
        <div className="py-9 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
          <p className="text-eyebrow uppercase text-ink-500 shrink-0">
            One connected system across
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {TRUST_STRIP_LABELS.map((label, i) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm font-semibold text-ink-700"
              >
                {i > 0 && <span className="h-1 w-1 rounded-full bg-hairline" />}
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
