import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
export default function Footer() {
  return (
    <footer className="flex flex-wrap gap-2 px-4 mb-4">
      <Link
        to="/"
        className="text-[#71767b] text-[13px] leading-4  hover:underline"
      >
        Hizmet Şartları
      </Link>
      <Link
        to="/"
        className="text-[#71767b] text-[13px] leading-4 hover:underline"
      >
        Gizlilik Politikası
      </Link>{" "}
      <Link
        to="/"
        className="text-[#71767b] text-[13px] leading-4 hover:underline"
      >
        Çerez Politikası
      </Link>
      <Link
        to="/"
        className="text-[#71767b] text-[13px] leading-4 hover:underline"
      >
        Imprint
      </Link>
      <Link
        to="/"
        className="text-[#71767b] text-[13px] leading-4 hover:underline"
      >
        Erişebilirlik
      </Link>
      <Link
        to="/"
        className="text-[#71767b] text-[13px] leading-4 hover:underline"
      >
        Reklam bilgisi
      </Link>
    <div className="flex w-full gap-2">
    <Popover className="relative inline-flex leading-4">
        <Popover.Button className={"items-center outline-none text-[#71767b] text-[13px] leading-4 hover:underline inline-flex"}>
        More  <svg className="h-[1em] px-0.5 mt-0.5"  viewBox="0 0 24 24" ><path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
        </Popover.Button>
        <Popover.Panel className="w-[150px] flex flex-col absolute bottom-0 right-0 max-w-[384px] shadow-box bg-[var(--background-primary)] rounded-xl overflow-hidden  ">
        <Link
        to="/"
        className="px-4 py-3 font-bold leading-5 text-white hover:bg-[var(--background-secondary)] transition-colors"
      >
        Hakkında
      </Link>
      <Link
        to="/"
        className="px-4 py-3 font-bold leading-5 text-white hover:bg-[var(--background-secondary)] transition-colors"
      >
        Durum
      </Link>
      <Link
        to="/"
        className="px-4 py-3 font-bold leading-5 text-white hover:bg-[var(--background-secondary)] transition-colors"
      >
        İşletmeler için X
      </Link>
      <Link
        to="/"
        className="px-4 py-3 font-bold leading-5 text-white hover:bg-[var(--background-secondary)] transition-colors"
      >
        Geliştiriciler
      </Link>
        </Popover.Panel>
    </Popover>
    <p className="text-[#71767b] text-[13px] leading-4">&copy; 2023 X Corp.</p>
    </div>
    </footer>
  );
}
