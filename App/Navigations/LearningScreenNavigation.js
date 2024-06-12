import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LearningScreen from '../Screen/LearningScreen';
import CourseDetailScreen from '../Screen/CourseDetailScreen';
import Game from '../Components/HomeScreen/GameScreen/Game';
import Video1 from '../Components/HomeScreen/CourseDetailScreen/Video1';
import Front from '../Components/HomeScreen/quiz/Front';

const Stack = createStackNavigator();
export default function LearningScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name = 'Learning' component={LearningScreen}/>
        <Stack.Screen name = 'cours-detail' component={CourseDetailScreen}/>
        <Stack.Screen name = 'hanging-man' component ={Game}/>
        <Stack.Screen name = 'animated-vid' component = {Video1}/>
        <Stack.Screen name = 'G' component = {Game}/>
        <Stack.Screen name = 'GG' component = {Front}/>
    </Stack.Navigator>
  )
}