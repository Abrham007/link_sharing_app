import EmptyLinks from "./EmptyLinks";
import Button from "../../UI/Button/Button";
import LinkList from "./LinkList";
export default function CustomLinkPage() {
  return (
    <section className="lg:flex-1 lg:max-w-[808px] h-[834px] bg-White rounded-xl">
      <div className="flex flex-col gap-6 p-6 pb-0 md:p-10 md:pb-0">
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-2">
            <h2 className="text-[1.5rem] leading-[2.25rem] font-bold md:text-xl text-DarkGrey">
              Customize your links
            </h2>
            <p className="text-base text-Grey">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <Button kind="2">+ Add new link</Button>
        </div>
        {/* <EmptyLinks></EmptyLinks> */}
        <LinkList></LinkList>
      </div>

      <div className="flex md:justify-end p-4 md:px-10 md:py-6 border-t border-t-solid border-Borders">
        <Button kind="1" className="w-full md:w-min">
          Save
        </Button>
      </div>
    </section>
  );
}
