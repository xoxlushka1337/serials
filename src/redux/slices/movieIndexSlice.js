import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	movieIndex: 0,
};

const movieIndexSlice = createSlice({
	name: "movieIndex",
	initialState,
	reducers: {
		setMovieIndex(state, action) {
			state.movieIndex = action.payload;
		},
	},
});

export const { setMovieIndex } = movieIndexSlice.actions;

export default movieIndexSlice.reducer;
