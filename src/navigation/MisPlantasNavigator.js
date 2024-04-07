import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cabecera from '../components/Cabecera'
import PlantasDict from '../Screens/PlantasDict'
import DetalleScreen from '../Screens/DetalleScreen'
import MisPlantas from '../Screens/MisPlantas'
import DetalleMiPlanta from '../Screens/DetalleMiPlanta'
import { agregarPlanta } from '../features/misplantasSlice'
import AgregarPlantaScreen from '../Screens/AgregarPlantaScreen'

const MisPlantasNavigator = ({route}) => {
    const Stack = createNativeStackNavigator()
    const {screenHeigth,screenWidth} = route.params
  return (
        <Stack.Navigator initialRouteName="Mis Plantas" 
        screenOptions={({route, navigation}) => {
          return{
            header: () => {
              return <Cabecera titulo={route.name} navigation={navigation} route = {route}/>
            }
          }
        }}>
          <Stack.Screen name="Mis Plantas" component={MisPlantas} initialParams={{screenHeigth,screenWidth}}/> 
          <Stack.Screen name="Mi planta" component={DetalleMiPlanta} /> 
          <Stack.Screen name="Agregar planta" component={AgregarPlantaScreen} initialParams={{screenHeigth, screenWidth}}/> 
      </Stack.Navigator>
  )
}

export default MisPlantasNavigator

const styles = StyleSheet.create({})