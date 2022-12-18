import createReducer from '../../../utils/createReducer';
import * as types from './types'

const initialState = {
	search: null,
	error: '',
	pending: false,
	details: null
};

const handlers = {
	[types.SEARCH_REQUEST] : state => ({ ...state, pending: true, search: null }),
    [types.SEARCH_FAILURE]: (state, payload) => ({ ...state, pending: false, search: null, message: 'failure' }),
	[types.SEARCH_SUCCESS]: (state, payload) => ({ ...state, pending: false, search: payload, message: 'success' }),
	[types.DETAILS_REQUEST] : state => ({ ...state, pending: true, details: null }),
    [types.DETAILS_FAILURE]: (state, payload) => ({ ...state, pending: false, details: null, message: 'failure' }),
	[types.DETAILS_SUCCESS]: (state, payload) => ({ ...state, pending: false, details: payload, message: 'success' }),
	[types.RESET_REQUEST] : state => ({ ...state, pending: false, search: null, details: null, message: null }),
    [types.RESET_FAILURE]: (state, payload) => ({ ...state, pending: false, search: null, details: null, message: null }),
	[types.RESET_SUCCESS]: (state, payload) => ({ ...state, pending: false, search: null, details: null, message: null }),
}

export default createReducer(initialState, handlers);