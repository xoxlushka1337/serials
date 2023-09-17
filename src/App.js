import React, { useContext } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from "react-router-dom";

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
	return <div>Hello, World!</div>;
}

export default App;
