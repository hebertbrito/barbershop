import react from "react";
import {SafeAreaView, View, Text} from "react-native";

export const App = react.memo(() => {
  return (
    <SafeAreaView>
      <View>
        <Text>Ola mundo</Text>
      </View>
    </SafeAreaView>
  );
});
