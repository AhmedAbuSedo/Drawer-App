import { StyleSheet } from "react-native";

const Styles = (color) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
export default Styles;
