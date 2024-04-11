import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import uuid from 'react-native-uuid'

export const plantasApi = createApi({
    reducerPath:"plantasApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://planteando-2c7c8-default-rtdb.firebaseio.com/"}),
    endpoints:(builder)=>({
        // getProductsByCategory:builder.query({
        //     query: (category) => `/products.json?orderBy="category"&equalTo="${category}"`,
        //     transformResponse:(response)=>{
        //         const data = Object.values(response)
        //         return data
        //     }
        // }),
        getPlantasDict: builder.query({
            query: () => "/plantasDict.json"
        }),
        getPlanta:builder.query({
            query:(id) => `/plantasDict/${id}.json`
        }),
        getMisPlantasDict: builder.query({
            //query: (localId) => `/misPlantas.json?orderBy="localId"&equalTo="${localId}"`,
            /* transformResponse:(response)=>{
                const data = Object.values(response)
                return data
            } */
            query: (localId) => "/misPlantas.json",
            transformResponse: (response) => {
            // Obtener el ID del usuario autenticado
            // Filtrar las plantas para devolver solo las que están asociadas al usuario autenticado
            const plantasUsuario = Object.values(response).filter(planta => planta.localId ===localId);

            return plantasUsuario;
      },
        }),
        getMiPlantaIndiv:builder.query({
            query:(id) => `/misPlantas/${id}.json`
        }),
        getMiPlanta:builder.query({
            //query:(id) => `/misPlantas/${id}.json`
            query:() => `/misPlantas.json`,
            transformResponse:(response)=>{
                const data = Object.values(response)
                return data
            }
        }),

        addPlanta: builder.mutation({
            
            query: (planta) => ({
              url: `/misPlantas/${planta.id}.json`,
              method: 'PUT',
              body: JSON.stringify(planta),
            headers: {
            'Content-Type': 'application/json',
            },
                }),
            
          }),
    })
})

export const {useGetPlantasDictQuery,useGetPlantaQuery, useAddPlantaMutation, useGetMisPlantasDictQuery, useGetMiPlantaQuery, useGetMiPlantaIndivQuery} = plantasApi