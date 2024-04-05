import Image from "next/image";
import Link from "next/link";

export default function Tab({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/"
      className="flex gap-2 px-[27px] py-[11px] text-lg text-Purple bg-transparent rounded-lg active:bg-LightPurple"
    >
      <Image src="/images/icon-links.svg" alt="" width={16} height={16}></Image>
      <span>{children}</span>
    </Link>
  );
}
