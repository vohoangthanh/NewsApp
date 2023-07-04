import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const Loginlab3_0 = () => {
  return (
    <View style={styles.container}>
         <Text style={styles.text1}>
                Make a new friend!
            </Text>
            <Text style={styles.text2}>
            Adopt a pet today
            </Text>

            <View style={{ width: '100%', marginTop: 27, flexDirection: 'row', justifyContent: 'center' }}>
          <Pressable style={styles.button}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700, lineHeight: 24 }}>Lets Go</Text>
          </Pressable>         
        </View>
        <Image
          style={styles.img}
        source={require('../../media/i3.png')}>

        </Image>
     
    </View>
  )
}

export default Loginlab3_0

const styles = StyleSheet.create({
    img:{
        width:"100%",
        height:"65%",
        marginTop:100


    },
    button: {
        width: 148,
        height: 40,
    
        backgroundColor: '#FFB228',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    
    
    
      },
    text2: {
        fontSize: 22,
        color: '#FFFFFFD6',
        fontWeight: 400,
        textAlign: 'center',
        marginTop: 14,
        marginRight: 20,
        marginLeft: 25,


    }
    ,
    text1: {
        fontSize: 23,
        color: 'white',
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 40,
        marginRight: 20,
        marginLeft: 25,


    }
    ,
    container: {

        backgroundColor: '#DF0054',
        width: '100%',
        height: '100%',
       

    }
})