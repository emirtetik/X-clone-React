import classNames from "classnames";
import { useAccount, useAccounts } from "~/store/auth/hooks";
import { setCurrentAccount } from "~/store/auth/actions";
export default function OpenAccount() {
    const currentAccount = useAccount()                     
    const accounts = useAccounts();

  return (
    <div className="text-white">
      {accounts.map((account,i) =>  (
        <div key={i}>
          <button
            type="button"
            disabled={currentAccount.id === account.id}
            onClick={() => {setCurrentAccount(account)}}
            className={classNames("flex items-center px-4 py-3 text-left  w-full transition-colors hover:bg-[#eff3f41a]", {
             "hover:bg-[#eff3f41a]": currentAccount.id !== accounts.id
          })}>
            <img
              className="w-10 h-10 rounded-full"
              src={account.avatar}
              alt="avatar"
            />

            <div className="mx-3 text-[15px] flex-1">
              <h6 className="font-bold leading-[20px]"> {account.fullname}</h6>
              <div className="mx-3 text-[15px] text-[#71767b]  ">
                @{account.username}
              </div>
            </div>
          {currentAccount.id === account.id &&(
            <svg xmlns="http://www.w3.org/2000/svg"  width={19} height={19} viewBox="0 0 48 48" fill="#00ba7c">
            <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
            </svg>
          )}
          </button>
        </div>
      ))}
      <div className="h-px bg-[#2f3336] my-3"/>
      <button className="px-4 py-3 text-left transition-colors hover:bg-[#eff3f41a] w-full font-bold text-[15px] text-[#e7e9ea] leading-[20px]">
         Var olan bir hesap ekle
      </button>
      <button className="px-4 py-3 text-left transition-colors hover:bg-[#eff3f41a] w-full font-bold text-[15px] text-[#e7e9ea] leading-[20px]">
         Hesapları yönet
      </button>
      <button className="px-4 py-3 text-left transition-colors hover:bg-[#eff3f41a] w-full font-bold text-[15px] text-[#e7e9ea] leading-[20px]">
          <div className="max-w-[228px] ">
          @Frontmir hesabından çıkış yap
          </div>
      </button>
    </div>
  );
}
