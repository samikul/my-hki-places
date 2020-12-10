import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  FlatList,
  Image,
  TextInput,
} from 'react-native'

import MapScreen from './ViewComponents/MapScreen'
import PlaceScreen from './ViewComponents/PlaceScreen'
import FavoriteScreen from './ViewComponents/FavoriteScreen'


export default function App({ navigation }) {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Map') {
            iconName = 'md-pin';
          } else if (route.name === 'Places') {
            iconName = 'md-list';
          } else if (route.name === 'Favorites') {
            iconName = 'md-heart';
          }

          return <Ionicons
            name={iconName}
            size={size}
            color={color}
          />;
        },
      })}>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Places" component={PlaceScreen} />
        <Tab.Screen name="Favorites" component={FavoriteScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});