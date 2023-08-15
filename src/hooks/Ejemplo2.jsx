/**
 * Ejemplo de uso de:
 * -useState()
 * -useRef()
 * -useEffect()
 */
import React, {useState, useRef, useEffect, Component} from "react"

//class Ejemplo2 extends Component{
//
//    constructor(props){
//        super(props)
//        this.state = {
//            contador1: 0,
//            contador2: 0
//        }
//         // Vamos a crear una referencia con useRef() para asociar una variable
////    // con un elemento del DOM del componente (vista HTML)
////     this.element = React.createRef();
//        this.element = React.createRef();
//    }
//
//    incrementar1 = () => {
//        this.setState(prevState => (
//            {
//                contador1: prevState.contador1 + 1
//            }
//        ))
//    }
//
//    incrementar2 = () => {
//        this.setState(prevState => (
//            {
//                contador2: prevState.contador2 + 1
//            }
//        ))
//    }
//
//    componentDidMount(){
//        console.log('componente montado');
//        console.log(this.element)
//    }
//
//    /**
////     *  ? Caso1: Ejecutar SIEMPRE un snippet de codigo
////     * Cada vez que haya un cambio en el estado del componente
////     * se ejecuta aquello que este dentro del componentDidUpdate(prevProps, prevState)
////     */
//
//   /* componentDidUpdate(prevProps, prevState){
//        if (prevState != this.state){
//            console.log("CAMBIO DE ESTADO")
//        }
//    }*/
//    /**
////     *  ? Caso 2: Ejecutar SOLO CUANDO CAMBIE EL CONTADOR1
////     *  Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el componentDidUpdate()
////     *  En caso de que cambie contador2, no habra ejecucion
////     */
//
// /*   componentDidUpdate(prevProps, prevState){
//        if (prevState.contador1 != this.state.contador1){
//            console.log("CAMBIO DE ESTADO")
//        }
//    }*/
//
//    /*  ? Caso 3: Ejecutar SOLO CUANDO CAMBIE EL CONTADOR1 o CONTADOR2
////     *  Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el componentDidUpdate()
////     *  En caso de que cambie contador2, no habra ejecucion
////     */
//
//        componentDidUpdate(prevProps, prevState){
//            if (prevState.contador1 != this.state.contador1 || prevState.contador2 != this.state.contador2){
//                console.log("CAMBIO DE ESTADO")
//            }
//        }
//
//        componentWillUnmount(){
//            this.setState(prevState => (
//                {
//                    contador1: 0,
//                    contador2: 0
//                }
//            ))
//        }
//
//
//
//    render() {
//        return (
//                    <div>
//                        <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
//                        <h2>CONTADOR 1: {this.state.contador1}</h2>
//                        <h2>CONTADOR 2: {this.state.contador2}</h2>
//                        {/* Elemento referenciado */}
//                        <h4 ref={this.element}>
//                            Ejemplo de elemento referenciado
//                        </h4>
//                        {/* Bloque de botones para actualizar el estado del componente */}
//                        <div>
//                            <button onClick={this.incrementar1}>Incrementar contador 1</button>
//                            <button onClick={this.incrementar2}>Incrementar contador 2</button>
//                        </div>
//                    </div>
//        )
//    }
//
//
//}
const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos
    // cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect();
     */

    /**
     *  ? Caso1: Ejecutar SIEMPRE un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */
    /*useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
    })*/
    /**
     *  ? Caso 2: Ejecutar SOLO CUANDO CAMBIE EL CONTADOR1
     *  Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     *  En caso de que cambie contador2, no habra ejecucion
     */

    /*useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR1');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1]);*/

        /**
     *  ? Caso 3: Ejecutar SOLO CUANDO CAMBIE EL CONTADOR1 o CONTADOR2
     *  Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     *  En caso de que cambie contador2, no habra ejecucion
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR1 / CONTADOR2');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);


    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    )
}
export default Ejemplo2