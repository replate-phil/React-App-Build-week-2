import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDonation } from '../actions';

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donations: {
                'business_id': '',
                'volunteer_id': '',
                'foodbank_id': '',
                'donation_id':'',
                'completed': '',
                'comment': ''
            }
        }
    };

    componentDidMount() {
        this.props.getDonation();
    };
    
    handleChanges = e => {
        this.setState({
            ...this.state.donations,
            [e.target.name]: e.target.value}
        )};
    
    // volunteer = e => {
    //     e.preventDefault();
    //     this.props.volunteer(this.state.volunteer);
    // }

    render() { 
        console.log('hello, welcome to the volunteers page!!')
        return (
            <div>
                <h1>'Hello volunteers!'</h1>
                {this.props.donations.map((volunteer, index) => {
                    return (
                        <div key={index}>
                            <h3>{volunteer.business_id}</h3>
                            <h3>{volunteer.volunteer_id}</h3>
                            <h3>{volunteer.foodbank_id}</h3>
                            <h3>{volunteer.donation_id}</h3>
                            <h3>{volunteer.completed}</h3>
                            <h3>{volunteer.comment}</h3>
                        </div>
                    )
                })}
            </div>
        )   
    }
};

const mapStateToProps = state => ({
    donations: state.donations
});

export default connect(
    mapStateToProps,
    { getDonation }
) (Volunteer);