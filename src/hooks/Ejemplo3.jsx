/**
 * Ejemplo Hooks:
 * -useState()
 * -useContext()
 * 
 */

import React, { Component, useContext, useState } from "react";

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
const miContexto = React.createContext(null);

/* CLASE POO
class Componente1 extends Component{

    constructor(props){
        super(props)

    }

    render(){
        return (
            <miContexto.Consumer>
                {(value) => (
                    <div>
                        <h1>
                            El Token es: {value.sessionData.token}
                        </h1>
                        <Componente2></Componente2>
                    </div>
                )}
            </miContexto.Consumer>
        )
    }
}

class Componente2 extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <miContexto.Consumer>
                {(value) => (
                    <div>
                        <h2>
                            La sesion es: {value.sessionData.sesion}
                        </h2>
                    </div>
                )}
            </miContexto.Consumer>
        )
    }
}

class MiComponenteConContexto extends Component{

    constructor(props){
        super(props)
        this.state = {
            sessionData: {
                token: '1234567',
                sesion: 1
            }
        }
    }

    actualizarSession = () => {
        this.setState(prevState => (
            {
                sessionData: {
                    token: 'JWT123456789',
                    sesion: prevState.sessionData.sesion + 1
                }
            }
        ))
    }

    render() {
        return (
            <miContexto.Provider value={this.state}>
                <Componente1></Componente1>
                <button onClick={this.actualizarSession}>Actualizar Sesion</button>
            </miContexto.Provider>
        )
    }
}*/

const Componente1 = () => {

    //Inicializamos un estado vacio que va a rellenar con los
    //datos del contexto del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    )
}

const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    )
}

export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'JWT123456789',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que esta aqui dentro puede leer los datos de sessionData*/}
            {/* Tambien si se actualizan los componentes de aqui, tambien lo actualizan*/}
            <h1>*** Ejemplo de useState() y useContext() ***</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
        )
}

//export default MiComponenteConContexto;