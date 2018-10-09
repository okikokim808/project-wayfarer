
import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')
class PostModal extends Component {
    render () {
    return (
    <div className="modal fade" id="modalPostForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                    <i className="fa fa-user prefix grey-text"></i>
                    <input type="text" name="title" className="form-control validate" onChange={this.props.handleInput} />
                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-name">Title</label>
                </div>
                <div className="md-form mb-5">
                    <i className="fa fa-user prefix grey-text"></i>
                    <input type="text" name="content" className="form-control validate" onChange={this.props.handleInput} />
                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-name">Content</label>
                </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
                <button onClick={this.props.handlePost} data-dismiss="modal" aria-label="Close" >Post</button>
            </div>
        </div>
    </div>
</div>
    )
}
}

export default PostModal;