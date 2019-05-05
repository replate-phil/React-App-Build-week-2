import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFoodbank, postFoodbank} from '../actions';
import styled from 'styled-components';

const FoodbankPage = styled.div`
 line-height: .2;
 color: black;
`;

class Foodbank extends Component {
    constructor() {
        super();
        this.state = {
            foodbanks: {
                'businessName': '',
                'businessAddr': '',
                'phone': '',
                'email': '',
                'password': '',
                'usertype': '' 
            }
        }
    };

    componentDidMount() {
        this.props.getFoodbank();
    }
    
    handleChanges = e => {
        this.setState({
            foodbanks: {
            ...this.state.foodbanks,
            [e.target.name]: e.target.value}
        });
    };
    
    // foodbank = e => {
    //     e.preventDefault();
    //     this.props.postFoodbank(this.state.foodbank);
    // }

    render() { 
        console.log('hello, welcome to the foodbank page!!')
        return ( 
           <FoodbankPage>
                <h1>'Welcome to the FoodBank!'</h1>
                {(this.props.foodbank.map((foodbanks, index) => {
                    console.log(foodbanks);
                    return (
                        <div key={index}>
                            <p>{foodbanks.businessName}</p>
                            <p>{foodbanks.businessAddr}</p>
                            <p>{foodbanks.phone}</p>
                            <p>{foodbanks.email}</p>
                            <p>{foodbanks.usertype}</p>
                        </div>
                    )
                }))}
           </FoodbankPage>
         );
    }
}

const mapStateToProps = (state) => ({
    foodbank: state.foodbank
});

export default connect(
    mapStateToProps,
    { getFoodbank, postFoodbank }
) (Foodbank);