import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import hetchy from './images/hetchy.jpg'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'
import Postmodal from './Postmodal'

class Splashnav extends Component {
    
    render() {
    let authLinks;
    if (!this.props.isSignedIn){
        authLinks = 
            <ul className="navLinks">
                <li><Link to="cities">Cities</Link></li>
                <li><a href="#" data-toggle="modal" data-target="#modalLoginForm">Sign In</a></li>
                <li><a href="#" data-toggle="modal" data-target="#modalRegisterForm">Sign Up</a></li>
                    <SigninForm 
                    isSignedIn={this.props.isSignedIn} 
                    handleSignIn={this.props.handleSignIn} 
                    handleInput={this.props.handleInput}/>
                    <SignupForm 
                    isSignedIn={this.props.isSignedIn} 
                    handleSignUp={this.props.handleSignUp} 
                    handleInput={this.props.handleInput}/>
                    
            </ul>
    }else{
        authLinks =
            <ul className="navLinks">
                <li><Link to="cities">Cities</Link></li>
                <li><a href="#" data-toggle="modal" data-target="#modalPostForm">Post</a></li>
                <li><a href="#" onClick={this.props.handleLogOut}>Log Out</a></li>
                    <Postmodal 
                    handlePost={this.props.handlePost}
                    handleInput={this.props.handleInput}/>
            </ul>
    }
        return (
            <header className='splashHeader'>
                <div className='imageAndLogo'>
                <img className='navLogo' src= {hetchy} />
                <h2 className='splashTitle'><Link to="/">Wayfarer</Link></h2>
                <h5>{this.props.username}</h5>
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
                    <Postmodal 
                    handlePost={this.props.handlePost}
                    handleInput={this.props.handleInput}/>
                </nav>
                
            </header>
            
        )
    }
}


export default Splashnav;