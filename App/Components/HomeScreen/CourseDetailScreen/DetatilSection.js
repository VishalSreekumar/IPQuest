import { View,ScrollView, Text,Image, Dimensions,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../../Utils/Colors'
import OptionItem from './OptionItem'
import { Entypo } from '@expo/vector-icons';
// import Video1 from './Video1';
import CourseItem from '../CourseItem';
import { useNavigation } from '@react-navigation/native';
import Vidlist from './Vidlist';
import Video1 from './Video1';
import { Video } from 'expo-av';
// import { TouchableOpacity } from 'react-native-gesture-handler';



export default function DetatilSection({course}) {
  const navi = useNavigation();
  // const selectedTag = 'Patent';
  // const selectedTagData = course.course.iprAnimatedCourses.find((vide) => vide.tags === selectedTag);
  return (
    <ScrollView style={{padding:10,borderRadius:15}} >
        <Image source={{uri:course?.banner?.url}}
        style={{width:Dimensions.get('screen').width*0.85,
        height:190,borderRadius:15
    }}
        />
        <View style={{padding:10}}>
          <Text style ={{fontSize:24,fontFamily:'outfit-bold',marginTop:10}}>{course.name}</Text>
          <View style={styles.rowStyle}>
          {/* <OptionItem value={course.chapters?.length+ " Chapters"}/> */}
          <OptionItem value={"3 Chapters"}/>
          </View>
          <View>
              <Text style={{fontFamily:'outfit-bold',fontSize:20}}>{course?.chapters?.url}</Text>
              <Text style={{fontFamily:'outfit-bold',fontSize:20}}>Description</Text>
              <Text style={{fontFamily:'outfit',lineHeight:22}}>{course?.description?.markdown}</Text>
          </View>
          {/* <View>
            <Vidlist course = {'Basic'}/>
          </View> */}
          <View>
             {/* <TouchableOpacity onPress={()=>navi.navigate('animated-vid',{
              value:course?.chapters[0]
            })}>
             <Text> {course?.chapters[0]?.title} </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity onPress={()=>navigating.navigate('cours-detail',{
            course:item 
              })}>
                <CourseItem item={item}/>
                </TouchableOpacity>   */}
            {/* <Text style={styles.textstyle}>chapter 1: {course?.chapters[0]?.title}</Text> */}
            <Video1 value = {course?.chapters[0]}/>
            {/* <Text style={styles.textstyle}>chapter 2: {course?.chapters[1]?.title}</Text> */}
            <Video1 value = {course?.chapters[1]}/>
            {/* <Text style={styles.textstyle}>{course?.chapters[2]?.title}</Text> */}
            <Video1 value = {course?.chapters[2]}/>
            <Text>                 </Text>
          </View>
        </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    rowStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
    },
    textstyle:{
      fontStyle:'italic',
      fontFamily:'outfit-bold',
      fontWeight:'bold',
    }

})