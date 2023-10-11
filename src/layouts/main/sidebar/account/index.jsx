import { Popover } from "@headlessui/react"
import { useAccount } from "~/store/auth/hooks"

export default function Account() {
 
 const account = useAccount()


    return(
        <div className="mt-auto">
        <Popover>
            <Popover.Button 
            className="p-3 my-3 rounded-full hover:bg-[#eff3f41a] w-full flex items-center outline-none"
            >
             <img className="w-10 h-10 rounded-full" src={account.avatar} alt="avatar" />

             <div className="mx-3 text-[15px] ">
            <h6 className="font-bold leading-[20px]"> {account.fullname}</h6>
             <div className="mx-3 text-[15px] text-[#71767b] ">
             @{account.username}
             </div>
             </div>
          

            </Popover.Button>
            <Popover.Panel>
                içerik
            </Popover.Panel>
        </Popover>
        </div>
    )
}
  