import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDonation} from '../actions';

class Donation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donation: [],
            
          }
    }

    // componentDidMount() {
    //     this.props.getDonation();
    // }
    

    // handleChanges = e => {
    //     this.setState({
    //         ...this.state.donation,
    //         [e.target.name]: e.target.value}
    //     )};
    
    // donation = e => {
    //     e.preventDefault();
    //     this.props.donation(this.state.donation);
    // }

    render() { 
        console.log('hello, welcome to the donation page!!')
        return ( 
           <div className='donation-page'>
                <h1>'Please Donate!'</h1>
           </div>
         );
    }
}

const mapStateToProps = state => ({
    prop: state.prop
});

export default connect(
    mapStateToProps,
    { getDonation }
) (Donation);