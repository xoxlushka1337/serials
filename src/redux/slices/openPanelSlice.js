import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpenPanel: false,
};

const openPanelSlice = createSlice({
	name: "isOpenPanel",
	initialState,
	reducers: {
		setIsOpenPanel(state, action) {
			state.isOpenPanel = action.payload;
		},
	},
});

export const { setIsOpenPanel } = openPanelSlice.actions;

export default openPanelSlice.reducer;
