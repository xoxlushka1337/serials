import { useSelector } from "react-redux";
import "./_categories.scss";
import { useState } from "react";

const Categories = ({ onCategorySelect }) => {
	const categories = useSelector(state => state.filters.categories);

	const [activeIndex, setActiveIndex] = useState(0);

	const onClickCategory = (index, category) => {
		setActiveIndex(index);
		onCategorySelect(category);
	};

	return (
		<ul className="categories">
			{categories.map((category, i) => (
				<li
					className={`categories__li ${activeIndex === i ? "active" : ""}`}
					key={category}
					onClick={() => onClickCategory(i, category)}>
					{category}
				</li>
			))}
		</ul>
	);
};

export default Categories;
