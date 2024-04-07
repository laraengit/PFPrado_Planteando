import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListaTareas from '../components/ListaTareas'
import plantasData from '../utils/data/plantasData.json'
import CardPlanta from '../components/CardPlanta'
import { colors } from '../utils/colors'

const PlantasDict = ({navigation,route}) => {
    const {screenHeigth, screenWidth} = route.params
  return (
    <View style = {[styles.cardContainer,{height:screenHeigth - 150}]}>
        <FlatList
    data={plantasData}
    keyExtractor={item => item}
    renderItem={({item})=> 
    <CardPlanta
        item={item} 
        navigation={navigation}
        screenHeigth={screenHeigth}
        screenWidth = {screenWidth}
        />}
    />

    </View>
    

  )
}

export default PlantasDict

const styles = StyleSheet.create({
    cardContainer:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.celeste
      },
      
})