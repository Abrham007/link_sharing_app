import PreviewItem from "../PreviewPage/PreviewItem";

export default function DashboardPreview() {
  let imgSrc = "/images/avatar-edit-3.jpg";
  return (
    <section className="hidden flex-1 lg:flex justify-center items-center max-w-[560px] h-[834px] px-[25px] bg-White rounded-xl ">
      <div className="relative w-[307px] h-[631px] mx-auto">
        <img src="/images/illustration-phone-mockup.svg" alt="" />
        <figure className="absolute top-[53.5px] left-0 right-0 w-max mx-auto flex flex-col gap-6 items-center text-center bg-White">
          <img
            src={imgSrc}
            alt=""
            width={104}
            height={104}
            className={`w-[104px] h-[104px] object-contain rounded-full border-[4px] bordrer-solid border-Purple `}
          />
          <figcaption className="flex flex-col gap-[43px]">
            <div className="flex flex-col gap-2">
              <h2 className="text-[1.125rem] leading-[1.6875rem] font-semibold text-DarkGrey">
                Ben Wright
              </h2>
              <p className="text-[0.875rem] leading-[1.3125rem] text-Grey">
                ben@example.com
              </p>
            </div>
            <ul className="max-h-[300px] flex flex-col gap-5 px-2 pb-3 overflow-auto">
              <PreviewItem id={"link-1"} page="dashboard"></PreviewItem>
              <PreviewItem id={"link-2"} page="dashboard"></PreviewItem>
              <PreviewItem id={"link-3"} page="dashboard"></PreviewItem>
              <PreviewItem id={"link-4"} page="dashboard"></PreviewItem>
            </ul>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
