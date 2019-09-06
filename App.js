import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import Number from './combonents/Number/Number';
import  Routes from './combonents/Navigation/Navigation'

export default class App extends React.Component {
  render() {
    return <Routes />;
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
