import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { addFlashMessage } from '../../actions/flashMessages';


export default function(ComposedComponent) {
    class Authenticate extends Component {
        componentWillMount(){
            if(!this.props.isAuthenticated){

                this.props.addFlashMessage({
                type: 'error',
                text: 'You need to login to access this page'
                });

                this.props.history.push("/");
            }
        }
        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                this.props.history.push("/");
            }
        }
        render () {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    function mapStateToProps(state){
        return {
            isAuthenticated: state.auth.isAuthenticated,

        }
    }
    return withRouter(connect(mapStateToProps, { addFlashMessage } )(Authenticate));
}
