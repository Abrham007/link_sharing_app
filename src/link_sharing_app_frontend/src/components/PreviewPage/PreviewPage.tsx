import Link from "../UI/Link/Link";
import PreviewItem from "./PreviewItem";

export default function PreviewPage() {
  return (
    <div className="flex flex-col gap-[60px] md:gap-[126px] lg:gap-[106px] md:p-6">
      <div
        className="hidden fixed top-0 left-0 -z-10 md:block md:w-full md:h-[357px] bg-Purple rounded-b-[32px]"
        role="presentation"
      ></div>
      <header className="w-full flex items-center justify-center p-6 bg-White rounded-xl">
        <nav className="w-full flex justify-between">
          <Link href="/" kind="2" className="w-[160px]">
            Back to Editor
          </Link>
          <Link href="/" kind="1" className="w-[160px]">
            Share Link
          </Link>
        </nav>
      </header>
      <main className="flex flex-col items-center gap-14 md:w-min md:mx-auto md:px-14 md:py-12 bg-White rounded-3xl md:shadow-[0_0px_32px_0px_rgba(0,0,0,0.10)]">
        <figure className="flex flex-col gap-6 items-center text-center">
          <img src="/images/avatar.png" alt="" width={104} height={104} />
          <figcaption className="flex flex-col gap-2">
            <h1 className="text-xl text-DarkGrey">Ben Wright</h1>
            <p className="text-base text-Grey">ben@example.com</p>
          </figcaption>
        </figure>
        <ul className="flex flex-col gap-5">
          <PreviewItem id={1}></PreviewItem>
          <PreviewItem id={2}></PreviewItem>
          <PreviewItem id={3}></PreviewItem>
        </ul>
      </main>
    </div>
  );
}
