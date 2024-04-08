import Tab from "../UI/Tab/Tab";
import logoIcon from "/images/logo-devlinks-small.svg";
import previewIcon from "/images/icon-preview-header.svg";
import Button from "../UI/Button/Button";
import LinkIcon from "../UI/Icons/LinkIcon";
import DetailIcon from "../UI/Icons/DetailIcon";
import { Link, useLocation } from "react-router-dom";

export default function DashboardHeader() {
  const location = useLocation();
  let activeTab = "links";

  if (location.pathname === "/dashboard/profile") {
    activeTab = "profile";
  }
  return (
    <header className="w-full lg:max-w-[1392px] flex p-4 pl-6 lg:mx-auto bg-White md:rounded-xl">
      <nav className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <img src={logoIcon} alt="devlinks logo" width={40} height={40} />
          <h1 className="hidden md:block text-xl text-DarkGrey">devlinks</h1>
        </div>
        <div className="flex">
          <Link
            to="links"
            className={`flex items-center gap-2 px-[27px] py-[11px] text-lg hover:text-Purple rounded-lg ${
              activeTab === "links"
                ? "text-Purple bg-VeryLightPurple"
                : "text-Grey bg-transparent"
            } `}
          >
            <LinkIcon></LinkIcon>
            <span className="hidden md:inline-block">Links</span>
          </Link>

          <Link
            to="profile"
            className={`flex items-center gap-2 px-[27px] py-[11px] text-lg hover:text-Purple rounded-lg ${
              activeTab === "profile"
                ? "text-Purple bg-VeryLightPurple"
                : "text-Grey bg-transparent"
            } `}
          >
            <DetailIcon></DetailIcon>
            <span className="hidden md:inline-block">Profile Details</span>
          </Link>
        </div>

        <Link
          to="preview"
          className={`px-[27px] py-[11px] text-lg text-Purple bg-transparent hover:bg-LightPurple rounded-lg border border-solid border-Purple`}
        >
          <img
            src={previewIcon}
            alt=""
            width={20}
            height={20}
            className="md:hidden"
          />
          <span className="hidden md:inline-block">Preview</span>
        </Link>
      </nav>
    </header>
  );
}
