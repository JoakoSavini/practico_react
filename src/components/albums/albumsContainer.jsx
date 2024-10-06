import { useState, useEffect, Fragment } from "react";

import AlbumsView from "./albumsView";

const AlbumsContainer = () => {
    const [dataAlbums, setDataAlbums] = useState([]),
    [loadingAlbums, setLoadingAlbums] = useState(true);

    const getDataAlbums = async() => {
        try{    
            const response = await fetch('https://jsonplaceholder.typicode.com/albums') /* coloco la api generada */
            console.log('response:', response) /* respuesta al estado de la api */
            
            if (!response.ok){
                console.log('Error en el llamado a la API')
            } /* error en el llamado a la api */

            const results = await response.json() /* obtengo y guardo los datos de la API */
            setDataAlbums(results) /* guardo lo que me da la API en un estado para renderizar */
            /* console.log(results)  *//* muestro los resultados de la API */

        } catch {
            console.log('No se pudo conectar con la API')
        } finally {
            setLoadingAlbums(false)
        }
    }
    console.log('dataAlbums:', dataAlbums)

    useEffect(()=>{
        getDataAlbums()
    }, [])

    return(
        <AlbumsView loadingAlbums={loadingAlbums} dataAlbums={dataAlbums} />
    )
}

export default AlbumsContainer