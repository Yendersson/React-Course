import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import Greetingstyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/forms/ObservableExample';

function App() {
  return (
    <div className="App">
        {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Compoenten propio Greeting*/}
        {/*<GreetingF name="Martin"></GreetingF> */}
        {/*Ejemplo de uso de HOOKS */}
        {/*<Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2>*/}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
          {/*Todo lo que hay aqui dentro, es tratado como props.children */}
        {/* <Ejemplo4 nombre="Martin" >
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>*/}
        {/* <Greetingstyled name={'Martin'}></Greetingstyled> 
      </header>
        */}
        {/*Geestion de eventos
        <Father></Father>
      <TaskListComponent></TaskListComponent>
      */}

      {/*EJEMPLO DE USO DE FORMIK 
      <LoginFormik></LoginFormik>      
      <RegisterFormik></RegisterFormik>
      */}

         {/*Ejemplos del renderizado condicional
         <OptionalRender></OptionalRender>
        <AsyncExample></AsyncExample>
          */}
          <ObservableExample></ObservableExample>
          {/* Ejemplos de 'procesos asincronos */}
    </div>
  );
}

export default App;
