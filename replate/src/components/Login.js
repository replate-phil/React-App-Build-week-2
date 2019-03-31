import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { login, getData } from '../actions';

class Login extends Component {
    state = {
        info: {
            email: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState({
            info: {
                ...this.state.info,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.info);
        this.props.history.push('/replate');
    };
  
    render() {
        console.log('logging in!!');
        return (
            <div>
                <form onSubmit={this.login}>
                    <h1>Welcome Back!</h1>
                    <h4>Please, Login Below!</h4>
                    <input
                        type='text'
                        name='email'
                        value={this.state.info.email}
                        placeholder='Enter email'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.info.password}
                        placeholder='Enter password'
                        onChange={this.handleChanges}
                        required
                    />
                    <button type="submit">
                    
                        {this.props.loggingIn ? (
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

const mapStateToProps = ({ loggingIn, err }) => {
    return {
        loggingIn,
        err
    };
};

export default connect(
    mapStateToProps,
    { login, getData }
) (Login);
