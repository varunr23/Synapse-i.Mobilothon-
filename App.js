import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivitiesProvider } from './context/ActivitiesContext';
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import MapScreen from './screens/MapScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ActivitiesProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Activity" component={ActivityScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ActivitiesProvider>
  );
}
