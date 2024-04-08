import { Outlet } from "react-router-dom";
import logoIcon from "/images/logo-devlinks-small.svg";

export default function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col gap-16 md:gap-[51px] md:justify-center md:items-center p-8 md:bg-LightGrey">
      <header className="flex gap-2 items-center">
        <img src={logoIcon} alt="devlinks logo" width={40} height={40} />
        <h1 className="text-xl text-DarkGrey">devlinks</h1>
      </header>
      <Outlet></Outlet>
    </div>
  );
}