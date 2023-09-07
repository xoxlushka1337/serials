import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import movieSlice from "./slices/movieSlice";
import movieIndexSlice from "./slices/movieIndexSlice";

export const store = configureStore({
	reducer: {
		filters: filterSlice,
		movies: movieSlice,
		movieIndex: movieIndexSlice,
	},
});
