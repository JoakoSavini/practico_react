import { useState, useEffect, Fragment } from "react";

import UsersView from "./usersView";

const UsersContainer = () => {
    const [dataUsers, setDataUsers] = useState([]),
    [loadingUsers, setLoadingUsers] = useState(true);

    const getDataUsers = async() => {
        try{    
            const response = await fetch('https://jsonplaceholder.typicode.com/users') /* coloco la api generada */
            console.log('response:', response) /* respuesta al estado de la api */
            
            if (!response.ok){
                console.log('Error en el llamado a la API')
            } /* error en el llamado a la api */

            const results = await response.json() /* obtengo y guardo los datos de la API */
            setDataUsers(results) /* guardo lo que me da la API en un estado para renderizar */
            /* console.log(results)  *//* muestro los resultados de la API */

        } catch {
            console.log('No se pudo conectar con la API')
        } finally {
            setLoadingUsers(false)
        }
    }
    console.log('dataUsers:', dataUsers)

    useEffect(()=>{
        getDataUsers()
    }, [])

    return(
        <UsersView loadingUsers={loadingUsers} dataUsers={dataUsers} />
    )
}

export default UsersContainer