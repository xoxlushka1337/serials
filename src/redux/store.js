import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import movieSlice from "./slices/movieSlice";

export const store = configureStore({
	reducer: {
		filters: filterSlice,
		movies: movieSlice,
	},
});
