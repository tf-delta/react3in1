/**
 * Created by peterk on 7/11/17.
 */

import * as types from '../constants/ActionTypes'

const reducer = (state = {count: 0}, action) => {
    switch ( action.type ) {
        case types.NOOP:
        default:
            return {...state, count: action.count || 0};
    }
};

export default {
    reducer
};
