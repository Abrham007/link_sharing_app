import { LinkList } from "../../util/linkList";
export default function PreviewItem({
  id,
  page = "preview",
}: {
  id: string;
  page?: string;
}) {
  const link = LinkList.find((link) => link.id === id);

  if (!link) {
    return;
  }

  return (
    <li
      className={`w-[237px] flex gap-2 items-center ${
        page === "preview" ? "p-4 rounded-xl" : "px-4 py-[11px] rounded-lg"
      }   border border-solid border-Borders`}
      style={{ backgroundColor: link.color }}
    >
      <div
        className={`${
          link.id === "link-2" ? "bg-[#737373]" : "bg-White"
        } w-5 h-5`}
        style={{ mask: `url(${link.icon}) no-repeat center` }}
      ></div>
      <span
        className={`${page === "preview" ? "text-base" : "text-sm"} text-White`}
        style={{ color: link.id === "link-2" ? "#333" : "#FFF" }}
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
        style={{ fill: link.id === "link-2" ? "#333" : "#FFF" }}
      >
        <path d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z" />
      </svg>
    </li>
  );
}
