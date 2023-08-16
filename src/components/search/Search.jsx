import "./_search.scss";

const Search = ({ searchValue, setSearchValue }) => {
	return (
		<div className="search">
			<input
				value={searchValue}
				onChange={event => setSearchValue(event.target.value)}
				className="search__input"
				type="text"
			/>
			<div className="search__icon"></div>
		</div>
	);
};

export default Search;
