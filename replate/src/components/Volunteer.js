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
        this.props.getVolunteer(this.props.volunteer);
    };
    
    handleChanges = e => {
        this.setState({
            volunteer: {
            ...this.state.volunteer,
            [e.target.name]: e.target.value}
        });
    };

    volunteer = e => {
        e.preventDefault();
        this.props.updateVolunteer(this.state.volunteer);
    }

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
                <form onSubmit={this.volunteer}>
                    <input 
                        type='text'
                        name='business_id' 
                        value={this.state.volunteer.business_id}
                        placeholder='Enter Business ID'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='volunteer_id' 
                        value={this.state.volunteer.volunteer_id}
                        placeholder='Enter Volunteer ID'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='foodbank_id'
                        value={this.state.volunteer.foodbank_id}
                        placeholder='Enter Foodbank ID'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='donation_id'
                        value={this.state.volunteer.donation_id}
                        placeholder='Enter Donation ID'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='text'
                        name='completed'
                        value={this.state.volunteer.completed}
                        placeholder='Is it Completed?'
                        onChange={this.handleChanges}
                        required
                    />  
                    <input 
                        type='text'
                        name='comment'
                        value={this.state.volunteer.comment}
                        placeholder='Enter Comments'
                        onChange={this.handleChanges}
                        required
                    />  

                    <button type="submit">Enter!</button>
                </form>
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