import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import PropTypes from "prop-types";
import { ScrollView, Text, View, Image } from "react-native";
import { DrawerActions } from "react-navigation";
import styles from "../../style";

class DrawerScreen extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.logoDrawer}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
              source={require("./../../../images/convendum-logo.png")}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={styles.menuItem}>
              <Image
                style={styles.iconDrawer}
                source={require("./../../../images/account.png")}
              />
              <Text
                style={styles.textDrawer}
                onPress={this.navigateToScreen("Account")}
              >
                Account
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Image
                style={styles.iconDrawer}
                source={require("./../../../images/noti.png")}
              />
              <Text
                style={styles.textDrawer}
                onPress={this.navigateToScreen("Notification")}
              >
                Notification
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Image
                style={styles.iconDrawer}
                source={require("./../../../images/member.png")}
              />
              <Text
                style={styles.textDrawer}
                onPress={this.navigateToScreen("Membership")}
              >
                Membership
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Image
                style={styles.iconDrawer}
                source={require("./../../../images/policy.png")}
              />
              <Text
                style={styles.textDrawer}
                onPress={this.navigateToScreen("Policy")}
              >
                Privacy Policy
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Image
                style={styles.iconDrawer}
                source={require("./../../../images/logout.png")}
              />
              <Text
                style={styles.textDrawer}
                // onPress={this.navigateToScreen("Policy")}
              >
                Sign Out
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
