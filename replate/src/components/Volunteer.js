import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDonation } from '../actions';


class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donations: {
                food_pickup: '',
                businessAddr: '',
                amount_food: '',
                type_food:'',
                expiration_time: ''
        }}
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
                <h1>Hello volunteers!</h1>
                {this.props.donations.map((volunteer, index) => {
                    return (
                        <div key={index}>
                            <h3>{volunteer.food_pickup}</h3>
                            <h3>{volunteer.businessAddr}</h3>
                            <h3>{volunteer.amount_food}</h3>
                            <h3>{volunteer.type_food}</h3>
                            <h3>{volunteer.expiration_time}</h3>
                        </div>
                    )
                })}
            </div>
        )   
    }
}

const mapStateToProps = state => ({
    donations: state.donations
});

export default connect(
    mapStateToProps,
    { getDonation }
) (Volunteer);