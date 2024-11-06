import { configureStore } from "@reduxjs/toolkit";
// import { counterReducer } from "./Slices/CounterSlice";
import { todoReducer } from "./Slices/TodoSlice";

export const Store = configureStore({
    reducer : {
        // counter : counterReducer,
        todo : todoReducer
    }
})