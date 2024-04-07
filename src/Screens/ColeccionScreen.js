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

/* Este screen es el análogo de cómo quedó la entrega 2 */
const ColeccionScreen = ({navigation, route}) => {
  const {/* tareaTitle, onHandlerTitle, *//* tareaDesc, onHandlerDesc, *//* agregarTarea, */ screenWidth,
    /* arrTarea, *//* onHandlerModal, */ /* completeTask, */ screenHeigth, /* tareaSelect, *//* borrarTarea, *//* modalVisible, */ /* onHandlerDetalle */} = route.params
    const [arrTarea,setArrTarea] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [tareaSelect, setTareaSelect] = useState({})
    const [itemDetalle, setItemDetalle] = useState({})
    const [tareaTitle,setTitle] = useState("")
    const [tareaDesc,setDesc] = useState("")
    const onHandlerModal = (tarea) =>{
      setTareaSelect(tarea)
      setModalVisible(!modalVisible)
      
      console.log("onHandlerModal")
      
    }
    const completeTask = (id) => {
      console.log("Incicio complete Task")
      console.log(id)
      setArrTarea(arrTarea.map(tarea => {
        console.log(tarea)
        if(tarea.id===id) return {...tarea,completed:!tarea.completed}
      }))
      console.log(arrTarea)
      console.log("fin complete Task")
      
    }
    const borrarTarea = () =>{
      console.log("Borrar tarea")
      setArrTarea(arrTarea.filter(tareita => tareita.id != tareaSelect.id))
      setModalVisible(!modalVisible)
      console.log("borrar tarea")
    }
    const onHandlerDetalle = (item) =>{
      console.log(item)
      setItemDetalle(item)
      console.log("setItemDetalle")
      
    }
    
    const onHandlerTitle = (t) =>{
      setTitle(t)

    }
    const onHandlerDesc = (d) =>{
      setDesc(d)
    }

    const agregarTarea = () =>{

      const nuevaTarea = {
        id : uuid.v4(),
        titulo : tareaTitle,
        descripcion : tareaDesc,
        completed:false,
        createAt: new Date().toLocaleString(),
        updateAt: new Date().toLocaleString(),
      }
      setArrTarea([...arrTarea,nuevaTarea])
      /* plantas.push(nuevaTarea) */
      setTitle("")
      setDesc("")
      console.log(arrTarea)
     
    }
  return (
    <View style = {styles.container}>
      
      {/* <BotonAtras
            colorFondo={"#5DC966"}
            onPress={() => {navigation.goBack()}}
            /> */}
      <AgregarTarea
        tareaTitle= {tareaTitle} 
        onHandlerTitle= {onHandlerTitle}
        tareaDesc= {tareaDesc} 
        onHandlerDesc= {onHandlerDesc}
        agregarTarea= {agregarTarea}

        screenWidth={screenWidth}
        setArrTarea={setArrTarea}
        arrTarea={arrTarea}
      
      />
       
      <ListaTareas
        arrTarea = {Object.assign([],arrTarea)}
        navigation={navigation}
        onHandlerModal = {onHandlerModal}
        completeTask={completeTask}
        screenWidth={screenWidth}
        screenHeigth = {screenHeigth}
        onHandlerDetalle = {onHandlerDetalle}
        itemDetalle = {itemDetalle}
      />
      
      
      <ModalBorrarTarea
      navigation={navigation}
        modalVisible = {modalVisible}
        setModalVisible={setModalVisible}
        tareaSelect = {tareaSelect}
        borrarTarea = {borrarTarea}
        onHandlerModal = {onHandlerModal}
      />
    </View>
  )
}

export default ColeccionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CAF0E6',
        alignItems: 'center',
        justifyContent: "flex-start",
        gap:10,
        
        
    
      },
})