import React, { Component } from 'react';
import './App.css';

import gql from "graphql-tag";
import { graphql } from 'react-apollo';


class App extends Component {

  render() {
    console.log(this.props);
    
    return (
        <div className="App">
          
        </div>
    );
  }
}

const CursoQuery = gql`
  query CursoQuery {
    cursos {
      titulo
      descripcion
      profesor {
        nombre
      }
    }
  }`

export default graphql(CursoQuery)(App);
