//custom hook: funcion de js que retorna js pero usa react(funsion entre ambas)

import axios from "axios"
import { useState, useEffect } from "react"


export const useAsd = (endPoint) =>{
    const [data, setData] =useState([]);
    const [error, setError] =useState([null]);
    const [isLoading, setIsLoading] =useState([true]);

    useEffect(()=>{
        setIsLoading(false);
        const getLoQueSea = axios.get(endPoint)
        getLoQueSea.then((res)=> setData(res.data)).catch((error)=> setError(error)).finally(setIsLoading(false))
    },[])
    axios.get>(endPoint)

    return  {data,error,isLoading}
}


// //////////////////////////////////////////////////////
// const {data,error,isLoading} =useFetch("url")     <<<<<<<<        // OJO este hook es el que va en el lugar que lo necesite



// const datosDelCelu{                          
//     data: arrayCelus.
//     error,
//     isLoading
// }=use fetch(url)
///////////////////////////////////////////////////////////


// pedimos data error y isLoading usando el fecth con la url que querramos traer datos 


// return <div>
//     {isLoading ?<h1>cargando...</h1> : <h2>aca iria algo </h2>}
// </div>