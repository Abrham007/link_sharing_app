import logoIcon from "/images/logo-devlinks-small.svg";
import Button from "../UI/Button/Button";
import Input from "../UI/Inputs/Input";

export default function CreatePage() {
  return (
    <main className="min-h-screen overflow-visiable flex flex-col gap-16 md:gap-[51px] md:justify-center md:items-center p-8 md:bg-LightGrey">
      <header className="flex gap-2 items-center">
        <img src={logoIcon} alt="devlinks logo" width={40} height={40} />
        <h1 className="text-xl text-DarkGrey">devlinks</h1>
      </header>

      <div className="md:w-[476px] flex flex-col gap-10 md:p-10 md:bg-White md:rounded-xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] leading-[2.25rem] font-bold md:text-xl text-DarkGrey">
            Create account
          </h2>
          <p className="text-base text-Grey">
            Let’s get you started sharing your links!
          </p>
        </div>

        <form className="flex flex-col gap-6">
          <Input
            icon="/images/icon-email.svg"
            label="Email address"
            name="email"
            placeholder="e.g. alex@email.com"
          ></Input>
          <Input
            icon="/images/icon-password.svg"
            label="Create password"
            name="createPassword"
            placeholder="At least .8 characters"
          ></Input>
          <Input
            icon="/images/icon-password.svg"
            label="Confirm password"
            name="confirmPassword"
            placeholder="At least .8 characters"
          ></Input>
          <p className="text-sm text-DarkGrey">
            Password must contain at least 8 characters
          </p>
          <Button kind="1">Login</Button>
          <p className="w-[70%] md:w-full text-base text-Grey self-center text-center">
            Already have an account?
            <a href="/" className="text-Purple">
              Create new account
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}
