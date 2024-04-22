export default function EmptyLinks({
  purpose = "empty",
}: {
  purpose?: string;
}) {
  return (
    <div className="flex flex-col gap-6 md:mb-10">
      <div className="h-[337px] md:h-[469px] flex flex-col justify-center items-center gap-6 md:gap-10 p-5 text-center bg-LightGrey rounded-xl">
        <img
          src="/images/illustration-empty.svg"
          alt=""
          className="w-[124.766px] h-[80px] md:w-[249.533px] md:h-[160px]"
        />
        <div className="md:w-[488px] flex flex-col items-center gap-6">
          <h2 className="text-[1.5rem] leading-[2.25rem] font-bold md:text-xl text-DarkGrey">
            {purpose === "empty" ? "Let’s get you started" : "Loading..."}
          </h2>
          <p className="text-base text-Grey">
            {purpose === "empty"
              ? "Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!"
              : "This might take a few seconds"}
          </p>
        </div>
      </div>
    </div>
  );
}
