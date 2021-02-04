import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {
SingUp
} from './pages'

const Stack = createStackNavigator();

export const App = React.memo(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={SingUp} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
});
