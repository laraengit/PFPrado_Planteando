import { StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'
import { BsChevronLeft } from "react-icons/bs"
import fonts, { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font'

const BotonAtras = ({colorFondo,onPress}) => {
  const [fontsLoaded] = useFonts(fontsColection)
  return (
    <Pressable style={[styles.boton,{backgroundColor:colorFondo}]} onPress={onPress}>
        {/* <BsChevronLeft  /> */}
        <Text style={styles.textBoton}>Atrás</Text>
    </Pressable>
  )
}

export default BotonAtras

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