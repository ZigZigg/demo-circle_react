import React from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";

const TextInputComponent = ({
  value,
  onChangeText,
  name,
  errorStyle,
  errors,
  ...props
}) => {
  return (
    <>
      <TextInput
        value={value}
        onChangeText={value => onChangeText(name, value)} //... Bind the name here
        {...props}
      />
      {errors && <Text style={errorStyle}>{errors}</Text>}
    </>
  );
};

export { TextInputComponent };
