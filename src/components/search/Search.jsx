import { useDispatch, useSelector } from "react-redux";
import "./_search.scss";
import { setSearchValue } from "../../redux/slices/filterSlice";

import { ReactComponent as IconSearch } from "../../img/icon/search.svg";

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
			<input
				value={searchValue}
				onChange={event => dispatch(setSearchValue(event.target.value))}
				className="search__input-mobile"
				type="text"
			/>
			<IconSearch className="search__icon" />
		</div>
	);
};

export default Search;
