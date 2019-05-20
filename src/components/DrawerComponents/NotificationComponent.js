import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import HeaderComponent from "./HeaderComponent";

export default class NotificationComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Notification ";
    let drawerIcon = () => (
      <Image
        source={require("./../../../images/noti.png")}
        style={{ width: 26, height: 26, tintColor: "#964f8e" }}
      />
    );
    return { drawerLabel, drawerIcon };
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <HeaderComponent {...this.props} />
        <View
          style={{
            flex: 1,
            backgroundColor: "#964f8e",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>
            This is Noti Screen
          </Text>
        </View>
      </View>
    );
  }
}
