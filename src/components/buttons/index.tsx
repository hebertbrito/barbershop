import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import {styles} from "./styles";

export const ButtonPrimary = React.memo(() => {

  const { navigate } = useNavigation();

  return (
    <TouchableOpacity style={styles.buttonformat} onPress={()=>navigate("BottomNavigation")}>
      <Image
        source={require("../../assets/images/wood.jpg")}
        style={styles.backbutton}
      />
      <Text style={styles.textButton}>Login</Text>
    </TouchableOpacity>
  );
});

export const ButtonSecondary = React.memo(() => {
  return (
    <TouchableOpacity style={styles.buttonformat}>
      <Image
        source={require("../../assets/images/woodburned.jpg")}
        style={styles.backbutton}
      />
      <Text style={styles.textButton}>Logar com Facebook</Text>
    </TouchableOpacity>
  );
});
