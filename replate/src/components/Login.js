import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { login } from '../actions';
import PrivateRoute from './Authentication';
import Register from './Register';

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props
        .login(this.state.credentials)
        .then(() => this.props.history.push('/protected'));
    };
  
    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <h3>Login Below!</h3>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        placeholder='Enter username'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        placeholder='Enter password'
                        onChange={this.handleChanges}
                        required
                    />
                    <button type="submit">

                        {this.props.isLoggingIn ? (
                            <Loader type="Ball-Triangle" color="blue" height='12' width='37' />
                        ) : (
                            'Log in'    
                        )}
                    </button> 
                </form>
            </div>    
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggingIn: state.isLoggingIn
    };
};

export default connect(
    mapStateToProps,
    { login, Register, PrivateRoute }
) (Login);



// fetch('https://replate-phil.herokuapp.com/api/auth', {
//     method: 'POST',
//     body: JSON.stringify(this.state.credentials),
//     header: {
//         'Content-Type': 'app/json'
//     }
// })
// .then(res => {
//     if (res.status === 200) {
//         this.props.history.push('/protected');
// } else {
//     const error = new Error(res.error);
//     throw error;
// }
// })
// .catch(err => {
// console.log(err);
// alert ('Error logging in please try again');
// });
// }  