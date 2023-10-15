import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // black
    // backgroundColor:{
    //     primary:'#000',
    //     secondary:'#16181c',
    //     third:'#273340',
    // },
    // color:{
    //     primary: '#1d9bf0',
    //     secondary:'#8ecdf8',
        // base:"#e7e9ea",
        // baseSecondary:"#71767b",


    // },
    // fontSize:16
    // koyu
    //     backgroundColor:{
    //     primary:'#15202b',
    //     secondary:'#1e2732',
    //     third:'#263340',
    // },
    // color:{
    //     primary: '#1d9bf0',
    //     secondary:'#8ecdf8',
    //     base:"#f7f9f9",
    //     baseSecondary:"#8b98a5",

    // },
    // fontSize:16
    // beyaz
      backgroundColor:{
        primary:'#fff',
        secondary:'#f7f9f9',
        third:'#eff3f4',
    },
    color:{
        primary: '#1d9bf0',
        secondary:'#8ecdf8',
        base:"#f7f9f9",
        baseSecondary:"#8b98a5",

    },
    fontSize:16
}

 const appearance = createSlice({
      name:'appearance',
      initialState,
      reducers:{
          _setAppearanceBackgroundColor(state,action){
              state.backgroundColor = action.payload
          },
          _setAppearanceColor(state,action){
            state.color = action.payload
        },
        _setFontSize(state,action){
            state.fontSize = action.payload
        },
      }
})

export const {_setAppearanceBackgroundColor, _setAppearanceColor,_setFontSize} = appearance.actions
export default appearance.reducer

