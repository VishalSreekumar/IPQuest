import { View, Text,Image } from 'react-native'
import React from 'react'
import Colors from 'e-learning/App/Utils/Colors.js'
import { Entypo } from '@expo/vector-icons';
import Video1 from './CourseDetailScreen/Video1';

export default function CourseItem({item}) {
  return (
    <View style={{
      padding:10,
        marginRight:15,borderRadius:15
    }}>
          <Image source={{uri:item?.banner?.url}}
          style={{width:325,height:180,borderRadius:15}}/>
          <View style={{padding:7}}>
            <Text style={{
              fontFamily:'outfit-bold',
              fontSize:23,
            }}>{item.name}</Text>
            <View style={{display:'flex',alignItems:'center',gap:5,marginTop:5,flexDirection:'row'}}>
            <Entypo name="open-book" size={18} color="black" />
            <Text>{/*item?.chapters?.length*/}3 Chapters</Text>
            {/* <Text>{item?.chapter[0].video.url} url</Text> */}
            {/* <Video1 course={item}/> */}
             
            </View>
          </View>
        </View>
  )
}