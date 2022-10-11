import React from "react";
import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { stylesFactory } from "./style";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const { navigate } = useNavigation();
  const { width } = useWindowDimensions();
  const styles = stylesFactory(width);
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          // dispatch(DrawerActions.openDrawer())
          navigate("Details")
        }
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
