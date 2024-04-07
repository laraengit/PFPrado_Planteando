/* import { StatusBar } from 'expo-status-bar'; */
import { useState } from 'react';
import uuid from 'react-native-uuid'
import { StatusBar,useWindowDimensions,Modal,StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import ModalBorrarTarea from './src/components/ModalBorrarTarea';
import AgregarTarea from './src/components/AgregarTarea';
import ListaTareas from './src/components/ListaTareas';
import Cabecera from './src/components/Cabecera';
import ColeccionScreen from './src/Screens/ColeccionScreen';
import Home from './src/Screens/Home';
import ItemScreen from './src/Screens/ItemScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './src/navigation/MainNavigator';
import { fontsColection } from './src/utils/fonts';
import { useFonts } from 'expo-font';
import { colors } from './src/utils/colors';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import fonts from './src/utils/fonts';


// import {useFonts} from "expo-font"
// import { fontCollection } from './src/utils/globals/fonts'
const  App = () => {
 
  const [fontsLoaded] = useFonts(fontsColection)
  // const [fontsLoaded] = useFonts(fontCollection)
  // const Stack = createNativeStackNavigator()
  // const {width} = useWindowDimensions()
  const screenWidth = Dimensions.get('window').width
  const screenHeigth = Dimensions.get('window').height
  // const [notHome, setHome] = useState(false);
  // const [itemScreen, seItemScreen] = useState(false);
  const {height, width, scale, fontScale} = useWindowDimensions()
  const [itemDetalle, setItemDetalle] = useState({})
  const [modalVisible, setModalVisible] = useState(false);
  const [tareaSelect, setTareaSelect] = useState({})
  const [tareaTitle,setTitle] = useState("")
  const [tareaDesc,setDesc] = useState("")
  const [arrTarea,setArrTarea] = useState([])
  
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
    setTitle("")
    setDesc("")
    console.log(arrTarea)
  }
  const onHandlerTitle = (t) =>{
    setTitle(t)

  }
  const onHandlerDesc = (d) =>{
    setDesc(d)
  }
  const onHandlerModal = (tarea) =>{
    setTareaSelect(tarea)
    setModalVisible(!modalVisible)
    console.log("onHandlerModal")
    
  }
  const onHandlerDetalle = (item) =>{
    console.log(item)
    setItemDetalle(item)
    console.log("setItemDetalle")
    
  }
  const borrarTarea = () =>{
    setArrTarea(arrTarea.filter(tareita => tareita.id != tareaSelect.id))
    setModalVisible(!modalVisible)
    console.log("borrar tarea")
  }

  const completeTask = (id) => {
    setArrTarea(arrTarea.map(tarea => {
      if(tarea.id===id) return {...tarea,completed:!tarea.completed}
    }))
  }

  // if(!fontsLoaded) return null

  return (
  
      
        <Provider store = {store}>
          <StatusBar/>
          <MainNavigator
            /* tareaTitle={tareaTitle} */
            /* onHandlerTitle = {onHandlerTitle} */
            /* tareaDesc = {tareaDesc} */
            /* onHandlerDesc= {onHandlerDesc} */
            /* agregarTarea ={agregarTarea} */
            screenWidth = {screenWidth}
            /* arrTarea = {arrTarea} */
            /* onHandlerModal = {onHandlerModal} */
          /*  completeTask = {completeTask} */ 
            screenHeigth = {screenHeigth}
            /* tareaSelect = {tareaSelect} */
            /* borrarTarea = {borrarTarea} */
            /* modalVisible = {modalVisible} */
            /* onHandlerDetalle = {onHandlerDetalle} */
          />

        </Provider>
    
      

      
    
  
    
    
  )
}
export default App
AppRegistry.registerComponent('my-list', () => App);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.celeste,
    alignItems: 'center',
    justifyContent: "flex-start",
    gap:10,
  },
  
});
