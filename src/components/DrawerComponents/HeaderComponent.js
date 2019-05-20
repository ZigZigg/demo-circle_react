import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";

export default class HeaderComponent extends Component {
  render() {
    return (
      <View
        style={{
          height: 50,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "#1F2326"
        }}
      >
        <TouchableOpacity
          style={{ marginLeft: 10, marginTop: 10 }}
          onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Image
            style={{ width: 40, height: 40, tintColor: "#D5BF7F" }}
            source={require("./../../../images/menu-icon.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
