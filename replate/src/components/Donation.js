import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, postData } from '../actions';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import {FormattedMessage} from 'react-intl';

class Donations extends Component {
    constructor() {
        super();
        this.state = {
            donation: {
                name: '',
                quantity_lbs: '',
                picked_up: '',
                comment: '',
                business_id: '',
                thanks: 'Thank You!'
            }
        };
    }

    componentDidMount() {
        this.props.getData(this.state.donations);
    }

    handleChanges = e => {
        this.setState({
            donation: {
            ...this.state.donation,
            [e.target.name]: e.target.value}
        });
    };

    addDonation = e => {
        e.preventDefault();
        this.props.postData(this.state.donation)
        this.props.history.push('/thank');
    }
   


    render() { 
        console.log('hello, welcome to the donation page!!')
        return ( 
    <div className='donation-page'>
        <h1>'Please Donate!'</h1>
        {(this.props.donations.map((donation, index) => {
            return (
                <div key={index}>
                    <h3>{donation.name}</h3>
                    <h3>{donation.quantity_lbs}</h3>
                    <h3>{donation.picked_up}</h3>
                    <h3>{donation.comment}</h3>
                    <h3>{donation.business_id}</h3>
                </div>
            )
        }))}             
    <form onSubmit={this.addDonation}>
        <input 
            type='text'
            name='name' 
            value={this.state.donation.name}
            placeholder='Enter Item Name'
            onChange={this.handleChanges}
            required
        />
        <input 
            type='text'
            name='quantity_lbs' 
            value={this.state.donation.quantity_lbs}
            placeholder='Enter Quantity(lbs)'
            onChange={this.handleChanges}
            required
        />
        <input
            type='text'
            name='picked_up'
            value={this.state.donation.picked_up}
            placeholder='Enter If Received'
            onChange={this.handleChanges}
            required
        />
        <input
            type='text'
            name='comment'
            value={this.state.donation.comment}
            placeholder='Enter Comments'
            onChange={this.handleChanges}
            required
        />
        <input 
            type='text'
            name='business_id'
            value={this.state.donation.business_id}
            placeholder='Enter Business Id'
            onChange={this.handleChanges}
            required
        />  
        <button type="submit">Donate!</button>
    </form> 
    </div>                
)}}     
                
const mapStateToProps = (state) => ({
    donations: state.donations
});

export default connect(
    mapStateToProps,
    { getData, postData}
) (Donations);
    


