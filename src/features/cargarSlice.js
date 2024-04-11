import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    actualizado: true
}


export const cargarSlice = createSlice({
    name: "cargar",
    initialState: initialState,
    reducers:{
        cargarMisPlantas:(state)=>{
            /* const idPlanta = uuid.v4()
            const planta = {...actions.payload, id:idPlanta } */
            state.actualizado = !state.actualizado
            

        }
    }
})

export const {cargarMisPlantas} = cargarSlice.actions

export default cargarSlice.reducer