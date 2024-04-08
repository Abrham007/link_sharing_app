import React from "react";
import { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  kind: string;
  className?: string;
}
export default function Link({ children, href, kind, className }: ButtonProps) {
  switch (kind) {
    case "1":
      return (
        <a
          href={href}
          className={`flex justify-center items-center px-[27px] py-[11px] text-lg text-White bg-Purple rounded-lg hover:bg-LightPurple ${className}`}
        >
          {children}
        </a>
      );
    case "2":
      return (
        <a
          href={href}
          className={`px-[27px] py-[11px] text-lg text-Purple bg-transparent hover:bg-LightPurple rounded-lg border border-solid border-Purple ${className}`}
        >
          {children}
        </a>
      );
    default:
      return (
        <a
          href="/"
          className={`w-full px-[27px] py-[11px] text-lg text-White bg-Purple rounded-lg hover:bg-LightPurple ${className}`}
        >
          {children}
        </a>
      );
  }
}
