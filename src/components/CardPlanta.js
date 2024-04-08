import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import BotonPropio from './BotonPropio'
import { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font'
import { colors } from '../utils/colors'
import fonts from '../utils/fonts'
const CardPlanta = ({navigation,item, screenHeigth, screenWidth}) => {
    const [fontsLoaded] = useFonts(fontsColection)
    console.log(item.id)
    return (
    <View key={item.id} style = {[styles.card,{width:screenWidth -70,height:screenHeigth -750}]}>
        
      <Text style = {styles.textTitle} >{item.nombre}</Text>
      <BotonPropio
                nombre={"Ver detalle"}
                colorFondo={colors.rosa}
                onPress={() => {navigation.navigate("Detalle planta",{idPlanta:item.id}) }}
            />
    </View>
  )
}

export default CardPlanta
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