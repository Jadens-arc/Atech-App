import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

const DATA = [
    {
        title: 'Monday, Tuesday, and Friday (8 Period Day)',
        info: `Period 1 7:25 – 8:07 
Period 2 8: 11 – 8: 58 
Period 3 9: 02 – 9: 44 
Period 4 9: 48 – 10: 30

First Lunch (Based on 5th Period)
10:30 – 11:00
Period 5 11:04 – 11:46

or

Period 5 10:34 – 11:16
Second Lunch (Based on 5th Period)
11:16 – 11:46

Period 6 11:50 – 12:32
Period 7 12:36 – 1:18
Period 8 1:22 – 2:05

Assistance/Clubs 2:05 – 2:30
Buses depart at 2:20 pm`,
    },
    {
        title: 'Wednesday (Odd Block Day)',
        info: `Period 1 7:25 – 8:55
Period 3 8:59 -10:24

First Lunch (Based on 5th Period)
10:24 – 10:54
Period 5 10:58 – 12:23

or

Period 5 (Based on 5th Period)
10:28 – 11:53
Second Lunch 11:53 – 12:23

Period 7 12:27 – 1:52

Assistance/Clubs 1:52 – 2:30 
Buses depart at 2:20 pm`,
    },
    {
        title: 'Thursday (Even Block Day)',
        info: `Period 2 7:25 – 8:50
Period 4 8:59 -10:24

First Lunch (Based on 6th Period)
10:24 – 10:54
Period 6 10:58 – 12:23

or

Period 6 (Based on 6th Period) 
10:28 – 11:53
Second Lunch 11:53 – 12:23

Period 8 12:27 – 1:52
Assistance/Clubs 1:52 – 2:30 
buses depart at 2:20 pm`,
    },
    {
        title: 'A Miracle',
        info: 'Isn\'t it amazing how we all largely agreed on one measurement of time. Almost anywhere you go, you can be almost certain that there are 24 hours in a day.'
    }
]


function Item({ title, info }) {
    return (
        <View style={styles.item} >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{info}</Text>
        </View>
    );
}


export default function LinksScreen() {
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
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
    },
    text: {
        fontSize: 25,
    },
});
