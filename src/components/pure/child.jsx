import React, {Component, createRef, useRef} from "react";

//CLASE POO
/*class Child extends Component{

    constructor(props){
        super(props)
        this.messageRef = createRef();
        this.nameeRef = createRef();
    }

    pressButton = () =>{
        const text = this.messageRef.current.value;
        alert(`${text}`)
    }

    pressButtonParams = (text) =>{
        alert(`Text: ${text}`);
    }

    submitName = (e) => {
        e.preventDefault();
        this.props.update(this.nameeRef.current.value)
    }

    render(){
        return (
            <div style={{background: 'cyan', padding: '30px'}}>
                <p onMouseOver={function(){console.log('On Mouse Over')}}>
                    Hello {this.props.name}
                </p>
                <button onClick={function(){console.log('press button 1')}}>
                    boton 1
                </button>
                <button onClick={this.pressButton}>
                    boton 2
                </button>
                <button onClick={() => this.pressButtonParams('hELLO')}>
                    boton 3
                </button>
                 <input type="text" 
                placeholder="Send a text to your father" 
                onFocus={function(){console.log('Input Focused')}}
                onChange={function(e){console.log('Input Changed:', e.target.value)}}
                onCopy={function(){console.log('Copied text from input')}}
                ref={this.messageRef}
            />
            <button onClick={() => this.props.send(this.messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop: '20px'}}>
                <form action="" onSubmit={(e) => this.submitName(e)}>
                    <input ref={this.nameeRef} type="text" placeholder="New Name" />
                    <button type="submit">Update name</button>
                </form>
            </div>
            </div>
        )
    }

}*/

const Child = ({ name, send, update}) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton(){
        const text = messageRef.current.value;
        alert(`${text}`)
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('On mouse over')}>
                hello {name}
            </p>
            <button onClick={() => console.log('press button 1')}>
                boton 1
            </button>
            <button onClick={pressButton}>
                boton 2
            </button>
            <button onClick={() => pressButtonParams('hELLO')}>
                boton 3
            </button>
            <input type="text" 
                placeholder="Send a text to your father" 
                onFocus={() => console.log('Input Focused')}
                onChange={(e) => console.log('Input Changed:', e.target.value)}
                onCopy={() => console.log('Copied text from input')}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop: '20px'}}>
                <form action="" onSubmit={submitName}>
                    <input ref={nameRef} type="text" placeholder="New Name" />
                    <button type="submit">Update name</button>
                </form>
            </div>
        </div>
    )
}

export default Child;