import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from './Slices/userDetails';


export const store=configureStore({
    reducer:{
        user:userDetailsReducer
    }
});


