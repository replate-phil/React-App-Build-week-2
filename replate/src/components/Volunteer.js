import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, postData } from '../actions';

class Volunteer extends Component {
    constructor() {
        super();
        this.state = {
            volunteers: {
                first_name: '',
                last_name: '',
                address: '',
                phone: '',
                email: '',
                usertype: ''
            }
        }
    };

    componentDidMount() {
        this.props.getData();
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
    //     this.props.postData(this.state.volunteers);
    // }

    render() { 
        console.log('hello, welcome to the volunteers page!!')
        return (
            <div>
                <h1>'Hello volunteers!'</h1>
                {(this.props.volunteer.map((volunteers, index) => {
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
            </div>
        );
    }
}    

const mapStateToProps = (state) => ({
    volunteer: state.volunteer
});

export default connect(
    mapStateToProps,
    { getData, postData }
) (Volunteer);