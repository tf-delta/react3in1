import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";

import Root from './src/App.android';
import Store from './src/Store';

export default class Main extends React.Component {
  render() {
    return (
    <Provider store={Store}>
        <Root/>
    </Provider>
    )
  }
}

AppRegistry.registerComponent('react3in1', () => Main);
