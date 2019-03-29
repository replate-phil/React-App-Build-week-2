import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { register, getData } from '../actions';
import styled from 'styled-components';

const Registerpage = styled.div`
    margin: 30px;
`;

const Page = styled.div`
    margin-right: 30px;
`;

class RegisterOne extends Component {
    state = {
        userOne: {
            'first_name': '',
            'last_name': '',
            'email': '',
            'password': '',
            'phone': '',
            'address': '',
            'usertype': ''
        }
    };
    
    componentDidMount() {
        this.props.getData();
    }

    handleChanges = e => {
        this.setState({
            userOne: {
                ...this.state.userOne,
                [e.target.name]: e.target.value,
            }    
        });
    };

    register = e => {
        e.preventDefault();
        this.props.register(this.state.userOne);
        this.props.history.push('/');
    };    

    render() {
        console.log('entering volunteer registration!!');
        return (
            <Registerpage>
                <form onSubmit={this.register}>
                <Page>
                    <h2>Registration</h2>
                    <h5>Please Register for a Volunteer account here!!</h5>
                </Page>
                    <input
                        type='text'    
                        name='first_name'
                        value={this.state.userOne.first_name}
                        placeholder='Enter first name'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='last_name'
                        value={this.state.userOne.last_name}
                        placeholder='Enter last name'
                        onChange={this.handleChanges}
                        required
                    /> 
                    <input
                        type='text'
                        name='email'
                        value={this.state.userOne.email}
                        placeholder='Enter email'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.userOne.password}
                        placeholder='Enter password'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='phone'
                        value={this.state.userOne.phone}
                        placeholder='Enter phone'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='address'
                        value={this.state.userOne.address}
                        placeholder='Enter address'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='usertype'
                        value={this.state.userOne.usertype}
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
            </Registerpage>
        );
    }
}    

const mapStateToProps = state => ({
    inRegister: state.inRegister
});

export default connect(
    mapStateToProps,
    { register, getData }
) (RegisterOne);