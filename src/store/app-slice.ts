import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {me} from "./auth-slice";
import {AppState, GlobalError} from "../types/store/app-interfaces";
import {AppDispatch} from "./store.ts";
import {ErrorAPI} from "../types/api/auth-types.ts";

const initialState: AppState = {
	initialized: false,
	globalError: null,
}

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		initializedSuccess: (state) => {
			return {...state, initialized: true};
		},
		setGlobalError: (state, action: PayloadAction<GlobalError>) => {  // Экшен для установки глобальной ошибки
			return {...state, globalError: action.payload};
		},
		clearGlobalError: (state) => {  // Экшен для очистки ошибки
			return {...state, globalError: null};
		}
	}
});

// ASYNCHRONOUS ACTIONS
export const initializeApp = () => async (dispatch: AppDispatch) => {
	const promise = await dispatch(me());
	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess());
	}).catch((error: ErrorAPI) => {
			dispatch(setGlobalError({
				code: error.code || 'UNKNOWN_CODE',
				message: error.message || 'Unknown error occurred',
				status: error.status || 999,
			}))
		}
	)
};

export const {
	initializedSuccess,
	setGlobalError,
	clearGlobalError,
} = appSlice.actions;
export default appSlice.reducer;