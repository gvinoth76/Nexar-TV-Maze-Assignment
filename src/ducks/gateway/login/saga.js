import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import * as api from '../../../endpoints/gateway';
import * as types from './types';

function* login({ payload }) {
    try {
        debugger; 
        let result = yield call(api.login, payload); 
        
    } catch (err) {
        yield put({ type: types.LOGIN_FAILURE, payload: "Incorrect email or password" });
    }
}



function* loginSaga(data) {    
    yield takeLatest(types.LOGIN_REQUEST, login);
}

export default loginSaga;
