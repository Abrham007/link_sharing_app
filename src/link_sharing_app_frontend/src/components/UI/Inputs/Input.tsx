import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  icon: string;
}

export default function Input({ label, name, icon, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <label htmlFor={name} className="text-sm text-DarkGrey">
        {label}
      </label>
      <div className="flex gap-3 items-center px-4 py-3 bg-White border-[1px] border-solid border-Borders hover:border-Purple rounded-lg">
        <img src={icon} alt="" width={16} height={16}></img>
        <input
          {...props}
          id={name}
          type="text"
          className="w-full text-base text-DarkGrey bg-transparent"
        />
        {false && (
          <span className="ml-auto text-sm text-Red shrink-0">
            Please check again
          </span>
        )}
      </div>
    </div>
  );
}
