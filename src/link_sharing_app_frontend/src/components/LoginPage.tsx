import Input from "./UI/Inputs/Input";
import { Link, useNavigate } from "react-router-dom";
import { link_sharing_app_backend as backend } from "../../../declarations/link_sharing_app_backend";
import { AuthClient } from "@dfinity/auth-client";
import Button from "./UI/Button/Button";
import { useAuth } from "../hooks/useAuth";
import { Principal } from "@dfinity/principal";
import { connectToNFID } from "../util/nfid";
import { connectToInternetIdentity } from "../util/internetidentity";
import { FormSubmitHandler } from "react-hook-form";

export default function LoginPage() {
  const { loginWithNFID, loginWithInternetIdentity, userActor, principal } =
    useAuth();
  const navigate = useNavigate();

  async function connectWithInternetIdentity(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    await loginWithInternetIdentity();
  }

  async function connectWithNFID(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    await loginWithNFID();

    let userResponse = await backend.hasAccount(principal);

    if (userResponse) {
      navigate("/dashboard/links");
    } else {
      navigate("/create-account");
    }
  }

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

      <div className="flex flex-col gap-6">
        {false && <p className="text-base text-Grey">Sending...</p>}
        <form onSubmit={connectWithNFID}>
          <Button
            kind="1"
            className="flex gap-3 items-center justify-center"
            disabled={false}
          >
            <img
              src="https://nfid.one/icons/favicon-96x96.png"
              alt=""
              width={20}
              height={20}
            />
            Continue with Email
          </Button>
        </form>

        <form onSubmit={connectWithInternetIdentity}>
          <Button
            kind="2"
            className="flex gap-3 items-center justify-center"
            disabled={false}
          >
            <img
              src="https://cryptologos.cc/logos/internet-computer-icp-logo.svg?v=029"
              alt=""
              width={20}
              height={20}
            />
            Continue with Internet Identity
          </Button>
        </form>

        <p className="w-[70%] md:w-full text-base text-Grey self-center text-center">
          Don’t have an account?
          <a href="/create-account" className="text-Purple">
            Create account
          </a>
        </p>
      </div>
    </main>
  );
}
