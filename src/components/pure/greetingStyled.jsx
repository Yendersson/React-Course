import React, { useState } from "react";

//Definir estilos en constantes:

//Estilos para usuario logueado
const loggedStyle={
    color: 'white'
}

//Estilos para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeigth: 'bold'
}


const Greetingstyled = (props) => {
    //Generamos un estado para el componente
    //y asi controlar si el usuario esta logueado o no

    const [logged, setLogged] = useState(false)


    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            { logged ? (<p>Hola, {props.name}</p>) : (<p>Please login</p> )}
            
            <button onClick={() => {
                console.log('boton pulsado')
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    )
}

export default Greetingstyled;