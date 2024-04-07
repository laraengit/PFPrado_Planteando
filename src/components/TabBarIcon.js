import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '../utils/colors'
import fonts from '../utils/fonts'
const TabBarIcon = ({title,icon, focused}) => {
  const colorFocus = focused ? "white": colors.verdeOscuro
  return (
    <View style={styles.container}>
      <Feather name = {icon} size={20} color={colorFocus}/>
      <Text style={[styles.tabBarText, {color: colorFocus}]}>{title}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
      alignItems:'center',

    },
    tabBarText:{
      fontFamily:fonts.Lato
      
    }
})