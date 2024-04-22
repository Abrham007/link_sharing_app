import PreviewItem from "../components/PreviewItem";
import { UserData } from "../interface/UserData";
import { link_sharing_app_backend as backend } from "../../../declarations/link_sharing_app_backend";
import { Link, useParams } from "react-router-dom";
import { Principal } from "@dfinity/principal";
import { useEffect, useState } from "react";

export default function UserPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { userPrincipal } = useParams();

  let hasImage, imgUrl;

  if (userData) {
    hasImage = userData?.profile?.profilePic?.length > 0;

    let imageContent = new Uint8Array(userData.profile.profilePic);
    imgUrl = URL.createObjectURL(
      new Blob([imageContent.buffer], { type: "image/jpeg" })
    );
  }

  useEffect(() => {
    async function fetchUserData() {
      if (!userPrincipal) {
        return;
      }
      setIsLoading(true);
      const principal: any = Principal.fromText(userPrincipal);
      const userData = await backend.getUser(principal);
      setUserData(userData);
      setIsLoading(false);
    }

    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col gap-[60px] md:gap-[126px] lg:gap-[106px] md:p-6 mb-6">
      <div
        className="hidden fixed top-0 left-0 -z-10 md:block md:w-full md:h-[357px] bg-Purple rounded-b-[32px]"
        role="presentation"
      ></div>
      <header className="w-full flex items-center justify-center p-6 bg-White rounded-xl">
        <nav className="w-full flex justify-between">
          <Link
            to="/auth?mode=login"
            className={`w-[160px] flex justify-center px-[27px] py-[11px] text-lg text-Purple bg-transparent hover:bg-LightPurple rounded-lg border border-solid border-Purple`}
          >
            Log In
          </Link>
          <Link
            to="/auth?mode=signup"
            className={`w-[160px] flex justify-center px-[27px] py-[11px] text-lg text-White bg-Purple rounded-lg hover:bg-LightPurple`}
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex flex-col items-center gap-14 md:w-min md:mx-auto md:px-14 md:py-12 bg-White rounded-3xl md:shadow-[0_0px_32px_0px_rgba(0,0,0,0.10)]">
        {isLoading && <p className="text-xl text-DarkGrey">Loading...</p>}
        <figure className="flex flex-col gap-6 items-center text-center">
          {hasImage && (
            <img
              src={imgUrl}
              alt=""
              width={104}
              height={104}
              className={`w-[104px] h-[104px]  rounded-full border-[4px] bordrer-solid border-Purple `}
            />
          )}
          <figcaption className="flex flex-col gap-2">
            <h1 className="text-xl text-DarkGrey">
              {userData?.profile.firstName} {userData?.profile.lastName}
            </h1>
            <p className="text-base text-Grey">{userData?.profile.email}</p>
          </figcaption>
        </figure>
        <ul className="flex flex-col gap-5">
          {userData?.links.map(
            (link: { id: string; href: string }, index: number) => (
              <PreviewItem
                key={index}
                id={link.id}
                href={link.href}
              ></PreviewItem>
            )
          )}
        </ul>
      </main>
    </div>
  );
}
