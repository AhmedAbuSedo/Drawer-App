import React from "react";
import { View } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import Button from "../../Components/ButtonComponent";
import Styles from "./style";
const Details = () => {
  const { dispatch, navigate } = useNavigation(); //you must call in side body of the function component
  const styles = Styles("red");
  return (
    <View style={styles.container}>
      <Button title={"Home"} onPress={() => navigate("Home")} />
    </View>
  );
};

export default Details;
