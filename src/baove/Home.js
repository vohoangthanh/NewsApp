import { StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import Name1 from './Name1';
import Name2 from './Name1'
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false }}>
            <Stack.Screen name="Name1" component={Name1} />
            <Stack.Screen name="Name2" component={Name2} />
        </Stack.Navigator>
    );
}

const Home = () => {
    const options = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
                return focused ?
                    <Image source={require('../../mediabv')} />
                    : <Image source={require('../../mediabv')} />

            } else if (route.name === 'Thongtin') {
                if (focused) {
                    return <Image source={require('../../mediabv')} />
                }
                return <Image source={require('../../mediabv')} />
            }
        },
        tabBarLabel: ({ focused, color, size }) => {
            if (route.name === 'Home') {
                return focused ? <Text style={{ color: 'blue' }}></Text>
                    : <Text></Text>
            } else if (route.name === 'Name2') {
                return focused ? <Text style={{ color: 'blue' }}></Text>
                    : <Text></Text>
            }
        }
    })
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Tab.Navigator screenOptions={options}>
                    <Tab.Screen name='Home' component={HomeStack} />
                    <Tab.Screen name='Name2' component={Name2} />
                </Tab.Navigator>
            </View>
        </NavigationContainer>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        headerShown: false,
        width: '100%',
        height: '100%',
        flex: 0,
        borderRadius: 20,
        justifyContent: 'center'
    },
})