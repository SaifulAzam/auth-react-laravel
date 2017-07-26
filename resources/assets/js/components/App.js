import React, { Component } from 'react';
// import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import Users from './Users/Users.js';
import Signup from './Signup/Signup.js';
import UserProfile from './Users/UserProfile.js';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LoginPage from '../components/login/LoginPage.js';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

class App extends Component {
    render() {

        return (
          <Provider store={store} >
              <Router>
                  <div className='container'>
                      <Nav />
                      <Switch>
                          <Route exact path='/' component={Home} />
                          <Route exact path='/signup' component={Signup} />
                          <Route exact path='/users' component={Users} />
                          <Route path="/users/:id/profile" component={ UserProfile }/>
                          <Route path="/login" component={ LoginPage }/>
                          <Route render={()=>(<p>Not Found</p>)} />
                      </Switch>
                  </div>
              </Router>
          </Provider>
        );
    }
}

export default App;