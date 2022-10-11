import React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { stylesFactory } from "./style";
const Home = () => {
  const { width } = useWindowDimensions();
  const styles = stylesFactory(width);
  return (
    <View style={styles.card}>
      <Text>Hello</Text>
    </View>
  );
};
export default Home;
