import { StyleSheet } from "react-native";
export const stylesFactory = (width, height) => {
  return StyleSheet.create({
    card: {
      width: width - 20,
      height: height,
      backgroundColor: "white",
      justifyContent: "space-evenly",
      alignItems: "center",
      elevation: 3,
      borderRadius: 8,
      marginVertical: 10,
      marginHorizontal: 12,
    },
  });
};
