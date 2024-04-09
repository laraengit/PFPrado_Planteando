import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AgregarTarea from '../components/AgregarTarea'

const AgregarPlantaScreen = ({navigation,route}) => {
    const {screenHeigth,screenWidth} = route.params
  return (
    <View style = {styles.container}>
      <AgregarTarea
        navigation={navigation}
        screenWidth={screenWidth}
      /> 
    </View>
  )
}

export default AgregarPlantaScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CAF0E6',
        alignItems: 'center',
        justifyContent: "flex-start",
        gap:10,

      },
})