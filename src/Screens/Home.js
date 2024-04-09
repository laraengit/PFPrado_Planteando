import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import BotonPropio from '../components/BotonPropio'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../utils/colors'
/* import { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font' */

const Home = ({navigation}) => {
  /* const [fontsLoaded] = useFonts(fontsColection) */
  return (
    <View style = {styles.container}>
{/*         <Image style = {styles.imgHome} source={require('../../assets/icono_planteando.png')} />
 */}
      
        <BotonPropio
              nombre={"Mis plantas"}
              colorFondo={colors.verdeOscuro}
              onPress={() => {navigation.navigate("Plantas")}}
              tamFuente={60}
              />
        <BotonPropio
              nombre={"+ Info"}
              colorFondo={colors.verdeChillon}
              onPress={() => {console.log("+ info")}}
              tamFuente={20}
              />

    
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CAF0E6',
        alignItems: 'center',
        justifyContent: "center",
        gap:30,
      },
      imgHome:{
        width:'25%',
        resizeMode: 'contain'
        
      }
})