import { StyleSheet, Text, View, Button, Switch } from 'react-native'
import React from 'react'
import BotonPropio from './BotonPropio'

const CardTarea = ({navigation,item, onHandlerModal, completeTask, screenWidth, screenHeigth, onHandlerDetalle, itemDetalle
}) => {
  const itemCopy = Object.assign({},itemCopy)
  return (
    <View style = {[styles.card,{width:screenWidth -70,height:screenHeigth -450}]}>
        <View style = {styles.cabeceraCard}>
            <Text style = {styles.textTitle}>{item.titulo} </Text>
            <View style = {styles.riego}>
                <Text style={{color:"white", fontFamily:'Montserrat'}}>{item.completed ? "Riego realizado" : "Falta Riego"}</Text>
                <Switch value = {item.completed} onValueChange={() => {completeTask(item.id)}}/>
            </View>
            
        </View>
        <Text style = {styles.textDescripcion}>{item.descripcion} </Text>
        <View style = {styles.botonera}>
            <BotonPropio
                nombre={"Borrar"}
                colorFondo={"#FACD77"}
                onPress={() => onHandlerModal(item)}
            />
            <BotonPropio
                nombre={"Ver detalle"}
                colorFondo={"#F5A69E"}
                onPress={() => {onHandlerDetalle(item),navigation.navigate("Detalle",{itemCopy}) }}
            />
        </View>
        
        {/* <Button title='-' onPress={() => onHandlerModal(item)}/> */}
        
        
    </View>
  )
}

export default CardTarea

const styles = StyleSheet.create({
    card:{
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        padding:20,
        borderRadius:5,
        backgroundColor:"#39997E",
        gap:30,
        margin:40,
       
        
      },
      cabeceraCard:{
        width:"95%",
        flexDirection: "row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"space-between"
      },
      riego:{
        color:"white",
        flexDirection:"row",
        alignItems:"center",
        fontFamily:"Montserrat",


      },
      botonera:{
        flexDirection:"row",
        gap:25,

      },
      textTitle:{
    
        color: 'white',
        fontSize:18,
        margin: 10,
        padding:10,
        fontSize:20 ,       
        fontFamily:"Montserrat",

      },
      textDescripcion:{
        borderRadius:5,
        width:"90%",
        height:50,
        padding:10,
        backgroundColor:"white",
        fontFamily:"Montserrat",
      }
})