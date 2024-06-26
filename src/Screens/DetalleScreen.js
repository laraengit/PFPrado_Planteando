import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import plantasData from '../utils/data/plantasData.json'
import { useState, useEffect } from 'react'
import { colors } from '../utils/colors'
import fontsColection from '../utils/fonts'
import { useGetPlantaQuery } from '../app/services/plantar'
import { useFonts } from 'expo-font'

const DetalleScreen = ({route}) => {
    const {idPlanta} = route.params
    console.log(idPlanta)
    /* const [planta,setPlanta] = useState({}) */
    const [fontsLoaded] = useFonts(fontsColection)
    const {data,isLoading, isError} = useGetPlantaQuery(idPlanta)
    console.log(data)
    console.log('Loading:', isLoading);
    console.log('Error:', isError);

  /* useEffect(()=>{
    const plantaElegida = plantasData.find((planta) => planta.id === idPlanta)
    console.log(plantaElegida)
    setPlanta(plantaElegida)
  },[idPlanta]) */
    if(isLoading) return <View style={styles.container}><ActivityIndicator size="large"color={colors.verdeOscuro} /></View>
  return (
    <View style={styles.container}>
      <Image style={styles.imgDetalle} source={{ uri: data.imagen }} />

    {/* <Image style = {styles.imgDetalle} source={require(planta.imagen)}/> */}
    
      <Text style={styles.nombreTxt}>{data.nombre}</Text>
      <Text style={styles.label}>
        Riego
      </Text>
        <Text style={styles.descTxt}>
          {data.Riego}
        </Text>
        <Text style={styles.label}>
        Luz
      </Text>
        <Text style={styles.descTxt}>
          {data.Luz}
        </Text>
        <Text style={styles.label}>
        Otros cuidados
      </Text>
        <Text style={styles.descTxt}>
          {data.Cuidados}
        </Text>
    </View>
  )
}

export default DetalleScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CAF0E6',
      alignItems: 'center',
      justifyContent: "flex-start",
      gap:5,
      
  
    },
    imgDetalle:{
        width:280,
        resizeMode:"contain"


    },
    label:{
        textAlign:"left",
        fontFamily:"Montserrat",
        width:280,
        borderRadius:8,
        backgroundColor:colors.VerdeClaro,
        padding:5
    },
      nombreTxt:{
          color: 'white',
          fontSize:18,
          margin: 20,
          padding:10,
          textAlign: "center",
          borderRadius:8,
          backgroundColor:'#2B8A62',
          width:280,
      },
      descTxt:{
        color: '#0C2821',
        fontSize:15,
        margin: 22,
        padding:10,
        textAlign: "center",
        borderRadius:8,
        backgroundColor:'white',
        width:280,
        height:"auto",
    }
  })