import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { register, getData } from '../actions';

//Foodbank
class RegisterC extends Component {
    constructor(props) {
        super(props)
        this.state = {
        userC: {
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
            userC: {
                ...this.state.userC,
                [e.target.name]: e.target.value,
            }    
        });
    };

    register = e => {
        e.preventDefault();
        this.props.register(this.state.userC);
        this.props.history.push('/');
    };    

    render() {
        console.log('entering Foodbank registration!!');
        return (
            <div>
                <form onSubmit={this.register}>
                    <h2>Foodbank Registration</h2>
                    <h5>Please Register for an account here!!</h5>
                    <input 
                        type='text'
                        name='businessName'
                        value={this.state.userC.businessName}
                        placeholder='Enter Business Name'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='businessAddr'
                        value={this.state.userC.businessAddr}
                        placeholder='Enter Business Address'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='phone'
                        value={this.state.userC.phone}
                        placeholder='Enter Phone'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='email'
                        value={this.state.userC.email}
                        placeholder='Enter Email'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.userC.password}
                        placeholder='Enter Password'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='usertype'
                        value={this.state.userC.usertype}
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
) (RegisterC);