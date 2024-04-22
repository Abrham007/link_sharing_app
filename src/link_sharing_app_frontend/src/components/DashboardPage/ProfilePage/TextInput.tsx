import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: any;
  error: any;
  validation?: any;
}

export default function TextInput({
  label,
  name,
  register,
  error,
  validation,
  ...props
}: InputProps) {
  return (
    <div className=" flex flex-col md:flex-row gap-1 md:items-center md:justify-between">
      <label htmlFor={name} className="text-sm md:text-base text-Grey">
        {label}
      </label>
      <div
        className={`md:w-[344px] xl:w-[432px] flex gap-3 items-center px-4 py-3 bg-White border-[1px] border-solid border-Borders ${
          error ? "border-Red" : "border-Borders"
        } hover:border-Purple rounded-lg cursor-pointer`}
      >
        <input
          {...props}
          id={name}
          type="text"
          className={`w-full text-base ${
            error ? "text-Red" : "text-DarkGrey"
          } bg-transparent border-none outline-none`}
          {...register(`${name}`, validation)}
        />
        {error && (
          <span className="ml-auto text-sm text-Red shrink-0">
            {error.message}
          </span>
        )}
      </div>
    </div>
  );
}
