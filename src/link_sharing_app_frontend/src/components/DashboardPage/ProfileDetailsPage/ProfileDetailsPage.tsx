import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../UI/Button/Button";
import ProfileInputs from "./ProfileInputs";
import { useForm } from "react-hook-form";
import { link_sharing_app_backend as backend } from "../../../../../declarations/link_sharing_app_backend";
import { Principal } from "@dfinity/principal";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { UserData } from "../../../interface/UserData";
import { useUserData } from "../../../hooks/useUserData";
import Message from "../../Message";

export default function ProfileDetailsPage() {
  const { principal } = useAuth();
  const [isSending, setIsSending] = useState(false);
  const { userData, setUserData } = useUserData();
  const [openMessage, setOpenMessage] = useState<{
    text: string;
    error: boolean;
  } | null>(null);

  const defaultValue = userData?.profile ?? {
    firstName: "",
    lastName: "",
    email: "",
    profilePic: [],
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValue,
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name && value) {
        setUserData((prevValue: UserData) => {
          return {
            ...prevValue,
            profile: {
              ...prevValue.profile,
              [name]: value[name],
            },
          };
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  async function onSubmit(data: any) {
    try {
      setIsSending(true);
      data.profilePic = userData.profile.profilePic;
      await backend.addProfile(principal, data);
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:flex-1 w-full lg:max-w-[808px] h-auto lg:h-[834px] bg-White rounded-xl"
    >
      <div className="flex flex-col gap-10 p-6 pb-0 md:p-9 md:pb-0 lg:p-10 lg:pb-0">
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] leading-[2.25rem] font-bold md:text-xl text-DarkGrey">
            Profile Details
          </h2>
          <p className="text-base text-Grey">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <ProfileInputs
          register={register}
          errors={errors}
          control={control}
        ></ProfileInputs>
      </div>

      <div className="flex md:justify-end p-4 md:px-10 md:py-6 border-t border-t-solid border-Borders">
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
