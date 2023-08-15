import { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {

    constructor(props){
        super(props)
        this.state = {
            age: 29
        }
    };

//Podemos verlo como methodos que setean el estado, o un metodo set
    birthday = () => {
        this.setState((prevState) => (
        {
            age: prevState.age + 1
        }
        ))
    }

    render() {
        return (
            <div>
                <h1>
                    !HOLA! { this.props.name }
                </h1>
                <h2>
                    Tu edad es de: { this.state.age }
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir anos
                    </button>
                </div>
            </div>
        );
    }

}

//Define el tipo de dato de las props
Greeting.propTypes = {
    name: PropTypes.string,
};

export default Greeting;