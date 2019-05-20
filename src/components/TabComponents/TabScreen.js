import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import PropTypes from "prop-types";
import { ScrollView, View, TouchableOpacity, Image } from "react-native";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";

class TabScreen extends Component {
  render() {
    const { navigation } = this.props;
    const { buttonStyle, iconStyle, textStyle, textActive } = styles;
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: "#1F2326" }}>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              source={require("./../../../images/home-icon.png")}
              style={iconStyle}
            />
            <Text style={navigation.state.index === 0 ? textActive : textStyle}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => navigation.navigate("Community")}
          >
            <Image
              source={require("./../../../images/group-icon.png")}
              style={iconStyle}
            />
            <Text style={navigation.state.index === 1 ? textActive : textStyle}>
              Community
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => navigation.navigate("Conference")}
          >
            <Image
              source={require("./../../../images/conference-icon.png")}
              style={iconStyle}
            />
            <Text style={navigation.state.index === 2 ? textActive : textStyle}>
              Conference
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => navigation.navigate("Selection")}
          >
            <Image
              source={require("./../../../images/tag-icon.png")}
              style={iconStyle}
            />
            <Text style={navigation.state.index === 3 ? textActive : textStyle}>
              Selection{" "}
            </Text>
          </TouchableOpacity>
        </FooterTab>
      </Footer>
    );
  }
}
const styles = {
  buttonStyle: { flex: 1, alignItems: "center", justifyContent: "center" },
  iconStyle: { width: 26, height: 26, tintColor: "#D5BF7F" },
  textStyle: { fontSize: 11, textTransform: "uppercase", color: "#3F4246" },
  textActive: {
    color: "#fff",
    fontSize: 11,
    textTransform: "uppercase"
  }
};
TabScreen.propTypes = {
  navigation: PropTypes.object
};

export default TabScreen;
