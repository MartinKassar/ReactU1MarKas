import React, { Component } from 'react';
import './App.css';
import DashboardComponent from './components/DashboardComponent'
import WrapperComponent from './components/WrapperComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardComponent/>
      </div>
    );
  }
}

export default App;
