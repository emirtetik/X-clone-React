import { createSlice } from "@reduxjs/toolkit";

const initialState={
     modalValue: false
}

const modal = createSlice({
     name:'modal',
     initialState,
     reducers:{
         _setModal:(state,action) => {
             state.modalValue = action.payload
         },
         _removeModal:(state) => {
             state.modalValue = false
         },

     }
})


export const {_setModal, _removeModal} = modal.actions
export default modal.reducer