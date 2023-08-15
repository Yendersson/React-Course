/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y, ademas, poder modificar
 */

import React, { Component, useState } from "react";
//
//class Ejemplo1 extends Component {
//
//    constructor(props){
//        super(props)
//        this.state = {
//            persona: {
//                nombre: 'Martin',
//                email: 'martin@mail.com'
//            },
//            contador: 0
//        };
//    };
//
//    incrementarContador = () => {
//        this.setState(prevState => (
//            {
//                contador: prevState.contador + 1
//            }
//        ))
//    }
//
//    actualizarPersona = () => {
//        this.setState(_ => (
//            {
//                persona: {
//                    nombre: 'yender',
//                    email: 'yender@mail.com'
//                }
//            }
//        ))
//    }
//    
//    render() {
//        return (
//            <div>
//                <h1>*** Ejemplo de useState() ***</h1>
//                <h2>CONTADOR: {this.state.contador}</h2>
//                <h2>DATOS DE LA PERSONA:</h2>
//                <h3>NOMBRE: {this.state.persona.nombre}</h3>
//                <h4>EMAIL: {this.state.persona.email}</h4>
//                {/* Bloque de botones para actualizar el estado del componente */}
//                <button onClick={this.incrementarContador}>Incrementar contador</button>
//                <button onClick={this.actualizarPersona}>Actualizar persona</button>
//            </div>
//        )
//    }
//}

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@mail.com'
    }

    /**
     * Quremos que el VALORINICIAL y PERSONAINICIAL sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funcionaParaCambiar(nuevo valor)
        setContador(contador + 1);
    }

    /**
     * Funcion para actualizar el estado de la persona en el componente
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@mail.com'
            }
        )
    }
    /**
     * 
     */

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
         </div>
    )
}

export default Ejemplo1