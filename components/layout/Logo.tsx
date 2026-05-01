import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  withWordmark?: boolean;
}

export function Logo({
  className,
  variant = "dark",
  withWordmark = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Meraki Business Consultants — Home"
      className={cn(
        "inline-flex items-center gap-3 group",
        variant === "light" ? "text-paper" : "text-ink-900",
        className,
      )}
    >
      <span className="relative inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-bronze-50 to-bronze-100 border border-bronze-200 overflow-hidden shrink-0">
        <Image
          src="/logo/merakilogo.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
          priority
        />
      </span>
      {withWordmark && (
        <span className="leading-tight">
          <span className="block font-display text-[1.0625rem] font-bold tracking-tight">
            Meraki
          </span>
          <span
            className={cn(
              "block text-[0.6875rem] font-medium tracking-[0.14em] uppercase",
              variant === "light" ? "text-paper/70" : "text-ink-500",
            )}
          >
            Business Consultants
          </span>
        </span>
      )}
    </Link>
  );
}
