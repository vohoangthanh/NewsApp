import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Screen3 = () => {
  return (
    <View style={myStyles.body}>

      <View style={myStyles.bodytrai}>
        <View style={myStyles.view1}></View>


        <View style={myStyles.view2}></View>
      </View>
      <View style={myStyles.bodygiua}>
      <View style={myStyles.view3}></View>
      </View>
      <View style={myStyles.bodytrai}>
        <View style={myStyles.view4}></View>


        <View style={myStyles.view5}></View>
      </View>
    </View>
  )
}

export default Screen3

const myStyles = StyleSheet.create({
  view1: { backgroundColor: 'red', width: 50, height: 50, },
  view2: { backgroundColor: 'blue', width: 50, height: 50, },
  view3: { backgroundColor: 'green', width: 50, height: 50, },
  view4: { backgroundColor: 'purple', width: 50, height: 50, },
  view5: { backgroundColor: 'orange', width: 50, height: 50, },
  body: {
    // flexDirection: 'row',
    flexDirection: 'column',

    // vij tris cuar casc item 
    // justifyContent:theo direction
    // justifyContent: 'center',
    // justifyContent: 'flex-start',// canh treen defau
    // justifyContent: 'flex-end',// canh duoi
    justifyContent: 'space-between',// đều nhau,khoản cách 1:1 sát màn hình
    // justifyContent:'space-around',// đều nhau,khoản cách 1:2:2:1
    // justifyContent:'space-evenly',// đều nhau,khoản cách 1:1


    // alignItems: 'center',//canh giữa
    // alignItems: 'flex-end',// phải
    // alignItems: 'flex-start',//canh trái
    // alignItems: 'stretch',// căng ra full chiều dài của text

    // flexWrap: 'wrap',// wrap xuống dòng


    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
    padding: 16,
  },
  bodytrai: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bodygiua: {
    flexDirection: 'column',
    alignItems: 'center',
  },




})