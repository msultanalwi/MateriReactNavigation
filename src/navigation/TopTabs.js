import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Todo from '../screens/auth/Todo'
import Profile from '../screens/auth/Profile'

const Tab = createMaterialTopTabNavigator()

const TopTabs = () => {
  return (
   <Tab.Navigator screenOptions={{
    tabBarPressColor: 'red', 
    tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: "purple", tabBarIndicatorStyle: { backgroundColor: 'lightgreen'},
     tabBarStyle: {height: 0, /*margin: 25, borderRadius: 15*/}, // untuk menghilangkan header,
     tabBarShowLabel: false // //jika ingin hide text

     
     }}>
    <Tab.Screen name="Todo" component={Todo} />
    <Tab.Screen name="Profile" component={Profile} />
   </Tab.Navigator>
  )
}

export default TopTabs