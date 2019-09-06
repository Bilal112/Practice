import React, { Component } from "react";
import { Container, Content, Accordion, View, Text, Button,  } from "native-base";
import Header from "../Header/Header";
import { StyleSheet, Dimensions, Image,TouchableOpacity } from "react-native"
import { Actions } from "react-native-router-flux";

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
  text: {
    color: "#2299d5",
    marginTop: 10,
    paddingTop: 10,
    padding: 20,
    fontSize: 23,
    justifyContent: "center",
    alignContent: 'center'
  },
  icon: {
    color: "#2299d5",
    marginTop: 10,
    paddingTop: 10,
    padding: 20,
    justifyContent: "center",
    alignContent: 'center',
    fontSize: 19
  },
  b: {
    width: 200,
    height: 90,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignContent: 'space-between',
    borderWidth: 0.1,
    marginHorizontal: 30,
  },
  btn: {
    // width:Dimensions.get("window").width
    width: 90
  },
  image: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 0.1,
  },
  images: {
    width: 40,
    height: 50,
    marginTop: 10
  },
  headerStyle: {
    borderColor:"gray",
    borderWidth:0.94,
    height: 50,
    width: Dimensions.get('window').width / 1.1
  },
  data:{
    borderColor:"gray",
    borderWidth:0.7
  }
})

const dataArray = [
  { title: "Contrary to popular belief , Lorem Ipsum?", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Contrary to popular belief , Lorem Ipsum?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. " }
];
export default class Feedback extends Component {
  render() {
    return (
      <View style={{ display: 'flex', flex: 1 }}>

        <View style={{ width: 90 }}>
          <Header title={'Help & Feedback'} />
        </View>

        <Container>
          <Header />
          <View>
            <Text style={s.text}>
              Frequently asked questions
          </Text>
          </View>
          <View style={{ height: 1, backgroundColor: "grey" }} />
          <Content padder>
            <Accordion headerStyle={s.headerStyle}  dataArray={dataArray}
             expanded={0} style={s.data}
              contentStyle={{backgroundColor:"white"}}/>
          </Content> 
        </Container>
        <View style={s.b}>
        <TouchableOpacity onPress={() => {Actions.Number()}}>
          <View style={s.image}>
            <Image
              style={s.images}
              source={require('../../Image/info.png')}
            />
            <Text style={s.icon}>
              Send feedback
        </Text>
          </View>
        </TouchableOpacity>
              <TouchableOpacity  onPress={() => this.onPress}
>
          <View style={s.image}>
            <Image
              style={s.images}
              source={require('../../Image/info.png')}
            />
            <Text style={s.icon}>
              Video call
        </Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

