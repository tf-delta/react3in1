/**
 * Created by peterk on 7/11/17.
 */
import React from 'react';
import {Alert, Platform, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this._onPressButton = this._onPressButton.bind(this);
    }

    static navigationOptions = {
        title: 'Home'
    };

    _onPressButton() {
        const {reducer, noop} = this.props;
        const {navigate} = this.props.navigation;
        noop();
        navigate('About', {count: reducer.count, reducer: reducer});
    }

    render() {
        const {reducer} = this.props;
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={this._onPressButton}
                                         background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable {reducer.count}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});

export default Home;
