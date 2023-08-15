import React, { useEffect } from "react";

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado')

        const intervalID = setInterval(_ => {
            document.title= `${new Date()}`
            console.log('Actualizavion del componente')
        }, 1000);
        return () => {
            console.log('Componente va a desaparecer')
            document.title= `Tiempo detenido`;
            clearInterval(intervalID);
        }
    }, [])

    return (
        <div>

        </div>
    )
}

export default AllCycles;