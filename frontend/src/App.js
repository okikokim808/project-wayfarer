import React, { Component } from 'react';
import About from './About';
import Carousel from './Carousel';
import Splashnav from './Splashnav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splashnav />
        <Carousel />
      
        <About />
        
          
       
      </div>
    );
  }
}

export default App;
