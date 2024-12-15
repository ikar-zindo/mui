import React, {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';

interface ProtectedRouteProps {
	element: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({element}) => {
	// const isAuth = useAppSelector(selectIsAuth);
	const isAuth: boolean = true
	if (!isAuth) {
		return <Navigate to="/login/"/>;
	}

	return element;
};

export default ProtectedRoute;
