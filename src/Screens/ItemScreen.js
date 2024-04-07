import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import BotonPropio from '../components/BotonPropio'
import BotonAtras from '../components/BotonAtras'
import ModalBorrarTarea from '../components/ModalBorrarTarea'

const ItemScreen = ({navigation, route, modalVisible, tareaSelect, borrarTarea, /* itemDetalle, */onHandlerModal}) => {

  console.log(itemDetalle)
  return (
    <View style={styles.container}>
      <BotonAtras
            colorFondo={"#5DC966"}
            onPress={() => {navigation.goBack()}}
            />
        <Text style={styles.nombreTxt}>{itemDetalle.titulo}</Text>
        <Text style={styles.descTxt}>
          {itemDetalle.descripcion}
        </Text>
        <BotonPropio
                nombre={"Borrar"}
                colorFondo={"#FACD77"}
                onPress={() => onHandlerModal(itemDetalle)}
            />
        
        <ModalBorrarTarea
          modalVisible = {modalVisible}
          tareaSelect = {tareaSelect}
          borrarTarea = {() => {navigation.goBack(),console.log("setItemScreen"),borrarTarea}}
          onHandlerModal = {onHandlerModal}
      />

    </View>
  )
}

export default ItemScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAF0E6',
    alignItems: 'center',
    justifyContent: "flex-start",
    gap:10,

  },
    nombreTxt:{
        color: 'white',
        fontSize:18,
        margin: 22,
        padding:10,
        textAlign: "center",
        borderRadius:8,
        backgroundColor:'#2B8A62',
        width:250,
    },
    descTxt:{
      color: '#0C2821',
      fontSize:15,
      margin: 22,
      padding:10,
      textAlign: "justify",
      borderRadius:8,
      backgroundColor:'white',
      width:250,
      height:150,
  }
})