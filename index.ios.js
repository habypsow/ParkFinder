import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';

const App = () => (
      <Header />
  );


ReactNative.AppRegistry.registerComponent('ParkFinder', () => App);
