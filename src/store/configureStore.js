import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../ducks/index';
import * as sagas from '../ducks/saga-conf/index';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['wizard'],
    // transforms: [
    //   encryptTransform({
    //     secretKey: 'roycemernaffLawrance',
        
    //   }),
    // ],
  };


const sagaMiddleware = createSagaMiddleware()

let middlewares = [
	sagaMiddleware,

];

export default function configureStore(initialState) {

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));
   
    const persistor = persistStore(store);
  
    Object.values(sagas).forEach((saga,index) => {
		   return sagaMiddleware.run(saga);
	});
    
    return {store,persistor};
};
