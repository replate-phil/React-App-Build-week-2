import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PrivateRoute from './Authentication';
import Business from './Business';
import Volunteer from './Volunteer';
import Donation from './Donation';
import Foodbank from './Foodbank';
import styled from 'styled-components';

const ReplateDiv = styled.div`
    
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

                    <PrivateRoute exact path='/business' component={Business} />
                    <PrivateRoute exact path='/volunteer' component={Volunteer} />
                    <PrivateRoute exact path='/donations' component={Donation} />
                    <PrivateRoute exact path='/foodbank' component={Foodbank} />
                </ReplateDiv>
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


//  constructor(props) {
    //     super(props);
    //     this.state = {
    //         replate: {
    //             Business: '',

    //         }
    //       }
    // }

    // // componentDidMount() {
    // //     this.props.getData(this.state.replates);
    // // }

    // // addReplate = e => {
    // //     e.preventDefault();
    // //     this.props.postData(this.state.replate)
    // // }

    // handleChanges = e => {
    //     this.setState({
    //         replate: {
    //             ...this.state.replate,
    //             [e.target.name]: e.target.value}
    //         });
    //     };
    