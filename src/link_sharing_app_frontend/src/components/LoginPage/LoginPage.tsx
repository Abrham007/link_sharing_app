import logoIcon from "/images/logo-devlinks-small.svg";
import Button from "../UI/Button/Button";
import Input from "../UI/Inputs/Input";

export default function LoginPage() {
  return (
    <main className=" flex flex-col gap-16 md:gap-[51px] md:justify-center md:items-center p-8 md:bg-LightGrey">
      <header className="flex gap-2 items-center">
        <img src={logoIcon} alt="devlinks logo" width={40} height={40} />
        <h1 className="text-xl text-DarkGrey">devlinks</h1>
      </header>

      <section className="md:w-[476px] flex flex-col gap-10 md:p-10 md:bg-White md:rounded-xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] leading-[2.25rem] font-bold md:text-xl text-DarkGrey">
            Login
          </h2>
          <p className="text-base text-Grey">
            Add your details below to get back into the app
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
            label="Password"
            name="password"
            placeholder="Enter your password"
          ></Input>
          <Button kind="1">Login</Button>
          <p className="w-[70%] md:w-full text-base text-Grey self-center text-center">
            Don’t have an account?
            <a href="/" className="text-Purple">
              Create account
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}
