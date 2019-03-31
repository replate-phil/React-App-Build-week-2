import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVolunteer, updateVolunteer } from '../actions';

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volunteer: {
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
        this.props.getVolunteer(this.state.volunteer);
    };
    
    handleChanges = e => {
        this.setState({
            volunteer: {
            ...this.state.volunteer,
            [e.target.name]: e.target.value}
        });
    };

    // volunteer = e => {
    //     e.preventDefault();
    //     this.props.updateVolunteer(this.state.volunteer);
    // }

    render() { 
        console.log('hello, welcome to the volunteers page!!')
        return (
            <div>
                <h1>'Hello volunteers!'</h1>
                {(this.props.volunteers.map((volunteer, index) => {
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
                }))}
            </div>
        );
    }
}    

const mapStateToProps = (state) => ({
    volunteers: state.volunteers
});

export default connect(
    mapStateToProps,
    { getVolunteer, updateVolunteer }
) (Volunteer);