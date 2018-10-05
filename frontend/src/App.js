import React, { Component } from 'react';
import About from './About';
import Carousel from './Carousel';
// import Splashnav from './Splashnav';
import Loggedinnav from './Loggedinnav'
import Citylistcontainer from './containers/Citylistcontainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Citylistcontainer />
        
          
       
      </div>
    );
  }
}

export default App;
