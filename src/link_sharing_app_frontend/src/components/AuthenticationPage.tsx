import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { link_sharing_app_backend as backend } from "../../../declarations/link_sharing_app_backend";
import Button from "./UI/Button/Button";
import { useAuth } from "../hooks/useAuth";
import { useUserData } from "../hooks/useUserData";
import { useState } from "react";
import logoIcon from "/images/logo-devlinks-small.svg";
import { Principal } from "@dfinity/principal";

export default function AuthenticationPage() {
  const {
    loginWithNFID,
    loginWithInternetIdentity,
    userActor,
    authenticate,
    authClient,
    logout,
  } = useAuth();

  const { getUserData } = useUserData();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  let isLogin = searchParams.get("mode") !== "signup";

  let title = "Login";
  let subtitle = "Add your details below to get back into the app";
  let question = "Don’t have an account?";
  let linkText = "Create account";
  let btnText = "Login";
  let actionFn = backend.hasAccount;
  let errorRoute = "/auth/?mode=signup";
  let errorMessage = "User already has an account please login";

  if (!isLogin) {
    title = "Create account";
    subtitle = "Let’s get you started sharing your links!";
    question = "Already have an account?";
    linkText = "Login";
    btnText = "Sign Up";
    actionFn = backend.createUser;
    errorRoute = "/auth?mode=login";
    errorMessage = "User does't not have an account please create an account";
  }

  async function handleLogin(fn: () => Promise<void>) {
    setIsLoading(true);
    let principal: any = await fn();

    console.log(principal.toText());
    let response = await actionFn(principal);
    console.log(response);

    if (response) {
      await authenticate(authClient);
      navigate("/dashboard/links");
      setIsLoading(false);
    } else {
      await logout();
      navigate(`${errorRoute}`);
      setError(errorMessage);
      setIsLoading(false);
    }
  }
  async function connectWithInternetIdentity(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    handleLogin(loginWithInternetIdentity);
  }

  async function connectWithNFID(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    handleLogin(loginWithNFID);
  }

  return (
    <div className="min-h-screen flex flex-col gap-16 md:gap-[51px] md:justify-center md:items-center p-8 md:bg-LightGrey">
      <header className="flex gap-2 items-center">
        <img src={logoIcon} alt="devlinks logo" width={40} height={40} />
        <h1 className="text-xl text-DarkGrey">devlinks</h1>
      </header>

      <main
        className={`md:w-[476px] flex flex-col gap-10 md:p-10 md:bg-White md:rounded-xl ${
          error ? "border border-solid border-Red" : ""
        } `}
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] leading-[2.25rem] font-bold md:text-xl text-DarkGrey">
            {isLoading ? "Receiving..." : title}
          </h2>
          <p className="text-base text-Grey">{subtitle}</p>
          {error && <p className="text-base text-Red ">{errorMessage}</p>}
        </div>

        <div className="flex flex-col gap-6">
          <form onSubmit={connectWithNFID}>
            <Button
              kind="1"
              className="flex gap-3 items-center justify-center"
              disabled={isLoading}
            >
              <img
                src="https://nfid.one/icons/favicon-96x96.png"
                alt=""
                width={20}
                height={20}
              />
              {btnText} with Email
            </Button>
          </form>

          <form onSubmit={connectWithInternetIdentity}>
            <Button
              kind="2"
              className="flex gap-3 items-center justify-center"
              disabled={isLoading}
            >
              <img
                src="https://cryptologos.cc/logos/internet-computer-icp-logo.svg?v=029"
                alt=""
                width={20}
                height={20}
              />
              {btnText} with Internet Identity
            </Button>
          </form>

          <p className="w-[70%] md:w-full text-base text-Grey self-center text-center">
            {question}{" "}
            <Link
              to={`?mode=${isLogin ? "signup" : "login"}`}
              className="text-Purple"
            >
              {linkText}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
