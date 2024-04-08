export default function ImageUpload() {
  return (
    <div className="flex gap-8">
      <div className="px-[38px] py-[60px] flex gap-2 bg-LightPurple rounded-xl">
        <img
          src="/images/icon-drag-and-drop.svg"
          alt=""
          width={12}
          height={6}
        ></img>
        <p className="text-lg text-Purple">+ Upload Image</p>
      </div>
      <div className="flex items-center">
        <p className="text-base text-DarkGrey">Image Not Uploaded</p>
      </div>
    </div>
  );
}
