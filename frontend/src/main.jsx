import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

if (import.meta.env.PROD) {
	axios.defaults.baseURL = "https://online-auction-platform-oiym.onrender.com";
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
