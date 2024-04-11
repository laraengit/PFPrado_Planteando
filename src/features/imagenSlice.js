import { createSlice } from "@reduxjs/toolkit";


const initialStateImagen = {
    item: null
}


export const imagenSlice = createSlice({
    name: "imagenplanta",
    initialState: initialStateImagen,
    reducers:{
        cargarImagen:(state,actions)=>{
            /* const idPlanta = uuid.v4()
            const planta = {...actions.payload, id:idPlanta } */
            state.item = actions.payload
            

        }
    }
})

export const {cargarImagen} = imagenSlice.actions

export default imagenSlice.reducer