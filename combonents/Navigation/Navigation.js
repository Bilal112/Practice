import React ,{Component} from 'react'
import {
  Router,
  Scene,
  Actions,
  ActionConst,
  Drawer,
  Modal
} from "react-native-router-flux";
import Level from '../Level/Level'
import Feedback from '../Feed/Feedback'
import Number from '../Number/Number'
import Password from '../Password/Password'
export default class Routes extends Component {
  

  render() {
    return (
        <Router>
          <Scene key="root">
            <Scene key="level" component={Level} hideNavBar={true} initial />
            <Scene key="feedback" component={Feedback} hideNavBar={true} />
            <Scene key="Password" component={Password} hideNavBar={true} />               
            <Scene key="Number" component={Number} hideNavBar={true} />               

            </Scene>
        </Router>
    );
  }
}