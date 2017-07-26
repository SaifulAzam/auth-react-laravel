import React, { Component } from 'react'
import Loading from '../Loading';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            user: {},
            loading: true
            
        }
    }
    componentWillMount(){
        //axios call with id that is passed through via url
        axios.get('/api/users/' + this.state.id + '/profile' )
            .then((response) => {this.setState({user: response.data, loading: false})});
    }
    render(){
      const { user, loading } = this.state;
        return(
            <div>
                {loading ? 
                    <Loading></Loading> :
                    <div>
                        <h1>User Profile</h1>
                        <p>Welcome</p>
                        <p><strong>User Name:</strong> {user.username} </p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Timezone:</strong> { user.timezone }</p>
                    </div>
                }
            </div>
        );
    }
}

export default Home
