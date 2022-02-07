import React, { Component } from 'react'
import HomeScreen from './Screens/HomeScreen';
import NewsScreen from './Screens/NewsScreen';
import EventScreen from './Screens/EventInfoScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Task from './components/Events'



export default App = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
    <Tab.Navigator labeled={true} barStyle={{ backgroundColor: '#55BCF6' }} 
activeColor="white" >
      <Tab.Screen name="Home" component={HomeScreen}    
      
      options={{

        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>

        ),
        title: 'Home',
    }}/>
      <Tab.Screen name="Events" component={EventScreen}     
    
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-star" color={color} size={26}/>
        ),
        
    }}/>
      <Tab.Screen name="News" component={NewsScreen}   // Profile Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper-variant-outline" color={color} 
size={26}/>
        ),
    }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}