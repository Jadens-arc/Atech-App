
import * as React from 'react';
import { StyleSheet, Text, View, Linking, FlatList} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';




const DATA = [
    {
        title: 'This App',
        info: 'An app about me',
        link: 'https://expo.io/@jaden-arceneaux/jadens-app'
    },
    {
        title: 'Scripty',
        info: 'A text editor for ChromeOS',
        link: 'https://jadens-arc.github.io/Scripty/'
    },
    {
        title: 'Ubuntu Brightness Control',
        info: 'A small application to adjust brightness on ubuntu desktop',
        link: 'https://github.com/Jadens-arc/Ubuntu-Brightness'
    },
]


function Item({ title, info, link }) {
    return (
        <View style={styles.item} onPress={() => Linking.openURL(link)}>
            <Text style={styles.title} onPress={() => Linking.openURL(link)}>{title}</Text>
            <Text onPress={() => Linking.openURL(link)}>{info}</Text>
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
    },
    title: {
        fontSize: 32,
    },

});
