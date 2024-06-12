import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

export default function OptionItem({value}) {
  return (
    <View style={{display:'flex',alignItems:'center',gap:5,marginTop:5,flexDirection:'row'}}>
            <Entypo name="open-book" size={18} color="black" />
            <Text style={{fontFamily:'outfit-bold'}}>{value}</Text>
            </View>
  )
}