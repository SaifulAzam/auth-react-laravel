import React, { Component } from 'react';
import timezone from '../data/timezones';
import axios from 'axios';
import propTypes from 'prop-types';
import classnames from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';
import { Redirect } from 'react-router-dom'


export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation:'',
            timezone:'',
            errors: '',
            isLoading: false,
            redirect: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        this.setState({ errors: {}, isLoading: true });
        this.props.userSignupRequest(this.state).then((response) => {
            this.setState({errors: response, isLoading: false});
            this.props.addFlashMessage({
                type: 'success',
                text: 'you have signed up!'
            });
            if(response.status == 200){
                this.setState({redirect: true});
            }
        });
        
    }
    render(){
        const options = Object.keys(timezone).map(function(val){
                return (<option key={timezone[val]} value={timezone[val]}>{val}</option>)
         })
        const { errors, redirect } = this.state;

        if (redirect) {
        return <Redirect to='/'/>;
        }
        return (
            <div className="">
                <form action=""  onSubmit={this.onSubmit}>

                    <TextFieldGroup 
                    error={errors.username}
                    label='Username'
                    onChange={this.onChange}
                    value={this.state.username}
                    field='username' />

                    <TextFieldGroup 
                    error={errors.email}
                    label='Email'
                    onChange={this.onChange}
                    value={this.state.email}
                    field='email' />

                    <TextFieldGroup 
                    error={errors.password}
                    label='Password'
                    onChange={this.onChange}
                    value={this.state.password}
                    field='password' />

                    <TextFieldGroup 
                    error={errors.passwordConfirmation}
                    label='Password Confirmation'
                    onChange={this.onChange}
                    value={this.state.password_confirmation}
                    field='password_confirmation' />



                    <div className={classnames("form-group", { 'has-error': errors.timezone })}>
                        <label className="control-label">Timezone</label>
                        <select
                            className="form-control"
                            name="timezone"
                            onChange={this.onChange}
                            value={this.state.timezone}>
                            <option value="" disabled>Choose Your Timezone</option>
                            {options}
                        </select>
                        {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                    </div>

                    <div className="form-group">
                        <button disabled={this.state.isLoading } className="btn btn-primary">
                            Sign up
                        </button>
                    </div>
                </form>

            </div>
        )
    }
}

Form.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
}