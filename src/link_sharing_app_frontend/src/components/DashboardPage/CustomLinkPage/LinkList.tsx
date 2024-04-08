import LinkItem from "./LinkItem";

export default function LinkList() {
  return (
    <ul className="h-[510px] flex flex-col gap-6 pb-6 overflow-auto shrink-0">
      <LinkItem></LinkItem>
      <LinkItem></LinkItem>
      <LinkItem></LinkItem>
    </ul>
  );
}
