import React, { useContext, useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet,Image, } from 'react-native';
import { Paragraph } from 'react-native-paper';
import i_p_r from './../../assets/images/i_p_r.png'
import Colors from '../Utils/Colors';
import { useAuth, useUser } from "@clerk/clerk-expo";
import Header from '../Components/HomeScreen/Header'
import { createNewUser, getUserDetail } from '../Services';
import { UserPointsContext } from '../Context/UserPointsContext';
export default function HomeScreen() {
  const {user} = useUser();
  const {isLoaded,signOut} = useAuth();
  const {userPoints,setUserPoints} = useContext(UserPointsContext);
  useEffect(()=>{
    user&&createUser();
  },[user])
  const createUser=()=>{
    if (user)
    {
      createNewUser(user.fullName,user.primaryEmailAddress.emailAddress,user.imageUrl)
      .then(resp=>{
        if(resp)
        GetUser()
      })
    }
  }
  const GetUser=()=>{
    getUserDetail(user.primaryEmailAddress.emailAddress).then(resp=>{
      console.log("--",resp.userDetail?.point);
      setUserPoints(resp.userDetail?.point)
    })
  }
  return (
    <View style = {{flex:1}}>
      <View style={{backgroundColor:Colors.PRIMARY, height:120,padding:20}}>
        <Header/>
      </View>
        <Image style={styles.imageview} source={i_p_r}  />
          <Text style={[styles.italic,styles.underline,styles.bold,styles.setColorRed]}>INTELLECTUAL PROPERTY RIGHTS</Text>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Intellectual Property Rights in general refers to the set of intangible assets including invention, creation, and contribution to the contemporaneous field of knowledge which is owned and legally protected by an individual or company from the outside use or implementation without approved consent.</Text>
        <Text style={styles.text}>In simple words The IPR is used to protect and maintain the integrity of our own products which is legally registered under the policies of the government.</Text>
        <Text style={styles.text}>In India several new legislation for the protection of intellectual property rights (IPRs) have been passed to meet the international obligations under the WTO Agreement on Trade-Related Aspects of Intellectual Property Rights(TRIPS).</Text>
        <Text style={styles.text}>Intellectual property has increasingly assumed a vital role with the rapid pace of technological, scientific and medical innovation that we are witnessing today.</Text>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
  },
  scrollView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#008080',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight : 'normal'  
  },
  imageview:{
    width: 400,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
    
  },
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  setColorRed : {
    fontSize : 30,
    color: '#f44336',
    justifyContent: 'center',
    alignItems: 'center',

  },


});

