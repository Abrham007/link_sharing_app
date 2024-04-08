import Button from "../../UI/Button/Button";
import ProfileForm from "./ProfileForm";

export default function ProfileDetailsPage() {
  return (
    <div className="lg:flex-1 w-full  lg:max-w-[808px] h-[834px] bg-White rounded-xl">
      <div className="flex flex-col gap-10 p-6 pb-0 md:p-10 md:pb-0">
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] leading-[2.25rem] font-bold md:text-xl text-DarkGrey">
            Profile Details
          </h2>
          <p className="text-base text-Grey">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <ProfileForm></ProfileForm>
      </div>

      <div className="flex md:justify-end p-4 md:px-10 md:py-6 border-t border-t-solid border-Borders">
        <Button kind="1" className="w-full md:w-min">
          Save
        </Button>
      </div>
    </div>
  );
}
