import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PrivateRoute from './Authentication';
import RegisterA from './RegisterA';
import RegisterB from './RegisterB';
import RegisterC from './RegisterC';
import RegisterD from './RegisterD';
import styled from 'styled-components';

const RegisterHome = styled.div`
    display: flex;
    justify-content: space-around;
    color: black;
`;

class Register extends Component {
    render() { 
        return ( 
            <Router>
                <RegisterHome>
                    <Link to='/register1'>Volunteer</Link>
                    
                    <Link to='/register2'>Business</Link>                   
                    
                    <Link to='/register3'>Donation</Link>
                    
                    <Link to='/register4'>Foodbank</Link>
                   
                    <PrivateRoute exact path='/register1' component={RegisterA} />
                    <PrivateRoute exact path='/register2' component={RegisterB} />
                    <PrivateRoute exact path='/register3' component={RegisterC} />
                    <PrivateRoute exact path='/register4' component={RegisterD} />
                </RegisterHome>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    replates: state.replates
});

export default connect(
    mapStateToProps,
    { RegisterA, RegisterB, RegisterC, RegisterD }
  ) (Register);