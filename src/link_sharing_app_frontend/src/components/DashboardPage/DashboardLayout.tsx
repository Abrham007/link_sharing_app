import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardPreview from "./DashboardPreview";
import { useUserData } from "../../hooks/useUserData";

export default function DashboardPage() {
  const { userData } = useUserData();
  return (
    <div className="flex flex-col gap-4 md:gap-6 min-h-screen p-4 md:p-6 bg-LightGrey">
      <DashboardHeader></DashboardHeader>
      <main className="w-full lg:max-w-[1392px] mx-auto flex gap-6 justify-center">
        {userData && <DashboardPreview></DashboardPreview>}
        <Outlet></Outlet>
      </main>
    </div>
  );
}
