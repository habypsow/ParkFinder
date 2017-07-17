import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/Header';
import PlacePicker from './components/PlacePicker';
import AutoComplete from  './components/AutoComplete';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText={'ParkFinder'}/>
        <PlacePicker />
        <AutoComplete />
      </View>
      </Provider>
  );
};

  export default App;
