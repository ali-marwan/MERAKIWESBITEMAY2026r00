import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "ink-ghost";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  fullWidth?: boolean;
}

function classes(variant: Variant, size: Size, fullWidth?: boolean) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";
  const sizes: Record<Size, string> = {
    sm: "h-11 px-5 text-sm",
    md: "h-13 px-6 text-base h-[52px]",
    lg: "h-15 px-8 text-base h-[60px]",
  };
  const variants: Record<Variant, string> = {
    primary:
      "bg-bronze-500 text-paper hover:bg-bronze-600 active:bg-bronze-700 shadow-bronze hover:-translate-y-px",
    secondary:
      "bg-ink-900 text-paper hover:bg-ink-800 active:bg-ink-700 shadow-soft",
    ghost:
      "border border-ink-900/15 bg-transparent text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-paper",
    outline:
      "border-2 border-bronze-500 text-bronze-700 bg-transparent hover:bg-bronze-50",
    "ink-ghost":
      "border border-paper/25 bg-transparent text-paper hover:bg-paper hover:text-ink-900",
  };
  return cn(base, sizes[size], variants[variant], fullWidth && "w-full");
}

interface ButtonAsLinkProps
  extends CommonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> {
  href: string;
}

interface ButtonAsButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    iconLeft,
    iconRight,
    fullWidth,
    ...rest
  } = props;
  const cls = cn(classes(variant, size, fullWidth), className);
  if ("href" in rest && rest.href) {
    // `disabled` is not a valid attribute on <a>/<Link>; strip it from the
    // spread and translate it to aria-disabled + pointer-events-none so the
    // anchor still looks/behaves disabled.
    const {
      href,
      disabled,
      ...anchorRest
    } = rest as ButtonAsLinkProps & { disabled?: boolean };
    const disabledClass = disabled
      ? "opacity-50 pointer-events-none cursor-not-allowed"
      : "";
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={disabled ? undefined : href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(cls, disabledClass)}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : undefined}
          {...anchorRest}
        >
          {iconLeft}
          {children}
          {iconRight}
        </a>
      );
    }
    return (
      <Link
        href={disabled ? "#" : href}
        className={cn(cls, disabledClass)}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...anchorRest}
      >
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    );
  }
  return (
    <button
      className={cls}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      aria-hidden="true"
    >
      <path
        d="M4 10h12m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
