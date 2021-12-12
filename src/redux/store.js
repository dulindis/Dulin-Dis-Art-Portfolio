import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk'
import {rootReducer} from './root.reducer.js';


const middlewares = [thunk];
if (process.env.NODE_ENV==='development') {
    middlewares.push(logger)
}
//..isll spread all of the middleares from teh array as individual arguments
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);


const exportedObject = {
    store,
    persistor,
};
export default exportedObject;