import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, TouchableOpacity, Text } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import Home from "../Screens/Home";
import Details from "../Screens/Details";
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ drawerPosition: "left", drawerType: "back" }}
        drawerContent={({ navigation }) => {
          return (
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Details")}
            >
              <View>
                <Text>Details</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerNavigation;
