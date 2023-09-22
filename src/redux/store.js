import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import movieSlice from "./slices/movieSlice";
import movieIndexSlice from "./slices/movieIndexSlice";
import videoActiveSlice from "./slices/videoActiveSlice";
import openPanelSlice from "./slices/openPanelSlice";

export const store = configureStore({
	reducer: {
		filters: filterSlice,
		movies: movieSlice,
		movieIndex: movieIndexSlice,
		videoActive: videoActiveSlice,
		isOpenPanel: openPanelSlice,
	},
});
