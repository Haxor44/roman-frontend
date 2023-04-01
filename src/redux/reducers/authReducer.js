import { ActionTypes } from "../constants/actiont";

const initialState = {
	auth:"",
}

export const authReducer = (state = initialState,{type,payload}) => {
	switch(type){
		case ActionTypes.SET_LOGIN:
			return {...state,auth:payload};
		default:
			return state;
	}

}