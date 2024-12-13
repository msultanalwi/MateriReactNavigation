import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { getData } from '../../services/asyncstorage'

const SplashScreen = ({navigation, }) => {

    const checkDataUser = async() => {
      try {
      const value = await getData('user')
      return value ? navigation.replace('Todo') : navigation.replace('Login')
      } catch (error){
        return navigation.replace('Login')
      }
    }
    
    useEffect(() => {
      checkDataUser ()
    }, [])

    // useEffect(() => {
    //   setTimeout(() => {

    //   navigation.navigate('Register') // pindah screen
    //   // navigation.replace('Register') // jadi bikin SplashScreen ilang / delete
    //   // navigation.push('Register') // menumpuk screen yang ketika di back akan muncul lagi
    //   // navigation.pop('Register') // bisa jadi untuk kembali tergantung screen yang diselect
    //   // navigation.goBack('Register') // untuk kembali ke screen sebelumnya
    
    // }, 3000)
    // }, [])


  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen