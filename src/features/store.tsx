import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movies/MovieSlice";

const store = configureStore({
    reducer:{
        reducer:MovieSlice
    }
})

const state = store.getState()
export type RootState = typeof state
export default store