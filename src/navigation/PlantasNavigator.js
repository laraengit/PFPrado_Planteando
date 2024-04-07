import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cabecera from '../components/Cabecera'
import PlantasDict from '../Screens/PlantasDict'
import DetalleScreen from '../Screens/DetalleScreen'

const PlantasNavigator = ({route}) => {
    const Stack = createNativeStackNavigator()
    const {screenHeigth,screenWidth} = route.params
  return (
        <Stack.Navigator initialRouteName="Plantas" 
        screenOptions={({route, navigation}) => {
          return{
            header: () => {
              return <Cabecera titulo={route.name} navigation={navigation} route = {route}/>
            }
          }
        }}>
          <Stack.Screen name="Plantas" component={PlantasDict} initialParams={{screenHeigth, screenWidth}}/> 
          <Stack.Screen name="Detalle planta" component={DetalleScreen} initialParams={{screenHeigth, screenWidth}}/> 
      </Stack.Navigator>
  )
}

export default PlantasNavigator

const styles = StyleSheet.create({})