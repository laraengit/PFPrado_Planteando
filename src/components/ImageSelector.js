import {useEffect, useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import BotonPropio from './BotonPropio'
import * as ImagePicker from 'expo-image-picker'
import { useSelector } from 'react-redux'
import { colors } from '../utils/colors'


const ImageSelector = ({navigation, route}) => {
    console.log("IMAGE SELECTOR")

    const { setImagenPlanta } = route.params
    const [image,setImage] = useState("")


    useEffect(() => {
        (async () => {
          const { status } = await ImagePicker.requestCameraPermissionsAsync();
          if (status !== 'granted') {
            alert('Se requieren permisos para acceder a la cámara.');
          }
        })();
      }, []);

    const pickImage = async () => {

       const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        
       if(granted){
         let result = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[6,4],
            quality:0.3,
            base64:true
         })

         if(!result.canceled){
            setImage('data:image/jpeg;base64,' + result.assets[0].base64)
         }
       }


    }

    const confirmImage = () => {
        setImagenPlanta(image); // Actualiza el estado de la imagen en el formulario de planta
        navigation.goBack();
    }


  return (
    <View style={styles.container}>
       <Image
            source={image ? {uri:image}: require("../../assets/icono_planteando.png")}
            style={styles.image}
            resizeMode='cover'

        />
        <BotonPropio 
        nombre="Tomar foto"
         onPress={pickImage}
         colorFondo={colors.VerdeClaro}
         tamFuente={24} />
        <BotonPropio 
        nombre="Confirm photo" 
        onPress={confirmImage}
        colorFondo={colors.VerdeClaro}
        tamFuente={24}  />
    </View>
  )
}


export default ImageSelector


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    }
})