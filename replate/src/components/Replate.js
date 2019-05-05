import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import PrivateRoute from './Authentication';
import Business from './Business';
import Volunteer from './Volunteer';
import Donation from './Donation';
import Foodbank from './Foodbank';
import Thank from './thankyou';
import styled from 'styled-components';

const ReplateDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

class Replate extends Component {
    render() { 
        return ( 
            <Router>
                <ReplateDiv>
                    <Link to='/business'>Business</Link>
                    <Link to='/volunteer'>Volunteer</Link>
                    <Link to='/donations'>Donations</Link>
                    <Link to='/foodbank'>Foodbank</Link>
                </ReplateDiv>
                    <Route exact path='/business' component={Business} />
                    <Route exact path='/volunteer' component={Volunteer} />
                    <Route exact path='/donations' component={Donation} />
                    <Route exact path='/foodbank' component={Foodbank} />
                    <Route exact path='/thank' component={Thank} /> 
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    replates: state.replates
});

export default connect(
    mapStateToProps,
    { Business, Volunteer, Donation, Foodbank }
  ) (Replate);
    