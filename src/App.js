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
      title: "Aplicacion de tareas",
      ntarea: 10
    };
  }  


    render(){
      return (
      <div className="App">
          {/*Componente en src/components/Navigation*/}
          <Navigation titulo="Task">   
          </Navigation>
          {/*Estado*/}
          <nav className="navbar navbar-dark bg-dark">  
            <p href="#" className="text-light stretched-link">
              {this.state.title} - {this.state.ntarea}
            </p>
          </nav>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
    }
}

export default App;
