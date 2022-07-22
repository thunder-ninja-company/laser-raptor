import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import slice from "./slice";

const { reducer } = slice;

const store = configureStore({
    reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export default store;
