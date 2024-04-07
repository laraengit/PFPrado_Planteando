import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cabecera from '../components/Cabecera'
import Home from '../Screens/Home'

const HomeNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
        <Stack.Navigator initialRouteName="Inicio" 
        screenOptions={({route, navigation}) => {
          return{
            header: () => {
              return <Cabecera titulo={route.name} navigation={navigation} route = {route}/>
            }
          }
        }}>
          <Stack.Screen name="Inicio" component={Home} />
      </Stack.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})