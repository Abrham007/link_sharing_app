import Image from "next/image";
export default function Dropdown() {
  return (
    <div>
      <button className="flex gap-3 items-center px-4 py-3 text-base text-DarkGrey bg-White border border-solid border-Borders hover:border-Purple cursor-pointer">
        <Image
          src="/images/icon-links.svg"
          alt=""
          width={16}
          height={16}
        ></Image>
        <span>Dropdown Field Default</span>
        <Image
          src="/images/icon-arrow-right.svg"
          alt=""
          width={16}
          height={16}
          className="ml-auto rotate-45"
        ></Image>
      </button>
      <ul className="flex flex-col px-4" aria-live="polite">
        <li className="py-3 text-base text-DarkGrey border-b border-b-solid border-Borders">
          Item 1
        </li>
        <li className="py-3 text-base text-DarkGrey border-b border-b-solid border-Borders">
          Item 2
        </li>
        <li className="py-3 text-base text-DarkGrey border-b border-b-solid border-Borders">
          Item 3
        </li>
      </ul>
    </div>
  );
}
