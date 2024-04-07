import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'
import BotonPropio from './BotonPropio'

const ModalBorrarTarea = ({navigation,tareaSelect,/* borrarTarea, */onHandlerModal,modalVisible, setModalVisible, borrarTarea, }) => {
    

    return (
        <View style = {styles.container}>
            <Modal 
            visible = {modalVisible}
            animationType='fade'
            onRequestClose={()=>onHandlerModal({})}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modalText}>
                    ¿Seguro que desea borrar el elemento {tareaSelect.titulo}?
                </Text>
               
                    <BotonPropio 
                        nombre={"Sí, eliminar"}
                        onPress={() => {borrarTarea, navigation.navigate("Mis plantas")}}
                        colorFondo={"#F5645E"}
                    />
                    <BotonPropio
                        nombre={"No, mantener"}
                        onPress={()=>{navigation.navigate("Detalle")}}
                        colorFondo={"#5FA2C2"}
                    />
                    {/* <Button title = "Sí, eliminar" onPress={borrarTarea}/>
                    <Button title = "No, mantener" onPress={()=>onHandlerModal({})}/> */}

              
            

            </View>
            
        </Modal>

        </View>
        
        

        
  )
}

export default ModalBorrarTarea

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '',
        alignItems: 'center',
        justifyContent: "flex-start",
        gap:10,
    
      },
    modalContainer:{
        height:500,
        backgroundColor: "#CAF0E6",
        flex:1,
        flexDirection: 'column',
        gap:20,
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    modalText:{
        margin:20,
        fontSize: 20,
    },
    
})