import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from "@clerk/clerk-expo";
import Colors from '../../Utils/Colors';
import Coin from 'e-learning/assets/images/point.png';
export default function Header() {
    const {isLoaded, isSignedIn, user}= useUser();
  return isLoaded&&(
    <View style={[{justifyContent: 'space-between',marginTop:15},styles.rowStyle]}>
        <View style= {styles.rowStyle}>
            <Image source= {{uri:user?.imageUrl}}
            style={{width:40, height:40, borderRadius:99}}
            />
            <View>
                <Text style={{color:Colors.WHITE, fontFamily:'outfit'}}>WELCOME</Text>
                <Text style={styles.mainText}>{user?.fullName}</Text>
            </View>
        </View>
        <View style={styles.rowStyle}>
            <Image source={Coin} style={{width:35, height:35}}/>
            <Text style={styles.mainText}>temp
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainText:{
        color:Colors.WHITE,
        fontSize:20, 
        fontFamily:'outfit' 
    },
    rowStyle:{
        display:'flex', 
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }
})