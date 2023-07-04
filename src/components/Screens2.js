import { View, Text,StyleSheet, TextInput, Pressable,Image } from 'react-native'
import React from 'react'

// props : laf 1 object
// props : laf gias trij mat dinh cua component
const Screens2 = (props) => {
    const {hoTen} = props
  return (
    <View style ={styles.body}>
      <Text style ={styles.titile}>Screens2</Text>
      <Text style ={styles.name}>Ho ten: {hoTen}</Text>
      <TextInput style ={styles.inputEmail} > </TextInput>
      <Pressable style = {styles.button}>
        <Text>Đây là nút để nhấn</Text>
      </Pressable>
      
    </View> 
  )
}
const styles = StyleSheet.create({
  image:{
    width:50,height:50
  },
  button: {
    marginTop:16,
    backgroundColor: 'orange',
    borderRadius:10,
    width:50,
    height:50,
  },
  inputEmail: {
    backgroundColor: 'white',
    width:'100%',
    borderRadius:10,
    borderColor:'white',
    marginTop:16,
    height:50,
    backgroundColor:'gray',
  },
  name: {
    color: 'blue',
    fontSize: 30,
    marginTop: 20,
    backgroundColor:'yellow',
    textAlign:'center',
    height: 150,
  },
  titile:{
   color:'white',
   fontSize:50,
   fontWeight:'bold',
   fontStyle:'italic',

  },
  body: {
    width:'100%',
    height:'100%',
    backgroundColor: 'red',
    padding:16,
  },
  
});
export default Screens2