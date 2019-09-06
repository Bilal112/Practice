import React, { Fragment, Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Dimensions
} from 'react-native';
import { Container, Content, Body, Title, Form, Item, Input, Label, Button } from 'native-base';
import Header from '../Header/Header'


const s = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    height: 22,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 10,
    paddingLeft: 10,
  },
  settingsChangePassword: {
    width: 361,
    height: 61,
    backgroundColor: "#ffffff",
    marginBottom: 100,
    paddingRight: 10, paddingLeft: 10
  },
  container: {
    width: "100%",
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 10,
    paddingLeft: 10
  },
  button: {
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10

  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  update: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 128,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 70,
    borderRadius: 40,
    paddingBottom: 60,
    paddingTop: 50
  }
})



export default class Password extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: '1234868',
      newpass: "",
      retype: "",
      title: "",
      color: "#2299d5"
    }

  }

  changeColor = () => {
    if (this.state.color == "red") {
      this.setState({ color: "green" })
    } else {
      this.setState({ color: "#8DC1D8" })
    }
  }

  render() {
    return (

      <Fragment>
        <View style={{ display: 'flex', flex: 1 }}>
          <View style={{ width: 20 }}>
            <Header title={'Change Password'} />
          </View>
          <Form style={{ marginBottom: 90 }}>
            <Item inlineLabel>
              <Label type="Password">Current Password</Label>
              <Input secureTextEntry />
            </Item>
            <Item inlineLabel last>
              <Label type="password" onchange={(value) => this.updateState('new', value)} style={{ underlineColorAndroid: "#fff" }}>New Password</Label>
              <Input secureTextEntry />
            </Item>
            <Item inlineLabel last>
              <Label type="password" onchange={(value) => this.updateState('new', value)}>Re-type new Password</Label>
              <Input secureTextEntry />
            </Item>
            <View style={s.update}>
              <Button block style={{ borderRadius: 4, backgroundColor: `${this.state.color}`, justifyContent: "center", alignContent: "center" }}
                onPress={() => { this.changeColor()}}
                
                >
                <Text style={s.text}>update</Text>
              </Button>

            </View>
          </Form>
        </View>
      </Fragment>
    );

  }

}

