import React, { Component } from 'react';
import './App.css'
import hetchy from './images/hetchy.jpg'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'

class Splashnav extends Component {
    
    render() {
    let authLinks;
    if (!this.props.isSignedIn){
        authLinks = 
            <ul className="navLinks">
                <li><a href="#" data-toggle="modal" data-target="#modalLoginForm">Sign In</a></li>
                <li><a href="#" data-toggle="modal" data-target="#modalRegisterForm">Sign Up</a></li>
            </ul>
    }else{
        authLinks =
            <ul className="navLinks">
                <li><a href="#" onClick={this.props.handleLogOut}>Log Out</a></li>
            </ul>
    }
        return (
            <header className='splashHeader'>
                <div className='imageAndLogo'>
                <img className='navLogo' src= {hetchy} />
                <h2 className='splashTitle'>Wayfarer</h2>
                </div>
                <nav>
                    {authLinks}
                    <SigninForm 
                    isSignedIn={this.props.isSignedIn} 
                    handleSignIn={this.props.handleSignIn} 
                    handleInput={this.props.handleInput}/>
                    <SignupForm 
                    isSignedIn={this.props.isSignedIn} 
                    handleSignUp={this.props.handleSignUp} 
                    handleInput={this.props.handleInput}/>
                </nav>
            </header>
            
        )
    }
}


export default Splashnav;