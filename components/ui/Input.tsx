import { cn } from "@/lib/utils";
import {
  forwardRef,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...rest }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-xl border border-hairline bg-paper px-4 text-body text-ink-900 placeholder:text-ink-300 transition focus:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500/20",
        className,
      )}
      {...rest}
    />
  );
});

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...rest }, ref) {
  return (
    <textarea
      ref={ref}
      rows={4}
      className={cn(
        "w-full rounded-xl border border-hairline bg-paper px-4 py-3 text-body text-ink-900 placeholder:text-ink-300 transition focus:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500/20",
        className,
      )}
      {...rest}
    />
  );
});

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, children, ...rest }, ref) {
  return (
    <select
      ref={ref}
      className={cn(
        "h-12 w-full rounded-xl border border-hairline bg-paper px-4 pr-10 text-body text-ink-900 transition focus:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500/20",
        className,
      )}
      {...rest}
    >
      {children}
    </select>
  );
});

export function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-ink-700 mb-2"
    >
      {children}
      {required && <span className="text-bronze-700 ml-0.5">*</span>}
    </label>
  );
}
