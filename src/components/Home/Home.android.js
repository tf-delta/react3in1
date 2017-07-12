/**
 * Created by peterk on 7/11/17.
 */
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native'

import actions from '../../actions';

class Home extends React.Component {
  render() {
    const {reducer, noop} = this.props;
    return (
        <View>
        <Text>Home</Text>
        <TouchableOpacity onPress={noop.bind(this)}>
        <Text>Click HERE to increase the count below</Text>
        </TouchableOpacity>
        <Text>{'Count: '}{reducer.count}</Text>
        </View>
    );
  }
}

export default Home;
