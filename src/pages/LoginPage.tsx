import React, {useEffect} from "react";
import LoginForm from "../components/common/LoginForm";
import {useAppSelector} from "../hooks/hooks";
import {selectAuth} from "../selectors/auth-selectors";

const LoginPage: React.FC = React.memo(() => {
	const auth = useAppSelector(selectAuth);
	const captchaUrl = auth.captchaUrl;

	useEffect(() => {
	}, [auth, auth.isAuth]);

	return <LoginForm captchaUrl={captchaUrl}/>;
});

export default LoginPage;