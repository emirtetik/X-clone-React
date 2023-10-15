import { configureStore } from "@reduxjs/toolkit";
import auth from '~/store/auth'
import modal from "./modal";
import appearance from "./appearance";

export const store = configureStore({
    reducer:{
      //store 
      auth,
      modal,
      appearance
     
    }
})