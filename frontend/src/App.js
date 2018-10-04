import React, { Component } from 'react';
import About from './About';
import Carousel from './Carousel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Carousel />
        <About />
        
          
        </header>
      </div>
    );
  }
}

export default App;
