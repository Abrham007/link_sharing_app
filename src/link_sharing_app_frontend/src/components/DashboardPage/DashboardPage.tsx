import DashboardHeader from "./DashboardHeader";
import EmptyLinks from "./EmptyLinks";

export default function DashboardPage() {
  return (
    <main className="flex flex-col lg:gap-6 min-h-screen min-w-screen bg-LightGrey">
      <DashboardHeader></DashboardHeader>
      <div className="max-w-[1392px] mx-auto flex gap-6">
        <div className="hidden xl:flex justify-center items-center w-[560px] h-[834px] bg-White rounded-xl">
          <img src="/images/illustration-phone-mockup.svg" alt="" />
        </div>
        <EmptyLinks></EmptyLinks>
      </div>
    </main>
  );
}
