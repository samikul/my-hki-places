import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './ViewComponents/HomeScreen'
import FavoritiesScreen from './ViewComponents/FavoritiesScreen'
import PlaceListScreen from './ViewComponents/PlaceListScreen'



export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'md-home';
          } else if (route.name === 'Favorities') {
            iconName = 'md-heart';
          }
          else if (route.name === 'All places') {
            iconName = 'md-list';
          }

          return <Ionicons
            name={iconName}
            size={size}
            color={color}
          />;
        },
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="All places" component={PlaceListScreen} />
        <Tab.Screen name="Favorities" component={FavoritiesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}