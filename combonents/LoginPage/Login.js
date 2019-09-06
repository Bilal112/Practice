import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Text, Content } from 'react-native'


const s =StyleSheet.creat({
    rectangle209 : {
        width: 317,
        height: 44,
        borderRadius: 3,
        backgroundColor: "#2d509b"
      },
  })

export default class Login extends Component {

    render() {
        return (
            <View style={{marginBottom:80 , marginTop:40}}>
                <View style={s.rectangle209}>
                <Button
                    style={{ fontSize: 20, backgroundColor:"red" }}
                    // onPress={() => this._handlePress()}
                    title="Continue with Mobile Number">
                </Button>
                </View>
            </View>

        )
    }
}