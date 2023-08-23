import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	category: [],
	categories: [
		"all",
		"fantastic",
		"comedy",
		"melodrama",
		"action movie",
		"romance",
		"romantic comedy",
		"detective",
		"horror",
		"cartoon",
		"science fiction",
	],
	searchValue: "",
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setSelectedCategories(state, action) {
			state.category = action.payload;
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
	},
});

export const { setSelectedCategories, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
