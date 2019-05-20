import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import HeaderComponent from "../DrawerComponents/HeaderComponent";

export default class ConferenceComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let tabBarLabel = "Conference";
    let tabBarIcon = () => (
      <Image
        source={require("./../../../images/conference-icon.png")}
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
          backgroundColor: "#e97600"
        }}
      >
        <HeaderComponent {...this.props} />

        <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>
          This is Conference Screen
        </Text>
      </View>
    );
  }
}
