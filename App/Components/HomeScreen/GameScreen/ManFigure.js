import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ellipse, G, Line, Rect, Svg } from 'react-native-svg'
import Colors from '../../../Utils/Colors'
import { createAnimatableComponent } from 'react-native-animatable'

const AnimatableLine= createAnimatableComponent(Line);
const AnimatableRect= createAnimatableComponent(Rect);
const AnimatableEllipse= createAnimatableComponent(Ellipse);

const ManFigure = ({wrongWord}) => {
  const Rope= <AnimatableLine animation={'fadeIn'} x1="200" y1="0" x2="200" y2="140" stroke="brown" strokeWidth="5" />
  const Head= <AnimatableEllipse animation={'fadeIn'} cx="200" cy="150" rx="40" ry="25" fill={Colors.shapeColor} />
  const Nack= <AnimatableRect animation={'fadeIn'} width="10" height="50" x="195" y="150 " fill={Colors.shapeColor} />
  const Hands= <AnimatableLine animation={'fadeIn'} x1="260" y1="200" x2="140" y2="200" stroke={Colors.shapeColor} stroke-Linecap="round" strokeWidth="10" />
  const Body= <AnimatableRect animation={'fadeIn'}  width="10" height="50" x="195" y="200" fill={Colors.shapeColor} />
  const Legs= <G>
      <Line x1="200" y1="250" x2="150" y2="300" stroke={Colors.shapeColor} stroke-Linecap="round" strokeWidth="10" />
      <Line x1="200" y1="250" x2="250" y2="300" stroke={Colors.shapeColor} stroke-Linecap="round" strokeWidth="10" />
  </G>
  return (
    <View style={styles.container}>
        <Svg version="1.1" viewBox="0 0 300 400" preserveAspectRatio="xMinYMin meet" class="svg-content" width="140" height="200">
            <Rect fill={Colors.FrameColor} width="250" height="10" x="5" y="15" />
            <Rect fill={Colors.FrameColor} width="10" height="350" x="20" y="0" /> 
            <Rect fill={Colors.FrameColor} width="250" height="40" x="0" y="350" />
            {wrongWord> 0 ? Rope: null}
            {wrongWord> 1 ? Head: null}
            {wrongWord> 2 ? Nack: null}
            {wrongWord> 3 ? Hands: null}
            {wrongWord> 4 ? Body: null}
            {wrongWord> 5 ? Legs: null}
        </Svg>
    </View>
  )
}

export default ManFigure

const styles = StyleSheet.create({
    container:{
        //flex:1  
    }
})