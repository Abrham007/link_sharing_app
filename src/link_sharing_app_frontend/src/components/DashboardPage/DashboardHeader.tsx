import Tab from "../UI/Tab/Tab";
import logoIcon from "/images/logo-devlinks-small.svg";
import previewIcon from "/images/icon-preview-header.svg";
import Button from "../UI/Button/Button";
import LinkIcon from "../UI/Icons/LinkIcon";
import DetailIcon from "../UI/Icons/DetailIcon";

export default function DashboardHeader() {
  return (
    <header className="w-full xl:max-w-[1392px]  flex justify-between p-4 pl-6 md:m-6 md:mb-0 lg:mx-auto bg-White md:rounded-xl">
      <div className="flex gap-2 items-center">
        <img src={logoIcon} alt="devlinks logo" width={40} height={40} />
        <h1 className="hidden md:block text-xl text-DarkGrey">devlinks</h1>
      </div>
      <div className="flex ">
        <Tab>
          <LinkIcon></LinkIcon>
          <span className="hidden md:inline-block">Links</span>
        </Tab>
        <Tab>
          <DetailIcon></DetailIcon>
          <span className="hidden md:inline-block">Profile Details</span>
        </Tab>
      </div>

      <Button kind="2">
        <img
          src={previewIcon}
          alt=""
          width={20}
          height={20}
          className="md:hidden"
        />
        <span className="hidden md:inline-block">Preview</span>
      </Button>
    </header>
  );
}
