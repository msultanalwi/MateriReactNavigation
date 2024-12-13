import React from 'react'
import { View, Button } from 'react-native'

const DrawerContent = ({navigation}) => {
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 20,}}>
      <Button title ='Todo' onPress={() =>navigation.navigate('Todo')}  />
      <Button title ='Profile' onPress={() =>navigation.navigate('Profile')}  />
    </View>
  )
}

export default DrawerContent