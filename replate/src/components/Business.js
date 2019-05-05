import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBusiness, postData } from '../actions';
import styled from 'styled-components';

const BusinessPage = styled.div`
 line-height: .4;
 color: chocolate;
`;

class Business extends Component {
    constructor() {
        super();
        this.state = {
            businesses: {
                businessName: '',
                businessAddr: '',
                phone: '',
                email: '',
                usertype: ''
            }  
        }
    };

    componentDidMount() {
        this.props.getBusiness(this.state.businesses);
    }

    handleChanges = e => {
        this.setState({
            businesses: {
            ...this.state.businesses,
            [e.target.name]: e.target.value}
        });
    };
    
    // business = e => {
    //     e.preventDefault();
    //     this.props.postData(this.state.businesses);
    // }

    render() { 
        console.log('hello, welcome to the business page!!')
        return ( 
           <BusinessPage>
                <h1>'A big welcome to all Businesses!'</h1>
                {(this.props.business.map((businesses, index) => {
                    return (
                        <div key={index}>
                            <p>{businesses.businessName}</p>
                            <p>{businesses.businessAddr}</p>
                            <p>{businesses.phone}</p>
                            <p>{businesses.email}</p>
                            <p>{businesses.usertype}</p>
                        </div>
                    )
                }))}
           </BusinessPage>
        );
    }
}

const mapStateToProps = (state) => ({
    business: state.business
});    

export default connect(
    mapStateToProps,
    { getBusiness, postData }
) (Business);