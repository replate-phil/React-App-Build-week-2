import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBusiness, postBusiness } from '../actions';

class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: {
                businessName: '',
                businessAddr: '',
                phone: '',
                email: '',
                usertype: ''
            }  
        }
    };

    componentDidMount() {
        this.props.getBusiness(this.props.business);
    }
    

    handleChanges = e => {
        this.setState({
            ...this.state.business,
            [e.target.name]: e.target.value}
        )};
    
    business = e => {
        e.preventDefault();
        this.props.postBusiness(this.state.business);
    }

    render() { 
        console.log('hello, welcome to the business page!!')
        return ( 
           <div className=' business-page'>
                <h1>'A big welcome to all Businesses!'</h1>
                {(this.props.businesses.map((business, index) => {
                    return (
                        <div key={index}>
                            <h3>{business.businessName}</h3>
                            <h3>{business.businessAddr}</h3>
                            <h3>{business.phone}</h3>
                            <h3>{business.email}</h3>
                            <h3>{business.usertype}</h3>
                        </div>
                    )
                }))}
           </div>
         );
    }
}

const mapStateToProps = ({businesses}) => ({
    businesses
});    

export default connect(
    mapStateToProps,
    { getBusiness, postBusiness }
) (Business);