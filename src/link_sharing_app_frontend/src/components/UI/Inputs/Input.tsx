import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  icon?: string;
  index: number;
  register: any;
  errors: any;
  validation: any;
}

export default function Input({
  label,
  name,
  icon,
  index,
  register,
  errors,
  validation = {
    required: { value: true, message: "Can’t be empty" },
  },
  ...props
}: InputProps) {
  let errorObj = errors?.links?.[index]?.[name];
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <label htmlFor={name} className="text-sm text-DarkGrey">
        {label}
      </label>
      <div
        className={`flex gap-3 items-center px-4 py-3 bg-White border-[1px] border-solid  ${
          errorObj ? "border-Red" : "border-Borders"
        } hover:border-Purple rounded-lg`}
      >
        {icon && <img src={icon} alt="" width={16} height={16}></img>}
        <input
          {...props}
          id={name}
          type="text"
          className={`w-full text-base ${
            errorObj ? "text-Red" : "text-DarkGrey"
          }  bg-transparent border-none outline-none`}
          {...register(`links.${index}.href`, validation)}
        />
        {errorObj && (
          <span className="ml-auto text-sm text-Red shrink-0">
            {errorObj?.message}
          </span>
        )}
      </div>
    </div>
  );
}
