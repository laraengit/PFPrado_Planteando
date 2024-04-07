import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import BotonPropio from './BotonPropio'
import { useFonts } from 'expo-font'
import fonts, { fontsColection } from '../utils/fonts'
const CardMisPlantas = ({navigation,item, screenHeigth, screenWidth}) => {
  const [fontsLoaded] = useFonts(fontsColection)
  return (
    <View style = {[styles.card,{width:screenWidth -70,height:screenHeigth -800}]}>
        
      <Text style = {styles.textTitle} >{item.nombre}</Text>
      <BotonPropio
                nombre={"Ver detalle"}
                colorFondo={colors.rosa}
                onPress={() => {navigation.navigate("Mi planta",{idMiPlanta:item.id});console.log(item.id) }}
            />
    </View>
  )
}

export default CardMisPlantas

const styles = StyleSheet.create({
    card:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        padding:10,
        borderRadius:5,
        backgroundColor:colors.verdeOscuro,
        gap:20,
        margin:40,

      },
      
    textTitle:{
    
        color: 'white',
        fontSize:18,
        margin: 10,
        padding:10,
        fontSize:20 ,       
        fontFamily:fonts.Montserrat,

      },
})