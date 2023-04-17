import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Tab = createNativeStackNavigator();

import SignUp from "./SignUp";
import Login from "./Login";
import Tabs from "./Tabs";

export default function Routes(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
         name="Login"
         component={Login}
         options={
          {
            headerShown: false
          }
         }
        />
        <Tab.Screen
         name="SignUp"
         component={SignUp}
         options={
          {
            headerShown: false
          }
         }
        />
        <Tab.Screen
         name="Tabs"
         component={Tabs}
         options={
          {
            headerShown: false
          }
         }
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}