/**
 * Created by peterk on 7/11/17.
 */

import { createStore, compose, applyMiddleware } from 'redux';

import Reducers from './Reducer';
// import Actions from './Action';

// ================
// stores
//
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(Reducers,
    /* preloadedState, */
    composeEnhancers(
        applyMiddleware(/*...middleware*/)
));
/* eslint-enable */


export default Store;
