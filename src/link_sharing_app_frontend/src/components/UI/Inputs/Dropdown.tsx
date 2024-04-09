import { useState } from "react";

export default function Dropdown({
  label,
  icon,
}: {
  label: string;
  icon: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen((prevValue) => !prevValue);
  }
  return (
    <div className="flex flex-col gap-1 ">
      <p className="text-sm text-DarkGrey">{label}</p>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className={`w-full flex gap-3 items-center px-4 py-3 text-base text-DarkGrey bg-White border border-solid border-Borders hover:border-Purple ${
            isOpen ? "border-Purple" : "border-Borders"
          } rounded-lg cursor-pointer`}
        >
          <img src={icon} alt="" width={16} height={16}></img>
          <span>GitHub</span>
          <img
            src="/images/icon-chevron-down.svg"
            alt=""
            width={16}
            height={16}
            className={`ml-auto ${isOpen ? "rotate-180" : "rotate-0"} `}
          ></img>
        </button>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } max-h-[343px] absolute top-[60px] left-0 right-0 flex-col px-4 bg-White rounded-lg border border-solid border-Borders md:shadow-[0_0px_32px_0px_rgba(0,0,0,0.10)]`}
          aria-live="polite"
        >
          <li>
            <button
              onClick={toggleDropdown}
              className="w-full group flex gap-3 items-center py-3 border-b border-b-solid border-Borders cursor-pointer"
            >
              <div
                className={`w-4 h-4 bg-[#737373] group-hover:bg-Purple`}
                style={{ mask: `url(${icon}) no-repeat center` }}
              ></div>
              <span className="text-base text-DarkGrey group-hover:text-Purple">
                Item 1
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
