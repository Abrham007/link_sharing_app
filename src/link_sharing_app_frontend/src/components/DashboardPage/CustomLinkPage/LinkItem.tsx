import Dropdown from "../../UI/Inputs/Dropdown";
import Input from "../../UI/Inputs/Input";

export default function LinkItem() {
  return (
    <li className="flex flex-col gap-3 p-5 bg-LightGrey rounded-xl">
      <div className="flex justify-between">
        <h2 className="flex gap-2 text-lg text-Grey font-bold ">
          <img src="/images/icon-drag-and-drop.svg" alt="" />
          <span>Link #1</span>
        </h2>
        <button className="text-base text-Grey bg-transparent">Remove</button>
      </div>
      <Dropdown label="Platform" icon="/images/icon-github.svg"></Dropdown>
      <Input
        label="Link"
        name="link"
        placeholder="e.g. https://www.github.com/johnappleseed"
        icon="/images/icon-link.svg"
      ></Input>
    </li>
  );
}
