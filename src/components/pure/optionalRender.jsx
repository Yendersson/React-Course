import React, { useState } from "react";

//Login / Logout Buttons

let red = 0;
let green = 200;
let blue = 150;

//Estilos para usuario logueado
const loggedStyle={
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white'
}

//Estilos para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeigth: 'bold'
}

const LoginButton = ({loginAction, propStyle}) =>{
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}



const OptionalRender = () =>{

    const [access, setAccess] = useState(false);
    const [nMessage, setNMessage] = useState(0);

    const updateAccess = () => {
        setAccess(!access);
    }

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    if (access) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }
    
    // Unread messages
    let addMessages = () => {
        setNMessage(nMessage + 1)
    }

    return (
        <div>
            {/* Optional Button */}
            { optionalButton }
            {/* N Messages unread */}
            {/* nMessage > 0 && nMessage === 1 && <p>You have {nMessage} new message...</p>*/}
            { /*nMessage > 1 && <p>You have {nMessage} new messages...</p>*/}
            { /*nMessage === 0 && <p>There are not new messages</p>*/}
            {/* Ternary Operator */}
            {access ? (
            <div>
                { nMessage > 0 ?
                 <p>You have {nMessage} new message{nMessage > 1 ? 's' : ''}...</p>:
                 <p>There are not new messages</p>
                }
                <button onClick={addMessages}>{nMessage === 0 ? 'Add your first message': 'Add new Message'}</button>
            </div>
            ) : null}

        </div>
    )

//    if (access){
//        optionalButton = <button onClick={updateAccess}>Logout</button>
//    } else {
//        optionalButton = <button onClick={updateAccess}>Login</button>
//    }


    return (
        <div>
            {optionalButton}
        </div> 
    )
}

export default OptionalRender;