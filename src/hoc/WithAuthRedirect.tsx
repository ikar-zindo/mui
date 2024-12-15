import React, {ReactNode, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {selectIsAuth} from "../selectors/auth-selectors";
import {useAppSelector} from "../hooks/hooks.ts";

interface WithAuthRedirectProps {
	children: ReactNode;
}

const WithAuthRedirect: React.FC<WithAuthRedirectProps> = ({children}) => {
	const isAuth = useAppSelector(selectIsAuth);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth && location.pathname === '/login/') {
			navigate('/profile', { replace: true });
		}
	}, [isAuth, location, navigate]);

	if (!isAuth) {
		return children;
	}

	return null;
};

export default WithAuthRedirect;
