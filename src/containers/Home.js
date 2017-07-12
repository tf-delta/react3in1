/**
 * Created by peterk on 7/11/17.
 */
import React from 'react';
import { connect } from 'react-redux';

import { Home } from '../components'

import actions from '../actions';

const mapHomeStateToProps = (state) => ({
    reducer: state.reducer
});
const mapHomeDispatchToProps = (dispatch) => ({
    noop: () => dispatch(actions.action_noop())
});
const HomeContainer = connect(mapHomeStateToProps, mapHomeDispatchToProps)(Home);

export default HomeContainer;
