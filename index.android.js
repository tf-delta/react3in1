import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";

import Root from './src/App';
import Store from './src/Store';

export default Main = () => {
    return (
        <Provider store={Store}>
            <Root/>
        </Provider>
    )
};

AppRegistry.registerComponent('react3in1', () => Main);
