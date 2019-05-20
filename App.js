import React from "react";
import { Button, View, Text } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import allReducers from "./src/stores/reducers";
import rootSaga from "./src/stores/sagas";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation"; // Version can be specified in package.json
import HomeScreen from "./src/containers/HomeScreen";
import DetailsScreen from "./src/containers/DetailsScreen";
import firebase from "react-native-firebase";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// redux dev-tool enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
const RootStack = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);
const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
export default class AppSaga extends React.Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyACc3_Yjg3fahs1DNfoOtHHaiKg1gg65_0",
        authDomain: "auth-74c77.firebaseapp.com",
        databaseURL: "https://auth-74c77.firebaseio.com",
        projectId: "auth-74c77",
        storageBucket: "auth-74c77.appspot.com",
        messagingSenderId: "647372254394",
        appId: "1:647372254394:web:53c0689883aea5c5"
      });
    }

    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
    });
  }
  render() {
    return <App />;
  }
}
sagaMiddleware.run(rootSaga);
