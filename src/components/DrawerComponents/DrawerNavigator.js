import React, { Component } from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import { DrawerActions } from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions
} from "react-native";
import HomeComponent from "./HomeComponent";
import AccountComponent from "./AccountComponent";
import MembershipComponent from "./MembershipComponent";
import NotificationComponent from "./NotificationComponent";
import PolicyComponent from "./PolicyComponent";
import DrawerScreen from "./DrawerScreen";
import TabNavigator from "./../TabComponents/TabNavigator";

var { height, width } = Dimensions.get("window");
let routeConfigs = {
  Home: {
    screen: TabNavigator
  }
};
let drawerNavigatorConfig = {
  initialRouteName: "Home",
  drawerWidth: (2 * width) / 3,
  contentComponent: DrawerScreen,
  drawerPosition: "right",
  drawerBackgroundColor: "#131313",
  contentOptions: {
    activeTintColor: "red"
  }
};
const DrawerNavigator = createDrawerNavigator(
  routeConfigs,
  drawerNavigatorConfig
);

export default createAppContainer(DrawerNavigator);
