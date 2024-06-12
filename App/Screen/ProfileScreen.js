import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Utils/Colors'

export default function ProfileScreen() {
  return (
    <View>
      <View style={{backgroundColor:Colors.PRIMARY, height:120,padding:20}}>
          <Header/>
      </View>
    </View>
  )
}