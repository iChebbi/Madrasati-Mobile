import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './app/router/router'

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}