import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Game from '../Components/HomeScreen/GameScreen/Game'
import { useNavigation } from '@react-navigation/native'
import Header from '../Components/HomeScreen/Header';
import Colors from '../Utils/Colors';

export default function GamingScreen() {
  const navigating = useNavigation();
  return(
    <View>
      <View style={{backgroundColor:Colors.PRIMARY, height:120,padding:20}}>
          <Header/>
        </View>
      <TouchableOpacity onPress={() => navigating.navigate('GG')}>
        <View>
          <Image source={require('./../../assets/images/quiz_image.png')} style={{width:310,marginTop:40,height:180,borderRadius:10,marginLeft:25}}/>
        <Text style={{justifyContent:'center',alignItems:'center',fontSize:28,fontFamily:'outfit-bold',marginLeft:95,marginTop:25,height:50}}>    Trivia Time</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigating.navigate('G')}>
        <View>
          <Image source={require('./../../assets/images/quiz_image.png')} style={{width:310,height:180,borderRadius:15,marginLeft:25}}/>
        <Text style={{justifyContent:'center',alignItems:'center',fontSize:28,fontFamily:'outfit-bold',height:50,marginLeft:95,marginTop:25}}> Find The Word</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
