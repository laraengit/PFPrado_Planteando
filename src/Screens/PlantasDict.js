import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import ListaTareas from '../components/ListaTareas'
/* import plantasData from '../utils/data/plantasData.json' */
import CardPlanta from '../components/CardPlanta'
import { colors } from '../utils/colors'
import { useGetPlantasDictQuery } from '../app/services/plantar'

const PlantasDict = ({navigation,route}) => {
    const {screenHeigth, screenWidth} = route.params
    const { data, error, isLoading } = useGetPlantasDictQuery()
    
    if(isLoading) return <View style={[styles.cardContainer,{height:screenHeigth - 150}]}><ActivityIndicator size="large"color={colors.verdeOscuro} /></View>
    console.log("PLANTAS DICT")
    console.log(data)
    return (
    <View style = {[styles.cardContainer,{height:screenHeigth - 150}]}>
        <FlatList
    data={data}
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