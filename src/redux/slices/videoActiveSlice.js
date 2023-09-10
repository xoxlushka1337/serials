import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	videoActive: false,
};

const videoActiveSlice = createSlice({
	name: "videoActive",
	initialState,
	reducers: {
		setVideoActive(state, action) {
			state.videoActive = action.payload;
		},
	},
});

export const { setVideoActive } = videoActiveSlice.actions;

export default videoActiveSlice.reducer;
