/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import { HomeContainer, AboutContainer } from './containers';
import * as comps from './components';

const RouteConfigs = {
    Home: {screen: HomeContainer},
    GridView: {screen: comps.GridView},
    Touchable: {screen: comps.Touchable},
    About: {screen: AboutContainer}
};

const StackNavigatorConfig = {
    mode: 'card',
    headerMode: 'screen' // float, screen, none
};
const App = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default App;
