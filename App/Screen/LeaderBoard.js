import { View, Text, FlatList,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Utils/Colors'
import { GetAllUsers } from '../Services'
import { useUser } from '@clerk/clerk-expo'


export default function LeaderBoard() {
  const {user} = useUser();
  const [userList,setUserList] = useState([])
    useEffect(()=>{
      GetAllUserDetails();
    },[])
  const GetAllUserDetails=()=>{
    GetAllUsers().then(
      resp=>{
        console.log(resp);
        resp&&setUserList(resp?.userDetails)
      }
    )
  }
  return (
    <View>
        {/* <View style={{backgroundColor:Colors.PRIMARY, height:120,padding:20}}>
          <Header/>
        </View> */}
        <View style={{height:160,backgroundColor:Colors.PRIMARY,
        padding:30}}>
        <Text style={{fontFamily:'outfit-bold',color:Colors.WHITE,fontSize:30,marginTop:60,marginRight:30}}>Leader Board</Text>
        </View>

        <View>
          <FlatList 
          data={userList}
          renderItem={({item,index})=>(
            <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
              <Image source={{uri:item.profileImage}}
              style={{width:60,height:60}}/>
              <View>
                <Text style={{fontFamily:'outfit-bold',fontSize:20}}>{item.userName}</Text>
                <Text style={{fontSize:16,color:Colors.BLACK}}>{item.point} Points</Text>
              </View>
            </View>


          )}
          />
        </View>
      
    </View>
  )
}