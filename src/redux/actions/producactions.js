import { ActionTypes } from "../constants/actiont";

export const setServices = (services) => {
	return{
		type:ActionTypes.SET_SERVICES,
		payload:services,
	};
};

export const selectedServices = (services) => {
	return{
		type:ActionTypes.SELECTED_PRODUCT,
		payload:services,
	}
}