import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const Them = () => {
  return (
    <View style = {styles.body}>
        <View style={styles.container}>
        <Image style={styles.img} source={require('../../media/toi.png')} />
        <View style={styles.containerTxt}>
        <Text>Welcome Back</Text>
        <Text>Guy Hawkins</Text>
        </View>
        <Image style={styles.img} source={require('../../media/toi.png')} />
        </View>
    </View>
  )
}

export default Them

const styles = StyleSheet.create({

    body: {
        width: '100%',
        height: '100%',
      },
      img:{
        
      },
      container:{
        flexDirection:'row',
      },
      containerTxt:{
        flexDirection:'column'
      },
})