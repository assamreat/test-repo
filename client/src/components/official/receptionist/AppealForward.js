import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { forwardToRegistrar } from '../../../actions/appeal';

const AppealForward = ({ match, forwardToRegistrar, history }) => {
    const onForward = () => {
        const { id } = match.params;
        forwardToRegistrar(id, history);
    };
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Forward Appeal </h1>
            <p className="mb-4">Forward Appeal to Registrar</p>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Forward Appeal To Registrar
                    </h6>
                </div>
                <div className="card-body">
                    <h2>
                        Are you Sure you want to forward the appeal to the
                        Registrar?
                    </h2>
                    <p>
                        Upload the appeal related documents and then only
                        forward the appeal to the Registrar .
                    </p>
                    <button
                        onClick={onForward}
                        className="btn btn-success btn-icon-split"
                    >
                        <span className="icon text-white-50">
                            <i className="fa-solid fa-angles-right"></i>
                        </span>
                        <span className="text">Forward to Registrar</span>
                    </button>
                    <div className="my-2"></div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { forwardToRegistrar })(withRouter(AppealForward));
