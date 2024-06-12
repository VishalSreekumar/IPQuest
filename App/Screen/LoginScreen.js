import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import React from 'react'
import app from 'e-learning/assets/images/IPR.png'
import google from 'e-learning/assets/images/Google.png'
import Colors from 'e-learning/App/Utils/Colors.js'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "e-learning/hooks/warmUpBrowser.tsx";
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  
  return (
    <View style= {{display:'flex', alignItems:'center' }}>
      <Text style= {{textAlign: 'center', fontSize: 35, marginTop:100,
           color: Colors.PRIMARY, fontFamily: 'welcome' }}>WELCOME</Text>
        <Image source= {app}
        style= {{width:250, height:500,
        objectFit: 'contain', marginTop: -100}}/>
        <View style={{
          height:400,
          backgroundColor: Colors.PRIMARY,
          width: 450 ,
          marginTop: -100,
          padding: 20
          
        }}>
          <Text style= {{textAlign: 'center', fontSize: 35, marginTop:20,
           color: Colors.WHITE, fontFamily: 'outfit-bold' }}>IP QUEST</Text>
          <Text style= {{textAlign: 'center',
        fontSize: 20, marginTop: 30, marginLeft:20,marginRight:20,
        color: Colors.LIGHTPRIMARY,
        fontFamily: 'outfit'}}>"Unlock anything, anytime, and make learning fun again."</Text>
        <TouchableOpacity 
        onPress={onPress}
        style= {{backgroundColor: Colors.WHITE,marginTop: 40,marginLeft: 10,
        marginRight: 10, display: 'flex', flexDirection: 'row',
        alignItems: 'center', gap: 10,
        justifyContent: 'center', padding: 10,
        borderRadius: 99}}>
          <Image source= {google}
          style= {{width: 40, height: 40}}/>
          <Text style={{fontSize:20,
          color: Colors.PRIMARY,
          fontFamily: 'outfit'}}>Sign-In with google</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
