import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFoodbank } from '../actions';

class Foodbank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodbank: [],
            
          }
    }

    // componentDidMount() {
    //     this.props.getFoodbank();
    // }
    

    // handleChanges = e => {
    //     this.setState({
    //         ...this.state.foodbank,
    //         [e.target.name]: e.target.value}
    //     )};
    
    // foodbank = e => {
    //     e.preventDefault();
    //     this.props.foodbank(this.state.foodbank);
    // }

    render() { 
        console.log('hello, welcome to the foodbank page!!')
        return ( 
           <div className='foodbank-page'>
                <h1>'Welcome to the FoodBank!'</h1>
           </div>
         );
    }
}

const mapStateToProps = state => ({
    prop: state.prop
});

export default connect(
    mapStateToProps,
    { getFoodbank }
) (Foodbank);