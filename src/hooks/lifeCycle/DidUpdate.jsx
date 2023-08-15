/**
 * Ejemplo de uso de metodo componentDiDupdate en componete de tipo clase
 * y uso del hook en componente funcional
 */

import React, { Component, useEffect } from "react";

export class DidUpdate extends Component{

    componentDidUpdate() {
        console.log('Comportamiento Cuando el componente recobe nuevos props o cambios en su estado privado')
    }

    render(){
        return(
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que se renderize')
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    )
}