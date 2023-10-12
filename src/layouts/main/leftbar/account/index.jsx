import { Popover,Transition } from "@headlessui/react"
import { useAccount } from "~/store/auth/hooks"
import OpenAccount from "./openAccount"

export default function Account() {
 
 const account = useAccount()
 

    return(
        <div className="relative mt-auto">
        <Popover >
            <Popover.Button 
            className="p-3 my-3 rounded-full hover:bg-[#eff3f41a] w-full flex items-center transition-colors outline-none"
            >
             <img className="w-10 h-10 rounded-full" src={account.avatar} alt="avatar" />

             <div className="mx-3 text-[15px] ">
            <h6 className="font-bold leading-[20px]"> {account.fullname}</h6>
             <div className="mx-3 text-[15px] text-[#71767b] ">
             @{account.username}
             </div>
             </div>
             <div className="ml-auto">
             <svg width={19} height={19} fill="#e7e9ea" viewBox="0 0 24 24" ><path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
             </div>

            </Popover.Button>
            <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform  opacity-0"
        enterTo="transform  opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform  opacity-100"
        leaveTo="transform  opacity-0"
      >
            <Popover.Panel className="rounded-2xl -translate-y-2 w-[300px] py-3 bg-black overflow-hidden -translate-x-1/2 absolute left-1/2  bottom-[80px]   shadow-box">
                <OpenAccount/>
            </Popover.Panel>
            </Transition>
        </Popover>
        </div>
    )
}
  