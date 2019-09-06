import React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

export default OfflineScreen = () => {
  return (
    <View style={styles.screen}>
      <TouchableHighlight>
        <View style={styles.round}>
          <Image
            style={{
              alignSelf: 'center',
              borderRadius: 50,
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'absolute',
              bottom: 10,
              right: 0,
              left: 40,
            }}
            source={require('../WelcomeScreen/boy.png')}
          />
        </View>
      </TouchableHighlight>

      <Text style={styles.offlineText}>Offline</Text>
      <Text style={styles.titleText}>
        Lorem dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut ero labore et dolore
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2299d5',
  },
  offlineText: {
    width: 308,
    height: 41,
    fontFamily: 'TrebuchetMS',
    fontSize: 35,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 41,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  titleText: {
    width: 327,
    height: 70,
    fontFamily: 'TrebuchetMS',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  round: {
    alignSelf: 'auto',
    width: 343,
    height: 343,
    borderRadius: 200,
    marginBottom: 50,
    borderWidth: 25,
    borderColor: '#9ed9f7',
    backgroundColor: '#ffffff',
    position: 'relative',
  },
});
