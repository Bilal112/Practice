import React from 'react';
import {StyleSheet, View, Text,Dimensions} from 'react-native';

// eslint-disable-next-line no-undef
export default Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/19,
    backgroundColor: '#2299d5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    height: Dimensions.get('window').height/22,
  
    fontFamily: 'TrebuchetMS',
    fontSize: 25,
    // height:20,
    fontWeight: 'bold',
    // lineHeight: 25,
    // letterSpacing: 0.14,
    // textAlign: 'center',
    color: '#ffffff',
    // justifyContent:"center",
    // marginTop:20
 },
  leftArrow: {
    width: 16,
    height: 16,
    backgroundColor: '#ffffff',
  },
});
