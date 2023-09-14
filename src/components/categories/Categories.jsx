import { useSelector } from "react-redux";
import "./_categories.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategories } from "../../redux/slices/filterSlice";

const Categories = () => {
	const dispatch = useDispatch();

	const onCategorySelect = category => {
		dispatch(setSelectedCategories([category]));
	};
	const [selectedCategory, setSelectedCategory] = useState(null);

	const handleCategorySelect = category => {
		setSelectedCategory(category);

		onCategorySelect(category);
	};
	const categories = useSelector(state => state.filters.categories);

	const [activeIndex, setActiveIndex] = useState(0);

	const onClickCategory = (index, category) => {
		setActiveIndex(index);
		handleCategorySelect(category);
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
