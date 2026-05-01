import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { PackagesPreview } from "@/components/sections/PackagesPreview";
import { LeadOffer } from "@/components/sections/LeadOffer";
import { MerakiAIPreview } from "@/components/sections/MerakiAIPreview";
import { EInvoicingTeaser } from "@/components/sections/EInvoicingTeaser";
import { WhyMeraki } from "@/components/sections/WhyMeraki";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { FAQSection } from "@/components/shared/FAQSection";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HOMEPAGE_FAQS } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: undefined,
  description:
    "Enterprise-Level Business Support, Made Accessible to UAE Companies. Accounting, tax, compliance, business setup, cash-flow management, and AI-assisted workflows in one connected system. One system. One team. One standard.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <ServicePillars />
      <PackagesPreview />
      <LeadOffer />
      <MerakiAIPreview />
      <EInvoicingTeaser />
      <WhyMeraki />
      <HowItWorks />
      <InsightsPreview />
      <FAQSection faqs={HOMEPAGE_FAQS} bg="cream" />
      <ContactCTA />
      <FinalCTA />
    </>
  );
}
