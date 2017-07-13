/**
 * Created by peterk on 7/11/17.
 */
import React from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {
    renderItem = ({item}) => (
        <Text style={styles.item}>{item.key}</Text>
    )

  render() {
    const {reducer, noop} = this.props;
    return (
            <View style={styles.container}>
                <FlatList data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                        {key: '001'},
                        {key: '002'},
                        {key: '003'},
                        {key: '004'},
                        {key: '005'},
                        {key: '006'},
                        {key: '007'},
                        {key: '008'},
                        {key: '009'},
                        {key: '010'},
                        {key: '011'},
                        {key: '012'},
                        {key: '013'},
                        {key: '014'},
                      ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default Home;
