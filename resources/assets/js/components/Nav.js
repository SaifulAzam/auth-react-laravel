import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions.js';
import { withRouter } from "react-router-dom";

class Nav extends Component {
    logout(e){
        e.preventDefault();
        this.props.logout();
        this.props.history.push("/login");
    }
    render () {
        const { isAuthenticated } = this.props.auth;
        const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><NavLink exact activeClassName='active' to='/login'>Login</NavLink></li>
                <li><NavLink exact activeClassName='active' to='/signup'>Sign Up</NavLink></li>
            </ul>
        );
        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#" onClick={this.logout.bind(this)} >Logout</a></li>
            </ul>
        );
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
                    { isAuthenticated ? <li><NavLink exact activeClassName='active' to='/users'>User List</NavLink></li> : '' }
                    { isAuthenticated ? <li><NavLink exact activeClassName='active' to='/new-event'>New Event</NavLink></li> : '' }
                </ul>
               { isAuthenticated ? userLinks : guestLinks }
            </div>
        </nav>
        );
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth
    };
}

export default  withRouter(connect(mapStateToProps, { logout })(Nav));
