import { createStore, applyMiddleware , compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers/reducer';

const initializerState= {};

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initializerState, enhancer(applyMiddleware(reduxThunk)));

export default store;