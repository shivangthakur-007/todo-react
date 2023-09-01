

// Reducer imports 
import todoReducer from './slices/todoSlices'
import { configureStore } from "@reduxjs/toolkit";


const store= configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV !== 'Production',
})


export default store;