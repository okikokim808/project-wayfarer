import React, { Component } from 'react';
import About from '../About';
import Carousel from '../Carousel';
import Postmodal from '../Postmodal'
import '../App.css';
import SignupForm from '../SignupForm'
class SplashPage extends Component {
  render() {
    return (
      <div className="SplashPage">
        <SignupForm 
                    isSignedIn={this.props.isSignedIn} 
                    handleSignUp={this.props.handleSignUp} 
                    handleInput={this.props.handleInput}/>
                    <a href="#" data-toggle="modal" data-target="#modalPostForm">Create Post</a> />
        <Carousel />
        <About />
      </div>
    );
  }
}

export default SplashPage;