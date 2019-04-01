import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getDonation, postDonation } from '../actions';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Thank from './thankyou';
import {FormattedMessage} from 'react-intl';

class Donations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donation: {
                name: 'Apples',
                quantity_lbs: '15',
                picked_up: 'False',
                comment: 'Pick up at 12:30pm!',
                business_id: '1',
                thanks: 'Thank You!'
            }
        };
        this.handleClick = this.handleClick.bind(this)
    }
    

    handleClick () {
        return (
            
            this.props.history.push('/thank')
        );
    };

    render() {
        const {name, quantity_lbs, 
        picked_up, comment, business_id} = this.state.donation;
            return (
                <div>
                    <h1>'Welcome, Please Donate!'</h1>
                    <form onSubmit={this.handleClick}>
                        <strong>
                        <FormattedMessage
                            id='Donations'
                            defaultMessage={`
                            Name: ${name}`} 
                        /><br/>
                        </strong>
                        <strong>
                        <FormattedMessage
                            id='Donations'
                            defaultMessage={`
                            Quantity: ${quantity_lbs}`} 
                        /><br/>
                        </strong>
                        <strong>
                        <FormattedMessage
                            id='Donations'
                            defaultMessage={`
                            Picked: ${picked_up}`} 
                        /><br/>
                        </strong>
                        <strong>
                        <FormattedMessage
                        id='Donations'
                        defaultMessage={`
                        Comment: ${comment}`}
                        /><br/>   
                        </strong>
                        <strong>
                        <FormattedMessage
                            id='Donations' 
                            defaultMessage={`
                            Business Id: ${business_id}`}
                        /><br/>
                        </strong>
                        <button type="submit">Donate!</button>
                    </form>   
                </div>
            );
    }
}   

const mapStateToProps = ({donation}) => ({
    donation
});

export default connect(
    mapStateToProps,
    { FormattedMessage}
) (Donations);
// export default Donations;

/*    
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
    }*/
 /*

 componentDidMount() {
        this.getDonation('https://replate-phil.herokuapp.com/api/donations/');
    }

    getDonation = URL => {
        fetch(URL)
            .then(res => {return res.json();
            })
            .then(data => {this.setState({ donation: data.results });
            })
            .catch(err => {console.log(err)
            });
    };

    render() {
        console.log('Thank you for your donation')
        return (
            <div className='donations-page'>
                <Donation donate={this.state.donation}/>
            </div>
        );
    }
}
    render() { 
        console.log('hello, welcome to the donation page!!')
        return ( 
           <div className='donation-page'>
                <h2>Donations</h2>
                <h5>'Thank you for your Generosity'</h5>
                <ul>
                    {this.props.donations.map(donation => {
                    console.log(donation);
                            <Donation
                                name={donation.name}
                                quantity_lbs={donation.quantity_lbs}
                                picked_up={donation.picked_up}
                                comment={donation.comment}
                                business_id={donation.business_id}
                                key={donation.id}
                            />
                        );
                    })} 
                </ul>
            </div>
        );
    }
}

Donation.defaultProps = {
    donations: [],
};

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
                
                
const mapStateToProps = ({donations}) => ({
    donations
});

export default connect(
    mapStateToProps,
    { getDonation, postDonation}
) (Donation);
*/