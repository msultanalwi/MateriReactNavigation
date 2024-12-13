import React from "react"
import {View, Image} from 'react-native'

const Fallback = () => {
    return (
        <View style={{alignItems: "center", marginTop: 40,}}>
    <Image source={(require('../assets/Image/to-do-list.jpeg'))} style={{height: 300, width: 300}}/> 
        </View>
    )
}

export default Fallback