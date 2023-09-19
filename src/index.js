import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import "./scss/_common.scss";
import "./scss/_variables.scss";
import "./scss/normalize.scss";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<BrowserRouter basename="/serials">
			<App />
		</BrowserRouter>
	</Provider>
);
