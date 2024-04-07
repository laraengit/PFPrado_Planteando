import { StyleSheet, TextInput, View, Button, Text } from 'react-native'
import uuid from 'react-native-uuid'
import { useSate } from 'react';
import BotonPropio from './BotonPropio'
import { useFonts } from 'expo-font';
import fonts, { fontsColection } from '../utils/fonts';
import { agregarPlanta } from '../features/misplantasSlice';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { setPlanta } from '../features/nuevaPlantaSlice';
import { useState } from 'react';
const AgregarTarea = ({screenWidth}) => {
  const [fontsLoaded] = useFonts(fontsColection)
  const dispatch = useDispatch()
  const nuevaplanta = useSelector((state)=>state.nuevaplanta.value)
  const [nombre, setNombre] = useState("")
  const [especie, setEspecie] = useState("")
  const [riego, setRiego] = useState("")
  const [cuidados, setCuidados] = useState("")
  dispatch(setPlanta({nombre: nombre, especie: especie, riego: riego, cuidados: cuidados}))
  const limpiarInput = () =>{
    setNombre("")
    setEspecie("")
    setRiego("")
    setCuidados("")
  }
  /* const [tareaTitle,setTitle] = useState("")
  const [tareaDesc,setDesc] = useState("")
  
  const onHandlerTitle = (t) =>{
    setTitle(t)

  } */
  /* const onHandlerDesc = (d) =>{
    setDesc(d)
  } */
  /* const agregarTarea = () =>{
    const nuevaTarea = {
      id : uuid.v4(),
      titulo : tareaTitle,
      descripcion : tareaDesc,
      completed:false,
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
    }
    setArrTarea([...arrTarea,nuevaTarea])
    setTitle("")
    setDesc("")
    console.log(arrTarea)
  } */
  
  return (
    <View style={[styles.inputContainer,{width:screenWidth-70}]}>
        <Text style={styles.tituloInput}>Agregar planta</Text>
        <TextInput value={nombre} placeholder='Nombre' style={styles.input} onChangeText={(nombre)=>setNombre(nombre)}/>
        <TextInput value={especie} placeholder='Especie' style={styles.input} onChangeText={(especie)=>setEspecie(especie)}/>
        <TextInput value={riego} placeholder='Riego' style={styles.input} onChangeText={(riego)=>setRiego(riego)}/>
        <TextInput value={cuidados} placeholder='Cuidados' style={styles.input} onChangeText={(cuidados)=>setCuidados(cuidados)}/>
        <BotonPropio
            nombre={"Agregar"}
            colorFondo={"#5DC966"}
            onPress={() => {dispatch(agregarPlanta({nombre: nombre, especie: especie, riego: riego, cuidados: cuidados}));limpiarInput()}}
            />
        {/* <Button title='+' onPress={agregarTarea}/> */}
      </View>
  )
}

export default AgregarTarea

const styles = StyleSheet.create({
    inputContainer:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#A5D6AF',
        borderRadius:5,
        padding:10,
        gap:20,
        marginTop:40,
        
        
      },
      tituloInput:{
        fontFamily:fonts.Montserrat,
        fontSize:17
      },
      input:{
        width:250,
        borderWidth: 2,
        margin: 4,
        paddingHorizontal:10,
        backgroundColor: 'white',
        borderRadius:5,
        color:"black",
        fontFamily:fonts.Lato,
      },
})