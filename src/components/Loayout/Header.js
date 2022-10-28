import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../../common/CustomText";
import { colors, spacing, typography } from "../../theme";
import { FontAwesome, Entypo } from "@expo/vector-icons";

const Header = props => {
  const { name, onPress } = props;
  return (
    <View style={{ margin: 5 }}>
      <View
        style={{
          marginTop: 20,
          height: 35,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: colors.purple2,
          alignItems: "center",
          padding: spacing[2],
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <CustomText preset="h6" style={styles.container}>
              {name?.slice(0, 1)}
            </CustomText>
          </View>
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <CustomText style={styles.wrapper}>{name}</CustomText>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Entypo
              style={{
                marginRight: 6,
              }}
              name="moon"
              size={25}
              color="gray"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPress}>
            <FontAwesome
              style={{
                marginRight: 6,
              }}
              name="sign-out"
              size={25}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    fontFamily: typography.bold,
    backgroundColor: colors.exploreButton,
    width: 30,
    height: 30,
    marginLeft: 5,
    textAlign: "center",
    borderRadius: 30,
  },
  wrapper: {
    fontSize: 16,
    marginLeft: 5,
    fontFamily: typography.bold,
    color: colors.description,
  },
});
