import { Controller } from "react-hook-form";
import Dropdown from "../../UI/Inputs/Dropdown";
import Input from "../../UI/Inputs/Input";
import { useState } from "react";
import { LinkList } from "../../../util/linkList";

export default function LinkItem({
  index,
  register,
  errors,
  remove,
  control,
}: {
  index: number;
  register: any;
  errors: any;
  remove: (i: number) => void;
  control: any;
}) {
  const [linkId, setLinkId] = useState(1);

  let linkTitle = LinkList.find(
    (link) => link.id === linkId
  )?.title.toLowerCase();

  function handleLinkId(id: number) {
    setLinkId(id);
  }
  return (
    <li className="flex flex-col gap-3 p-5 bg-LightGrey rounded-xl">
      <div className="flex justify-between">
        <h2 className="flex gap-2 text-lg text-Grey font-bold ">
          <img src="/images/icon-drag-and-drop.svg" alt="" />
          <span>Link #{index + 1}</span>
        </h2>
        <button
          onClick={() => {
            remove(index);
          }}
          className="text-base text-Grey bg-transparent"
        >
          Remove
        </button>
      </div>
      <Controller
        control={control}
        name={`links.${index}.id`}
        render={({ field }) => (
          <Dropdown
            label="Platform"
            value={field.value}
            onChange={field.onChange}
            handleLinkId={handleLinkId}
          ></Dropdown>
        )}
      ></Controller>

      <Input
        label="Link"
        name="href"
        placeholder="e.g. https://www.github.com/johnappleseed"
        icon="/images/icon-link.svg"
        index={index}
        register={register}
        errors={errors}
        validation={{
          required: { value: true, message: "Can’t be empty" },
          validate: (value: any, formValues: any) => {
            let urlPattern = new RegExp(
              `https?://(www\\.)?(${linkTitle})\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)`
            );

            if (!urlPattern.test(value)) {
              return "Please check the URL";
            }
            return true;
          },
        }}
      ></Input>
    </li>
  );
}
