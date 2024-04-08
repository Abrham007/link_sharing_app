export default function Dropdown({
  label,
  icon,
}: {
  label: string;
  icon: string;
}) {
  return (
    <div className="flex flex-col gap-1 ">
      <p className="text-sm text-DarkGrey">{label}</p>
      <div className="">
        <button className="w-full flex gap-3 items-center px-4 py-3 text-base text-DarkGrey bg-White border border-solid border-Borders hover:border-Purple rounded-lg cursor-pointer">
          <img src={icon} alt="" width={16} height={16}></img>
          <span>GitHub</span>
          <img
            src="/images/icon-chevron-down.svg"
            alt=""
            width={16}
            height={16}
            className="ml-auto rotate-0"
          ></img>
        </button>
        <ul className="hidden xl:flex flex-col px-4" aria-live="polite">
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
    </div>
  );
}
