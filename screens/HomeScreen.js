import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet,  View } from 'react-native';

import { WebView } from 'react-native-webview';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://mavpulse.com/' }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
