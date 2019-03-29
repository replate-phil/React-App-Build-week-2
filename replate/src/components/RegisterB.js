import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { register, getData } from '../actions';

//Business/Foodbank
class RegisterB extends Component {
    constructor(props) {
        super(props)
        this.state = {
        userB: {
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
            userB: {
                ...this.state.userB,
                [e.target.name]: e.target.value,
            }    
        });
    };

    register = e => {
        e.preventDefault();
        this.props.register(this.state.userB);
        this.props.history.push('/');
    };    

    render() {
        console.log('entering Business registration!!');
        return (
            <div>
                <form onSubmit={this.register}>
                    <h2>Business Registration</h2>
                    <h5>Please Register for an account here!!</h5>
                    <input 
                        type='text'
                        name='businessName'
                        value={this.state.userB.businessName}
                        placeholder='Enter Business Name'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='businessAddr'
                        value={this.state.userB.businessAddr}
                        placeholder='Enter Business Address'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='phone'
                        value={this.state.userB.phone}
                        placeholder='Enter Phone'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='email'
                        value={this.state.userB.email}
                        placeholder='Enter Email'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.userB.password}
                        placeholder='Enter Password'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='usertype'
                        value={this.state.userB.usertype}
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
) (RegisterB);