import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const Loginlab3_1 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../media/avt.png')}
      >
      </Image>

      <View style={styles.container2}>
        <Text style={styles.text1}>
          Lets Get Started
        </Text>
        <Text style={styles.text2}>
          Create An Account
        </Text>

        <View style={styles.Input}>
          <TextInput placeholder='Name'

          >

          </TextInput>
          <Image style={styles.Inputicon}
            source={require('../../media/Vector.png')}>

          </Image>
        </View>
        <View style={styles.Input}>
          <TextInput placeholder='Email Address'
          >
          </TextInput>
          <Image style={styles.Inputicon}
            source={require('../../media/Vector1.png')}>

          </Image>
        </View>
        <View style={styles.Input}>
          <TextInput placeholder='Password'
          >
          </TextInput>
          <Image style={styles.Inputicon}
            source={require('../../media/Vector2.png')}>
          </Image>
        </View>
        <View style={{ width: '100%', marginTop: 27, flexDirection: 'row', justifyContent: 'center' }}>
          <Pressable style={styles.button}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 700, lineHeight: 22 }}>CREATE ACCOUNT</Text>
          </Pressable>
        </View>
      </View>
    </View>


  )
}

export default Loginlab3_1

const styles = StyleSheet.create({
  button: {
    width: 228,
    height: 59,

    backgroundColor: '#ff8b6a',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',



  },

  Inputicon: {
    width: 24,
    height: 24,


    position: 'absolute',
    top: 18,
    left: 18,



  }
  ,
  Input: {
    width: 313,
    height: 52,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'relative',
    marginTop: 27,
    paddingLeft: 67,
    fontSize: 14,
    paddingTop: 16,
    lineHeight: 18,

  }
  ,
  text2: {
    fontSize: 22,
    color: 'white',
    fontWeight: 500,
    textAlign: 'left',
    marginTop: 14,


  }
  ,
  text1: {
    fontSize: 24,
    color: 'white',
    fontWeight: 700,
    textAlign: 'center',
    marginTop: -15,


  }
  ,
  container2: {
    padding: 28,
    backgroundColor: '#f9a088',
    width: '100%',
    height: '100%',

  }
  ,
  logo: {
    height: 359,
    width: '100%',
  },
  container: {

    backgroundColor: '#f9a088',
    width: '100%',
    height: '100%',

  }
})