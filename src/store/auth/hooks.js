import { useSelector } from "react-redux"

export const useAccount = () => {return useSelector(state => state.auth.currentAccount);}
export const useAccounts = () => {return useSelector(state => state.auth.accounts);}
