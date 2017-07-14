import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import Button from './Button';

class AutoComplete extends Component {
  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
        console.log(place);
        // place represents user's selection from the
        // suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Button
          onPress={() => this.openSearchModal()}
        >Pick a Place
        </Button>
      </View>
    );
  }
}

  const styles = {
    containerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#F5FCFF',
    }
  };


  export default AutoComplete;
