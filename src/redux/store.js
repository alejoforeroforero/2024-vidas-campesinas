import { configureStore } from "@reduxjs/toolkit";
import managerSlice from "./states/managerSlice";

export const store = configureStore({
    reducer: {
        managerReducer: managerSlice
    }
})