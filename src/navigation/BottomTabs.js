import React from 'react'
import {StyleSheet, Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Todo from '../screens/auth/Todo'
import Profile from '../screens/auth/Profile'
import Ionicons from '@react-native-vector-icons/ionicons'



const Tab = createBottomTabNavigator ()

const BottomTabs = () => {
  return (
   <Tab.Navigator screenOptions={{headerShown : false, tabBarActiveTintColor : 'blue', tabBarInactiveTintColor : 'red', tabBarStyle: {backgroundColor : 'white', margin : 25,borderRadius: 25 },}}>
    <Tab.Screen name ='Todo' component={Todo} options={{ tabBarIcon: ({focused, color}) => (<Ionicons name='car' size={ focused ? 30 : 20} color={color} />), tabBarBadge: 7, tabBarBadgeStyle: { backgroundColor: "green"} }} />
    <Tab.Screen name='Profile' component={Profile} options={{ tabBarIcon: ({focused, color}) => (<Ionicons name='rocket-outline' size={ focused ? 30 : 20}  color={color}/>) }}/>
   </Tab.Navigator>
  )
}

export default BottomTabs