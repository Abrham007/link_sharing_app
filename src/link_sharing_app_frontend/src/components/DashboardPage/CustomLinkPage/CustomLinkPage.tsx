import EmptyLinks from "./EmptyLinks";
import Button from "../../UI/Button/Button";
import { useForm, useFieldArray } from "react-hook-form";
import LinkItem from "./LinkItem";
import { useAuth } from "../../../hooks/useAuth";
import { link_sharing_app_backend as backend } from "../../../../../declarations/link_sharing_app_backend";
import { useState } from "react";
import { Principal } from "@dfinity/principal";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import { UserData } from "../../../interface/UserData";
import { LinkType } from "../../../interface/LinkType";

export default function CustomLinkPage() {
  const { user } = useAuth();
  const [isSending, setIsSending] = useState(false);
  const data: UserData | any = useRouteLoaderData("user-data");
  console.log(data);

  const defaultValue: { links: LinkType[] } = {
    links: data?.links ?? [],
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValue,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  async function onSubmit(data: any) {
    console.log(data.links);
    try {
      setIsSending(true);
      if (!user) return;
      let principal: any = Principal.fromText(user);
      let response = await backend.addLinks(principal, data.links);
      console.log(response);
      setIsSending(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleAdd() {
    append({ id: "link-1", href: "" });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:flex-1 lg:max-w-[808px] max-h-[834px] bg-White rounded-xl"
    >
      <div className="flex flex-col gap-6 p-6 pb-0 md:p-10 md:pb-0">
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-2">
            <h2 className="text-[1.5rem] leading-[2.25rem] font-bold md:text-xl text-DarkGrey">
              Customize your links
            </h2>
            <p className="md:min-w-max text-base text-Grey">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <Button type="button" onClick={handleAdd} kind="2">
            + Add new link
          </Button>
        </div>
        {fields.length > 0 ? (
          <ul className="h-[510px] flex flex-col gap-6 pb-6 overflow-auto shrink-0">
            {fields?.map((field, index) => (
              <LinkItem
                key={field.id}
                index={index}
                register={register}
                errors={errors}
                remove={remove}
                control={control}
              ></LinkItem>
            ))}
          </ul>
        ) : (
          <EmptyLinks></EmptyLinks>
        )}
      </div>

      <div className="flex md:justify-end p-4 md:px-10 md:py-6  border-t border-t-solid border-Borders">
        <Button kind="1" className="w-full md:w-min" disabled={isSending}>
          {isSending ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
}
