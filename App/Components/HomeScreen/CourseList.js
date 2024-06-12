import { View,Text,Image,FlatList,ScrollView} from 'react-native'
import React,{useEffect,useState} from 'react'
import { getCourseList } from '../../Services/index'
import SubHeading from './SubHeading';
import Colors from 'e-learning/App/Utils/Colors.js'
import CourseItem from './CourseItem';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
export default function CourseList({level}) {


  const[courseList,setCourseList] = useState([]);
  const navigation = useNavigation();

    useEffect(()=>{
        getCourses();
    },[])
    const getCourses=()=>{
        getCourseList(level).then(resp=>{
            console.log("RESP--",resp);
            setCourseList(resp?.iprAnimatedCourses)
        })
    }
  return (
    <View>
      <SubHeading/>
      <FlatList
      data = {courseList}
      key={courseList.id}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('cours-detail',{
          course:item 
        })} >
          <CourseItem item={item}/>
        </TouchableOpacity>        
      )}
      />
    </View>
  )
}