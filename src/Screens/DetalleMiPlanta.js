import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import fonts, { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font'
import { colors } from '../utils/colors'

const DetalleMiPlanta = ({route}) => {
    console.log("Detalle mi planta")
    const {idMiPlanta} = route.params
    console.log(idMiPlanta)
    const [fontsLoaded] = useFonts(fontsColection)
    const misplantas = useSelector((state)=>state.misplantas)
    console.log(misplantas)
    const [miplanta,setMiPlanta] = useState({})
    useEffect(()=>{
        const data = misplantas.items
        console.log(data)
        const miplantaElegida = data.find((planta) => planta.id === idMiPlanta)
        console.log(miplantaElegida)
        setMiPlanta(miplantaElegida)
        console.log(miplantaElegida)

      },[idMiPlanta])
  return (
    <View style={styles.container}>
    {/* <Image style = {styles.imgDetalle} source={require(planta.imagen)}/> */}
    
      <Text style={styles.nombreTxt}>{miplanta.nombre}</Text>
      <Text style={styles.label}>
        Riego
      </Text>
        <Text style={styles.descTxt}>
          {miplanta.riego}
        </Text>
        
        <Text style={styles.label}>
        Otros cuidados
      </Text>
        <Text style={styles.descTxt}>
          {miplanta.cuidados}
        </Text>
    </View>
  )
}

export default DetalleMiPlanta

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
          resizeMode:"cover"
  
  
      },
      label:{
          textAlign:"left",
          fontFamily:fonts.Montserrat,
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