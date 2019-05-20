import { StyleSheet, Platform } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  iconDrawer: {
    width: 20,
    height: 20,
    tintColor: "#fff"
  },
  textDrawer: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 10,
    textTransform: "uppercase"
  },
  logoDrawer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 180,
    padding: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#DBBE76",
    alignSelf: "center"
  },
  menuItem: {
    flex: 1,
    marginLeft: 50,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  }
}));
