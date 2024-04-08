import { LinkList } from "../../util/linkList";
export default function PreviewItem({ id }: { id: number }) {
  const link = LinkList.find((link) => link.id === id);

  if (!link) {
    return;
  }

  return (
    <li
      className={`w-[237px] flex gap-2 items-center p-4 rounded-xl border border-solid border-Borders`}
      style={{ backgroundColor: link.color }}
    >
      <div
        className={`${link.id === 2 ? "bg-[#737373]" : "bg-White"} w-5 h-5`}
        style={{ mask: `url(${link.icon}) no-repeat center` }}
      ></div>
      <span
        className="text-base text-White"
        style={{ color: link.id === 2 ? "#333" : "#FFF" }}
      >
        {link.title}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        className="ml-auto"
        style={{ fill: link.id === 2 ? "#333" : "#FFF" }}
      >
        <path d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z" />
      </svg>
    </li>
  );
}