import { View, Text,Button } from 'react-native'
import React, {useState}from 'react';

const Screens = () => {
    //state :biến thay đổi trong component
  const [name, setName] = useState('Hoang Thanh')
  const [color, setColor] = useState('blue')
  // hàm đổi tên 
  const changeName = () => {
    setName ('Thanh ne')
    console.log(name)
  }
  const changeColor = () =>{
    const arr = ['red', 'green','blue','yellow']
    const randum = Math.floor(Math.random() * arr.length);
    setColor(arr[randum])
  }
  return (
    <View>
      <View style={{
        backgroundColor: color,
        width: 100,
        height:100,
        }}></View>
      <Button 
      title ="ĐỔi tên" 
      onPress ={changeColor}/>
    </View>
  )
}

export default Screens