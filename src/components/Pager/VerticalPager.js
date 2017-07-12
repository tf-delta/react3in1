import React, { Component } from 'react';
import { StatusBar, Image, Platform } from 'react-native';
import { Pages } from './pages';

let imageStyle = {
  width: null,
  height: null,
  resizeMode: 'cover',
  flex: 1,
};

Platform.select({
  ios: () => StatusBar.setBarStyle('light-content'),
  android: () => StatusBar.setBackgroundColor('#263238'),
})();

/* eslint-enable */

export default class VerticalPager extends Component {
    render() {
      return (
          <Pages horizontal={false} indicatorPosition='left' indicatorColor='#FF9100' indicatorOpacity={0.54}>
            <Image source={require('./assets/b-1.png')} style={imageStyle} />
            <Image source={require('./assets/b-2.png')} style={imageStyle} />
            <Image source={require('./assets/b-3.png')} style={imageStyle} />
          </Pages>
      );
    }
}

