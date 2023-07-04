import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen6 from './Screen6'
import Screen7 from './Screen7'
import Screen8 from './Screen8'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const options = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    if (route.name === 'Screen6') {
      return focused ?
        <Image source={require('../../media/home.png')} />
        : <Image source={require('../../media/homenot.png')} />
    } else if (route.name === 'Screen7') {
      if (focused) {
        return <Image source={require('../../media/exseclect.png')} />
      }
      return <Image source={require('../../media/ex.png')} />
    }
  },
  tabBarLabel: ({ focused, color, size }) => {
    if (route.name === 'Screen6') {
      return focused ? <Text style={{ color: 'blue' }}>Home</Text>
        : <Text>Home</Text>
    } else if (route.name === 'Screen7') {
      return focused ? <Text style={{ color: 'blue' }}>Explore</Text>
        : <Text>Explore</Text>
    }
  }
})

const Screen5 = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={options}
      >
        <Tab.Screen name="Screen6" component={Screen6} />
        <Tab.Screen name="Screen7" component={Screen7} />

      </Tab.Navigator>
      {/* <Stack.Navigator>
            <Stack.Screen name="Screen6" component={Screen6}/>
            <Stack.Screen name="Screen7" component={Screen7}/>
            <Stack.Screen name="Screen8" component={Screen8}/>
        </Stack.Navigator>   */}
    </NavigationContainer>
  )
}

export default Screen5
const styles = StyleSheet.create({

})