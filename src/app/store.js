import { configureStore } from "@reduxjs/toolkit";
import misplantasReducer from "../features/misplantasSlice.js";
import nuevaplantaReducer from "../features/nuevaPlantaSlice.js"
import { setupListeners } from '@reduxjs/toolkit/query'
import { plantasApi } from './services/plantar.js'
export const store = configureStore({
    reducer: {
        misplantas: misplantasReducer,
        nuevaplanta: nuevaplantaReducer,
        [plantasApi.reducerPath]: plantasApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(plantasApi.middleware),
})

setupListeners(store.dispatch)