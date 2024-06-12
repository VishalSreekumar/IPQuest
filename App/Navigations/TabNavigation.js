import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import GamingScreen from '../Screen/GamingScreen';
import LearningScreen from '../Screen/LearningScreen';
import LeaderBoard from '../Screen/LeaderBoard';
import ProfileScreen from '../Screen/ProfileScreen';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import LearningScreenNavigation from './LearningScreenNavigation';
import Colors from '../Utils/Colors';
import Front from '../Components/HomeScreen/quiz/Front';

const Tab= createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:Colors.PRIMARY
    }}>
      <Tab.Screen name="Info" component={HomeScreen} 
      options={{
        tabBarIcon:({color, size})=>(
          <Entypo name="info" size={size} color= {color}/>
        )
      }}
      />
      <Tab.Screen name="Game" component={GamingScreen} 
      options={{
        tabBarIcon:({color, size})=>(
          <Entypo name="game-controller" size={size} color= {color} />
        )
      }}
      />
      <Tab.Screen name="Learn" component={LearningScreenNavigation} 
      options={{
        tabBarIcon:({color, size})=>(
          <Entypo name="open-book" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="Leader-Board" component={LeaderBoard} 
      options={{
        tabBarIcon:({color, size})=>(
          <MaterialIcons name="leaderboard" size={size} color= {color}/>
        )
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarIcon:({color, size})=>(
          <Ionicons name="person-circle-outline" size={size} color={color}/>
        )
      }}/>
    </Tab.Navigator>
  )
}