import { useSelector } from "react-redux";

export const useAppearance = () => {return useSelector((state) => state.appearance)}