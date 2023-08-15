/**
 * Ejemplo del uso del metodo
 * de ciclo lifeCycle en tipo clase y en tipo funcion
 */

import React, { Component, useEffect } from "react";

export class Didmount extends Component{

    componentDidMount() {
        console.log('Comportamiento antes de que se renderize')
    }

    render(){
        return(
            <div>
                <h1>DidMount</h1>
            </div>
        )
    }
}

export const DidmountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que se renderize')
    }, [])

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    )
}