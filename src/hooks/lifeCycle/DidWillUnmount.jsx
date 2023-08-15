/**
 * Ejemplo de uso del metodo ComponentWillUnmount en clase
 * Ejemplo del uso de hook en componente funcional
 * Cuando el componente va a desaparecer
 */

import React, { Component, useEffect } from "react";

export class WillUnmount extends Component{

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render(){
        return(
            <div>
                <h1>WillUnmount</h1>
            </div>
        )
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        }
    }, [])

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    )
}