import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import PrivateRoute from './Authentication';
import RegisterA from './RegisterA';
import RegisterB from './RegisterB';
import RegisterC from './RegisterC';
import styled from 'styled-components';

const RegisterHome = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: black;
`;

class Register extends Component {
    render() { 
        return ( 
            <Router>
                <RegisterHome>
                    <Link to='/register1'>Volunteer</Link>
                    
                    <Link to='/register2'>Business</Link>                   
                                    
                    <Link to='/register3'>Foodbank</Link>
                   
                    <Route exact path='/register1' component={RegisterA} />
                    <Route exact path='/register2' component={RegisterB} />
                    <Route exact path='/register3' component={RegisterC} />
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
    { RegisterA, RegisterB, RegisterC }
  ) (Register);