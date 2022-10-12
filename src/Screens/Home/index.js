import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, useWindowDimensions } from "react-native";
import Button from "../../Components/ButtonComponent";
import { stylesFactory } from "./style";
const Home = () => {
  const { dispatch, navigate } = useNavigation();

  const { width } = useWindowDimensions();
  const styles = stylesFactory(width);

  return (
    <View style={styles.card}>
      <Button title={"Details"} onPress={() => navigate("Details")} />
    </View>
  );
};
export default Home;
