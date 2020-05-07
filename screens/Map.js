import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Switch, Image, Animated, Dimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window')

export default function Map() {
  const level1 = require('../assets/images/test-map.png');
  const level2 = require('../assets/images/test-map2.png');
  var state = {
    index: 0,
    imgList: {
      true: level2,
      false: level1
    }
  }
  

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const scale = new Animated.Value(1)

  const onZoomEvent = Animated.event(
    [
      {
        nativeEvent: { scale: scale }
      }
    ],
    {
      useNativeDriver: true
    }
  )

  const onZoomStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start()
    }
  }

  return (
    <View style={styles.container}>
      
      <PinchGestureHandler
        style={{
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          margin: 500,
        }}
        onGestureEvent={onZoomEvent}
        onHandlerStateChange={onZoomStateChange}>
        <Animated.Image
          source={
            state.imgList[isEnabled]
          }
          style={{
            
            width: width,
            height: 300,
            transform: [{ scale: scale }],
            alignSelf: 'center',
            margin: 150,
          }}
          resizeMode='contain'
        />
      </PinchGestureHandler>

      <Switch
        trackColor={{ false: "##433F6F", true: "#433F6F" }}
        thumbColor={isEnabled ? "#1D6D6D" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  switch: {
    alignSelf: "center",
    margin: 20,
    position: 'absolute',
    bottom: 0
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
