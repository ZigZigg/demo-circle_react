import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import HeaderComponent from "../DrawerComponents/HeaderComponent";
export default class HomeComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let tabBarLabel = "Home";
    let tabBarIcon = () => (
      <Image
        source={require("./../../../images/home-icon.png")}
        style={{ width: 26, height: 26, tintColor: "#D5BF7F" }}
      />
    );
    return { tabBarLabel, tabBarIcon };
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#0067a7"
        }}
      >
        <HeaderComponent {...this.props} />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            color: "white"
          }}
        >
          This is Home Screen
        </Text>
      </View>
    );
  }
}
