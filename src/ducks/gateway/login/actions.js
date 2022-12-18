import * as types from './types';
import configureStore from '../../../store/configureStore';

export function login(payload) {   
    debugger; 
	return { type: types.LOGIN_REQUEST, payload: payload };
}
