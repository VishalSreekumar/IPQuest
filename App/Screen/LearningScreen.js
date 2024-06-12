import { View,Text,ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Utils/Colors'
import CourseList from '../Components/HomeScreen/CourseList'

export default function LearningScreen() {
  return (
    <ScrollView>
        <View style={{backgroundColor:Colors.PRIMARY, height:120,padding:20}}>
          <Header/>
        </View>
        <View style={{padding:20}}>
        <CourseList level ={'Basic'}/>
        </View>
    </ScrollView>
  )
}