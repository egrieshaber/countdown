import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import EventList from './EventList';
import EventForm from './EventForm';
import { YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is depreciated',
  'Warning componentWillRecieveProps is depreciated'
]);

const MainNavigator = createStackNavigator({
  List: {screen: EventList},
  Form: {screen: EventForm},
});

const App = createAppContainer(MainNavigator);

export default App;

// export default createStackNavigator({
//   list: {
//     screen: EventList,
//     navigationOptions: () => ({
//       title: 'Your Events',
//     }),
//   },
//   list: {
//     screen: EventForm,
//     navigationOptions: () => ({
//       title: 'add an event',
//     }),
//   },
// });
