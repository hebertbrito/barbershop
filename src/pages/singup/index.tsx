import React, {useEffect, useState, useRef, MutableRefObject} from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  Dimensions,
} from "react-native";
import {styles} from "./styles";

import {ButtonPrimary, ButtonSecondary} from "../../components";
import {ScrollView} from "react-native-gesture-handler";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
export const SingUp = React.memo(() => {
    const [dimensao, setdimensao] = useState(0);
    const refsenha = useRef<any>()
    useFocusEffect(
        React.useCallback(() => {

            const {width, height} = Dimensions.get("window")
            setdimensao((width * 0.5) / 3)
            return () => {
                null
            }

        }, [])
    );
  return (
    <SafeAreaView style={styles.containersafe}>
      <ImageBackground
        source={require("../../assets/images/people.png")}
        style={styles.imagelogin}>
        <ScrollView
          style={{width: "100%", flex: 1}}
          contentContainerStyle={{flexGrow: 1}}>
          {console.log(dimensao)}
          <Text
            style={{
              color: "#ffffff",
              fontFamily: "RougeScript-Regular",
              fontSize: dimensao,
              top: "15%",
              position: "absolute",
              alignSelf: "center",
            }}>
            Barbearia Brow
          </Text>
          <KeyboardAvoidingView style={styles.avoindkey} behavior="padding">
            <View style={styles.viewform}>
              <TextInput
                underlineColorAndroid="#ffffff"
                placeholderTextColor="#ffffff"
                placeholder="Email"
                style={{width: "90%", marginBottom: "10%", color:"#ffffff"}}
                returnKeyType="next"
                autoCapitalize="none"
                onSubmitEditing={()=> refsenha.current.focus()}
              />
              <TextInput
                ref={refsenha}
                underlineColorAndroid="#ffffff"
                placeholderTextColor="#ffffff"
                placeholder="Senha"
                style={{width: "90%", marginBottom: "15%", color:"#ffffff"}}
              />
            </View>
            <ButtonPrimary />
            <Text style={styles.textLogin}>ou</Text>
            <ButtonSecondary />
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
});
