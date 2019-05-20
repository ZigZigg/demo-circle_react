import firebase from "react-native-firebase";

export const loginApi = async (email, password) => {
  try {
    const data = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return data;
  } catch (err) {
    throw err;
  }
};
