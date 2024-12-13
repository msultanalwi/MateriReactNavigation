import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Todo from '../screens/auth/Todo';
import Profile from '../screens/auth/Profile';
import Ionicons from '@react-native-vector-icons/ionicons';
import DrawerContent from './DrawerContent';


const Tab = createDrawerNavigator();

const Drawer = () => {
  return (
    <Tab.Navigator 
    // drawerContent = {props => <DrawerContent {...props}/>}
    screenOptions={{drawerActiveTintColor: 'green', drawerInactiveTintColor: "red"}}>
        <Tab.Screen name='Todo' component={Todo} options={{drawerIcon: ({focused, color, size}) => (<Ionicons name='airplane' size={24} color={color} />)}} />
        <Tab.Screen name='Profile' component={Profile} options={{drawerIcon: ({color}) => (<Ionicons name='person-circle-outline' size={24} color={color} />)}} />
    </Tab.Navigator>
  )
}

export default Drawer