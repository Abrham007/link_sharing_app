export default function ImageUpload() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center p-5 bg-LightGrey rounded-xl">
      <p className="min-w-max text-base text-Grey ">Profile picture</p>
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        <label className="px-[38px] py-[60px] flex flex-col gap-2 items-center bg-VeryLightPurple rounded-xl">
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/png,image/jpeg"
            className="hidden absolute w-0 h-0"
          />
          <img
            src="/images/icon-upload-image.svg"
            alt=""
            width={40}
            height={40}
          ></img>
          <p className="min-w-max text-lg text-Purple">+ Upload Image</p>
        </label>
        <p className="md:w-[172px] xl:w-[216px] text-sm text-Grey">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
}
