import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import fonts, { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font'
const BotonPropio = ({nombre,colorFondo,onPress}) => {
  const [fontsLoaded] = useFonts(fontsColection)
  return (
    <Pressable style={[styles.boton,{backgroundColor:colorFondo}]} onPress={onPress}>
      <Text style={styles.textBoton}>{nombre}</Text>
    </Pressable>
  )
}

export default BotonPropio

const styles = StyleSheet.create({
    boton:{
        borderRadius:5,
        paddingVertical: 5,
        paddingHorizontal:10
    },
    textBoton:{
        color: 'white',
        fontFamily:fonts.Lato
    }
    

})