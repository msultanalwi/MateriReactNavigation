import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { read, create, destroy, update } from '../../services/todo.api.service.js'
import Ionicons from '@react-native-vector-icons/ionicons'
import Fontisto from '@react-native-vector-icons/fontisto'

 const Todo = () => {

  const [title, setTitle] = useState ('')
  const [description, setDescription] = useState ('')

  const [data, setData] = useState ([])
  

  const getTodo = async () =>{
    try {
      const result = await read('/todos')
      setData(result.data.todos);
    } catch (error) {
      return ToastAndroid.show (error.message, ToastAndroid.LONG)
    }
  }

  const addTodo = async () => {
    try{
      const result = await create('/todos',{title, desc: description})
      console.log(result);
      getTodo ()
    } catch (error) {
      return ToastAndroid.show (error.message, ToastAndroid.LONG)
    }
  }

  const deleteTodo = async (id) => {
    try{
      const result = await destroy(`/todos/${id}`)
      getTodo()
    } catch (error) {
      return ToastAndroid.show (error.message, ToastAndroid.LONG)
    }
  }

  const onChecked = async (v) => {
    try {
      const result = await update (`/todos/${v._id}`, {checked: !v.checked})
      getTodo ()
    }catch (error) {
      return ToastAndroid.show (error.message, ToastAndroid.LONG)
    }
  }  

  useEffect (() => {
    getTodo()
  }, [])

  return (
    <View style={{flex: 1,}}>
      <View style={{ borderColor: 'blue', borderWidth: 1, justifyContent: "center", margin: 20, borderRadius: 10}}>
      <TextInput placeholder='Title' onChangeText={(v) => setTitle(v)} value={title}/>
      <TextInput placeholder='Description' onChangeText={(v) => setDescription(v)} value={description}/>
      </View>
      <TouchableOpacity onPress={addTodo}>
      <View style={{backgroundColor: "#000000", width: 360, height: 50, justifyContent: "center", borderRadius: 5, marginHorizontal: "auto", marginVertical: 10}}>
        <Text style={{fontSize: 20, color: '#ffffff', textAlign: "center"}}>Add</Text>
      </View>
      </TouchableOpacity>
      {data.map ((v, i) => (
      <View key={i} style={{borderWidth: 1, padding: 20, margin: 20, borderColor: "blue", borderRadius: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
      <Fontisto name= {v.checked ? "checkbox-active": "checkbox-passive"} size={20} onPress={() => onChecked(v)} />
      <View style={{width: '75%'}}>
      <Text> {v.title} </Text>
      <Text> {v.desc} </Text>
      </View>
      <View>

      <Ionicons name="pencil" size={20} />

      <Ionicons name="trash" size={20} onPress={() => deleteTodo(v._id)} />
      </View>
      </View>
      ))}
    </View>
  )
}

export default Todo