import { store } from "..";
import { _setAppearanceBackgroundColor, _setAppearanceColor, _setFontSize } from "./actions";

export const setAppearanceBackgroundColor = (data) => {return store.dispatch(_setAppearanceBackgroundColor(data))};
export const setAppearanceColor = data => store.dispatch(_setAppearanceColor(data))
export const setFontSize = data => store.dispatch(_setFontSize(data))