import React from 'react'
import { View, Text, Image } from 'react-native'



export default HomeScreen = () => {
return (

<View style={{alignItems:'center', justifyContent:'center', flex:1}}>

    
    <Image source ={require('../assets/logo.png')} />
    <Text style={{marginTop:100}}>St ives high school Home</Text>

</View>

)

}

