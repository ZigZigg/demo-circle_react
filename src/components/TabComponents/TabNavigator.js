import React, { Component } from "react";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeComponent from "./HomeComponents";
import CommunityComponent from "./CommunityComponent";
import ConferenceComponent from "./ConferenceComponent";
import SelectionComponent from "./SelectionComponent";
import NotificationComponent from "../DrawerComponents/NotificationComponent";
import AccountComponent from "../DrawerComponents/AccountComponent";
import MembershipComponent from "../DrawerComponents/MembershipComponent";
import PolicyComponent from "../DrawerComponents/PolicyComponent";
import TabScreen from "./TabScreen";
let routeConfigs = {
  Home: {
    screen: HomeComponent
  },
  Community: {
    screen: CommunityComponent
  },
  Conference: {
    screen: ConferenceComponent
  },
  Selection: {
    screen: SelectionComponent
  },
  Notification: {
    screen: NotificationComponent
  },
  Account: {
    screen: AccountComponent
  },
  Membership: {
    screen: MembershipComponent
  },
  Policy: {
    screen: PolicyComponent
  }
};

let tabNavigatorConfig = {
  tabBarPosition: "bottom",
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: "#000",
    inactiveTintColor: "#55575B",
    labelStyle: {
      fontSize: 13
    },
    style: {
      backgroundColor: "#000",
      padding: -10
    }
  },
  tabBarComponent: ({ navigation }) => {
    return <TabScreen navigation={navigation} />;
  }
};

const TabNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);
export default createAppContainer(TabNavigator);
