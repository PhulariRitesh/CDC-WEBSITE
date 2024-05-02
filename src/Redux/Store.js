import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import RootReducer from './RootReducer';

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(logger)))
export default Store