import React from 'react';
import { View, Image, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';

// NAVIGATION
import HomeScreen from 'MyProfile/app/components/HomeScreen';

export default class App extends React.Component{
  render() {
    return (
      <HomeScreen/>
    );
  }
}
