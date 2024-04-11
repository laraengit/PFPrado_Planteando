import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardTarea from './CardTarea'
import { useSelector, useDispatch } from 'react-redux'
import CardMisPlantas from './CardMisPlantas'
import { useGetMisPlantasDictQuery, useGetMiPlantaQuery } from '../app/services/plantar'
import { colors } from '../utils/colors'
import { cargarMisPlantas } from '../features/cargarSlice'


const ListaTareas = ({navigation,screenWidth, screenHeigth}) => {

  const dispatch = useDispatch()
  const [plantas, setPlantas] = useState([]);
  console.log('Lista Plantas')
  console.log('Listado que llegó')
  const localId = useSelector((state)=> state.auth.localId)
  const actualizado = useSelector((state)=> state.cargar.actualizado)
  console.log(actualizado)
  console.log(localId)
  //const { data, isError, isLoading } = useGetMisPlantasDictQuery(localId)
   //const misplantas = useSelector((state)=>state.misplantas)

  const { data, isError, isLoading, refetch } = useGetMiPlantaQuery()

  useEffect(() => {
    if (!actualizado) {
      refetch()
      dispatch(cargarMisPlantas()); // Solo cambia 'actualizado'
    }
  }, [actualizado]);

  /* useEffect(() => {
    if (!isLoading && actualizado) {
      const { data, isError, isLoading } = useGetMiPlantaQuery() // Recarga los datos si 'actualizado' cambió y no está cargando
    }
  }, [actualizado]);
 */
  if(isLoading) return <View style={[styles.cardContainer,{height:screenHeigth - 150}]}><ActivityIndicator size="large"color={colors.verdeOscuro} /></View>
  const plantasUsuario = data.filter(planta => planta.localId ===localId);
   
  
    
 /*  useEffect(() => {

    if (!actualizado){
      const { data, isError, isLoading } = useGetMiPlantaQuery()
      if(isLoading) return <View style={[styles.cardContainer,{height:screenHeigth - 150}]}><ActivityIndicator size="large"color={colors.verdeOscuro} /></View>
      const plantasUsuario = data.filter(planta => planta.localId ===localId);
      dispatch(cargarMisPlantas())
     }

  }, [actualizado]); */
  

  

  return (
    <View style = {[styles.cardContainer,{height:screenHeigth -220}]}>
        <FlatList
          pagingEnabled = {true}
          data={plantasUsuario}
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