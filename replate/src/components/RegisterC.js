import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { register, getData } from '../actions';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    flex-direction: column;
    /* border: 1px solid black;
    margin-top: 20px; */
`;


//Donation
class RegisterC extends Component {
    constructor(props) {
        super(props)
        this.state = {
        userC: {
            'name': '',
            'quantity_lbs': '',
            'picked_up': '',
            'comment': '',
            'business_id': ''
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
        console.log('entering donation!!');
        return (
            <WrapperDiv>
                <form onSubmit={this.register}>
                    <h2>Donations!</h2>
                    <h5>Please Register your donation here!!</h5>
                    <input 
                        type='text'
                        name='name'
                        value={this.state.userC.name}
                        placeholder='Enter Name'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='quantity_lbs'
                        value={this.state.userC.quantity_lbs}
                        placeholder='Enter Quantity(lbs)'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='picked_up'
                        value={this.state.userC.picked_up}
                        placeholder='Is item picked up?'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='comment'
                        value={this.state.userC.comment}
                        placeholder='Enter Comments'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='business_id'
                        value={this.state.userC.business_id}
                        placeholder='Enter Business Id'
                        onChange={this.handleChanges}
                        required
                    />
                    <button type="submit">

                        {this.props.inRegister ? (
                            <Loader type="ThreeDots" color="green" height='12' width='37' />
                        ) : (
                            'Donate!'    
                        )}
                    </button> 
                </form>
            </WrapperDiv>
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