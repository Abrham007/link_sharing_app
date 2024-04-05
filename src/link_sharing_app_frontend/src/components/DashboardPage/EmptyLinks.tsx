import Button from "../UI/Button/Button";
export default function EmptyLinks() {
  return (
    <div className="xl:w-[808px] m-4 md:m-6 lg:m-0 bg-White rounded-xl">
      <div className="flex flex-col gap-10 p-6 md:p-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] leading-[2.25rem] font-bold md:text-xl text-DarkGrey">
            Customize your links
          </h2>
          <p className="text-base text-Grey">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <div className="flex flex-col gap-6 ">
          <Button kind="2">+ Add new link</Button>
          <div className="h-[337px] md:h-[469px] flex flex-col justify-center items-center gap-6 md:gap-10 p-5 text-center bg-LightGrey rounded-xl">
            <img
              src="/images/illustration-empty.svg"
              alt=""
              className="w-[124.766px] h-[80px] md:w-[249.533px] md:h-[160px]"
            />
            <div className="md:w-[488px] flex flex-col items-center gap-6">
              <h2 className="text-[1.5rem] leading-[2.25rem] font-bold md:text-xl text-DarkGrey">
                Let’s get you started
              </h2>
              <p className="text-base text-Grey">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:justify-end p-4 md:p-10 lg:py-6 lg:px-10 border-t border-t-solid border-Borders">
        <Button kind="1" className="w-full md:w-min">
          Save
        </Button>
      </div>
    </div>
  );
}
