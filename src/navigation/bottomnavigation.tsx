import * as React from 'react';
import { createMaterialBottomTabNavigator, MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () =>{
    return(
        <View>
            <Text>
                Ola mundo
            </Text>
        </View>
    )
}

function BottomNavigator({ ...props }) {

    return (

        <Tab.Navigator
            initialRouteName="HomeScreen"
            activeColor="#ef6c00"
            inactiveColor="#424242"
            labeled={true}
            shifting={true}
            backBehavior="history"
            keyboardHidesNavigationBar={true}
            sceneAnimationEnabled={true}
            style={{ elevation: 8 }}
            barStyle={{ elevation: 8 }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}

                options={{
                    tabBarLabel: `HomeScreen`,
                    tabBarColor: "#ef6c00",
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={"#ef6c00"} size={20} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}

export default BottomNavigator;