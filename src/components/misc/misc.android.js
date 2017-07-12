/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const About = ({reducer}) => (
    <View>
        <Text>About</Text>
        <Text>Current count: {reducer.count}</Text>
    </View>
);

const NotFound = () => (
    <View>
        <Text>Not Found</Text>
    </View>
);

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

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: 'center',
    fontSize: 15
  }
});

export {
  About,
  NotFound,
  Navbar
};
