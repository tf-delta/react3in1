/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import { HomeContainer, AboutContainer} from './containers';

const RouteConfigs = {
    Home: {screen: HomeContainer},
    About: {screen: AboutContainer},
};

const StackNavigatorConfig = {
    mode: 'card',
    headerMode: 'screen'
};

const App = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default App;
