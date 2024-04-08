import Input from "./UI/Inputs/Input";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="md:w-[476px] flex flex-col gap-10 md:p-10 md:bg-White md:rounded-xl">
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

        <Link
          to=""
          className={`flex justify-center items-center px-[27px] py-[11px] text-lg text-White bg-Purple rounded-lg hover:bg-LightPurple`}
        >
          Login
        </Link>

        <p className="w-[70%] md:w-full text-base text-Grey self-center text-center">
          Don’t have an account?
          <a href="/create-account" className="text-Purple">
            Create account
          </a>
        </p>
      </form>
    </main>
  );
}
