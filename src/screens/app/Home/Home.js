import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { firebase } from "../../../../config";
import CustomText from "../../../common/CustomText";

const Home = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);
  return (
    <View>
      <CustomText>Home :{name.firstName}</CustomText>
      <TouchableOpacity onPress={() => firebase.auth().signOut()}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
