"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Faq } from "@/lib/types";

interface FAQSectionProps {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
  bg?: "paper" | "cream";
}

export function FAQSection({
  faqs,
  title = "Common questions.",
  eyebrow = "FAQ",
  bg = "paper",
}: FAQSectionProps) {
  return (
    <Section bg={bg}>
      <Container size="pro">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-display-md text-ink-900 text-balance">
              {title}
            </h2>
            <p className="mt-4 text-body text-ink-500">
              Don&apos;t see your question?{" "}
              <a
                href="/contact"
                className="text-bronze-700 font-semibold hover:underline"
              >
                Speak to our team
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-hairline border-t border-hairline">
              {faqs.map((faq, i) => (
                <FAQItem key={faq.q} faq={faq} defaultOpen={i === 0} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FAQItem({ faq, defaultOpen }: { faq: Faq; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-6 py-5 text-left group"
      >
        <span className="text-base sm:text-lg font-semibold text-ink-900 group-hover:text-bronze-700 transition">
          {faq.q}
        </span>
        <span
          className={cn(
            "shrink-0 mt-1 h-7 w-7 rounded-pill border border-hairline text-ink-700 inline-flex items-center justify-center transition-transform",
            open ? "rotate-45 bg-bronze-50 border-bronze-200 text-bronze-700" : "",
          )}
          aria-hidden="true"
        >
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-[420px] opacity-100 pb-6" : "max-h-0 opacity-0",
        )}
      >
        <p className="text-body text-ink-500 leading-relaxed max-w-3xl">
          {faq.a}
        </p>
      </div>
    </li>
  );
}
