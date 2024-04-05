export default function Tab({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="/"
      className="flex items-center gap-2 px-[27px] py-[11px] text-lg text-Grey active:text-Purple hover:text-Purple bg-transparent rounded-lg active:bg-VeryLightPurple"
    >
      {children}
    </a>
  );
}
