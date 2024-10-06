import { useState, useEffect, Fragment } from "react";

import PostView from "./postsView";

const PostContainer = () => {
    const [dataPost, setDataPost] = useState([]),
    [loadingPost, setLoadingPost] = useState(true);

    const getDataPost = async() => {
        try{    
            const response = await fetch('https://jsonplaceholder.typicode.com/posts') /* coloco la api generada */
            console.log('response:', response) /* respuesta al estado de la api */
            
            if (!response.ok){
                console.log('Error en el llamado a la API')
            } /* error en el llamado a la api */

            const results = await response.json() /* obtengo y guardo los datos de la API */
            setDataPost(results) /* guardo lo que me da la API en un estado para renderizar */
            /* console.log(results)  *//* muestro los resultados de la API */

        } catch {
            console.log('No se pudo conectar con la API')
        } finally {
            setLoadingPost(false)
        }
    }
    console.log('dataPost:', dataPost)

    useEffect(()=>{
        getDataPost()
    }, [])

    return(
        <PostView loadingPost={loadingPost} dataPost={dataPost} />
    )
}

export default PostContainer