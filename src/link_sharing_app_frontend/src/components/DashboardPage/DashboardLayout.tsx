import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 min-h-screen p-4 md:p-6 bg-LightGrey">
      <DashboardHeader></DashboardHeader>
      <main className="w-full lg:max-w-[1392px] mx-auto flex gap-6 justify-center">
        <section className="hidden flex-1 lg:flex justify-center items-center max-w-[560px] h-[834px] px-[25px] bg-White rounded-xl ">
          <img src="/images/illustration-phone-mockup.svg" alt="" />
        </section>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
