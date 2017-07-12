/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux';

const About = ({reducer}) => (
    <View>
        <Text>About</Text>
        <Text>Current count: {reducer.count}</Text>
    </View>
);
const AboutContainer = connect((state)=>({reducer:state.reducer}))(About);

const NotFound = () => (
    <View>
        <Text>Not Found</Text>
    </View>
);

export {
  AboutContainer,
  NotFound
};
