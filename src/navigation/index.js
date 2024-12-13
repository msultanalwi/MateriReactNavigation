import React from 'react'
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/auth/SplashScreen'
import Register from '../screens/auth/Register'
import Login from '../screens/auth/Login'
import BottomTabs from './BottomTabs'
import TopTabs from './TopTabs'
import Drawer from './Drawer'
import { DrawerContent } from '@react-navigation/drawer'

// // cara pertama

// const RootStack = createNativeStackNavigator({
//     screens: {
//       SplashScreen: SplashScreen,
//     },
//   });

// const Navigation = createStaticNavigation  (RootStack)


// // cara kedua
const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown : false }}>
            <Stack.Screen name = 'SplashScreen' component = {SplashScreen} />
            <Stack.Screen name = 'Register' component = {Register} />
            <Stack.Screen name = 'Login' component={Login} />
            {/* <Stack.Screen name = 'Todo' component={BottomTabs} /> */}
            {/* <Stack.Screen name = 'Todo' component={TopTabs} /> */}
            <Stack.Screen name = 'Todo' component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation