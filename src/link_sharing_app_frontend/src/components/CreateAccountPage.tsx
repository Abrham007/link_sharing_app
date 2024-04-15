import logoIcon from "/images/logo-devlinks-small.svg";
import Button from "./UI/Button/Button";
import Input from "./UI/Inputs/Input";
import { AuthClient } from "@dfinity/auth-client";
import { link_sharing_app_backend as backend } from "../../../declarations/link_sharing_app_backend";
import { AuthContextType, useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { connectToNFID } from "../util/nfid";
import { connectToInternetIdentity } from "../util/internetidentity";

export default function CreateAccountPage() {
  const { createAccount } = useAuth() as AuthContextType;
  const navigate = useNavigate();
  async function createWithInternetIdentity(e: React.BaseSyntheticEvent) {
    e.preventDefault();

    createAccount(connectToInternetIdentity);
  }

  async function createWithEmail(e: React.BaseSyntheticEvent) {
    e.preventDefault();

    createAccount(connectToNFID);
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
        <form onSubmit={createWithEmail}>
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

        <form onSubmit={createWithInternetIdentity}>
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
