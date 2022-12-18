import * as types from './types';
import configureStore from '../../../store/configureStore';

export function search(payload) { 
	return { type: types.SEARCH_REQUEST, payload: payload };
}

export function details(payload) { 
	return { type: types.DETAILS_REQUEST, payload: payload };
}

export function reset(payload) { 
	return { type: types.RESET_REQUEST, payload: payload };
}