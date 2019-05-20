import React from "react";
import { View, ActivityIndicator } from "react-native";

const Spinner = ({ size }) => {
  return <ActivityIndicator size={size || "large"} />;
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
export { Spinner };
