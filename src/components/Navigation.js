import React, { Component } from 'react';

class Navigation extends Component{
   render(){
    return(
       <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="btn btn-primary stretched-link">
                    {this.props.titulo} 
                </a>
            </nav>
       </div> 
    );
   };
};

export default Navigation;
