import { configureStore } from '@reduxjs/toolkit';
import kassaSlice from "./features/Card_Slice";


export const store =configureStore({
    reducer:{
        kassaSlice: kassaSlice
    }
})