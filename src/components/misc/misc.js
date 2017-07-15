/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const About = ({reducer, navigation}) => (
    <View >
        <Text>About</Text>
        <Text>Current count: {reducer ? reducer.count : 0}</Text>
        <Text>Count from Home: {navigation.state.params ? navigation.state.params.count : 'no count'}</Text>
    </View>
);
/* Specify the title of screen */
// About.navigationOptions = {
//     title: 'About'
// };
/* Title with param */
// About.navigationOptions = ({navigation}) =>({
//     title: `About(${navigation.state.params ? navigation.state.params.count : ''})`
// });
/* Title and more... */
About.navigationOptions = ({navigation}) =>{
    let {count} = navigation.state.params || '';
    const {setParams} = navigation;
    count = count ? count : '';
    return {
        title: `About(${count})`,
        headerRight: (
            <Button title="count+1"
                    onPress={() => setParams({count: count+1})}
            />
        )
    }
};

const NotFound = () => (
    <View>
        <Text>Not Found</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
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
});

export {
  About,
  NotFound
};
