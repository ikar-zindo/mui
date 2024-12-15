import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {login} from "../../store/auth-slice";
import {locate} from "../../utils/locates/locate";
import {globalErrorMessages} from "../../utils/global-error-messages";
import {useAppDispatch} from "../../hooks/hooks";
import {LoginDataRequest} from "../../types/api/auth-types";

interface LoginFormProps {
	captchaUrl?: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({captchaUrl}) => {
	const dispatch = useAppDispatch();
	const [errorMessages, setErrorMessages] = useState<string[] | null>(null);
	const {
		register,
		handleSubmit,
		trigger,
		formState: {errors},
	} = useForm<LoginDataRequest>({
			mode: "onChange",
			defaultValues: {
				email: "",
				password: "",
				rememberMe: false,
				captcha: ""
			}
		}
	);

	const onSubmit: SubmitHandler<LoginDataRequest> = async (data) => {
		setErrorMessages(await dispatch(login(data)) || null);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
			       type="email"
			       placeholder="Email"
			       {...register("email", {
				       required: globalErrorMessages.EMAIL_IS_REQUIRED,
				       pattern: {
					       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
					       message: globalErrorMessages.INVALID_EMAIL
				       },
				       maxLength: {
					       value: 30,
					       message: globalErrorMessages.MAX_LENGTH_30
				       },
				       onBlur: () => trigger("email") // тригерит валидацию email
			       })}/>
			{<span>{errors.email?.message}</span>}

			<input
			       type="password"
			       placeholder="Password"
			       {...register("password", {
				       required: globalErrorMessages.PASSWORD_IS_REQUIRED,
				       onBlur: () => trigger("password")
			       })} />
			{<span>{errors.password?.message}</span>}

			<label>
				<input type="checkbox"
				       {...register("rememberMe")}/>
				Remember Me
			</label>

			{captchaUrl && (
				<>
					<img src={captchaUrl} alt="CAPTCHA"/>
					<input type="captcha"
					       placeholder={locate.auth.captchaPlaceholder}
					       {...register("captcha", {
						       required: true,
						       onBlur: () => trigger("captcha")
					       })} />
				</>
			)}

			{errorMessages && <span>{errorMessages}</span>}

			<div>
				<input type="submit"
				       value={locate.auth.buttonLoginValue}/>
			</div>
		</form>
	);
};

export default LoginForm;