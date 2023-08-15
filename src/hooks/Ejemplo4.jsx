/**
 * Ejemplo para entender el uso de props.children
 */

import React, { Component } from "react";
//CLASE POO
//class Ejemplo4 extends Component{
//
//    constructor(props){
//        super(props)
//
//    }
//
//    render() {
//        return (
//            <div>
//                <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
//                <h2>
//                    Nombre: {this.props.nombre}
//                </h2>
//                {/* props.children pintara por defecto
//                aquello que se encuentre entre las etiqueras de apertura y cierre
//                de este componente desde el componente de orden superior */}
//                {this.props.children}
//            </div>
//        )
//    }
//}
//

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/* props.children pintara por defecto
            aquello que se encuentre entre las etiqueras de apertura y cierre
            de este componente desde el componente de orden superior */}
            {props.children}
        </div>
    )
}

export default Ejemplo4;