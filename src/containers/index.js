/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter as Router, Route, Switch, Link } from 'react-router-native';

import Home from './Home';
import { AboutContainer, NotFound } from './misc';

const Navbar = () => (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link
          to="/"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>Home</Text>
        </Link>
        <Link
          to="/about"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>About</Text>
        </Link>
      </View>
    </View>
);

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home} />
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

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})

export default App;
