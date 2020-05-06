import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function Map() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer2}>
        <View style={styles.imageContainer}>

        </View>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  imageContainer: {
    backgroundColor: '#eeeeee',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowOffset: { width: 6, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.09,

  },
  imageContainer2: {
    shadowOffset: { width: -6, height: -6 },
    shadowColor: 'white',
    shadowOpacity: 1,
  },
});
