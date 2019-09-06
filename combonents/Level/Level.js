import React, { Component } from "react";
import { Image, ScrollView, TextInput, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Content, Textarea, Form,  Button,Icon } from "native-base"
import Header from "../Header/Header";
// import Stars from 'react-native-star-rating';
import { Actions } from "react-native-router-flux";
import Stars from "react-native-stars";


const s = StyleSheet.create({
    settingsMyLevelsUpdateNowDescription: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 0.1,
        backgroundColor: "#ffffff",
        display:'flex',flex:1
    },
    text: {
        marginTop: 35,
        fontSize: 20,
        marginRight: 8,
        marginLeft: 15
    },
    area: {
        borderColor: "gray",
        borderWidth: 1,
        padding: 5
    },
    Textarea: {
        height: 150,
        justifyContent: "flex-start"
    }
})

export default class level extends Component {
    constructor(props) {
        super(props);
        this.state = {
        starCount: 2.5
      };
    }
   
    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }

    render() {

        return (

            
                <View style={s.settingsMyLevelsUpdateNowDescription}>
                    <View>
                        <Header title={'Level 1'} />
                    </View >
                    <ScrollView contentContainerStyle={{display:'flex',}}>
                    <View>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ justifyContent: "space-between", marginLeft: 15 }}>
                                Level 1
                        </Text>
                            <View style={{ marginTop: 20, marginRight: 10 }}>
                                <Text >
                                    last update  : 12/07/2019
                        </Text>
                            </View>

                        </View>
                        <View style={{ marginLeft: 100 }}>
                            <Text>
                                100 cards
                    </Text>
                            <Text>
                                150MB
                </Text>
                        </View>
                    </View>


                    <View style={s.text}>
                        <Text >
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.
                </Text>
                    </View>
                    <View style={s.text}>
                        <Text >
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.
                 </Text></View>
                    <View style={s.text}>
                        <Text>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.
               </Text></View>
                    <View style={s.text}>
                        <Text>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.
               </Text></View>
                    <View style={s.text}>
                        <Text>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.
            </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20, marginTop: 10 }}>
                        <View style={{ width: '45%', marginLeft: 20 }}>
                            <Button block style={{ borderRadius: 4, backgroundColor: "#2299d5", marginRight: 40 }}
                                onPress={() => { this.onPress }}>

                                <Image source={require("../../Image/update.png")} style={{ color: 'white', marginRight: 10 }} />
                                <Text style={{ color: "white" }}>Update Now</Text>

                            </Button>
                        </View>
                        <View style={{ width: '45%', marginRight: 10 }}>
                            <Button block style={{ borderRadius: 4, marginLeft: 20, paddingLeft: 20, backgroundColor: "red" }}
                                onPress={() => { this.onPress }}
                            >
                                <Image source={require("../../Image/remove.png")} style={{ color: 'white', marginRight: 10 }} />
                                <Text style={{ color: "white" }}>Delete</Text>
                            </Button>
                        </View>
                    </View>
                    <Text style={{ color: "#0000FF", fontStyle: "bold", marginLeft: 12, marginTop: 10, fontSize: 15 }}>Rate the level 1</Text>
                    <View style={{ flexDirection: 'row', width: 100 }}>
                        {/* <Image source={require('../../Image/star.png')} onPress={() => { this.changeColor() }} style={{ borderColor: "blue" }} />
                        <Image source={require('../../Image/star.png')} style={{ color: "blue" }} />
                        <Image source={require('../../Image/star.png')} style={{ borderColor: "blue" }} />
                        <Image source={require('../../Image/star.png')} style={{ borderColor: "blue" }} /> 
                        <Image source={require('../../Image/star.png')} style={{ borderColor: "blue" }} />  */}
  <View style={{alignItems:'center'}}>

 
  <Stars
              default={this.state.starCount}
              spacing={1}
              starSize={16}
              count={5}
              fullStar={<Icon name={'star'} style={{ color: '#951eed', fontSize: 16 }} />}
              halfStar={<Icon name={'star-half'} style={{ color: '#951eed', fontSize: 16 }} />}
              emptyStar={<Icon name={'star-outline'} style={{ color: '#951eed', fontSize: 16 }} />}
              disabled={true}
            // emptyStar={require("./a_star.png")}
            />
</View>
  </View>
                   

                    <Textarea style={{ marginLeft: 11, width: 320, marginBottom: 60, justifyContent: "center" }} rowSpan={5} bordered placeholder="Leave level 1 feedback or share your ideas" />

                    <View style={{ width: 350,marginBottom:30, marginRight: 10, marginLeft: 10 }}>
                        <Button block style={{ marginRight: 10, marginLeft: 10, borderRadius: 4, backgroundColor: '#2299d5' }}
                            onPress={() => {Actions.feedback()}}
                        >
                            <Text style={{ color: 'white' }}>Send</Text>
                            <Image source={require("../../Image/arrow2.png")} style={{ marginLeft: 20, fontSize: 6, color: 'white', marginRight: 10 }} />

                        </Button>
                    </View>
</View>
</ScrollView>
                </View>
        )
    }
}




