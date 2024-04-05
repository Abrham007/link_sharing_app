import React from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  kind: string;
}
export default function Button({ children, kind }: ButtonProps) {
  switch (kind) {
    case "1":
      return (
        <button className="px-[27px] py-[11px] text-lg text-White bg-Purple rounded-lg hover:bg-LightPurple">
          {children}
        </button>
      );
    case "2":
      return (
        <button className="px-[27px] py-[11px] text-lg text-Purple bg-transparent hover:bg-LightPurple rounded-lg border border-solid border-Purple">
          {children}
        </button>
      );
    default:
      return (
        <button className="px-[27px] py-[11px] text-lg text-White bg-Purple rounded-lg hover:bg-LightPurple">
          {children}
        </button>
      );
  }
}
