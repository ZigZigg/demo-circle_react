import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import HeaderComponent from "./HeaderComponent";
import TabNavigator from "./../TabComponents/TabNavigator";

const backgroundColor = "#0067a7";
export default class HomeComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Home ";
    let drawerIcon = () => (
      <Image
        source={require("./../../../images/home-icon.png")}
        style={{ width: 26, height: 26, tintColor: backgroundColor }}
      />
    );
    return { drawerLabel, drawerIcon };
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <HeaderComponent {...this.props} />
        <TabNavigator />
      </View>
    );
  }
}
