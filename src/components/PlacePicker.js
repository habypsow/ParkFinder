import React, { Component } from 'react';
import { View } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import Button from './Button';


class PlacePicker extends Component {
  openSearchModal() {
    RNGooglePlaces.openPlacePickerModal()
    .then((place) => {
      console.log(place);
      // place represents user's selection from the
      // suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  render() {
    return (
      <View style={styles.container}>
      <Button
      onPress={() => this.openSearchModal()}
      >
      Open Place Picker
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

export default PlacePicker;


// import React, { Component } from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import RNGooglePlacePicker from 'react-native-google-place-picker';
// // import Button from './Button';
//
// class PlacePicker extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       location: null
//     };
//   }
//
//   onPress() {
//     RNGooglePlacePicker.show((response) => {
//       if (response.didCancel) {
//         console.log('User cancelled GooglePlacePicker');
//       }
//       else if (response.error) {
//         console.log('GooglePlacePicker Error: ', response.error);
//       }
//       else {
//         this.setState({
//           location: response
//         });
//       }
//     });
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={this.onPress.bind(this)}>
//           <Text style={{color: '#72c02c', fontSize: 20, fontWeight:'bold'}}>
//             Click me to push Google Place Picker!
//           </Text>
//         </TouchableOpacity>
//         <View style={styles.location}>
//           <Text style={{color: 'black', fontSize: 15}}>
//             {JSON.stringify(this.state)}
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = {
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   location: {
//     backgroundColor: 'white',
//     margin: 25
//   }
// }
//
// export default PlacePicker;
