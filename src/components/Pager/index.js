import React, { Component } from 'react';
import { View } from 'react-native';

import VerticalPager from './VerticalPager';
import HorizontalPager from './HorizontalPager';

let viewStyle = {
  flex: 1, backgroundColor: '#263238'
};

export default class Pager extends Component {
    render() {
      return (
        <View style={ viewStyle }>
          <HorizontalPager/>
          <VerticalPager/>
        </View>
      );
    }
}

