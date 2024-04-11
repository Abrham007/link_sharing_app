import React from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  kind: string;
  className?: string;
}
export default function Button({ children, kind, className }: ButtonProps) {
  switch (kind) {
    case "1":
      return (
        <button
          className={`w-full px-3 py-[11px] text-lg text-White bg-Purple rounded-lg hover:bg-LightPurple ${className}`}
        >
          {children}
        </button>
      );
    case "2":
      return (
        <button
          className={`w-full px-3 py-[11px] text-lg text-Purple bg-transparent hover:bg-LightPurple rounded-lg border border-solid border-Purple ${className}`}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className={`w-full px-[27px] py-[11px] text-lg text-White bg-Purple rounded-lg hover:bg-LightPurple ${className}`}
        >
          {children}
        </button>
      );
  }
}
