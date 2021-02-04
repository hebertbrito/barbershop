import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    containersafe: {
        width: "100%",
        display: "flex",
        flex: 1,
        backgroundColor: "#33201D",
        flexGrow: 1,
        alignItems: "center"
    },
    avoindkey: {
        width: "100%",
        display: "flex",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "space-evenly",
        // borderStyle: "solid",
        // borderColor: "red",
        //borderWidth: 2,
        marginTop: "90%"
    },
    imagelogin:{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        resizeMode: "cover"
    },
    viewform:{
        width: "95%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    viewbutton:{
        width: "95%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderStyle: "solid",
        borderColor: "blue",
        borderWidth: 2
    },
    textLogin:{
        color: "#ffffff",
        fontFamily: "AlegreyaSansSC-Regular",
        fontSize: 17,
        margin: "4%"
    }
})