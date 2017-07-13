/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import { View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { HomeContainer, AboutContainer } from './containers';

const RouteConfigs = {
    Home: {screen: HomeContainer},
    About: {screen: AboutContainer}
};

const StackNavigatorConfig = {
    mode: 'card',
    headerMode: 'screen'
};
//const App = StackNavigator(RouteConfigs, StackNavigatorConfig);

const TabNavigatorConfig = {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12
        },
        style: {
            backgroundColor: 'blue'
        }
    }
};
const App = TabNavigator(RouteConfigs, TabNavigatorConfig);

export default App;
