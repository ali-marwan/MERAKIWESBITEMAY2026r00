import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAED(amount: number, opts?: { showCurrency?: boolean }) {
  const showCurrency = opts?.showCurrency ?? true;
  const formatted = new Intl.NumberFormat("en-AE", {
    maximumFractionDigits: 0,
  }).format(amount);
  return showCurrency ? `AED ${formatted}` : formatted;
}

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
