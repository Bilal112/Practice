import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Content, Textarea, Form, Icon, Button, CardItem, Input } from "native-base"
import Header from "../Header/Header";
import { Actions } from "react-native-router-flux";

export default class Number extends Component {

    render() {
        return (
            <View >
                <View>
                    <Header title={'Verify your mobile number'} />
                </View>

                <View style={{ borderColor: "blue" }}>
                    <Text style={{
                        frontSize: 40,
                        marginTop: 10,
                        marginLeft: 10,
                        textAlgin: 'left',
                        fontStyle: 'bold',
                        lineHeight: 19,
                        color: '#2299d5'
                    }}>
                        Verify your mobile number
           </Text>
                </View>
                <View >
                    <View>
                        <Text style={{width: 330,   height: 46,  fontFamily: "TrebuchetMS",
                            fontSize: 16,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            lineHeight: 20,
                            letterSpacing: 0,
                            marginLeft: 10,
                            textAlign: "left",
                            color: "#7b7b7b"
                        }}>Enter the pin you have received via SMS on +962</Text>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text> 7788415151 {' '}</Text>

                        <Text style={{
                            width: 81,
                            height: 16,
                            fontFamily: "TrebuchetMS",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            lineHeight: 16,
                            letterSpacing: 0,
                            textAlign: "left",
                            color: "#2299d5"
                        }}>Edit number</Text>
                    </View>
                </View>
                <View style={{ marginBottom:20, justifyContent: "center", alignItems: 'center' }}>
                    <CardItem style={{  alignSelf: "center", color: "black" }}>
                        <Input keyboardType='numeric' style={{ fontFamily: 'TajawalRegular0', borderBottomWidth: 1, borderColor: '#003580', marginRight: 10, marginLeft: 10, color: '#003580', textAlign: 'center', fontWeight: 'bold', fontSize: 22 }} maxLength={1} ref={(ref) => { this._firstVI = ref }} onChangeText={(value) => this.verificationInputsHandler(value, 'first')} />
                        <Input keyboardType='numeric' style={{ fontFamily: 'TajawalRegular0', borderBottomWidth: 1, borderColor: '#003580', marginRight: 10, marginLeft: 10, color: '#003580', textAlign: 'center', fontWeight: 'bold', fontSize: 22 }} maxLength={1} ref={(ref) => { this._secondVI = ref }} onChangeText={(value) => this.verificationInputsHandler(value, 'second')} />
                        <Input keyboardType='numeric' style={{ fontFamily: 'TajawalRegular0', borderBottomWidth: 1, borderColor: '#003580', marginRight: 10, marginLeft: 10, color: '#003580', textAlign: 'center', fontWeight: 'bold', fontSize: 22 }} maxLength={1} ref={(ref) => { this._thirdVI = ref }} onChangeText={(value) => this.verificationInputsHandler(value, 'third')} />
                        <Input keyboardType='numeric' style={{ fontFamily: 'TajawalRegular0', borderBottomWidth: 1, borderColor: '#003580', marginRight: 10, marginLeft: 10, color: '#003580', textAlign: 'center', fontWeight: 'bold', fontSize: 22 }} maxLength={1} ref={(ref) => { this._fourthVI = ref }} onChangeText={(value) => this.verificationInputsHandler(value, 'fourth')} />
                    </CardItem>
                </View>
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { Actions.Password() }}

                        style={{
                            justifyContent: 'center',
                            width: 98,
                            height: 40,
                            borderRadius: 3,
                            marginBottom: 40,
                            marginTop: 70,
                            backgroundColor: "#2299d5"
                        }}>

                        <Text style={
                            {
                                width: 120,
                                height: 19,
                                fontFamily: "TrebuchetMS",
                                fontSize: 16,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                lineHeight: 19,
                                letterSpacing: 0,
                                textAlign: 'left',
                                color: "#ffffff"
                            }}> ResendCode</Text>


                    </TouchableOpacity></View>
            </View>




        )
    }


}

