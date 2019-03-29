import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PrivateRoute from './Authentication';
import RegisterOne from './RegisterOne';
import RegisterTwo from './RegisterTwo';
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
                    <Link to='/register2'>Business</Link>
                    
                    <Link to='/register1'>Volunteer</Link>
                                 
                    <Link to='/register2'>Foodbank</Link>
                   
                    <PrivateRoute exact path='/register1' component={RegisterOne} />
                    <PrivateRoute exact path='/register2' component={RegisterTwo} />
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
    { RegisterOne, RegisterTwo }
  ) (Register);