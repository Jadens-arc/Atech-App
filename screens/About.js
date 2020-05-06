
import * as React from 'react';
import { StyleSheet, Text, View, Linking, FlatList} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';




const DATA = [
    {
        title: 'Hard working students',
        info: 'We do work',
        link: null,
    },
    {
        title: 'Hard working teachers',
        info: 'They do work',
        link: null,
    },
    {
        title: 'People who don\'t over elaborate ',
        info: 'your looking at one of them',
        link: null,
    },
    {
        title: 'Connect With Us',
	    info: null,
	    link: null
    },
    {
        title: 'Our Website',
        info: 'atech.org',
        link: 'https://atech.org'
    },
    {
        title: 'On Instagram',
        info: '@ advancedtechnologiesacademy',
        link: 'https://www.instagram.com/advancedtechnologiesacademy/'
    },
    {
        title: 'On Twitter',
        info: '@ atech_mavericks',
        link: 'https://twitter.com/atech_mavericks'
    },
    {
        title: 'On Facebook',
        info: '@ AdvancedTechnologiesAcademy',
        link: 'https://www.facebook.com/AdvancedTechnologiesAcademy'
    },

]


function Item({ title, info, link}) {

    if (link == null && info == null) {
        return (
            <View style={styles.itemWrap}>
                <View style={styles.item} >
                    <Text style={styles.header}>{title}</Text>
                </View>
            </View>

        );
    }

    if (link != null) {
        return (
            <View style={styles.itemWrap} onPress={() => Linking.openURL(link)}>
                <View style={styles.item} onPress={() => Linking.openURL(link)}>
                    <Text style={styles.link} onPress={() => Linking.openURL(link)}>{title}</Text>
                    <Text>{info}</Text>
                </View>
            </View>

        );
    }
    else {
        return (
            <View style={styles.itemWrap}> 
                <View style={styles.item} >
                    <Text style={styles.title}>{title}</Text>
                    <Text>{info}</Text>
                </View>
            </View>

        );
    }
}


export default function About() {
    return (
        <View style={styles.container} contentContainerStyle={styles.contentContainer}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} info={item.info} link={item.link} />}
            />

            
        </View>
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
    header: {
	    fontSize: 35,
        textAlign: 'center', 
    },
    link: {
        fontSize: 32,

        color: 'blue',

    },

});
