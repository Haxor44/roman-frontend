import { ActionTypes } from "../constants/actiont";

export const setLogin = (auth) => {
	return{
		type:ActionTypes.SET_LOGIN,
		payload:auth
	}
}