import { View, Text, TouchableOpacity, TextInput, Pressable, ActivityIndicator} from 'react-native'
import React, {useState} from 'react'
import { create } from '../../services/todo.api.service'
import { isDynamicLoadingEnabled } from '@react-native-vector-icons/common'
import { storeData } from '../../services/asyncstorage'

const Register = ({navigation}) => {

  const [username, setUsername] = useState ('')
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const [confirmPassword, setConfirmPassword] = useState ('')
  const [condition, setCondition] = useState (false)

  const handlerRegister = async() => {
    try {
      setCondition(true)
      const result = await create ('/auth/register', {username, email, password, confirmPassword})
      console.log(result)
      if (result.status !== 'success') return ToastAndroid.show (result.message, ToastAndroid.LONG)
        await storeData ('user', {email, token: result.user.token}) // setelah register langsung ke Todo
        return navigation.replace('Login')
    } catch (error) {
      return ToastAndroid.show (error.message, ToastAndroid.LONG)
    } finally {
      setCondition(false)
    }
  }
  return (
    <View style={{flex: 1,justifyContent:'center',alignItems:'center', backgroundColor: "#55f371"}}>
    <View style={{width: 200, height: 100, alignItems: "center", justifyContent: "center", backgroundColor: "#55f371", borderRadius: 50, borderColor: "white", borderWidth: 5, marginBottom: 70}}>
      <Text style={{fontSize: 50}}>LINE</Text>
    </View>
      <View style={{width: 150, height: 50, backgroundColor: 'yellow', borderRadius: 25}}>
        <Text style={{fontSize: 35, textAlign: 'center'}}>Sign Up</Text>
      </View>
        <View style={{marginTop: 25}}>
          <Text style={{fontSize: 24}}>Enter Username</Text>
          <TextInput style={{backgroundColor: "white", width: 350 }}placeholder='Enter your Username' onChangeText={(usernamenya) => setUsername (usernamenya)} value={username} />
        </View>
        <View>
          <Text style={{fontSize: 24}}>Email</Text>
          <TextInput style={{backgroundColor: "white", width: 350 }}placeholder='Enter your Email' onChangeText={(emailnya) => setEmail(emailnya)} value={email} />
        </View>
        <View>
          <Text style={{fontSize: 24}}>Password</Text>
          <TextInput style={{backgroundColor: "white", width: 350 }}placeholder='Enter your Password' onChangeText={(passwordnya) => setPassword(passwordnya)} value={password} secureTextEntry />
        </View>
        <View>
          <Text style={{fontSize: 24}}>Confirm Password</Text>
          <TextInput style={{backgroundColor: "white", width: 350 }}placeholder='Repeat your password' onChangeText={(confirmPasswordnya) => setConfirmPassword(confirmPasswordnya)} value={confirmPassword} secureTextEntry />
        </View>
        {/* <Button title="Create an Account" onPress={handlerRegister} /> */}
        <Pressable onPress={handlerRegister} disabled={condition}>
        <View style={{width: 150, height: 50,backgroundColor: 'gray', justifyContent: "center", borderRadius: 25, marginTop: 10}}>
        {condition ? (
          <ActivityIndicator color="white" />) : (
            <Text style={{color: "white", textAlign: "center", fontSize: 20}}>
            Create Account
          </Text>
          )}
        </View>
        
        </Pressable>

        <View style={{alignItems: "center", marginTop: 10}}>
          <Text style={{fontSize: 20}}>Already have an account?</Text>
          <TouchableOpacity>
          <View style={{width: 100, height: 50, backgroundColor: "#243239", justifyContent: "center", borderRadius: 50}}>
            <Text style={{color: 'white', fontSize: 20, textAlign: "center"}} onPress={() => navigation.navigate('Login')}>Login</Text>
          </View>
          </TouchableOpacity>
        </View>

{/* <View style={{alignItems: "center", }}>
      <Text style={{ fontSize: 20}}>Navigator Register</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <View style={{height: 50, width: 100, backgroundColor: "aqua", justifyContent: "center", borderRadius: 50}}>
    <Text style={{ fontSize: 20, textAlign: "center"}}>
          Go To Todo
        </Text>
        </View>
      </TouchableOpacity>
</View> */}
    </View>
  )
}

export default Register