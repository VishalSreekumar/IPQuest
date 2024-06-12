import {StyleSheet, Text, View, Modal, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../Utils/Colors'
import losImg from "e-learning/assets/images/lost.png"
import winImg from "e-learning/assets/images/won.png"
import * as Animatable from 'react-native-animatable'

const StatusPopup = ({status, onPress}) => {
    const src= status=== 'won' || status=== 'completed' ? winImg : losImg;
    const message= status=== 'won' ? "Amigo You Won the Match ": status=== 'completed' ? 'Congratulations you completed the PUZZLE': "Sorry to say you LOST the match"; 
    const buttonText= status === 'win' ? 'Next word': status === 'completed' ? 'NEXT Round' : 'Retry';
  return (
    <Modal visible={status !== ''} animationType='fade' transparent= {true}>
        <View style= {styles.modalContainer}>
            <View style= {styles.popup}>
                <Animatable.View animation={'zoomIn'} delay={400} style={styles.popup}> 
                    <Image source= {src} style= {styles.img} />
                    <Text style= {styles.text}>{message}</Text>
                    <TouchableOpacity onPress= {onPress} style= {styles.btn}>
                        <Text style= {styles.btnText}>{buttonText}</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </View>
    </Modal>
  )
}

export default StatusPopup

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1, 
        backgroundColor: Colors.darkOverlayColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    popup: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: Colors.Modal,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color : 'white'
    },
    img: {
        height: 100,
        width: 100
    },
    btn:{
        padding: 10,
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: Colors.shapeColor
    },
    btnText: {
        color: 'white',
        fontSize: 18
    }
})