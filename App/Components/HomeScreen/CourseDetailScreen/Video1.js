import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';

export default function Video1({value}) {
  // const { videoUrl } = route.params;
  return (
    <View>
      <Text style={{fontStyle:'italic',fontFamily:'outfit-bold',fontWeight:'bold'}}>{value?.title}</Text>
      <Video
      shouldPlay = {false}
        style={styles.video}
        source={{
          uri:value?.video[0].url
        }}
        useNativeControls={true}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />
    </View>
  )
}
const styles = StyleSheet.create({
  video:{
    width:'100%',
    height:250,

  }
})

// uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
// uri: 'https://media.graphassets.com/0rrqpT5GHEpO0wPdxKAo'