import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const location = useLocation();
	const token = localStorage.getItem("token");

	return token ? (
		<Component {...rest} />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

ProtectedRoute.propTypes = {
	component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
