import { configureStore } from "@reduxjs/toolkit";
import auth from '~/store/auth'

export  const store = configureStore({
    reducer:{
      //store 
      auth
    }
})