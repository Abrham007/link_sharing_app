import { useState } from "react";
import { LinkList } from "../../../util/linkList";

export default function Dropdown({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (newId: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  let activeLink = LinkList.find((link) => link.id === value);

  function toggleDropdown() {
    setIsOpen((prevValue) => !prevValue);
  }

  function handleClick(newId: number) {
    onChange(newId);
    setIsOpen(false);
  }
  return (
    <div className="flex flex-col gap-1 ">
      <p className="text-sm text-DarkGrey">{label}</p>
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className={`w-full flex gap-3 items-center px-4 py-3 text-base text-DarkGrey bg-White border border-solid border-Borders hover:border-Purple ${
            isOpen ? "border-Purple" : "border-Borders"
          } rounded-lg cursor-pointer`}
        >
          <img src={activeLink?.icon} alt="" width={16} height={16}></img>
          <span>{activeLink?.title}</span>
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
          } max-h-[343px] overflow-auto absolute top-[60px] left-0 right-0 z-10 flex-col px-4 bg-White rounded-lg border border-solid border-Borders md:shadow-[0_0px_32px_0px_rgba(0,0,0,0.10)]`}
          aria-live="polite"
        >
          {LinkList.map((link, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => handleClick(link.id)}
                className="w-full group flex gap-3 items-center py-3 border-b border-b-solid border-Borders cursor-pointer"
              >
                <div
                  className={`w-4 h-4 bg-[#737373] group-hover:bg-Purple`}
                  style={{ mask: `url(${link.icon}) no-repeat center` }}
                ></div>
                <span className="text-base text-DarkGrey group-hover:text-Purple">
                  {link.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
