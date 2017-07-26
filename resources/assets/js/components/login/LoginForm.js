import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../shared/validations/login.js';
import { connect } from 'react-redux';
import { login } from '../../actions/loginAction';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'




class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false,
            redirect: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if(!isValid){
            this.setState({ errors });
        }
        return isValid;
    }
    onSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            this.setState({ errors: {}, isLoading: true});
            
            this.props.login(this.state).then(
                (res) => {console.log(res);this.setState({redirect: true})},
                (err) => this.setState({errors: err.data.errors, isLoading: false}),
            );
        } 
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    render () {
        const { errors, email, password, isLoading, redirect } = this.state;

        if (redirect) {return <Redirect to='/'/>;}

        return (
            <form onSubmit={this.onSubmit} >
                <h2>Login</h2>

                <TextFieldGroup
                field='email'
                label='Username / Email'
                value={email}
                error={errors.email}
                onChange={this.onChange}
                type='email' />

                <TextFieldGroup
                field='password'
                label='Password'
                value={password}
                error={errors.password}
                onChange={this.onChange}
                type='password' />

                <div className="form-group">
                    <button className="btn btn-primary" disabled={isLoading} >Login</button>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginForm);