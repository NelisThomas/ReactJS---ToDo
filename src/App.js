import React, { Component } from 'react';

import './App.css';

import {ToDoContainer} from './components/ToDoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <h1>To do:</h1>
          <ToDoContainer/>
        </header>
      </div>
    );
  }
}

export default App;
