import React from "react";
import {SafeAreaView, View, Text} from "react-native";

export const App = React.memo(() => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontFamily: "RougeScript-Regular"}}>Ola mundo</Text>
      </View>
    </SafeAreaView>
  );
});
