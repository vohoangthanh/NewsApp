import { View, Text, TextInput, StyleSheet, Pressable, Alert, useState } from 'react-native'
import React from 'react'

const Lab2 = () => {
    const [number, onChangeNumber] = React.useState(2);
    console.log(number)
    // lấy giá trị randum
    const [rand, setRandum] = React.useState(null);
    // Input nơi hiện số
    // nút randum 
    
    const onChangeRandum = () => {
        const randum = Math.floor(Math.random() * 3);
        setRandum(randum)
        console.log(randum)
        
        if(number == randum){
            Alert.alert("Bạn đã trúng thưởng")
    
        }else{
            Alert.alert("Bạn đã chật lất")
        }
    }

    
    
    return (
        <View style = {styles.body}> 
            <Text style={styles.text}>Sổ số hôm nay.com</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                placeholder="Mời nhập số"
                keyboardType="numeric" >{number}</TextInput>
            <Pressable
                style={styles.onPres}
                onPress={onChangeRandum}
            > 
                <Text style={styles.nhapso}>Quay số</Text>
            </Pressable>
            <Text style={styles.showkq} >{rand}</Text>
        </View>
    )
    
}
const styles = StyleSheet.create({
    nhapso:{
        textAlign:'center',
        fontSize:20,
        fontWeight: 'bold',
        color:'white',
        lineHeight:50
    },
    text:{
        textAlign:'center',
        width: '100%',
        height:40,
        marginLeft:'2%',
        fontSize:30,
        fontWeight: 'bold',
        color:'red',
    },
    showkq: {
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        paddingTop:15,
        height: 60,
        marginLeft: '40%',
        marginTop: 20,
        padding: 10,
        textAlign:'center',
        width:60,
        borderRadius:250, 
        backgroundColor:'red'
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width:'100%',
        marginTop:20,
        
    },
    onPres: {
        marginTop:20,
        width: '100%',
        height: 50,
        backgroundColor: 'black',
        textAlign: 'center',

    },
    kq:{
        textAlign:'center',
        width: '100%',
        height:40,
        marginLeft:'2%',
        fontSize:30,
        fontWeight: 'bold',
        color:'red',
    },
    body: {
        margin:50,
        width:'80%',
        height:300,
        padding:16,
        backgroundColor:'yellow'
      }
});
export default Lab2