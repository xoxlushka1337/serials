import { useDispatch, useSelector } from "react-redux";
import "./_search.scss";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
	const searchValue = useSelector(state => state.filters.searchValue);
	const dispatch = useDispatch();
	return (
		<div className="search">
			<input
				value={searchValue}
				onChange={event => dispatch(setSearchValue(event.target.value))}
				className="search__input"
				type="text"
			/>
			<div className="search__icon"></div>
		</div>
	);
};

export default Search;
