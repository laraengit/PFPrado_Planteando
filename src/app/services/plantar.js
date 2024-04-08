import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
        })
    })
})

export const {useGetPlantasDictQuery,useGetPlantaQuery} = plantasApi