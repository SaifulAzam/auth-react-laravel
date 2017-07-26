import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Nav(){
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink exact activeClassName='active' to='/'>
                        Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact activeClassName='active' to='/users'>
                        User List
                        </NavLink>
                    </li>

                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <NavLink exact activeClassName='active' to='/login'>
                        Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName='active' to='/signup'>
                        Sign Up
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
