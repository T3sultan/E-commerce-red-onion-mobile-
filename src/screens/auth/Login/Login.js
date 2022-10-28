import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../../../../config";
import { useNavigation } from "@react-navigation/native";
import { colors, fonts, spacing, typography } from "../../../theme";
import CustomText from "../../../common/CustomText";
const { width, height } = Dimensions.get("window");
import login from "../../../../assets/logo_.png";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
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
        Login
      </CustomText>
      <View style={{ marginTop: 30 }}>
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
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => loginUser(email, password)}
      >
        <CustomText style={styles.text}>Login</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.account}
        onPress={() => navigation.navigate("Register")}
      >
        <CustomText
          style={{
            fontFamily: typography.baseBold,
            color: colors.black,
          }}
        >
          Don't have an account?{" "}
          <CustomText
            style={{
              color: colors.green,
              fontSize: fonts.size.subHeader,
              fontFamily: typography.bold,
            }}
          >
            Register Now
          </CustomText>{" "}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
    width: "100%",
  },
});
