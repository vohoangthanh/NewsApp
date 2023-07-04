import React from "react";
import {StyleSheet, Text, View} from 'react-native';
const Lab1 = () =>{
    return (
        <View style ={styles.container}>
            <Text style ={[styles.greeting,styles.red]}> Võ Hoàng Thanh</Text>
            <Text style ={[styles.greeting,styles.Blue]}> Ps27337</Text>
        </View> 
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    greeting: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 16,
    },
    Blue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
      },
    red: {
        color: 'red',
        fontSize: 30,
    },
  });
export default Lab1



// khai bao bien 
// let , const , var
// let : có thể thay đổi được giá trị 
// const : 
// var cũ không nên dùng

//false : 0 ,'',null, underfined.