import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getVideoList } from '../../../Services/vidindex'
import {getCourseList} from '../../../Services/index'
import { useNavigation } from '@react-navigation/native';
import Video1 from './Video1';
export default function Vidlist({level}) {


  const[videoList,setVideoList] = useState([]);
  const navigation2 = useNavigation();

  useEffect(()=>{
    getVideo();
  },[])

  const getVideo=()=>{
    getVideoList(level).then(resp=>{
      console.log("RESP--",resp);
      setVideoList(resp?.iprAnimatedCourses)
    })
  }
  return (
    <View>
      <Text>Vidlist</Text>
      <FlatList
      data = {videoList}
      key={videoList.id}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation2.navigate('animated-vid',{
          item:item
        })}>
          <Text>{item?.title}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}