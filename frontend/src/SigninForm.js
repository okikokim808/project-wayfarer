import React, { Component } from 'react';
import './App.css'

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
                            <i className="fa fa-envelope prefix grey-text"></i>
                            <input type="email" name="email" id="defaultForm-email" className="form-control validate" onChange={this.props.handleInput}/>
                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
                        </div>

                        <div className="md-form mb-4">
                            <i className="fa fa-lock prefix grey-text"></i>
                            <input type="password" name="password" id="defaultForm-pass" className="form-control validate" onChange={this.props.handleInput}/>
                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button className="btn btn-default" onClick={this.props.handleSignIn}>Login</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default SigninForm;