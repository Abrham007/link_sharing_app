import { useUserData } from "../../hooks/useUserData";
import { UserData } from "../../interface/UserData";
import PreviewItem from "../PreviewItem";

export default function DashboardPreview() {
  const { userData }: { userData: UserData } = useUserData();

  let hasImage = userData?.profile?.profilePic.length > 0;
  let hasFirstName = userData?.profile?.firstName !== "";
  let hasLastName = userData?.profile?.lastName !== "";
  let hasEmail = userData?.profile?.email !== "";
  let hasLinks = userData?.links?.length > 0;

  let imgUrl;
  if (hasImage) {
    let imageContent = new Uint8Array(userData.profile.profilePic);
    imgUrl = URL.createObjectURL(
      new Blob([imageContent.buffer], { type: "image/jpeg" })
    );
  }

  return (
    <section className="hidden flex-1 lg:flex justify-center items-center max-w-[560px] h-[834px] px-[25px] bg-White rounded-xl ">
      <div className="relative w-[307px] h-[631px] mx-auto">
        <img src="/images/illustration-phone-mockup.svg" alt="" />
        <div className="w-[273px] flex flex-col gap-[43px] absolute top-[63px] left-0 right-0 mx-auto items-center text-center">
          <div className="w-full flex flex-col items-center gap-5">
            <div className="w-[96px] h-[96px]">
              {hasImage && (
                <img
                  src={imgUrl}
                  alt=""
                  width={96}
                  height={96}
                  className={`w-[96px] h-[96px] rounded-full border-[4px] bordrer-solid border-Purple`}
                />
              )}
            </div>

            <div className="w-full flex flex-col gap-1">
              <div className="h-[27px]">
                <h2 className="text-[1.125rem] leading-[1.6875rem] font-semibold text-DarkGrey bg-White">
                  {hasFirstName && userData?.profile.firstName}{" "}
                  {hasLastName && userData?.profile.lastName}
                </h2>
              </div>

              <div className="h-[21px]">
                <p className="text-[0.875rem] leading-[1.3125rem] text-Grey bg-White">
                  {hasEmail && userData?.profile.email}
                </p>
              </div>
            </div>
          </div>

          {hasLinks && (
            <ul className="w-full max-h-[300px] flex flex-col gap-5 items-center px-2 pb-3 overflow-auto bg-White">
              {userData?.links.map((link, index) => (
                <PreviewItem
                  key={index}
                  id={link.id}
                  href={link.href}
                  page="dashboard"
                ></PreviewItem>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
