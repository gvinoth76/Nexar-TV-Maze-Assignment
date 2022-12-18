import { combineReducers } from 'redux';
import user from './gateway/search/reducers';

const rootReducer = combineReducers({ 
    user
});

export default rootReducer;