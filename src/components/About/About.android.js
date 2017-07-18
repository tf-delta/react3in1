/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const About = ({reducer, navigation}) => (
    <View style={styles.container}>
        <Text>About</Text>
        <Text>Current count: {reducer.count}</Text>
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
    const {count} = navigation.state.params || '';
    const {setParams} = navigation;
    return {
        title: `About(${count})`,
        headerRight: (
            <Button title="count+1"
                    onPress={() => setParams({count: count+1})}
            />
        )
    }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  }
});

export default About;
