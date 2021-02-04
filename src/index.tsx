import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { Provider as PaperProvider } from 'react-native-paper'
import {SingUp} from "./pages";

import BottomNavigation from "./navigation/bottomnavigation";

const Stack = createStackNavigator();

export const App = React.memo(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={SingUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
