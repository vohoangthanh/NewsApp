
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Lab6 from './Lab6'
import Lab6_1 from './Lab6_1'
import Lab6_2 from './Lab6_2'
const Stack = createNativeStackNavigator();
const Lab6Navigate = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Lab6" component={Lab6}/>
            <Stack.Screen name="Lab6_1" component={Lab6_1}/>
            <Stack.Screen name="Lab6_2" component={Lab6_2}/>
        </Stack.Navigator>  
    </NavigationContainer>
  )
}

export default Lab6Navigate