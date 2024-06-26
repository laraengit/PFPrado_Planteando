import { configureStore } from "@reduxjs/toolkit";
import misplantasReducer from "../features/misplantasSlice.js";
import nuevaplantaReducer from "../features/nuevaPlantaSlice.js"
import authReducer from "../features/authSlice.js"
import { setupListeners } from '@reduxjs/toolkit/query'
import { plantasApi } from './services/plantar.js'
import { authApi } from './services/auth'
import imagenReducer from "../features/imagenSlice.js";
import cargarReducer from "../features/cargarSlice.js";
export const store = configureStore({
    reducer: {
        misplantas: misplantasReducer,
        nuevaplanta: nuevaplantaReducer,
        auth:authReducer,
        imagenplanta:imagenReducer,
        cargar:cargarReducer,
        [plantasApi.reducerPath]: plantasApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(plantasApi.middleware,authApi.middleware),
})

setupListeners(store.dispatch)