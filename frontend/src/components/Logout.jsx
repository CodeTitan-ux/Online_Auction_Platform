import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";

function Logout() {
	const navigate = useNavigate();
	const { logout: signout } = useAuth();

	useEffect(() => {
		const logout = async () => {
			try {
				await api.post("/users/logout", {});
				localStorage.removeItem("token");
				localStorage.removeItem("user");
				signout();
				navigate("/login");
			} catch (err) {
				console.error(err);
			}
		};

		logout();
	}, [navigate, signout]);

	return <div>Logging out...</div>;
}

export default Logout;
