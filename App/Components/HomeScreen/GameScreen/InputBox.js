import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../Utils/Colors'

const InputBox = ({correctLetters, answer}) => {
  return (
    <View style={styles.inputContainer}>
      {answer.split('').map((letter,index) => {
        const l= letter.toUpperCase();
        return (
          <Text key= {index} style= {styles.text}>
            {correctLetters.includes(l) ? l: '-'}</Text>
        )
      })}
    </View>
  )
}

export default InputBox

const styles= StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.Modal,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text:{
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 3,
  },
})