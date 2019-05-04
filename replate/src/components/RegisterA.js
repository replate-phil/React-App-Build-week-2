import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { register } from '../actions';
import styled from 'styled-components';

const Registerpage = styled.div`
    margin: 30px;
`;

const Page = styled.div`
    
`;
//volunteer
class RegisterA extends Component {
    constructor(props) {
        super(props)
        this.state = {
        userA: {
            'first_name': '',
            'last_name': '',
            'email': '',
            'password': '',
            'phone': '',
            'address': '',
            'usertype': ''
        }}
    };
    
    // componentDidMount() {
    //     this.props.getVolunteer();
    // }

    handleChanges = e => {
        this.setState({
            userA: {
                ...this.state.userA,
                [e.target.name]: e.target.value,
            }    
        });
    };

    register = e => {
        e.preventDefault();
        this.props.register(this.state.userA);
        this.props.history.push('/');
    };    

    render() {
        console.log('entering volunteer registration!!');
        return (
            <Registerpage>
                <form onSubmit={this.register}>
                <Page>
                    <h2>Volunteer Registration</h2>
                    <h5>Please Register for an account here!!</h5>
                </Page>
                    <input
                        type='text'    
                        name='first_name'
                        value={this.state.userA.first_name}
                        placeholder='Enter First Name'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='last_name'
                        value={this.state.userA.last_name}
                        placeholder='Enter Last Name'
                        onChange={this.handleChanges}
                        required
                    /> 
                    <input
                        type='text'
                        name='email'
                        value={this.state.userA.email}
                        placeholder='Enter Email'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.userA.password}
                        placeholder='Enter Password'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='phone'
                        value={this.state.userA.phone}
                        placeholder='Enter Phone'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='address'
                        value={this.state.userA.address}
                        placeholder='Enter Address'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='usertype'
                        value={this.state.userA.usertype}
                        placeholder='Enter Usertype'
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
    { register }
) (RegisterA);