import { View, Text, Button } from 'react-native'
import React from 'react'

const Screen6 = (props) => {
    const{navigation} = props
  return (
    <View>
      <Text>Screen6</Text>
      <Button title="Go to Screen7"
      onPress={()=> navigation.navigate('Screen7')}
      ></Button>
      
    </View>
  )
}

export default Screen6