import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import Styles from "./style";
const Details = () => {
  const { dispatch, navigate } = useNavigation();
  const styles = Styles("red");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          // dispatch(DrawerActions.openDrawer())
          navigate("Home")
        }
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
