import React from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image
} from "react-native";
import { TextInputComponent, Spinner } from "../common";
import _ from "lodash";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { loginAction } from "../stores/actions";
class HomeScreen extends React.Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: null
  };
  static navigationOptions = {
    header: null
  };
  onHandleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };
  onHandlePress = () => {
    let error = {};
    const { onLogin } = this.props;
    const { email, password } = this.state;
    if (email.length === 0) {
      error.username = "Username is required";
    }
    if (password.length === 0) {
      error.password = "Password is required";
    }
    this.setState({
      errors: error,
      loading: true
    });
    onLogin(email, password);
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(auth => {
    //     console.log("login");
    //     return this.onLoginSuccess();
    //   })
    //   .catch(e => {
    //     error.auth = e.message;
    //     this.setState({
    //       errors: error,
    //       loading: false
    //     });
    //   });
  };
  onLoginSuccess = () => {
    this.setState({
      loading: false,
      errors: null
    });
    return this.props.navigation.navigate("Details", {
      email: this.state.email
    });
  };
  render() {
    const { textInput, buttonStyle, textStyle, errorText } = styles;
    const { errors } = this.state;
    const { auth } = this.props;
    const userError = errors && errors.username;
    const passErrors = errors && errors.password;
    if (auth.userData && auth.userData.id) {
      this.onLoginSuccess();
    }
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121413"
        }}
      >
        <View style={{ width: 200, height: 150, marginBottom: 30 }}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
            source={require("./../../images/convendum-logo.png")}
          />
        </View>

        <TextInputComponent
          style={textInput}
          errorStyle={errorText}
          errors={userError}
          placeholderTextColor="#fff"
          placeholder={"Email"}
          onChangeText={this.onHandleChange}
          name={"email"}
        />
        <TextInputComponent
          style={textInput}
          placeholder={"Password"}
          errorStyle={errorText}
          placeholderTextColor="#fff"
          errors={passErrors}
          onChangeText={this.onHandleChange}
          secureTextEntry={true}
          name={"password"}
        />
        {errors && errors.auth && (
          <Text style={{ color: "red", fontSize: 15, alignSelf: "center" }}>
            {errors.auth}
          </Text>
        )}
        {auth.loading ? (
          <Spinner />
        ) : (
          <TouchableOpacity style={buttonStyle} onPress={this.onHandlePress}>
            {<Text style={textStyle}>{`Submit `}</Text>}
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => {
      dispatch(loginAction(email, password));
    }
  };
};
const styles = {
  textInput: {
    height: 40,
    width: 300,
    backgroundColor: "#1F2327",
    borderRadius: 5,
    marginTop: 10,
    color: "#fff"
  },
  textStyle: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: "#131313",
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    borderColor: "grey",
    paddingTop: 4,
    paddingBottom: 4,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  errorText: {
    fontSize: 10,
    textAlign: "left",
    color: "red"
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
