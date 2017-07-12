/**
 * Created by peterk on 7/11/17.
 */

import { combineReducers } from 'redux'
import reducer from './reducers'

const Reducers = combineReducers({
    reducer: reducer.reducer
});

export default Reducers;
