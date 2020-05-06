
import * as React from 'react';
import { StyleSheet, Text, View, Linking, FlatList} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';




const DATA = [
    {
        title: 'Hard working students',
        info: 'We do work',
    },
    {
        title: 'Hard working teachers',
        info: 'They do work',
    },
    {
        title: 'People who don\'t over elaborate ',
        info: 'your looking at one of them',
    },
]


function Item({ title, info}) {
    return (
        <View style={styles.itemWrap}> 
            <View style={styles.item} >
                <Text style={styles.title}>{title}</Text>
                <Text>{info}</Text>
            </View>
        </View>

    );
}


export default function About() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} info={item.info} link={item.link} />}
            />
            
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    item: {
        backgroundColor: '#eeeeee',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowOffset: {width: 6, height: 6},
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },
    itemWrap: {
        shadowOffset: { width: -6, height: -6 },
        shadowColor: 'white',
        shadowOpacity: 1,
    },

    title: {
        fontSize: 32,
    },

});
