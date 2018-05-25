import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StackNavigator } from "react-navigation";

import HomeScreen from './src/home';
import MapScreen from './src/map';

const Approute = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  MapScreen: {screen: MapScreen}, 
}, 
{
  initialRouteName: 'HomeScreen',
});

export default class App extends Component {

  render() {
    return (
      <Approute />
    );
  }
}

