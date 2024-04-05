import Image from "next/image";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  return (
    <label className="flex gap-3 px-4 py-3 bg-White border border-solid border-Borders hover:border-Purple cursor-pointer">
      <Image src="/images/icon-links.svg" alt="" width={16} height={16}></Image>
      <input
        {...props}
        type="text"
        className="w-full text-base text-DarkGrey"
      />
      <span className="ml-auto text-sm text-Red shrink-0">
        Please check again
      </span>
    </label>
  );
}
