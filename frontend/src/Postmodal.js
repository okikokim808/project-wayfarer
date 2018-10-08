
import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')
class PostModal extends Component {
    render () {
    return (<div className="modal fade" id="modalPostForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Post</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body mx-3">

                <div className="md-form mb-5">
                    
                    <input type="text" name="username" id="orangeForm-name" className="form-control validate" onChange={this.props.handleInput}/>
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-name">Title</label>
                </div>

                <div className="md-form mb-5">
                    
                    <textarea type="text" name="email" id="orangeForm-email" className="form-control validate" placeholder="Tell us what you think!" onChange={this.props.handleInput}></textarea>
                </div>



            </div>
            <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-deep-orange" onClick={this.props.handleSignUp}>Post</button>
            </div>
        </div>
    </div>
</div>
    )
}
}

export default PostModal;