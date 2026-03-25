import axios from "axios";

const API_URL = import.meta.env.PROD 
	? "https://online-auction-platform-oiym.onrender.com/api" 
	: "/api";

const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
});

export default api;
