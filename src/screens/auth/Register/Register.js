import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../../../../config";
import login from "../../../../assets/logo_.png";
import { colors, fonts, spacing, typography } from "../../../theme";
import CustomText from "../../../common/CustomText";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const registerUser = async (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: `https://e-commerce-red-onion.firebaseapp.com`,
          })
          .then(() => {
            alert("Verification Email Sent");
          })
          .catch(error => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstName,
                lastName,
                email,
              });
          })
          .catch(error => {
            alert(error.message);
          });
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image resizeMode="contain" style={styles.login} source={login} />
      </View>
      <CustomText
        style={{
          fontSize: spacing[10],
          fontFamily: typography.bold,
          textAlign: "center",
          color: colors.description,
        }}
      >
        Register
      </CustomText>
      <View style={{ marginTop: 5 }}>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          onChangeText={firstName => setFirstName(firstName)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          onChangeText={lastName => setLastName(lastName)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={email => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={password => setPassword(password)}
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          registerUser(firstName, lastName, email, password, confirmPassword)
        }
      >
        <CustomText style={styles.text}>Register</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.account}
        onPress={() => navigation.navigate("Login")}
      >
        <CustomText
          style={{
            fontFamily: typography.baseBold,
            color: colors.black,
          }}
        >
          Already have an account ?{" "}
          <CustomText
            style={{
              color: colors.green,
              fontSize: fonts.size.body,
              fontFamily: typography.bold,
            }}
          >
            Login Now
          </CustomText>{" "}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  account: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: spacing[2],
    alignItems: "center",
  },
  container: {
    flex: 1,

    backgroundColor: colors.white,
  },
  textInput: {
    height: spacing[12],
    borderColor: colors.description,
    borderWidth: 0.25,
    marginBottom: spacing[4],
    borderRadius: 5,
    padding: 10,
    marginLeft: spacing[8],
    marginRight: spacing[8],
  },
  button: {
    backgroundColor: colors.darkGrey,
    marginTop: spacing[2],
    justifyContent: "center",
    alignItems: "center",
    height: spacing[12],
    borderRadius: spacing[4],
    marginLeft: spacing[8],
    marginRight: spacing[8],
  },
  text: {
    color: colors.white,
    fontFamily: typography.bold,
    fontSize: spacing[6],
  },
  login: {
    width: "70%",
  },
});
