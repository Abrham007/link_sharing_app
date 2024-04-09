import logoIcon from "/images/logo-devlinks-small.svg";
import previewIcon from "/images/icon-preview-header.svg";
import { NavLink } from "react-router-dom";

export default function DashboardHeader() {
  return (
    <header className="w-full lg:max-w-[1392px] flex p-4 pl-6 lg:mx-auto bg-White md:rounded-xl">
      <nav className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <img src={logoIcon} alt="devlinks logo" width={40} height={40} />
          <h1 className="hidden md:block text-xl text-DarkGrey">devlinks</h1>
        </div>
        <div className="flex">
          <NavLink
            to="links"
            className={({ isActive }) =>
              `group flex items-center gap-2 px-[27px] py-[11px] text-lg hover:text-Purple rounded-lg ${
                isActive
                  ? "text-Purple bg-VeryLightPurple fill-Purple"
                  : "text-Grey bg-transparent fill-Grey"
              } `
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              className="fill-inherit group-focus:fill-Purple group-hover:fill-Purple"
            >
              <path d="M11.154 14.65a.936.936 0 0 1 0 1.329l-.464.464a4.689 4.689 0 1 1-6.631-6.631l1.884-1.884a4.687 4.687 0 0 1 6.432-.194.941.941 0 0 1-1.25 1.407 2.813 2.813 0 0 0-3.857.114l-1.883 1.882a2.813 2.813 0 1 0 3.978 3.978l.464-.464a.936.936 0 0 1 1.327 0ZM16.94 3.558a4.695 4.695 0 0 0-6.63 0l-.465.464a.94.94 0 1 0 1.328 1.328l.464-.464a2.813 2.813 0 0 1 3.978 3.978l-1.883 1.885a2.813 2.813 0 0 1-3.858.111.942.942 0 0 0-1.25 1.407 4.688 4.688 0 0 0 6.43-.19l1.884-1.884a4.695 4.695 0 0 0 .002-6.633v-.002Z" />
            </svg>
            <span className="hidden md:inline-block">Links</span>
          </NavLink>

          <NavLink
            to="profile"
            className={({ isActive }) =>
              `group flex items-center gap-2 px-[27px] py-[11px] text-lg hover:text-Purple rounded-lg ${
                isActive
                  ? "text-Purple bg-VeryLightPurple"
                  : "text-Grey bg-transparent"
              } `
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              className="fill-Grey group-focus:fill-Purple group-hover:fill-Purple"
            >
              <path d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z" />
            </svg>
            <span className="hidden md:inline-block">Profile Details</span>
          </NavLink>
        </div>

        <NavLink
          to="preview"
          className={({ isActive }) =>
            `px-[27px] py-[11px] text-lg text-Purple bg-transparent hover:bg-LightPurple rounded-lg border border-solid border-Purple`
          }
        >
          <img
            src={previewIcon}
            alt=""
            width={20}
            height={20}
            className="md:hidden"
          />
          <span className="hidden md:inline-block">Preview</span>
        </NavLink>
      </nav>
    </header>
  );
}
