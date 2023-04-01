import { combineReducers } from 'redux';
import { serviceReducer }  from "./serviceReducer";
import { authReducer }  from "./authReducer";

export const reducers = combineReducers({
	allServices:serviceReducer,
	authentication:authReducer,

})