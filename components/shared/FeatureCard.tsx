import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";

interface FeatureCardProps {
  icon: IconName;
  title: string;
  body: string;
  className?: string;
}

export function FeatureCard({ icon, title, body, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-paper p-6 hover:shadow-soft transition",
        className,
      )}
    >
      <div className="h-10 w-10 rounded-xl bg-bronze-50 border border-bronze-100 text-bronze-700 flex items-center justify-center">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <p className="mt-5 text-base font-semibold text-ink-900">{title}</p>
      <p className="mt-2 text-body-sm text-ink-500 leading-relaxed">{body}</p>
    </div>
  );
}
