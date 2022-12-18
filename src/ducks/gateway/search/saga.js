import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import * as api from '../../../endpoints/gateway';
import * as types from './types';

function* search({ payload }) {
    try {
        let result = yield call(api.search, payload); 
        yield put({ type: types.SEARCH_SUCCESS, payload: result.data });
    } catch (err) {
        yield put({ type: types.SEARCH_FAILURE, payload: "Search failed" });
    }
}

function* details({ payload }) {
    try {
        let result = yield call(api.details, payload); 
        yield put({ type: types.DETAILS_SUCCESS, payload: result.data });
    } catch (err) {
        yield put({ type: types.DETAILS_FAILURE, payload: "Search failed" });
    }
}

function* reset({ payload }) {
    try {
        yield put({ type: types.RESET_SUCCESS, payload: null});
    } catch (err) {
        yield put({ type: types.RESET_FAILURE, payload: null });
    }
}

function* searchSaga(data) {    
    yield takeLatest(types.SEARCH_REQUEST, search);
    yield takeLatest(types.DETAILS_REQUEST, details);
    yield takeLatest(types.RESET_REQUEST, reset);
}

export default searchSaga;
