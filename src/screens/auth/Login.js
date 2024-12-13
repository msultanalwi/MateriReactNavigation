import { View, Text, TextInput, ToastAndroid, ActivityIndicator, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { create } from '../../services/todo.api.service'
import {storeData} from '../../services/asyncstorage'

const Login = ({navigation}) => {

   const [email, setEmail] = useState ('')
   const [password, setPassword] = useState ('')
   const [loading, setLoading] = useState (false)

  const handlerLogin = async() => {
    try {
        setLoading(true)
        const result = await create ('/auth/login', {email, password})
       if (result.status !== 'success') 
        return ToastAndroid.show (result.message, ToastAndroid.LONG)
       await storeData ('user', {email, token: result.user.token}) 
       return navigation.replace('Todo')
    } catch (error) {
      return ToastAndroid.show (error.message, ToastAndroid.LONG)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "gray"}}>
    <View style={{height: 50, width: 150, backgroundColor: "#74c991", justifyContent: "center", borderRadius: 50}}>
    <Text style={{ fontSize: 20, textAlign: "center"}}>Login Page</Text>
    </View>
    <View style={{marginTop: 20, width: 350 }}>
      <Text style={{fontSize: 20}}>
        Email
      </Text>
      <TextInput style={{backgroundColor: "white"}} placeholder='Enter Email' onChangeText={(v) => setEmail(v)} value={email} />
    </View>
    <View style={{marginTop: 20, width: 350  }}>
      <Text style={{fontSize: 20}}>
        Password
      </Text>
      <TextInput style={{backgroundColor: "white"}} placeholder='Enter Password' onChangeText={(v) => setPassword(v)} value={password} secureTextEntry />
    </View>
    <View style={{marginTop: 20, width: 100, height: 50, backgroundColor: "#74c991", borderRadius: 50, justifyContent: "center"}}>
      <TouchableOpacity onPress={handlerLogin} disabled={loading} >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : ( <Text style={{fontSize: 20, textAlign: "center"}}>Login</Text> )}
      </TouchableOpacity>
  </View>

    {/* <View style={{marginTop: 20}}>
    <Text style={{fontSize: 20, color: "#e94738"}}>Untuk Navigation</Text>
      <Button title="Login" onPress = {() => navigation.navigate('Todo')} />
  </View> */}
    </View>
  )
}

export default Login