import React, { Component } from 'react';
import About from '../About';
import Carousel from '../Carousel';
import '../App.css';
class SplashPage extends Component {
  render() {
    return (
      <div className="SplashPage">
        <Carousel />
        <About />
      </div>
    );
  }
}

export default SplashPage;