import React, { Component, useState } from "react";
import Child from "../pure/child";

//Clase POO
/*class Father extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: 'Martin'
        }
    }

    showMessage = (text) =>{
        alert(`Message received: ${text}`);
    }

    updateName = (newName) => {
        this.setState(_ => ({
            name: newName
        }) 
        )
    }

    render() {
        return(
            <div style={{background: 'tomato', padding: '10px'}}>
                <Child name={this.state.name} send={this.showMessage} update={this.updateName}></Child>
            </div>
        )
    }
}*/

const Father = () => {

    const [name, setName] = useState('Martin');

    function showMessage(text){
        alert(`Message received: ${text}`)
    }

    function updateName(newName) {
        setName(newName);
    }

    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    )
}

export default Father;