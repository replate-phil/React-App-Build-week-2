import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { register, getData } from '../actions';

class RegisterTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
        userTwo: {
            'businessName': '',
            'businessAddr': '',
            'phone': '',
            'email': '',
            'password': '',
            'usertype': ''
        }}
    };
    
    componentDidMount() {
        this.props.getData();
    }

    handleChanges = e => {
        this.setState({
            userTwo: {
                ...this.state.userTwo,
                [e.target.name]: e.target.value,
            }    
        });
    };

    register = e => {
        e.preventDefault();
        this.props.register(this.state.userTwo);
        this.props.history.push('/');
    };    

    render() {
        console.log('entering registration!!');
        return (
            <div>
                <form onSubmit={this.register}>
                    <h2>Registration</h2>
                    <h5>Please Register for an account here!!</h5>
                    <input 
                        type='text'
                        name='businessName'
                        value={this.state.userTwo.businessName}
                        placeholder='Enter business name'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='businessAddr'
                        value={this.state.userTwo.businessAddr}
                        placeholder='Enter Business Address'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='phone'
                        value={this.state.userTwo.phone}
                        placeholder='Enter phone'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='email'
                        value={this.state.userTwo.email}
                        placeholder='Enter email'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.userTwo.password}
                        placeholder='Enter password'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='usertype'
                        value={this.state.userTwo.usertype}
                        placeholder='Enter usertype'
                        onChange={this.handleChanges}
                        required
                    />
                    <button type="submit">

                        {this.props.inRegister ? (
                            <Loader type="ThreeDots" color="green" height='12' width='37' />
                        ) : (
                            'Register'    
                        )}
                    </button> 
                </form>
            </div>
        );
    }
}    

const mapStateToProps = state => ({
    inRegister: state.inRegister
});

export default connect(
    mapStateToProps,
    { register, getData }
) (RegisterTwo);