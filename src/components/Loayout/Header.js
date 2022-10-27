import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = props => {
  return (
    <View style={{ marginLeft: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{props.name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
