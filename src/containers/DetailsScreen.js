import React from "react";
import {
  Button,
  View,
  Text,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import DrawerNavigator from "../components/DrawerComponents/DrawerNavigator";
class DetailsScreen extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };
  render() {
    const email = this.props.navigation.getParam("email");
    console.log(email);
    return <DrawerNavigator />;
  }
}

export default DetailsScreen;
