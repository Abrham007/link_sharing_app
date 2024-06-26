import { InputHTMLAttributes, useEffect, useState } from "react";
import DropFile from "./DropFile";
import { useUserData } from "../../../hooks/useUserData";
import { UserData } from "../../../interface/UserData";

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: any;
}

export default function ImageUpload({ value, onChange }: ImageInputProps) {
  const [imgUrl, setImgUrl] = useState("");
  const { setUserData } = useUserData();

  useEffect(() => {
    async function getUrlFromFile() {
      let imgUrl = URL.createObjectURL(value);
      setImgUrl(imgUrl);
      let buffer = await value.arrayBuffer();
      setUserData((prevValue: UserData) => {
        return {
          ...prevValue,
          profile: {
            ...prevValue.profile,
            profilePic: new Uint8Array(buffer),
          },
        };
      });
    }

    async function getUrlFromTypedArray() {
      let imageContent = new Uint8Array(value);
      let imgUrl = URL.createObjectURL(
        new Blob([imageContent.buffer], { type: "image/jpeg" })
      );
      setImgUrl(imgUrl);
      setUserData((prevValue: UserData) => {
        return {
          ...prevValue,
          profile: {
            ...prevValue.profile,
            profilePic: imageContent,
          },
        };
      });
    }

    if (value.length > 0) {
      getUrlFromTypedArray();
    } else if (value.toString().slice(8, -1) === "File") {
      getUrlFromFile();
    }
  }, [value]);

  function handleDropFile(image: any) {
    if (onChange) {
      onChange(image);
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center p-5 bg-LightGrey  rounded-xl">
      <p className="min-w-max text-base text-Grey ">Profile picture</p>
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        <DropFile
          handleDropFile={handleDropFile}
          className={`w-min relative px-[38px] py-[60px] flex flex-col gap-2 items-center  rounded-xl`}
        >
          {imgUrl && (
            <div className="absolute top-0 bottom-0 left-0 right-0 w-[193px] h-[193px] overflow-hidden rounded-xl ">
              <img
                src={imgUrl}
                alt=""
                width={193}
                height={193}
                className="w-[193px] rounded-xl brightness-50 "
              />
            </div>
          )}

          <input
            type="file"
            id="profilePic"
            name="profilePic"
            accept="image/png,image/jpeg"
            className="hidden absolute w-0 h-0"
            value={value.fileName}
            onChange={(event: any) => {
              if (onChange) {
                onChange(event.target.files[0]);
              }
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 40 40"
            className={`relative z-1 ${imgUrl ? "fill-White" : "fill-Purple"}`}
          >
            <path d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z" />
          </svg>
          <p
            className={`relative z-1 min-w-max text-lg ${
              imgUrl ? "text-White" : "text-Purple"
            } `}
          >
            {imgUrl ? "Change Image" : "+ Upload Image"}
          </p>
        </DropFile>
        <p className="md:w-[172px] xl:w-[216px] text-sm text-Grey">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
}
