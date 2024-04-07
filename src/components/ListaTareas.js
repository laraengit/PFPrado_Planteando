import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardTarea from './CardTarea'
import { useSelector } from 'react-redux'
import CardMisPlantas from './CardMisPlantas'

const ListaTareas = ({navigation,screenWidth, screenHeigth}) => {
  console.log('Lista Plantas')
  console.log('Listado que llegó')
  const misplantas = useSelector((state)=>state.misplantas)
  console.log(misplantas)
 
  return (
    <View style = {[styles.cardContainer,{height:screenHeigth -220}]}>
        <FlatList
          pagingEnabled = {true}
          data={misplantas.items}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardMisPlantas
              navigation = {navigation}
              item = {item}
              screenWidth = {screenWidth}
              screenHeigth = {screenHeigth}
            />
          )}
        />
      </View>
  )
}

export default ListaTareas

const styles = StyleSheet.create({
    cardContainer:{
        justifyContent:"center",
        alignItems:"center",
      },
      
})