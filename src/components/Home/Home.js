/**
 * Created by peterk on 7/11/17.
 */
import React from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import GridView from '../GridView/GridView';

const _listItemsId = {
    'GridView': 'GridView',
    'ListViewMore': 'ListViewMore',
    'Touchable': 'Touchable',
    'About': 'About'
};

const _listItems = {
    'List View': [
        {label: 'Grid View', id: _listItemsId.GridView},
        // {label: 'More...', id: _listItemsId.ListViewMore}
    ],
    'Event': [
        {label: 'Touchable', id: _listItemsId.Touchable},
    ],
    'Misc': [
        {label: 'About', id: _listItemsId.About}
    ]
};

const BASE_SIZE = 30;
const RANDOM_FACTOR_MAX = 30;

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props);

        this._generateDataSource = this._generateDataSource.bind(this);
        this._renderGridViewItem = this._renderGridViewItem.bind(this);

        this.state = {
            data: null,
            dataSource: null,
            // itemCount: _listItems.length,
            itemsPerRow: 1,
            variableContent: false,
            useRandomCounts: false,
        };
        this.state.dataSource = this._generateDataSource(_listItems);
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderGridView()}
            </View>
        );
    }

    _onPressed (item, sectionID, rowID, itemIndex, itemID) {
        console.log(item);
        const {navigate} = this.props.navigation;
        const screenId = _listItemsId[item.id];
        if ( screenId )
            navigate(item.id);
        else
            Alert.alert('Error', 'No screen id matched: ' + item.id);
    }

    _renderGridViewItem(item, sectionID, rowID, itemIndex, itemID)  {
        const randomValue = this.state.variableContent ? item.randomValue : BASE_SIZE;
        return (
            <TouchableOpacity onPress={()=>this._onPressed(item, sectionID, rowID, itemIndex, itemID)}>
                <View key={item.key}
                      style={[ styles.item, styles.itemSpacing, { backgroundColor: item.backgroundColor } ]} >
                    <Text style={{ fontSize: randomValue }}>
                        <Text>{item.text}</Text>
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    _renderGridView() {
        return (
            <GridView
                data={this.state.data}
                /** `dataSource` will override `data` */
                dataSource={this.state.dataSource}
                padding={4}
                itemsPerRow={this.state.itemsPerRow}
                /** You can set different item counts for portrait and/or landscape mode */
                // itemsPerRowPortrait={4}
                // itemsPerRowLandscape={7}
                renderItem={this._renderGridViewItem}
                renderSectionHeader={this.state.useRandomCounts ? this._renderSectionHeader : null }
            />
        );
    }

    _renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.row}>
                <Text>{sectionID}</Text>
            </View>
        );
    }

    _generateDataSource() {
        const { itemsPerRow } = this.state;
        let dataSource={};
        Object.keys(_listItems).forEach((key)=>{
            let items = _generateData(_listItems[key]);
            //console.log(items);
            dataSource[key] = _generateRowsData(items, itemsPerRow);
        });
        console.log('itemsPerRow: ' + itemsPerRow);
        console.log(dataSource);

        return new GridView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        }).cloneWithRowsAndSections(dataSource);

        function  _generateRowsData(items, itemsPerRow) {
            const rowData = [];
            for (let i = 0; i < items.length; i += itemsPerRow) {
                rowData.push(items.slice(i, i+itemsPerRow));
            }
            return rowData;
        }
        function  _generateData(items) {
            return items.map((item, index) => {
                const colorIndex = index % 3;
                return {
                    id: item.id,
                    key: index,
                    text: item.label,
                    randomValue: Math.random() * RANDOM_FACTOR_MAX + BASE_SIZE,
                    backgroundColor: `#${colorIndex === 0 ? 'FF' : '88'}` + `${colorIndex === 1 ? 'FF' : '88'}` + `${colorIndex === 2 ? 'FF' : '88'}`
                };
            });
        }
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    options: {
        padding: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    item: {
        flex: 1,
        borderColor: 'blue',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        overflow: 'hidden',
    },
});

export default Home;
