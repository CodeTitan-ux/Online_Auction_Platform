import axios from "axios";

const API_URL = import.meta.env.PROD 
	? "https://online-auction-platform-oiym.onrender.com/api" 
	: "/api";

const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
});

// Add a request interceptor to attach the JWT token
api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default api;
