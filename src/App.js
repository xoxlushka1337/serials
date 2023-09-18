import React, { useContext } from "react";

import { Router, Routes, Route, Link, useLocation } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import About from "./pages/About";
import Videos from "./pages/Videos";
import Featured from "./pages/Featured";

import "./scss/_common.scss";

const routes = [
	{ path: "/", Component: About },
	{ path: "/videos", Component: Videos },
	{ path: "/featured", Component: Featured },
];

function App() {
	return (
		<div className="wrapper">
			<Routes>
				{routes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			</Routes>
		</div>
	);
}
// <TransitionGroup>
// 	<CSSTransition
// 		key={path}
// 		timeout={500}
// 		classNames="fade"
// 		unmountOnExit>
// 		<Component />
// 	</CSSTransition>
// </TransitionGroup>
export default App;
