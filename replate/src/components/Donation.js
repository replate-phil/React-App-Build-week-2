import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDonation, postDonation } from '../actions';

class Donation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donation: {
                'name': '',
                'quantity_lbs': '',
                'picked_up': '',
                'comment': '',
                'business_id': ''
            }
        }
    };

    componentDidMount() {
        this.props.getDonation(this.props.donation);
    }
    

    handleChanges = e => {
        this.setState({
            ...this.state.donation,
            [e.target.name]: e.target.value}
        )};
    
    donation = e => {
        e.preventDefault();
        this.props.postDonation(this.state.donation);
    }

    render() { 
        console.log('hello, welcome to the donation page!!')
        return ( 
           <div className='donation-page'>
                <h1>'Please Donate!'</h1>
                    {(this.props.donations.map((donation, index) => {
                    console.log(donation);
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
                <form onSubmit={this.donation}>
                    <input 
                        type='text'
                        name='name' 
                        value={this.state.donation.name}
                        placeholder='Name'
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
                        placeholder='Is item picked up?'
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
        );
    }
}

const mapStateToProps = ({donations}) => ({
    donations
});

export default connect(
    mapStateToProps,
    { getDonation, postDonation}
) (Donation);