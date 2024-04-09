import { StyleSheet, Text, View, Image, Pressable, Platform, StatusBar} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import BotonAtras from './BotonAtras'
import { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font'

const Cabecera = ({titulo, navigation, route}) => {
  const [fontsLoaded] = useFonts(fontsColection)
  return (
    <View style = {styles.cabecera}>
      {route.name === "Inicio" ? 
      <View style={styles.flexCabecera}>
        
      <Text style={styles.txtCabecera}>{titulo}</Text>
       <Image style = {styles.imgCabecera} source={require('../../assets/logo.png')} />

    </View>
      
      : 
      
      <View style={styles.flexCabecera}>
        
        <BotonAtras
        colorFondo = {"#A5D6AF"}
        onPress = {() =>{navigation.goBack()}}
        />
        <Text style={styles.txtCabecera}>{titulo}</Text>
         <Image style = {styles.imgCabecera} source={require('../../assets/logo.png')} />

      </View>}
      
      
    </View>
  )
}

export default Cabecera

const styles = StyleSheet.create({
    cabecera:{
      backgroundColor:'white',
        height:80,
       /*  paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0, */
        width:StatusBar.currentWidth,
        /* justifyContent:"center",
        alignItems:"center", */
        /* position:"relative", */
    },
    flexCabecera:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',

    },
    txtCabecera:{
      color:"black",
      textAlign:"center",
      backgroundColor: 'white',
      fontFamily:'Raleway',
      fontSize: 24,
    },
    imgCabecera:{
      width:'35%',
      resizeMode: 'contain'
      
    }
})