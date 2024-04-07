import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import AgregarTarea from '../components/AgregarTarea'
import ListaTareas from '../components/ListaTareas'
import ModalBorrarTarea from '../components/ModalBorrarTarea'
import BotonAtras from '../components/BotonAtras'
import { BsChevronLeft  } from "react-icons/bs";
import { useState } from 'react';
import uuid from 'react-native-uuid'
import { useSelector } from 'react-redux'
import BotonPropio from '../components/BotonPropio'
import { colors } from '../utils/colors'

const MisPlantas = ({navigation, route}) => {
  const {screenHeigth,screenWidth} = route.params
  
  return (
    <View style = {styles.container}>
      {/* <AgregarTarea
        screenWidth={screenWidth}
      /> */}
      
      <ListaTareas
      
        navigation={navigation}
        /* onHandlerModal = {onHandlerModal} */
        /* completeTask={completeTask} */
        screenWidth={screenWidth}
        screenHeigth = {screenHeigth}
        /* onHandlerDetalle = {onHandlerDetalle} */
        /* itemDetalle = {itemDetalle} */
      />

      <BotonPropio
            nombre={"Agregar plantas al jardín"}
            colorFondo={colors.VerdeClaro}
            onPress={()=>navigation.navigate("Agregar planta")}
      />
    </View>

  )
}

export default MisPlantas

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CAF0E6',
        alignItems: 'center',
        justifyContent: "flex-start",
        gap:15,
        

      },
})