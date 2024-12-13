import { View, Text, SafeAreaView, Image, ActivityIndicator, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { read, update } from '../../services/todo.api.service'
import Ionicon from '@react-native-vector-icons/ionicons'
import { clear } from '../../services/asyncstorage'


const Profile = ({navigation}) => {

  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState([])
  const [form, setForm] = useState({
    username: '',
    email: '',
    avatar: '',
  })
  const [condition, setCondition] = useState (false)

    const getProfile = async () =>{
      try {
        setLoading(true)
        const result = await read('/profile')
        setForm({...form, username: result.user.username, email: result.user.email, avatar: result.user.avatar?._id})
        return setProfile(result.user)

      } catch (error) {
        return ToastAndroid.show (error.message, ToastAndroid.LONG)
      }
      finally {
        return setLoading(false)
      }
    }

    const updateProfile = async () => {
      try {
        setCondition(true)
        const result = await update ('/profile', form)
        console.log(result);
        if (result.status !== 'error') 
          return ToastAndroid.show(success.message, ToastAndroid.LONG)
      }catch (error){
        return ToastAndroid.show (error.message, ToastAndroid.LONG)
      }finally {
        return setCondition(false)
      }
    }

    const handlerLogout = async () => {
      try {
        const result = await clear ()
        navigation.replace('Login')
        return result
      
      } catch (error) {
        return ToastAndroid.show (error, ToastAndroid.LONG)
    }
  }

    useEffect (() => {
      getProfile()
    }, [])

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <TouchableOpacity onPress={handlerLogout}>
    <View style={{left: 20}}>
    <View style={{marginBottom:120, marginRight:280, flexDirection: "row", justifyContent: "center", backgroundColor: "gray", width: 125, height: 50, alignItems: "center", borderRadius: 50 }}>
    <Ionicon name="caret-back-circle-outline" size={40} />
    <Text style={{fontSize:16, }}>Sign Out</Text>
    </View>
    </View>
    </TouchableOpacity>
    <View style={{backgroundColor:"cyan" ,width: 200, height: 50, justifyContent: "center", borderRadius: 25}}>
      <Text style={{fontSize: 20, textAlign: "center"}}>Profile Setting</Text>
    </View>
      {loading ? (
        <ActivityIndicator color="darkblue" />
      ) : (
        <>
      <Image source={{uri: 'https://i.ibb.co.com/1R21YBN/rika-by-gockso-di6r1ep.png'}} style={{height: 200, width: 200, borderRadius: 100}} />
      <View style={{marginRight: 220, padding: 10, width: 150 }}>
      <Text style={{fontSize: 20, }}>Username</Text>
      </View> 
      <TextInput 
      placeholder="Username"
      value={form.username}
      onChangeText={(text) => setForm({...form, username: text})}
      style={{borderWidth: 1, borderColor: 'gray', width: '88%', marginBottom: 10}}
      />
      <View style={{marginRight: 300, padding: 10,}}>
      <Text style={{fontSize: 20}}>Email</Text>
      </View> 
       <TextInput 
      placeholder="Email"
      value={form.email}
      onChangeText={(text) => setForm({...form, email: text})}
      style={{borderWidth: 1, borderColor: 'gray', width: '88%', marginBottom: 10}}

      />
      {/* <Text>{profile.username}</Text>
      <Text>{profile.email}</Text> */}
      
      <TouchableOpacity style={{width: 300, height: 40, backgroundColor: "lightgreen", justifyContent: "center",}} onPress={updateProfile}>
        {condition ? ( 
        <ActivityIndicator color={"white"}/>
        ) : (
        <Text style={{textAlign: "center"}}>
          Update Profile
        </Text>
        ) }
      </TouchableOpacity>
      </>
      )}
    </SafeAreaView>
  )
}

export default Profile