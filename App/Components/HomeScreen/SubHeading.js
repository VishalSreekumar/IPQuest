import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function SubHeading(color=Colors.WHITE) {
  return (
    <View>
    <Text style={{
        fontFamily:'outfit-bold',
        fontSize:26,
        color:color
      }}>
        Intellectual Property Rights
      </Text>
      </View>
  )
}