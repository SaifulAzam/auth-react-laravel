import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';
class Signup extends Component{
    render(){
        const { userSignupRequest, addFlashMessage } = this.props;
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h1>Sign Up</h1>
                    <Form userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
                </div>

            </div>
        )
    }
}

Signup.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
}

export default connect(null, { userSignupRequest, addFlashMessage })(Signup);