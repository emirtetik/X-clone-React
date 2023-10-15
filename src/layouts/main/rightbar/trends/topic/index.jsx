import { Link } from "react-router-dom";
import { numberFormat } from "~/utils/format";
import { Popover } from "@headlessui/react";
export default function Topic({ item }) {
  return (
    <Link
      to={"/"}
      className="px-3 py-4 hover:bg-[#eff3f41a] transition-colors  relative"
    >
      <div className="text-[13px]  leading-4 text-[#71767b]">{item.title}</div>

      <div className="text-[15px] font-bold leading-5 mt-0.5 text-[var(--color-base)]  ">
        {item.topic.type === "tag" && "#"}
        {item.topic.value}
      </div>

      {item?.postCount && (
        <div className="text-[13px] leading-4 mt-1 text-[#71767b]">
          {numberFormat(item.postCount)} posts
        </div>
      )}
      <Popover className="absolute  top-1.5 right-2 ">
        <Popover.Button
          type="button"
          className="w-[34px] outline-none  h-[34px] rounded-full text-[#71767b] flex items-center justify-center hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] transition-colors "
        >
          <svg width={19} height={19} fill="currentColor" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            ></path>
          </svg>
        </Popover.Button>
        <Popover.Panel className="w-[380px] absolute grid top-2 right-0 overflow-hidden bg-[color:var(--background-primary)] shadow-box rounded-xl  z-[1]  ">
            <button type="button" className="flex items-center gap-3 py-3 px-4 font-bold leading-5 text-left hover:bg-[#eff3f41a] transition-colors">
            <svg viewBox="0 0 24 24" width={19}  ><path fill="currentColor" d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path></svg>
            Bununla ilgilenmiyorum
            </button>
            <button type="button" className="flex items-center px-4 gap-3 py-3 font-bold leading-5 text-left hover:bg-[#eff3f41a] transition-colors ">
            <svg viewBox="0 0 24 24" width={19}  ><path fill="currentColor" d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path></svg>
            Bu gündem başlığı zararlı veya spam içeriyor
            </button>

        </Popover.Panel>
      </Popover>
    </Link>
  );
}
