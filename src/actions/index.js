/**
 * Created by peterk on 7/11/17.
 */

import * as types from '../constants/ActionTypes'

let count = 0;
const action_noop = () => ({
    type: types.NOOP,
    count: ++count
});

export default {
    action_noop
};
