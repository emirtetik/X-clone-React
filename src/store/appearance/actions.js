import { store } from "..";
import {_setAppearanceColor,_setBoxShadow,_setFontSize,_setAppearanceBackgroundColor } from "./index";

export const setAppearanceBackgroundColor = data => store.dispatch(_setAppearanceBackgroundColor(data))
export const setAppearanceColor = data => store.dispatch(_setAppearanceColor(data))
export const setFontSize = data => store.dispatch(_setFontSize(data))
export const setBoxShadow = data => store.dispatch(_setBoxShadow(data))
