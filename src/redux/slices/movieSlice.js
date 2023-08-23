import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	movies: [
		{
			id: 0,
			title: "Very Strange Things",
			season: "1 2 3 4 5",
			img: "trange-things.png",
			category: ["all", "fantastic", "horror"],
			description:
				"1980s, a quiet provincial American town. The favorable course of local life is disrupted by the mysterious disappearance of a teenager named Will. The boy's relatives and the local sheriff are determined to find out the circumstances of the case, and the events also affect Will's best friend, Mike. He starts his own investigation. Mike is sure that he is close to the solution, and now he has to find himself in the epicenter of a fierce battle of otherworldly forces.",
			trailer: "",
			premiere: "15 July's 2016",
			director: "Matt Differentiation",
		},
		{
			id: 1,
			title: "Black Mirror",
			season: "1 2 3 4 5 6",
			img: "black-mirror.png",
			category: ["all", "detective", "horror"],
			description: `Black Mirror is a British fantasy series, a modern analogue of the classic series "The Outer Limits". It shows the life of pathetic little people spoiled by high technology in the near future. Raises questions of morality and morality. The trick of the series is an hour and a half series.`,
			trailer: "",
			premiere: "17 July's 2011",
			director: "Owen Harris, Carl Tibbetts, James Hawes",
		},
		{
			id: 2,
			title: "Love. Death. Robots",
			season: "1 2 3 4",
			img: "Love.Death.Robots.png",
			category: ["all", "fantastic", "comedy", "cartoon"],
			description:
				"The series is built in the format of an anthology, in which each episode tells its own story, different from the others, with the participation of its own characters, and has a complete plot. Animated short films are shot in the genre of science fiction, cyberpunk, black humor and are designed for an adult audience. There is an erotic and brutal context here, the themes of racism, free will, the robotic future of humanity, and war are touched upon.",
			trailer: "",
			premiere: "15 March 2019",
			director: "Jerome Denjean",
		},
		{
			id: 3,
			title: "Gravity Falls",
			season: "1 2",
			img: "Gravity-Falls.png",
			category: ["all", "fantastic", "comedy", "cartoon"],
			description:
				"The story tells about the adventures of twins, brother and sister Dipper and Mabel Pines, whose summer plans are sent to the closet when their parents send them to a distant relative in the quiet town of Gravity Falls. But is this city, relative and inhabitants so simple, and what secrets are waiting for their discoverers?",
			trailer: "",
			premiere: "14 June's 2012",
			director: "Joe Pitt, John Aoshima",
		},
		{
			id: 4,
			title: "Inside job",
			season: "1 2",
			img: "Inside-job.png",
			category: ["all", "fantastic", "cartoon"],
			description: `For the workers of the "Deep State" conspiracy theories are not nonsense, but real facts. And their job is to keep it a secret.`,
			trailer: "",
			premiere: "22 October 2021",
			director: "Vitaly Strokous, David Fox",
		},
		{
			id: 5,
			title: "Mocn Knight",
			season: "1",
			img: "Mocn-Knight.png",
			category: ["all", "fantastic", "action movie"],
			description: `Stephen Grant (Oscar Isaac) is a minor employee of the historical museum, suffering from periodic memory lapses and obvious self—doubt. Stephen is well versed in Egyptian mythology and quotes French poetry from memory, but when it comes to social skills, he has a hard time. After another fallout from reality, Stephen witnesses a meeting of the cult of the ancient goddess Amat, and also learns that all this time a second personality lived in his mind — the former mercenary Mark Spector (Oscar Isaac), it was he who from time to time "took" control of the body for himself.`,
			trailer: "",
			premiere: "30 March 2022",
			director: "Mohamed Diab",
		},
		{
			id: 6,
			title: "Rick and Morty",
			season: "1",
			img: "Rick-Morty.png",
			category: ["all", "fantastic", "detective"],
			description:
				"The series is a supernatural detective comedy about growing up, dedicated to Wednesday Addams and her years when she was in high school at Nevermore Academy, where she tries to master her psychic abilities, stop a monstrous series of murders of citizens and solve a supernatural mystery that affected her family 25 years ago, and all this during her new relationship.",
			trailer: "",
			premiere: "31 October 2022",
			director: "Tim Burton, James Marshall",
		},
	],
};

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		// setSelectedCategories(state, action) {
		// 	state.category = action.payload;
		// },
		// setSearchValue(state, action) {
		// 	state.searchValue = action.payload;
		// },
	},
});

// export const { setSelectedCategories, setSearchValue } = filterSlice.actions;

export default movieSlice.reducer;
