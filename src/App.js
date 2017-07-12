/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar, NotFound } from './components';
import { HomeContainer, AboutContainer } from './containers';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/about" component={AboutContainer} />
        <Route component={NotFound}/>
    </Switch>
);

const App = () => (
    <Router><div>
    <Navbar/>
    <Routes/>
    </div></Router>
);

export default App;
