import Input from "./UI/Inputs/Input";
import { Link, useNavigate } from "react-router-dom";
import { link_sharing_app_backend as backend } from "../../../declarations/link_sharing_app_backend";
import { AuthClient } from "@dfinity/auth-client";
import Button from "./UI/Button/Button";
import { useAuth } from "../hooks/useAuth";
import { Principal } from "@dfinity/principal";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  async function loginWithInternetIdentity(e: any) {
    e.preventDefault();
    const authClient = await AuthClient.create();
    await new Promise((resolve) => {
      authClient.login({
        onSuccess: resolve,
      });
    });

    const identity = authClient.getIdentity();
    const principalId = identity.getPrincipal();
    console.log(principalId.toText());

    let hasAccount = await backend.hasAccount(principalId);
    console.log(hasAccount);

    if (hasAccount) {
      login(principalId.toText());
      navigate("/dashboard/links");
    } else {
      navigate("/");
    }
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

    const identity = authClient.getIdentity();
    const principalId = identity.getPrincipal();
    const principalText = principalId.toText();
    console.log(principalText);

    let hasAccount = await backend.hasAccount(principalId);
    console.log(hasAccount);

    if (hasAccount) {
      login(principalText);
      console.log("here");
      navigate(`dashboard/links`);
    } else {
      navigate("/");
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
        <form onSubmit={loginWithEmail}>
          <Button kind="1" className="flex gap-3 items-center justify-center">
            <img
              src="https://nfid.one/icons/favicon-96x96.png"
              alt=""
              width={20}
              height={20}
            />
            Continue with Email
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
