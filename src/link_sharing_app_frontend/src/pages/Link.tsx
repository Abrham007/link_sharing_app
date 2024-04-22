import EmptyLinks from "../components/DashboardPage/LinkPage/EmptyLinks";
import Button from "../components/UI/Button/Button";
import { useForm, useFieldArray } from "react-hook-form";
import LinkItem from "../components/DashboardPage/LinkPage/LinkItem";
import { useAuth } from "../hooks/useAuth";
import { link_sharing_app_backend as backend } from "../../../declarations/link_sharing_app_backend";
import { useState, useEffect } from "react";
import { Principal } from "@dfinity/principal";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import { UserData } from "../interface/UserData";
import { LinkType } from "../interface/LinkType";
import { useUserData } from "../hooks/useUserData";
import Message from "../components/Message";

export default function LinkPage() {
  const { principal } = useAuth();
  const { userData, setUserData, getUserData } = useUserData();
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openMessage, setOpenMessage] = useState<{
    text: string;
    error: boolean;
  } | null>(null);

  let defaultValue: { links: LinkType[] } = {
    links: userData?.links ?? [],
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

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "links",
  });

  const watchItems = watch("links");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchItems[index],
    };
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name && value) {
        setUserData((prevValue: UserData) => {
          return {
            ...prevValue,
            links: value.links,
          };
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    async function fetchUserData() {
      setIsLoading(true);
      const { links } = await getUserData();
      replace(links);
      setIsLoading(false);
    }
    if (!userData) {
      fetchUserData();
    }
  }, []);

  async function onSubmit(data: any) {
    console.log(data.links);
    try {
      setIsSending(true);
      let response = await backend.addLinks(principal, data.links);
      console.log(response);
      setIsSending(false);
      setOpenMessage({
        text: "Your changes have been successfully saved!",
        error: false,
      });
    } catch (error) {
      setOpenMessage({
        text: "Your changes could not be saved!. Please try again",
        error: true,
      });
    }
  }

  function handleCloseMessage() {
    setOpenMessage(null);
  }

  function handleAdd() {
    append({ id: "link-1", href: "" });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:flex-1 w-full lg:max-w-[808px] max-h-[834px] bg-White rounded-xl"
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
        {!isLoading && controlledFields.length > 0 && (
          <ul className="h-[510px] flex flex-col gap-6 pb-6 overflow-auto shrink-0">
            {controlledFields?.map((field, index) => (
              <LinkItem
                key={index}
                field={field}
                index={index}
                register={register}
                errors={errors}
                remove={remove}
                control={control}
              ></LinkItem>
            ))}
          </ul>
        )}
        {isLoading && <EmptyLinks purpose="loading"></EmptyLinks>}
        {!isLoading && fields.length === 0 && <EmptyLinks></EmptyLinks>}
      </div>

      <div className="flex md:justify-end p-4 md:px-10 md:py-6  border-t border-t-solid border-Borders">
        <Button kind="1" className="w-full md:w-min" disabled={isSending}>
          {isSending ? "Saving..." : "Save"}
        </Button>
      </div>

      {openMessage && (
        <Message
          icon="/images/icon-changes-saved.svg"
          text={openMessage.text}
          error={openMessage.error}
          handleCloseMessage={handleCloseMessage}
        ></Message>
      )}
    </form>
  );
}
