import { Link } from "react-router-dom";
import PreviewItem from "./PreviewItem";
import { useUserData } from "../../hooks/useUserData";
import { UserData } from "../../interface/UserData";

export default function PreviewPage() {
  const { userData }: { userData: UserData } = useUserData();

  let hasImage = userData?.profile?.profilePic.length > 0;

  let imageContent = new Uint8Array(userData.profile.profilePic);
  let imgUrl = URL.createObjectURL(
    new Blob([imageContent.buffer], { type: "image/jpeg" })
  );

  return (
    <div className="flex flex-col gap-[60px] md:gap-[126px] lg:gap-[106px] md:p-6">
      <div
        className="hidden fixed top-0 left-0 -z-10 md:block md:w-full md:h-[357px] bg-Purple rounded-b-[32px]"
        role="presentation"
      ></div>
      <header className="w-full flex items-center justify-center p-6 bg-White rounded-xl">
        <nav className="w-full flex justify-between">
          <Link
            to="/dashboard/links"
            className={`w-[160px] flex justify-center px-[27px] py-[11px] text-lg text-Purple bg-transparent hover:bg-LightPurple rounded-lg border border-solid border-Purple`}
          >
            Back to Editor
          </Link>
          <Link
            to="/"
            className={`w-[160px] flex justify-center px-[27px] py-[11px] text-lg text-White bg-Purple rounded-lg hover:bg-LightPurple`}
          >
            Share Link
          </Link>
        </nav>
      </header>
      <main className="flex flex-col items-center gap-14 md:w-min md:mx-auto md:px-14 md:py-12 bg-White rounded-3xl md:shadow-[0_0px_32px_0px_rgba(0,0,0,0.10)]">
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
              {userData.profile.firstName} {userData.profile.lastName}
            </h1>
            <p className="text-base text-Grey">{userData.profile.email}</p>
          </figcaption>
        </figure>
        <ul className="flex flex-col gap-5">
          {userData.links.map((link, index) => (
            <PreviewItem key={index} id={link.id}></PreviewItem>
          ))}
        </ul>
      </main>
    </div>
  );
}
