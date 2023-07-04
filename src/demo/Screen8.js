import { View, Text, Button } from 'react-native'
import React, { useState, createContext, useContext } from 'react'


// tạo ra Context dung` chung cho casc coponet
const Screen8Context = createContext();
// tạo prodiver dùng chung cho context màn hình
const Screen8Prodiver = (props) => {
  const { chidren } = props;
  const [name, setName] = useState('Binh');
  return (
    <Screen8Context.Provider value={{ name, setName }}>
      {chidren}
    </Screen8Context.Provider>
  )
}
const Screen81 = (props) => {
  const { name } = useContext(Screen8Context);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Screen81: {name}</Text>
    </View>
  )
}
const Screen82 = (props) => {
  const { name, setName } = useContext(Screen8Context);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Screen82:{name}</Text>
      <Button title="Change name" onPress={() => setName('Binfh 2')}></Button>
    </View>
  )
}
const Screen8 = () => {
  return (
    <Screen8Prodiver>
      <Screen81/>
    </Screen8Prodiver>

  )
}

export default Screen8