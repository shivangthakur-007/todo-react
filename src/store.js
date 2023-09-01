

// Reducer imports 
import todoReducer from "./Reducer/todoReducer";
import { configureStore } from "@reduxjs/toolkit";


const store= configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV !== 'Production',
})


export default store;