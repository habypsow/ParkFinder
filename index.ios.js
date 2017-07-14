import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import PlacePicker from './src/components/PlacePicker';
// import AutoComplete from  './src/components/AutoComplete';

const App = () => (
      <View style={{ flex: 1 }}>
      <Header headerText={'ParkFinder'}/>
      <PlacePicker />

      </View>
  );


AppRegistry.registerComponent('ParkFinder', () => App);
