import { useEffect } from "react";

export default function Message({
  icon,
  text,
  error,
  handleCloseMessage,
}: {
  icon: string;
  text: string;
  error: boolean;
  handleCloseMessage: () => void;
}) {
  useEffect(() => {
    setTimeout(() => {
      handleCloseMessage();
    }, 3000);
  }, []);

  return (
    <div className="fixed bottom-10 left-[50%] -translate-x-1/2 flex gap-2  px-6 py-4 bg-DarkGrey rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.10)]">
      <img src={icon} alt="" />
      <p className={`w-max text-lg ${error ? "text-Red" : "text-LightGrey"}`}>
        {text}
      </p>
    </div>
  );
}
