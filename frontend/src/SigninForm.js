import React, { Component } from 'react';
import './App.css'
import { Link } from 'react-router-dom';

class SigninForm extends Component {
    render() {
        return (
        <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body mx-3">

                        <div className="md-form mb-5">
                            <i className="fa fa-user prefix grey-text"></i>
                            <input type="text" name="username" id="defaultForm-name" className="form-control validate" onChange={this.props.handleInput} />
                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-name">Your name</label>
                        </div>

                        <div className="md-form mb-4">
                            <i className="fa fa-lock prefix grey-text"></i>
                            <input type="password" name="password" id="defaultForm-pass" className="form-control validate" onChange={this.props.handleInput}/>
                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <Link onClick={this.props.handleSignIn} to="/profile" data-dismiss="modal" aria-label="Close">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default SigninForm;