import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "pro" | "narrow" | "flush";
}

export function Container({
  size = "pro",
  className,
  children,
  ...rest
}: ContainerProps) {
  const sizeClass =
    size === "pro"
      ? "mx-auto w-full max-w-screen-pro 2xl:max-w-screen-pro-xl px-6 md:px-10 lg:px-14"
      : size === "narrow"
        ? "mx-auto w-full max-w-[1100px] px-6 md:px-10"
        : "w-full px-6 md:px-10 lg:px-14";
  return (
    <div className={cn(sizeClass, className)} {...rest}>
      {children}
    </div>
  );
}
