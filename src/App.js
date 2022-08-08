import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import {todos} from './todos.json';

{/*Estados*/}
console.log(todos);

class App extends Component{
  constructor(){
    super();
    this.state = {
      tareas:todos
    };
  }  


    render(){
      console.log("Mostrar datos antes de pintarlos");
      console.log(this.state.tareas); 

      //Recorre cada tarea o Todo que sacamos del JSON
      const tareas = this.state.tareas.map((tarea,i)=>{
        return(
          <div className='col-md-4'>
            <div className = "card">
              <div className='card-header'>
                <h3>{tarea.title}</h3>
              </div>
              <div className='card-body'>
                <p>{tarea.description}</p>
              </div>
            </div>
          </div>
        );
      });

      return (
      <div className="App">
          {/*Componente en src/components/Navigation*/}
          <Navigation titulo="Task">   
          </Navigation>

          {/*Estado*/}

          {tareas /*Llamamos a la constante que definimos en la parte de arriba*/}

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
    }
}

export default App;
