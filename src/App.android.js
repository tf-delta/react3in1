/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import { View } from 'react-native';
import { NativeRouter as Router, Route, Switch } from 'react-router-native';

import { Navbar, NotFound, Pager } from './components';
import { HomeContainer, AboutContainer } from './containers';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/about" component={AboutContainer} />
        <Route component={NotFound}/>
    </Switch>
);

const App = () => (
    <Router><View>
    <Navbar/>
    <Routes/>
    </View></Router>
);

export default App;
