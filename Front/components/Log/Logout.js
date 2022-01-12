import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Icon
        name="logout"
        color="#00aced"
        size={30}
        onPress={() => props.changeStatus("login")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 100,
    justifyContent: "center",
    backgroundColor: "gray",
  },
  textHeader: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
});
export default Header;
