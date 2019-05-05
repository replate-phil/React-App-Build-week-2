import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVolunteer, postVolunteer } from '../actions';
import styled from 'styled-components';

const VolunteerPage = styled.div`
 line-height: .4;
 color: chocolate;
`;

class Volunteer extends Component {
    constructor() {
        super();
        this.state = {
            volunteers: {
                'first_name': '',
                'last_name': '',
                'address': '',
                'phone': '',
                'email': '',
                'password': '',
                'usertype': ''
            }
        }
    };

    componentDidMount() {
        this.props.getVolunteer();
    };
    
    handleChanges = e => {
        this.setState({
            volunteers: {
            ...this.state.volunteers,
            [e.target.name]: e.target.value}
        });
    };

    // volunteer = e => {
    //     e.preventDefault();
    //     this.props.postVolunteer(this.state.volunteer);
    // }

    render() { 
        console.log('hello, welcome to the volunteers page!!')
        return (
            <VolunteerPage>
                <h1>'Hello volunteers!'</h1>
                {(this.props.volunteer.map((volunteers, index) => {
                    console.log(volunteers);
                    return (
                        <div key={index}>
                            <h3>{volunteers.first_name}</h3>
                            <h3>{volunteers.last_name}</h3>
                            <h3>{volunteers.address}</h3>
                            <h3>{volunteers.phone}</h3>
                            <h3>{volunteers.email}</h3>
                            <h3>{volunteers.usertype}</h3>
                        </div>
                    )
                }))}
            </VolunteerPage>
        );
    }
}    

const mapStateToProps = (state) => ({
    volunteer: state.volunteer
});

export default connect(
    mapStateToProps,
    { getVolunteer, postVolunteer }
) (Volunteer);