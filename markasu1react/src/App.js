import React, { Component } from 'react';
import './App.css';
import DashboardComponent from './components/DashboardComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardComponent/>
        <DashboardComponent/>
      </div>
    );
  }
}

export default App;
