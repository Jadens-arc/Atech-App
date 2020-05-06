import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Map from '../screens/Map';
import BellSchedule from '../screens/BellSchedule';
import About from '../screens/About';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Bell Schedule"
        component={BellSchedule}
        options={{
          title: 'Bell Schedule',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-list" />,
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={Map}
        options={{
          title: 'Map',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-map" />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-information" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Welcome to A-TECH';
    case 'Bell Schedule':
      return '🔔 *rings*';
    case 'About':
      return 'What is A-TECH';
    case 'Map':
      return 'Our Grounds';
  }
}
