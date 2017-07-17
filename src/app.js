import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './components/Header';
import PlacePicker from './components/PlacePicker';
import AutoComplete from  './components/AutoComplete';

const App = () => (
      <View style={{ flex: 1 }}>
      <Header headerText={'ParkFinder'}/>
      <PlacePicker />
      <AutoComplete />
      </View>
  );

  export default App;
