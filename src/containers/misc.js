/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import { About } from '../components'

const AboutContainer = connect((state)=>({reducer:state.reducer}))(About);

export {
  AboutContainer
};
