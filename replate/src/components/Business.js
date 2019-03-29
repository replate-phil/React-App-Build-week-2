import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBusiness } from '../actions';

class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: [],
            
          }
    }

    // componentDidMount() {
    //     this.props.getBusiness();
    // }
    

    // handleChanges = e => {
    //     this.setState({
    //         ...this.state.business,
    //         [e.target.name]: e.target.value}
    //     )};
    
    // business = e => {
    //     e.preventDefault();
    //     this.props.business(this.state.business);
    // }

    render() { 
        console.log('hello, welcome to the business page!!')
        return ( 
           <div className=' business-page'>
                <h1>A big welcome to all Businesses!</h1>
           </div>
         );
    }
}

const mapStateToProps = state => ({
    prop: state.prop
});

export default connect(
    mapStateToProps,
    { getBusiness }
) (Business);