import { View,TouchableOpacity, Text } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetatilSection from '../Components/HomeScreen/CourseDetailScreen/DetatilSection';
import ChapterSection from '../Components/HomeScreen/CourseDetailScreen/ChapterSection';

export default function CourseDetailScreen() {
  const navigate = useNavigation();
  const params=useRoute().params;
  useEffect(()=>{
    console.log(params.course)
  },[params.course])
  return params.course&&(
    <View style={{padding:20}}>
      <TouchableOpacity onPress={()=>navigate.goBack()}>
      <AntDesign name="back" size={36} color="black" />
      </TouchableOpacity>
      <DetatilSection course={params.course}/>
      <ChapterSection/>
    </View>
  )
} 