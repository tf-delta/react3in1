/**
 * Created by peterk on 7/11/17.
 */

import { createStore } from 'redux';
import Reducers from './Reducer';
import Actions from './Action';

// ================
// stores
//
const devtool = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtool_enhancer = devtool && devtool(Actions);
const Store = createStore(Reducers, devtool_enhancer);

export default Store;
