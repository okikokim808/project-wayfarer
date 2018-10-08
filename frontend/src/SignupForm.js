import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

class SignupForm extends Component {
    render() {
        return (
        <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body mx-3">

                        <div className="md-form mb-5">
                            <i className="fa fa-user prefix grey-text"></i>
                            <input type="text" name="username" id="orangeForm-name" className="form-control validate" onChange={this.props.handleInput}/>
                            <label data-error="wrong" data-success="right" htmlFor="orangeForm-name">Your name</label>
                        </div>

                        <div className="md-form mb-5">
                            <i className="fa fa-envelope prefix grey-text"></i>
                            <input type="email" name="email" id="orangeForm-email" className="form-control validate" onChange={this.props.handleInput}/>
                            <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">Your email</label>
                        </div>

                        <div className="md-form mb-4">
                            <i className="fa fa-lock prefix grey-text"></i>
                            <input type="password" name="password"id="orangeForm-pass" className="form-control validate" onChange={this.props.handleInput}/>
                            <label data-error="wrong" data-success="right" htmlFor="orangeForm-pass">Your password</label>
                        </div>

                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <Link to="/Profile"><button onClick={this.props.handleSignUp} data-dismiss="modal" aria-label="Close">Sign up</button></Link>
                        {/* <Link to="/Profile" onClick={this.props.handleSignUp} data-dismiss="modal" aria-label="Close">Sign up</Link> */}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default SignupForm;