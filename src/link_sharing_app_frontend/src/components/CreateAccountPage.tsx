import logoIcon from "/images/logo-devlinks-small.svg";
import Button from "./UI/Button/Button";
import Input from "./UI/Inputs/Input";
import { Link } from "react-router-dom";
import { AuthClient } from "@dfinity/auth-client";

export default function CreateAccountPage() {
  async function loginWithInternetIdentity(e: any) {
    e.preventDefault();

    const authClient = await AuthClient.create();

    await new Promise((resolve) => {
      authClient.login({
        onSuccess: resolve,
      });
    });

    const principalId = authClient.getIdentity().getPrincipal().toText();
    console.log(principalId);
  }

  async function loginWithEmail(e: any) {
    e.preventDefault();

    const authClient = await AuthClient.create();

    const APP_NAME = "Link Sharing App";
    const APP_LOGO = "https://nfid.one/icons/favicon-96x96.png";
    const CONFIG_QUERY = `?applicationName=${APP_NAME}&applicationLogo=${APP_LOGO}`;
    const identityProvider = `https://nfid.one/authenticate${CONFIG_QUERY}`;

    await new Promise((resolve) => {
      authClient.login({
        identityProvider,
        onSuccess: resolve,
      });
    });

    const principalId = authClient.getIdentity().getPrincipal().toText();
    console.log(principalId);
  }
  return (
    <main className="md:w-[476px] flex flex-col gap-10 md:p-10 md:bg-White md:rounded-xl">
      <div className="flex flex-col gap-2">
        <h2 className="text-[1.5rem] leading-[2.25rem] font-bold md:text-xl text-DarkGrey">
          Create account
        </h2>
        <p className="text-base text-Grey">
          Let’s get you started sharing your links!
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <form onSubmit={loginWithEmail}>
          <Button kind="1" className="flex gap-3 items-center justify-center">
            <img
              src="https://nfid.one/icons/favicon-96x96.png"
              alt=""
              width={20}
              height={20}
            />
            Create with Email
          </Button>
        </form>

        <form onSubmit={loginWithInternetIdentity}>
          <Button kind="2" className="flex gap-3 items-center justify-center">
            <img
              src="https://cryptologos.cc/logos/internet-computer-icp-logo.svg?v=029"
              alt=""
              width={20}
              height={20}
            />
            Create with Internet Identity
          </Button>
        </form>

        <p className="w-[70%] md:w-full text-base text-Grey self-center text-center">
          Already have an account?
          <Link to="/" className="text-Purple">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
