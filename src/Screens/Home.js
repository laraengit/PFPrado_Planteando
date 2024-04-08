import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import BotonPropio from '../components/BotonPropio'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../utils/colors'
import { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font'

const Home = ({navigation}) => {
  const [fontsLoaded] = useFonts(fontsColection)
  return (
    <View style = {styles.container}>
      
      
        <BotonPropio
              nombre={"Mis plantas"}
              colorFondo={colors.verdeOscuro}
              onPress={() => {navigation.navigate("Plantas",{})}}
              tamFuente={30}
              />
        <BotonPropio
              nombre={"+ Info"}
              colorFondo={colors.verdeChillon}
              onPress={() => {console.log("+ info")}}
              tamFuente={30}
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
      
})