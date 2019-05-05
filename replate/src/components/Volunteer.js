import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVolunteer, postVolunteer } from '../actions';
import styled from 'styled-components';

const VolunteerPage = styled.div`
 line-height: .2;
 color: black;
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
                            <p>{volunteers.first_name}</p>
                            <p>{volunteers.last_name}</p>
                            <p>{volunteers.address}</p>
                            <p>{volunteers.phone}</p>
                            <p>{volunteers.email}</p>
                            <p>{volunteers.usertype}</p>
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