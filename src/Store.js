/**
 * Created by peterk on 7/11/17.
 */

import { createStore, compose, applyMiddleware } from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage as Storage} from 'react-native';

import Reducers from './Reducer';
import Actions from './Action';

// ================
// stores
//
const devtool = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtool_enhancer = devtool && devtool(Actions);

const Store = createStore(
    Reducers,
    undefined,
    compose(
        applyMiddleware(),
        autoRehydrate()
    )
);

persistStore(Store, {storage: Storage});

export default Store;
