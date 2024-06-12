import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const gheader = () => {
  return (
    <View style={styles.container }>
      <Text style={styles.text}>Find me out</Text>
    </View>
  )
}

export default gheader

const styles = StyleSheet.create({
    container: {
        margin:20,
        alignItems: 'center'
    },
    text:{
        fontSize:20,
        fontWeight:'700'
    }
})